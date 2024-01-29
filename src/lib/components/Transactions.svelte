<script lang="ts">
	import Fa from 'svelte-fa';
	import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
	import { type Txns } from '$lib/services/tzktService';

	export let txns: Txns = [];
	const mutezPerTez = import.meta.env.VITE_MUTEZ_PER_TEZ;
	const tzktUrl = 'https://tzkt.io/';
</script>

<div class="card p-4 shadow-lg min-w-full min-h-80">
	{#each txns as txn}
		<div
			class="card flex p-4 m-4 shadow-lg min-w-fit min-h-20 {txn.type === 'send'
				? 'variant-soft-error'
				: 'variant-soft-success'}"
		>
			<div class="flex min-w-12 flex-wrap justify-center align-middle">
				<Fa icon={txn.type === 'send' ? faArrowUp : faArrowDown} size="2x" />
			</div>
			<div class="flex grow justify-center align-middle flex-col">
				{#if txn.type === 'send'}
					<h5 class="h5">
						{txn.amount / mutezPerTez} to {txn.target.alias ? txn.target.alias : txn.target.address}
					</h5>
				{:else}
					<h5 class="h5">
						{txn.amount / mutezPerTez} from {txn.sender.alias
							? txn.sender.alias
							: txn.sender.address}
					</h5>
					<p>{txn.timestamp}</p>
				{/if}
			</div>
			<div>
				<button class="btn variant-filled" on:click={() => (location.href = tzktUrl + txn.hash)}
					>View</button
				>
			</div>
		</div>
	{/each}
</div>
