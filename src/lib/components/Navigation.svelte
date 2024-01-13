<script lang="ts">
	import { getDrawerStore, Avatar } from '@skeletonlabs/skeleton';

	const drawerStore = getDrawerStore();

	function drawerClose(): void {
		drawerStore.close();
	}
</script>

<nav class="list-nav p-4">
	<ul>
		<li class="flex">
			<Avatar initials="TZ" background="bg-primary-500" width="w-12" />
			<a href="/" on:click={drawerClose}>Account 1</a>
		</li>
		<li class="flex">
			<Avatar initials="TZ" background="bg-primary-500" width="w-12" />
			<a href="/?test=1" on:click={drawerClose}>Account 2</a>
		</li>
		<li class="flex">
			<Avatar initials="TZ" background="bg-primary-500" width="w-12" />
			<a href="/?test=2" on:click={drawerClose}>Account 3</a>
		</li>
		<li class="flex">
			<Avatar initials="TZ" background="bg-primary-500" width="w-12" />
			<a href="/?test=3" on:click={drawerClose}>Account 4</a>
		</li>
	</ul>
</nav>
