<script>
	// @ts-nocheck

	export let link;
	import { page } from '$app/stores';
</script>

<a class="button" href={link}><slot /></a>

<style>
	.button {
		font-size: 1em;
		color: white;
		border: 1px solid white;
		background: #f26700;
		outline: solid #f26700 1px;
		padding: 0.25em 1em;
		text-decoration: none;
	}
</style>
