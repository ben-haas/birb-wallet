import { localStorageStore } from '@skeletonlabs/skeleton';
import { writable, type Writable } from 'svelte/store';

type Account = {
	id: number;
	path: string;
	address: string;
};

export const accountStore: Writable<Account[]> = localStorageStore('accounts', []);
export const activeWallet = writable({ id: 0, address: '', loaded: false });
export const currentQuote = writable(0);
export const showTransactions = writable(false);
export const connectingWallet = writable(false);
