<script>
	// @ts-nocheck

	import Sidebar from './Sidebar.svelte';
	let sidebar_show = false;
	import Search from 'svelte-search';
	let value = '';
	import ShopItem from './Shop_item.svelte';
	import Checkbox from './Checkbox.svelte';
	import Slider from 'svelte-slider';
	let rangeValue = null;
	import ButtonBlack from './Button_blacks.svelte';
</script>

<div class="w-[100vw] p-2 -mx-4 text-center bg-black/70 text-white">
	<p class="gap-4 place-items-center flex justify-center">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			aria-hidden="true"
			role="img"
			class="iconify iconify--iconoir"
			width="32"
			height="32"
			preserveAspectRatio="xMidYMid meet"
			viewBox="0 0 24 24"
			><g fill="none" stroke="white" stroke-linecap="round" stroke-width="1.5"
				><path
					stroke-linejoin="round"
					stroke-miterlimit="1.5"
					d="M8 19a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm10 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z"
				/><path d="M10.05 17H15V6.6a.6.6 0 0 0-.6-.6H1m4.65 11H3.6a.6.6 0 0 1-.6-.6v-4.9" /><path
					stroke-linejoin="round"
					d="M2 9h4"
				/><path
					d="M15 9h5.61a.6.6 0 0 1 .548.356l1.79 4.028a.6.6 0 0 1 .052.243V16.4a.6.6 0 0 1-.6.6h-1.9M15 17h1"
				/></g
			></svg
		>Gratis fragt ved køb over DKK 399,-
	</p>
</div>
<main>
	<div class="knapper">
		<ul>
			<button class="filter-knap flex gap-2" on:click={() => (sidebar_show = !sidebar_show)}
				><svg
					width="20"
					height="25"
					viewBox="0 0 39 46"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<line x1="5.5" y1="46" x2="5.5" stroke="black" stroke-width="3" />
					<line x1="18.5" y1="46" x2="18.5" stroke="black" stroke-width="3" />
					<line x1="33.5" y1="46" x2="33.5" stroke="black" stroke-width="3" />
					<circle cx="5" cy="32" r="3.5" fill="black" stroke="black" stroke-width="3" />
					<circle cx="18" cy="13" r="3.5" fill="black" stroke="black" stroke-width="3" />
					<circle cx="34" cy="24" r="3.5" fill="black" stroke="black" stroke-width="3" />
				</svg>FILTRER</button
			>

			<Search class="h-16 p-2 border-2" label="" placeholder="Prøv 'Hvedeøl'" />
			<br />
			<h3>Bryglinie</h3>
			<li><Checkbox>Nørrebro Bryghus</Checkbox></li>
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
			<br />
			<h3>Tilbud og nyheder</h3>
			<li><Checkbox>Aktuelle tilbud</Checkbox></li>
			<li><Checkbox>Nyheder</Checkbox></li>
		</ul>
	</div>

	<section class="mobile-filter">
		<Sidebar bind:show={sidebar_show} />

		<button class="filter-knap flex gap-2" on:click={() => (sidebar_show = !sidebar_show)}
			><svg
				width="20"
				height="25"
				viewBox="0 0 39 46"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<line x1="5.5" y1="46" x2="5.5" stroke="black" stroke-width="3" />
				<line x1="18.5" y1="46" x2="18.5" stroke="black" stroke-width="3" />
				<line x1="33.5" y1="46" x2="33.5" stroke="black" stroke-width="3" />
				<circle cx="5" cy="32" r="3.5" fill="black" stroke="black" stroke-width="3" />
				<circle cx="18" cy="13" r="3.5" fill="black" stroke="black" stroke-width="3" />
				<circle cx="34" cy="24" r="3.5" fill="black" stroke="black" stroke-width="3" />
			</svg>FILTRER</button
		>
		<Search class="h-16 p-2 border-2" label="" placeholder="Søg efter produkter..." />
	</section>

	<section class="shop">
		<a sveltekit:prefetch href="shop_single"
			><ShopItem
				img="classic.webp"
				titel="Nørrebro classic"
				sub_titel="Pilsner 33 cl"
				pris="DKK 29,-"
			/></a
		>
		<a sveltekit:prefetch href="shop_single"
			><ShopItem
				img="lager.webp"
				titel="Ney York lager"
				sub_titel="Lager 33 cl"
				pris="DKK 29,-"
			/></a
		>
		<a sveltekit:prefetch href="shop_single"
			><ShopItem img="blanche.webp" titel="Blanche" sub_titel="Hvede øl 33 cl" pris="kr 35,-" /></a
		>
		<a sveltekit:prefetch href="shop_single"
			><ShopItem
				img="pilsner.webp"
				titel="Nørrebro Pilsner"
				sub_titel="Pilsner 33 cl"
				pris="DKK 29,-"
			/></a
		>
		<a sveltekit:prefetch href="shop_single"
			><ShopItem img="bombay.webp" titel="Bombay ipa" sub_titel="IPA 0.75 cl" pris="kr 35,-" /></a
		>
		<a sveltekit:prefetch href="shop_single"
			><ShopItem
				img="ravnsborg.webp"
				titel="Ravnsborg rød"
				sub_titel="Ale 33 cl"
				pris="DKK 29,-"
			/></a
		>
		<a sveltekit:prefetch href="shop_single"
			><ShopItem
				img="bundle_1.webp"
				titel="beer bundle #1"
				sub_titel="Pilsner & Ale 3x33 cl"
				pris="DKK 29,-"
			/></a
		>
		<a sveltekit:prefetch href="shop_single"
			><ShopItem
				img="bundle_2.webp"
				titel="beer bundle #2"
				sub_titel="Pilsner & Hvede 3x33 cl"
				pris="DKK 29,-"
			/></a
		>
		<a sveltekit:prefetch href="shop_single"
			><ShopItem
				img="bundle_3.webp"
				titel="beer bundle #3"
				sub_titel="Pilsner & IPA 3x33 cl"
				pris="DKK 29,-"
			/></a
		>
		<div class="" />
		<section class="pt-20">
			<ButtonBlack>Indlæs mere ▼</ButtonBlack>
		</section>
	</section>
</main>

<style>
	/* .filter {
		position: absolute;
	} */

	main {
		background-image: url('shop_bg.svg');
		background-size: auto;
		background-position: top;
	}

	.shop {
		margin-top: 0rem;
		position: relative;
		display: grid;
		grid-template-columns: 1fr;
	}

	.knapper {
		margin-top: 2rem;
		position: absolute;
		display: flex;
		justify-content: space-between;
	}
	@media (max-width: 600px) {
		.knapper {
			display: none;
		}

		.mobile-filter {
			text-align: center;
			display: grid;
			place-items: center;
		}

		.shop {
			margin-top: -4rem;
		}
	}

	@media (min-width: 600px) {
		.mobile-filter {
			display: none;
		}

		.shop {
			margin-left: 14rem;
			grid-template-columns: 1fr 1fr 1fr;
		}

		.knapper {
			margin-inline: 2rem;
		}
	}

	.filter-knap {
		border-style: solid;
		margin-block: 2rem;
	}

	.slider {
		--sliderPrimary: #000000;
		--sliderSecondary: rgba(0, 0, 0, 0.05);
		margin-top: 16px;
	}
</style>
