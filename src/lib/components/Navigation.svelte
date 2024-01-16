<script lang="ts">
	import { get } from 'svelte/store';
	import { getDrawerStore, Avatar } from '@skeletonlabs/skeleton';
	import { accountStore, activeWallet } from '$lib/stores';

	$: active = (id: string) => (id === $activeWallet.toString() ? '!bg-secondary-500' : '');

	const drawerStore = getDrawerStore();

	function setActiveWallet(id: number) {
		activeWallet.set(id);
		drawerStore.close();
	}
</script>

<nav class="list-nav p-4 !bg-primary-100">
	<ul>
		{#each $accountStore as acct}
			<li>
				<a href="/" class={active(acct.id.toString())} on:click={() => setActiveWallet(acct.id)}>
					<span><Avatar initials="ꜩ" background="bg-tertiary-500" width="w-8" /></span>
					<span>{acct.id}</span>
				</a>
			</li>
		{/each}
	</ul>
</nav>
