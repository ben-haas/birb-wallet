<script lang="ts">
	import { getAddress } from '$lib/services/trezorService';
	import { accountStore } from '$lib/stores';

	function connect(): void {
		getAddress(1);
	}

	//TODO add input to choose derivation path
</script>

<div class="flex flex-col items-center space-y-4">
	<h2 class="h2">Connect Your Trezor</h2>
	<button class="btn variant-filled-primary" on:click={connect}>Connect</button>
</div>
