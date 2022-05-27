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
	import ButtonBlack from './Button_black.svelte';
</script>

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

		<Search class="h-16 p-2 border-2" label="" placeholder="Søg efter produkter..." />
		<br />
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
		<br />
		<li><ButtonBlack>ANVEND FILTRE</ButtonBlack></li>
	</ul>
</div>

<section class="mobile-filter">
	<Sidebar bind:show={sidebar_show} />

	<button class="filter-knap flex gap-2" on:click={() => (sidebar_show = !sidebar_show)}
		><svg width="20" height="25" viewBox="0 0 39 46" fill="none" xmlns="http://www.w3.org/2000/svg">
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
	<ShopItem img="classic.webp" titel="Nørrebro classic" sub_titel="Pilsner 33 cl" pris="kr 29,-" />
	<ShopItem img="lager.webp" titel="Ney York lager" sub_titel="Lager 33 cl" pris="kr 29,-" />
	<ShopItem img="blanche.webp" titel="Blanche" sub_titel="Hvede øl 33 cl" pris="kr 35,-" />
	<ShopItem img="pilsner.webp" titel="Nørrebro Pilsner" sub_titel="Pilsner 33 cl" pris="kr 29,-" />
	<ShopItem img="bombay.webp" titel="Bombay ipa" sub_titel="IPA 0.75 cl" pris="kr 35,-" />
	<ShopItem img="ravnsborg.webp" titel="Ravnsborg rød" sub_titel="Ale 33 cl" pris="kr 29,-" />
	<ShopItem
		img="bundle_1.webp"
		titel="beer bundle #1"
		sub_titel="Pilsner & Ale 3x33 cl"
		pris="kr 29,-"
	/>
	<ShopItem
		img="bundle_2.webp"
		titel="beer bundle #2"
		sub_titel="Pilsner & Hvede 3x33 cl"
		pris="kr 29,-"
	/>
	<ShopItem
		img="bundle_3.webp"
		titel="beer bundle #3"
		sub_titel="Pilsner & IPA 3x33 cl"
		pris="kr 29,-"
	/>
	<div class="" />
	<section class="pt-20">
		<ButtonBlack>Indlæs mere ▼</ButtonBlack>
	</section>
</section>

<style>
	/* .filter {
		position: absolute;
	} */

	.shop {
		margin-top: 0rem;
		position: relative;
		display: grid;
		grid-template-columns: 1fr;
	}

	.knapper {
		margin-top: 2rem;
		position: absolute;
		margin-inline: 2rem;
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
