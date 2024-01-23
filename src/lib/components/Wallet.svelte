<script lang="ts">
	import { onMount } from 'svelte';
	import { getQuote, getWalletData, type WalletData } from '$lib/services/tzktService';
	import { activeWallet, currentQuote } from '$lib/stores';
	import Fa from 'svelte-fa';
	import { faCopy } from '@fortawesome/free-solid-svg-icons';
	import { clipboard } from '@skeletonlabs/skeleton';

	let data: WalletData;
	let loading = true;
	const mutezPerTez = import.meta.env.VITE_MUTEZ_PER_TEZ;

	$: if ($activeWallet.address) {
		loading = true;
		updateData($activeWallet.address);
		getQuote();
	}

	async function updateData(address: string) {
		try {
			data = await getWalletData(address);
			loading = false;
		} catch (error) {
			console.error('Error updating wallet data:', error);
			loading = false;
		}
	}

	onMount(async () => {
		try {
			await updateData($activeWallet.address);
			getQuote();
		} catch (error) {
			console.error('Error fetching wallet data:', error);
		}
	});
</script>

<div class="card p-4 shadow-lg min-w-full">
	{#if !loading}
		<header class="card-header flex flex-col">
			<h1 class="h1">{data.balance / mutezPerTez}ꜩ</h1>
			<h3 class="h3">${(($currentQuote * data.balance) / mutezPerTez).toFixed(2)}</h3>
		</header>
		<section class="p-4">
			<div class="flex flex-row">
				<div class="text-xl font-bold mr-4" data-clpboard="address">{data.address}</div>
				<button use:clipboard={{ element: 'address' }}><Fa icon={faCopy} size="lg" /></button>
			</div>
			<div>
				{#if data.alias}
					<p>{data.alias}.tez</p>
				{/if}
			</div>
			{#if data.delegate}
				<h2>Delegate: {data.delegate.alias}</h2>
			{/if}
		</section>
	{/if}
	<footer class="card-footer">
		<button type="button" class="btn variant-filled-secondary">Send</button>
		<button type="button" class="btn variant-filled">Receive</button>
		<button type="button" class="btn variant-filled">Delegate</button>
	</footer>
</div>
