<script lang="ts">
	import { getAddress, trezorInit } from '$lib/trezor';

	function onConnect(): void {
		trezorInit();
		getAddress();
	}
</script>

<div class="container h-full mx-auto gap-8 flex flex-col">
	<div class="">
		<button class="btn variant-ghost" on:click={onConnect}>Connect Trezor</button>
	</div>
</div>
