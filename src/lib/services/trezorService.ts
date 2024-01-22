import TrezorConnect from '@trezor/connect-web';
import { get } from 'svelte/store';
import { accountStore } from '../stores';

export const trezorInit = () => {
	TrezorConnect.init({
		lazyLoad: true,
		popup: true,
		manifest: {
			email: 'birb@birbwallet.xyz',
			appUrl: 'http://birbwallet.xyz'
		}
	});
};

export const getAddress = async (id: number) => {
	const accts = get(accountStore);

	const result = await TrezorConnect.tezosGetAddress({
		path: `m/44'/1729'/${id}'`,
		showOnTrezor: true,
		chunkify: false
	});

	if (result.success) {
		for (let i = 0; i < accts.length; i++) {
			if (accts[i].address === result.payload.address) {
				return;
			}
		}
		accountStore.update((accounts) => [
			...accounts,
			{
				id: 0,
				path: result.payload.serializedPath,
				address: result.payload.address
			}
		]);
	}
};
