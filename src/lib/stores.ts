import { localStorageStore } from '@skeletonlabs/skeleton';
import type { Writable } from 'svelte/store';

type Account = {
	id: string;
	path: string;
	address: string;
};

export const accountStore: Writable<Account[]> = localStorageStore('accounts', []);
