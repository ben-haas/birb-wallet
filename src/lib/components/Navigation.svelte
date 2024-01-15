<script lang="ts">
	import { getDrawerStore, Avatar } from '@skeletonlabs/skeleton';
	import { accountStore } from '$lib/stores';

	const drawerStore = getDrawerStore();

	function drawerClose(): void {
		drawerStore.close();
	}
</script>

<nav class="list-nav p-4">
	<ul>
		{#each $accountStore as acct}
			<li class="flex">
				<Avatar initials="TZ" background="bg-primary-500" width="w-12" />
				<a href="/" on:click={drawerClose}>{acct.path}</a>
			</li>
		{/each}
	</ul>
</nav>
