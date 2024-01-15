import { localStorageStore } from '@skeletonlabs/skeleton';
import { writable, type Writable } from 'svelte/store';

type Account = {
	id: number;
	path: string;
	address: string;
};

export const accountStore: Writable<Account[]> = localStorageStore('accounts', []);
export const activeWallet = writable(1);
