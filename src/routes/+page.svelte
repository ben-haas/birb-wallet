<script lang="ts">
	import { onMount } from 'svelte';
	import { trezorInit } from '$lib/trezor';
	import { activeWallet, accountStore } from '$lib/stores';
	import Wallet from '$lib/components/Wallet.svelte';

	onMount(() => {
		trezorInit();
		activeWallet.set({ id: $accountStore[0].id, address: $accountStore[0].address });
	});
</script>

<div class="container h-full mx-auto gap-8 flex flex-col">
	<Wallet />
</div>
