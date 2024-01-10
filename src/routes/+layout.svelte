<script lang="ts">
	import '../app.css';
	import {
		AppBar,
		AppShell,
		Avatar,
		Drawer,
		Modal,
		Toast,
		initializeStores,
		getDrawerStore
	} from '@skeletonlabs/skeleton';
	import { Fa } from 'svelte-fa';
	import { faBars, faKiwiBird } from '@fortawesome/free-solid-svg-icons';
	import Navigation from '$lib/components/Navigation.svelte';

	initializeStores();

	const drawerStore = getDrawerStore();

	function drawerOpen(): void {
		console.log('drawer');
		drawerStore.open({});
	}
</script>

<Drawer>
	<Navigation />
</Drawer>

<AppShell slotSidebarLeft="w-0 md:w-52 bg-surface-100">
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<button class="md:hidden" on:click={drawerOpen}>
					<Fa icon={faBars} size="2x" />
				</button>
			</svelte:fragment>

			<div class="flex justify-center">
				<Fa icon={faKiwiBird} size="2x" />
				<strong>birb wallet</strong>
			</div>

			<svelte:fragment slot="trail">
				<Avatar initials="PH" background="bg-primary-500" />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<svelte:fragment slot="sidebarLeft">
		<Navigation />
	</svelte:fragment>

	<div class="container p-10 mx-auto">
		<slot />
	</div>

	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
</AppShell>
