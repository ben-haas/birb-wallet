<script lang="ts">
	import { onMount } from 'svelte';
	import { activeWallet, accountStore } from '$lib/stores';
	import Wallet from '$lib/components/Wallet.svelte';

	onMount(() => {
		if ($accountStore[0]) {
			activeWallet.set({
				id: $accountStore[0].id,
				address: $accountStore[0].address,
				loaded: true
			});
		}
	});
</script>

<div class="container h-full mx-auto gap-8 flex flex-col items-center">
	<Wallet />
</div>
