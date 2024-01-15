import { get } from 'svelte/store';
import { accountStore } from '$lib/stores';
import type { PageLoad } from './$types';

export const load: PageLoad = (async ({ fetch }) => {
	const accounts = get(accountStore);
	const addresses = accounts.map((acct) => acct.address);

	if (accounts.length === 0) {
		return {
			accountData: [{ error: 'no wallets connected' }]
		};
	}

	const res = await fetch(
		'https://api.tzkt.io/v1/accounts?' +
			new URLSearchParams({
				'address.in': addresses.toString(),
				select:
					'type,address,publicKey,revealed,alias,balance,delegate,firstActivityTime,lastActivityTime'
			})
	);

	const data = await res.json();

	return {
		accountData: data
	};
}) satisfies PageLoad;
