<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	import {
		AppBar,
		AppShell,
		LightSwitch,
		Modal,
		Toast,
		initializeStores,
		getModalStore,
		type ModalSettings,
		type ModalComponent
	} from '@skeletonlabs/skeleton';
	import { trezorInit } from '$lib/services/trezorService';
	import { Fa } from 'svelte-fa';
	import { faBars } from '@fortawesome/free-solid-svg-icons';
	import { accountStore } from '$lib/stores';
	import Navigation from '$lib/components/Navigation.svelte';
	import ConnectModal from '$lib/components/ConnectModal.svelte';

	initializeStores();

	const accts = get(accountStore);

	const modalRegistry: Record<string, ModalComponent> = {
		connectModal: { ref: ConnectModal }
	};
	const modalStore = getModalStore();

	const modal: ModalSettings = {
		type: 'component',
		component: 'connectModal'
	};

	if (accts.length === 0) {
		modalStore.trigger(modal);
	}

	onMount(() => {
		try {
			trezorInit();
		} catch (error) {
			console.log(`Trezor connect error: ${error}`);
			throw error;
		}
	});
</script>

<Modal components={modalRegistry} />

<AppShell slotSidebarLeft="">
	<svelte:fragment slot="header">
		<AppBar
			class="shadow-2xl"
			background="bg-gradient-to-b variant-gradient-primary-secondary"
			gridColumns="grid-cols-1"
		>
			<div class="flex flex-col items-center">
				<img src="/logo/birb_logo_md.png" alt="Logo" class="max-w-20 mr-2" />
				<h2 class="h2">birb</h2>
			</div>
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
