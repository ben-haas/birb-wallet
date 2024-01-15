<script lang="ts">
	import { onMount } from 'svelte';
	import { getAddress, trezorInit } from '$lib/trezor';
	import type { PageData } from './$types';

	export let data: PageData;
	const accts = data.accountData;

	onMount(() => {
		console.log('Trezor Connect Initialized');
		trezorInit();
	});

	function onConnect(): void {
		getAddress(0);
	}
</script>

<div class="container h-full mx-auto gap-8 flex flex-col">
	<div class="">
		<button class="btn variant-ghost" on:click={onConnect}>Connect Trezor</button>
	</div>
</div>
