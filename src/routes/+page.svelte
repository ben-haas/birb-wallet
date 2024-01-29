<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import {
		getQuote,
		getWalletData,
		getTransactions,
		type WalletData,
		type Txns
	} from '$lib/services/tzktService';
	import { activeWallet, accountStore } from '$lib/stores';
	import Transactions from '$lib/components/Transactions.svelte';
	import Wallet from '$lib/components/Wallet.svelte';

	let wData: WalletData;
	let txns: Txns = [];
	const loading = writable(true);

	$: if ($activeWallet.address) {
		$loading = true;
		updateData($activeWallet.address);
	}

	async function updateData(address: string): Promise<void> {
		wData = await getWalletData(address);
		txns = await getTransactions($activeWallet.address);
		getQuote();
		$loading = false;
	}

	onMount(() => {
		if ($accountStore[0]) {
			activeWallet.set({
				id: $accountStore[0].id,
				address: $accountStore[0].address,
				loaded: true
			});
		}
	});
</script>

<div class="container h-full mx-auto gap-8 flex flex-col items-center">
	<Wallet loading={$loading} data={wData} />
	<Transactions {txns} />
</div>
