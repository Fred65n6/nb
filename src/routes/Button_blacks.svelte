<script>
	// @ts-nocheck
	import { page } from '$app/stores';
</script>

<div class="btn">
	<svg>
		<rect x="0" y="0" fill="none" width="166" height="45" />
	</svg>
	<slot />
</div>

<style>
	* {
		box-sizing: border-box;
	}

	.btn {
		font-family: var(--heading-and-button-font);
		text-decoration: none;
		position: relative;
		display: inline-block;
		width: 166px;
		height: 45px;
		font-size: 1rem;
		line-height: 45px;
		text-align: center;
		text-transform: uppercase;
		color: var(--default-black);
		cursor: pointer;
		overflow: hidden;
	}
	.btn svg {
		position: absolute;
		top: 0;
		left: 0;
	}
	.btn svg rect {
		stroke: var(--default-black);
		stroke-width: 3;
		stroke-dasharray: 422, 0;
		stroke-dashoffset: 0;
	}
	.btn:hover svg rect {
		text-decoration: none;
		stroke-width: 3;
		stroke-dasharray: 110, 312;
		stroke-dashoffset: 183;
		transition: 1s;
		stroke: var(--default-black);
		background-color: none;
	}
</style>
