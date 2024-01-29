<script lang="ts">
	import { type WalletData } from '$lib/services/tzktService';
	import { currentQuote } from '$lib/stores';
	import Fa from 'svelte-fa';
	import { faCopy } from '@fortawesome/free-solid-svg-icons';
	import { clipboard } from '@skeletonlabs/skeleton';

	export let loading = true;
	export let data: WalletData;

	const mutezPerTez = import.meta.env.VITE_MUTEZ_PER_TEZ;
</script>

<div class="card p-4 shadow-lg min-w-full min-h-80">
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
		<button type="button" class="btn variant-filled-primary">Send</button>
		<button type="button" class="btn variant-filled-secondary">Receive</button>
		<button type="button" class="btn variant-filled">Delegate</button>
	</footer>
</div>
