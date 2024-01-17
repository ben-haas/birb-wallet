<script lang="ts">
	import { getDrawerStore, Avatar } from '@skeletonlabs/skeleton';
	import { accountStore, activeWallet } from '$lib/stores';
	import { Fa } from 'svelte-fa';
	import { faPlus } from '@fortawesome/free-solid-svg-icons';

	$: active = (id: number) => (id === $activeWallet.id ? '!bg-primary-500' : '');

	const drawerStore = getDrawerStore();

	function setActiveWallet(id: number, address: string) {
		activeWallet.set({ id: id, address: address });
		drawerStore.close();
	}
</script>

<nav class="list-nav p-4">
	<ul>
		{#each $accountStore as acct}
			<li>
				<a href="/" class={active(acct.id)} on:click={() => setActiveWallet(acct.id, acct.address)}>
					<span><Avatar initials="ꜩ" background="bg-tertiary-500" width="w-8" /></span>
					<span class="flex-auto">{acct.id}</span>
				</a>
			</li>
		{/each}
	</ul>
	<div class="flex justify-center p-4">
		<a href="/">
			<Fa icon={faPlus} size="lg" />
		</a>
	</div>
</nav>
