<script lang="ts">
	import { getAddress } from '$lib/services/trezorService';
	import { accountStore, connectingWallet } from '$lib/stores';
	import { get } from 'svelte/store';
	import { writable } from 'svelte/store';

	const customAcct = writable(false);
	let account: number;

	const connect = (acct: number): void => {
		getAddress(acct);
	};

	const getNextAcctId = (): void => {
		const connectedAccts = get(accountStore);
		const max = connectedAccts.reduce(function (prev, current) {
			return prev && prev.id > current.id ? prev : current;
		});
		connect(max.id + 1);
	};

	const stopConnectingWallet = () => {
		connectingWallet.set(false);
	};
</script>

<div class="flex flex-col items-center space-y-4">
	<h2 class="h2">Connect New Account</h2>
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
		on:click={() => ($customAcct ? connect(account) : getNextAcctId())}>Add Account</button
	>
	{#if !$customAcct}
		<a href="#top" class="anchor" on:click={() => customAcct.set(true)}
			>Use custom derivation path</a
		>
	{:else if $customAcct}
		<a href="#top" class="anchor" on:click={() => customAcct.set(false)}>Use next derivation path</a
		>
	{/if}
	<button class="btn-sm variant-soft-primary" on:click={stopConnectingWallet}>Back</button>
</div>
