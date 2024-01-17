<script lang="ts">
	import { onMount } from 'svelte';
	import { getWalletData, type WalletData } from '$lib/services/tzktService';
	import { activeWallet } from '$lib/stores';

	let data: WalletData;
	let balance: number = 0;
	let addr: string = '';
	let alias: string = '';

	$: if ($activeWallet.address) {
		updateData($activeWallet.address);
	}

	async function updateData(address: string) {
		try {
			data = await getWalletData(address);
			balance = data.balance / 1000000;
			addr = data.address;
			alias = data.alias;
		} catch (error) {
			console.error('Error fetching balance:', error);
		}
	}

	onMount(async () => {
		try {
			await updateData($activeWallet.address);
		} catch (error) {
			console.error('Error fetching wallet data:', error);
		}
	});
</script>

<main>
	<h1 class="text-xl font-bold">{addr}</h1>
	{#if alias}
		<h2>{alias}.tez</h2>
	{/if}
	<p>{balance}ꜩ</p>
</main>
