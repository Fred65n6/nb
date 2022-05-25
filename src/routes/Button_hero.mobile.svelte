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
		font-family: 'Josefin Sans', sans-serif;
		background-color: rgba(0, 0, 0, 0.525);
		text-decoration: none;
		position: relative;
		display: inline-block;
		width: 166px;
		height: 45px;
		font-size: 1rem;
		line-height: 45px;
		text-align: center;
		text-transform: uppercase;
		color: white;
		cursor: pointer;
		overflow: hidden;
		transition: 1s;
	}
</style>
