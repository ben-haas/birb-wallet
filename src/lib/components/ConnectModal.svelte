<script lang="ts">
	import { getModalStore } from '@skeletonlabs/skeleton';
	import { getAddress } from '$lib/trezor';

	const modalStore = getModalStore();

	function connect(): void {
		getAddress(1);
	}

	const cBase = 'bg-surface-100-800-token w-screen h-screen p-4 flex justify-center items-center';
</script>

{#if $modalStore[0]}
	<div class="modal-example-fullscreen {cBase}">
		<div class="flex flex-col items-center space-y-4">
			<h2 class="h2">Connect Your Trezor</h2>
			<button class="btn variant-filled-primary" on:click={connect}>Connect</button>
		</div>
	</div>
{/if}
