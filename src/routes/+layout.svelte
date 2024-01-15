<script lang="ts">
	import '../app.css';
	import { get } from 'svelte/store';
	import {
		AppBar,
		AppShell,
		LightSwitch,
		Drawer,
		Modal,
		Toast,
		initializeStores,
		getDrawerStore,
		getModalStore,
		type ModalSettings,
		type ModalComponent
	} from '@skeletonlabs/skeleton';
	import { Fa } from 'svelte-fa';
	import { faBars, faKiwiBird } from '@fortawesome/free-solid-svg-icons';
	import { accountStore } from '$lib/stores';
	import Navigation from '$lib/components/Navigation.svelte';
	import ConnectModal from '$lib/components/ConnectModal.svelte';

	initializeStores();

	const accts = get(accountStore);

	const modalRegistry: Record<string, ModalComponent> = {
		connectModal: { ref: ConnectModal }
	};
	const modalStore = getModalStore();
	const drawerStore = getDrawerStore();

	const modal: ModalSettings = {
		type: 'component',
		component: 'connectModal'
	};

	if (accts.length === 0) {
		modalStore.trigger(modal);
	}

	function drawerOpen(): void {
		drawerStore.open({});
	}
</script>

<Modal components={modalRegistry} />

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
				<LightSwitch />
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
