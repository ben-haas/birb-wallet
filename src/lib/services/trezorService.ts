import TrezorConnect from '@trezor/connect-web';
import { getModalStore } from '@skeletonlabs/skeleton';
import { get } from 'svelte/store';
import { accountStore, activeWallet } from '../stores';

export const trezorInit = () => {
	try {
		TrezorConnect.init({
			popup: true,
			manifest: {
				email: import.meta.env.VITE_TREZOR_MANIFEST_EMAIL,
				appUrl: import.meta.env.VITE_TREZOR_MANIFEST_APP_URL
			}
		});
	} catch (error) {
		console.log(`Trezor error: ${error}`);
		throw error;
	}
};

export const getAddress = async (account: number) => {
	const accts = get(accountStore);
	const modals = getModalStore();

	console.log(`Getting address for m/44'/1729'/${account}'`);

	try {
		const result = await TrezorConnect.tezosGetAddress({
			path: `m/44'/1729'/${account}'`,
			showOnTrezor: true,
			chunkify: false
		});

		if (result.success) {
			modals.clear();
			for (let i = 0; i < accts.length; i++) {
				if (accts[i].address === result.payload.address) {
					return;
				}
			}
			accountStore.update((accounts) => [
				...accounts,
				{
					id: account,
					path: result.payload.serializedPath,
					address: result.payload.address
				}
			]);
			activeWallet.set({
				id: account,
				address: result.payload.address,
				loaded: true
			});
		}
	} catch (error) {
		console.log(`Trezor connect error: ${error}`);
		throw error;
	}
};
