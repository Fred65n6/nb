<script>
	// @ts-nocheck
	export let link;
	import { page } from '$app/stores';
</script>

<a class="btn" href={link}>
	<svg>
		<rect x="0" y="0" fill="none" width="166" height="45" />
	</svg>
	<slot />
</a>

<style>
	* {
		box-sizing: border-box;
	}

	.btn {
		font-family: var(--heading-and-button-font);
		background-color: var(--button-bg-opacity);
		text-decoration: none;
		position: relative;
		display: inline-block;
		width: 166px;
		height: 45px;
		font-size: 1rem;
		line-height: 45px;
		text-align: center;
		text-transform: uppercase;
		color: var(--default-white);
		cursor: pointer;
		overflow: hidden;
		transition: 1s;
	}
	.btn svg {
		position: absolute;
		top: 0;
		left: 0;
	}
	.btn svg rect {
		stroke: var(--default-white);
		stroke-width: 3;
		stroke-dasharray: 422, 0;
		stroke-dashoffset: 0;

		transition: ease 900ms;
	}
	.btn:hover svg rect {
		text-decoration: none;
		stroke-width: 3;
		stroke-dasharray: 110, 312;
		stroke-dashoffset: 183;
		transition: 1s;
		stroke: var(--default-white);
		background-color: none;
	}

	.btn:hover {
		background-color: rgba(0, 0, 0, 0);
		transition: 1s;
	}
</style>
