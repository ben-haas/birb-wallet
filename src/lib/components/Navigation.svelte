<script lang="ts">
	import { Avatar, AppRail, AppRailTile, AppRailAnchor } from '@skeletonlabs/skeleton';
	import { accountStore, activeWallet, showTransactions, connectingWallet } from '$lib/stores';
	import { Fa } from 'svelte-fa';
	import { faPlus } from '@fortawesome/free-solid-svg-icons';

	let currentTile = 0;

	const setActiveWallet = (id: number, address: string) => {
		activeWallet.set({ id: id, address: address, loaded: true });
		showTransactions.set(false);
	}

	const connectNewWallet = () => {
		connectingWallet.set(true);
	}
</script>

<AppRail>
	{#each $accountStore as acct}
		<AppRailTile
			bind:group={currentTile}
			name="acct-{acct.id}"
			value={acct.id}
			title="Account {acct.id}"
			regionLead="flex justify-center"
			on:click={() => setActiveWallet(acct.id, acct.address)}
		>
			<svelte:fragment slot="lead">
				<Avatar initials="ꜩ" background="bg-tertiary-500" width="w-8" />
			</svelte:fragment>
			<span>Acct {acct.id}</span>
		</AppRailTile>
	{/each}
	<svelte:fragment slot="trail">
		<AppRailAnchor title="Add Account" regionLabel="flex justify-center" on:click={connectNewWallet}>
			<Fa icon={faPlus} size="2x" />
		</AppRailAnchor>
	</svelte:fragment>
</AppRail>
