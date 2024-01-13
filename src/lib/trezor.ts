import TrezorConnect from '@trezor/connect-web';
import { accountStore } from './stores';

export const trezorInit = async () => {
	await TrezorConnect.init({
		lazyLoad: true,
		popup: true,
		manifest: {
			email: 'birb@birbwallet.xyz',
			appUrl: 'http://birbwallet.xyz'
		}
	});
};

export const getAddress = async () => {
	const result = await TrezorConnect.tezosGetAddress({
		path: "m/44'/1729'/0'",
		showOnTrezor: true,
		chunkify: false
	});

	if (result.success) {
		accountStore.update((accounts) => [
			...accounts,
			{
				id: 'Account 1',
				path: result.payload.serializedPath,
				address: result.payload.address
			}
		]);
	}
};
