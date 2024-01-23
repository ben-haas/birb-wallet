<script lang="ts">
	import { getModalStore } from '@skeletonlabs/skeleton';
	import { getAddress } from '$lib/services/trezorService';
	import { writable } from 'svelte/store';

	const modalStore = getModalStore();
	const customAcct = writable(false);

	let account: number;
	let index: number;

	function connect(acct: number): void {
		getAddress(acct);
	}
</script>

{#if $modalStore[0]}
	<div class="bg-surface-100-800-token w-screen h-screen p-4 flex justify-center items-center">
		<div class="flex flex-col items-center space-y-4">
			<img src="/logo/birb_logo_md.png" alt="logo" />
			<h2 class="h2">Connect Your Trezor</h2>
			{#if $customAcct}
				<div class="flex items-center gap-1">
					<p class="font-bold text-lg">m/44'/1729'/</p>

					<select class="select" bind:value={account}>
						<option value={0}>0</option>
						<option value={1}>1</option>
						<option value={2}>2</option>
						<option value={3}>3</option>
						<option value={4}>4</option>
						<option value={5}>5</option>
						<option value={6}>6</option>
						<option value={7}>7</option>
						<option value={8}>8</option>
						<option value={9}>9</option>
					</select>

					<p class="font-bold text-lg">'</p>
				</div>
			{/if}
			<button
				class="btn variant-filled-primary"
				on:click={() => ($customAcct ? connect(account) : connect(0))}>Connect</button
			>
			{#if !$customAcct}
				<a href="/" class="anchor" on:click={() => customAcct.set(true)}
					>Use custom derivation path</a
				>
			{:else if $customAcct}
				<a href="/" class="anchor" on:click={() => customAcct.set(false)}
					>Use default derivation path</a
				>
			{/if}
		</div>
	</div>
{/if}
