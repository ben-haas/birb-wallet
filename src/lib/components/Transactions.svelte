<script lang="ts">
	import { type Txns } from '$lib/services/tzktService';

	export let txns: Txns = [];
</script>

{#each txns as txn}
	<p>{txn.sender.address}</p>
{/each}
