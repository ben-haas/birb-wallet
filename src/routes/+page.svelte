<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { getQuote, getWalletData, getTransactions, type Txns } from '$lib/services/tzktService';
	import { type WalletData } from '../types/walletTypes';
	import { activeWallet, accountStore, connectingWallet } from '$lib/stores';
	import Transactions from '$lib/components/Transactions.svelte';
	import Wallet from '$lib/components/Wallet.svelte';
	import ConnectWallet from '$lib/components/ConnectWallet.svelte';

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
	{#if !$connectingWallet}
		<Wallet loading={$loading} data={wData} />
		<Transactions {txns} />
	{/if}
	{#if $connectingWallet}
		<ConnectWallet />
	{/if}
</div>
