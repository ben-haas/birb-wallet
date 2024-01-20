<script lang="ts">
	import { onMount } from 'svelte';
	import { getWalletData, type WalletData } from '$lib/services/tzktService';
	import { activeWallet } from '$lib/stores';
	import Fa from 'svelte-fa';
	import { faCopy } from '@fortawesome/free-solid-svg-icons';
	import { clipboard } from '@skeletonlabs/skeleton';

	let balance: number = 0;
	let addr: string = '';
	let alias: string = '';
	let revealed = false;
	let delegate = '';

	$: if ($activeWallet.address) {
		updateData($activeWallet.address);
	}

	async function updateData(address: string) {
		try {
			const data: WalletData = await getWalletData(address);
			balance = data.balance / 1000000;
			addr = data.address;
			alias = data.alias;
			revealed = data.revealed;
			delegate = data.delegate.alias;
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

<div class="card p-4 max-w-3xl shadow-lg">
	<header class="card-header flex">
		<div class="text-xl font-bold mr-4" data-clpboard="address">{addr}</div>
		<button use:clipboard={{ element: 'address' }}><Fa icon={faCopy} size="lg" /></button>
	</header>
	<section class="p-4">
		{#if alias}
			<h2>{alias}.tez</h2>
		{/if}
		{#if delegate}
			<h2>Delegate: {delegate}</h2>
		{/if}
		<p>{balance}ꜩ</p>
	</section>
	<footer class="card-footer">
		<button type="button" class="btn variant-filled">Send</button>
		<button type="button" class="btn variant-filled">Receive</button>
		<button type="button" class="btn variant-filled">Delegate</button>
	</footer>
</div>
