<script>
	// @ts-nocheck

	import { fly } from 'svelte/transition';
	import Modal from './Modal_smag.svelte';
	import Button_black from './Button_blacks.svelte';
	export let show = false;
	let modal_show = false;
	import Checkbox from './Checkbox.svelte';
	import Slider from 'svelte-slider';
	let rangeValue = null;
	import Search from 'svelte-search';
	let value = '';
</script>

<section class="pt-4">
	{#if show}
		<nav transition:fly={{ x: -250, opacity: 1 }}>
			<button
				class="luk_knap"
				on:click={() => {
					modal_show = true;
					show = false;
				}}
				><svg
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					aria-hidden="true"
					role="img"
					class="iconify iconify--material-symbols"
					width="32"
					height="32"
					preserveAspectRatio="xMidYMid meet"
					viewBox="0 0 24 24"
					><path
						fill="black"
						d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6Z"
					/></svg
				></button
			>
			<!-- <Search class="h-16  border-2" label="" placeholder="Søg efter produkter..." /> -->
			<br />
			<ul>
				<h3>Bryglinie</h3>
				<li><Checkbox>Nørrebro bryghus</Checkbox></li>
				<li><Checkbox>BRAW</Checkbox></li>
				<li><Checkbox>Inferøl</Checkbox></li>
				<br />
				<h3>TYPE</h3>
				<li><Checkbox>Pilsner</Checkbox></li>
				<li><Checkbox>IPA</Checkbox></li>
				<li><Checkbox>Ale</Checkbox></li>
				<li><Checkbox>Hvedeøl</Checkbox></li>
				<li><Checkbox>NE IPA</Checkbox></li>
				<li><Checkbox>Lager</Checkbox></li>
				<li><Checkbox>Porter</Checkbox></li>
				<li><Checkbox>Fruited sour</Checkbox></li>
				<li><Checkbox>Stout</Checkbox></li>
				<br />
				<li>
					<div class="title">
						<h3>PRIS</h3>
						{#if rangeValue !== null}
							{rangeValue[0]} - {rangeValue[1]}
						{/if}
					</div>
					<div class="slider">
						<Slider on:change={(event) => (rangeValue = event.detail)} value={[0, 1]} />
					</div>
				</li>
				<br />
				<h3>%</h3>
				<li><Checkbox>Alkoholisk</Checkbox></li>
				<li><Checkbox>Alkoholfri</Checkbox></li>
				<br />
				<h3>Pakker</h3>
				<li><Checkbox>Pakker</Checkbox></li>
				<li><Checkbox>Enkelt øl</Checkbox></li>
				<br />
				<h3>CL</h3>
				<li><Checkbox>0.33</Checkbox></li>
				<li><Checkbox>0.44</Checkbox></li>
				<li><Checkbox>0.5</Checkbox></li>
				<li><Checkbox>0.75</Checkbox></li>
			</ul>
			<div class="grid place-items-center mt-12">
				<button
					class="filter_knap"
					on:click={() => {
						modal_show = true;
						show = false;
					}}><Button_black>ANVEND FILTRE</Button_black></button
				>
			</div>
		</nav>
	{/if}
</section>

<style>
	nav {
		position: relative;
		top: 0;
		left: 0;
		height: auto;
		width: 16em;
		padding: 2rem 1rem 0.6rem;
		background: #fff;
		z-index: 100;
		border: black 2px;
		border-style: solid;
		text-align: left;
	}

	.luk_knap {
		margin-left: 12rem;
	}

	.slider {
		--sliderPrimary: #000000;
		--sliderSecondary: rgba(0, 0, 0, 0.05);
		margin-top: 16px;
	}
</style>
