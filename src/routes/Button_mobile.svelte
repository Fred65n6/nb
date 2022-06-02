<script>
	// @ts-nocheck
	export let link;
	import { page } from '$app/stores';
</script>

<a class="btn" href={link}>
	<slot />
</a>

<style>
	* {
		box-sizing: border-box;
	}

	.btn {
		border: white 2px;
		border-style: solid;
		font-family: var(--heading-and-button-font);
		background-color: var(--button-bg-opacity);
		text-decoration: none;
		position: relative;
		display: inline-block;
		padding-inline: 0.8rem;
		padding-block: 0.1rem;
		font-size: 1rem;
		line-height: 45px;
		text-align: center;
		text-transform: uppercase;
		color: var(--default-white);
		cursor: pointer;
		overflow: hidden;
		transition: 1s;
	}
</style>
