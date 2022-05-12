<script>
	// @ts-nocheck

	export let link;
	import { page } from '$app/stores';
</script>

<a class="button" href={link}><slot /></a>

<br />

<div class="btn">
	<svg>
		<rect x="0" y="0" fill="none" width="166" height="45" />
	</svg>
	<slot />
</div>

<br />

<button><slot /></button>

<br />

<div class="scene">
	<div class="cube">
		<span class="side top">Se mere</span>
		<span class="side front"><slot /></span>
	</div>
</div>

<br />

<style>
	.button {
		font-size: 1em;
		color: white;
		border: 1px solid white;
		background: #e3861b;
		outline: solid #f26700 1px;
		padding: 0.25em 1em;
		text-decoration: none;
	}

	.button:hover {
		background-color: black;
		transition: ease 0.5s;
	}

	/******KNAP 2******/

	* {
		box-sizing: border-box;
	}

	.btn {
		position: relative;
		display: inline-block;
		width: 166px;
		height: 45px;
		font-size: 14px;
		line-height: 45px;
		text-align: center;
		text-transform: uppercase;
		color: #ffffff;
		cursor: pointer;
		overflow: hidden;
	}
	.btn svg {
		position: absolute;
		top: 0;
		left: 0;
	}
	.btn svg rect {
		stroke: #ffffff;
		stroke-width: 3;
		stroke-dasharray: 422, 0;
		stroke-dashoffset: 0;

		transition: ease 900ms;
	}
	.btn:hover svg rect {
		stroke-width: 3;
		stroke-dasharray: 110, 312;
		stroke-dashoffset: 183;
	}

	/*******KNAP 3******/

	button {
		position: relative;

		background: #e3861b;
		border: 1px solid white;
		padding-inline: 15px;
		padding-block: 10px;
		font-size: 0.9em;
		color: white;
		box-shadow: 4px 4px 0px 0px white;
		font-family: 'Open Sans', sans-serif;
		font-weight: 700;
		letter-spacing: 5px;
		text-transform: uppercase;
		transition: all 300ms ease-in-out;
		left: 0;
		top: 0;
	}

	button:hover {
		left: 4px;
		top: 4px;
		box-shadow: 0 0 0 0 white;
	}

	/******KNAP 4*******/

	.scene {
		perspective: 1000;
		width: 10em;
		position: absolute;
		top: 50%;
		left: 50%;
		margin-left: -5em;
	}

	.cube {
		color: #ccc;
		cursor: pointer;
		font-family: 'Roboto', sans-serif;
		transition: all 0.85s cubic-bezier(0.17, 0.67, 0.14, 0.93);
		transform-style: preserve-3d;
		transform-origin: 100% 50%;
		width: 10em;
		height: 2em;
	}

	.cube:hover {
		transform: rotateX(-90deg);
	}

	.side {
		box-sizing: border-box;
		position: absolute;
		display: inline-block;
		height: 4em;
		width: 10em;
		text-align: center;
		text-transform: uppercase;
		padding-top: 1.5em;
	}

	.top {
		background: #fff;
		color: #222229;
		transform: rotateX(90deg) translate3d(0, 0, 2em);
	}

	.front {
		background: #e3861b;
		color: #fff;
		box-shadow: inset 0 0 0 5px #fff;
		transform: translate3d(0, 0, 2em);
	}

	/******KNAP 5*******/
</style>
