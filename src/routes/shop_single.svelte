<script>
	// @ts-nocheck
	import ShopItem from './Shop_item.svelte';
	import ButtonBlack from './Button_blacks.svelte';
	let count = 0;
	import Shop_item from './Shop_item.svelte';
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
	<section class="container">
		<div class=""><img src="classic.webp" alt="classic" /></div>

		<div class="grid gap-8">
			<div class="grid gap-4">
				<h1>Nørrebro Classic</h1>
				<h3>Pilsner, 33cl, 4.6%</h3>
				<h2>DKK 29,-</h2>
				<div class="text-green-600">PÅ LAGER</div>
				<p>
					Vores bud på en Classic. Skøn øl med ravgylden farve og dybde. Den perfekte “partner in
					crime” til det kolde frokostbord eller bare som tørstslukker.
				</p>
			</div>
			<div class="flex gap-4 count">
				<div class="">
					<button class="font-xl" on:click={() => (count -= 1)}>-</button>
					<span class="bg-white px-4 border-2">{count}</span>
					<button on:click={() => (count += 1)}>+</button>
				</div>
				<div class=""><ButtonBlack>Tilføj til kurv</ButtonBlack></div>
			</div>
		</div>
	</section>

	<section class="pt-12">
		<h3>relaterede varer</h3>
		<div class="relaterede">
			<button class="btn md:static md:pt-0 absolute left-28 pt-40"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					aria-hidden="true"
					role="img"
					class="iconify iconify--material-symbols"
					width="25"
					height="25"
					preserveAspectRatio="xMidYMid meet"
					viewBox="0 0 24 24"
					><path
						fill="black"
						d="M15.125 21.1L6.7 12.7q-.15-.15-.212-.325q-.063-.175-.063-.375t.063-.375q.062-.175.212-.325l8.425-8.425q.35-.35.875-.35t.9.375q.375.375.375.875t-.375.875L9.55 12l7.35 7.35q.35.35.35.862q0 .513-.375.888t-.875.375q-.5 0-.875-.375Z"
					/></svg
				></button
			>
			<Shop_item
				img="blanche.webp"
				titel="Nørrebro classic"
				pris="29kr"
				sub_titel="Pilsner 33 cl"
			/>
			<div class="mobil">
				<Shop_item
					img="ravnsborg.webp"
					titel="Nørrebro classic"
					pris="29kr"
					sub_titel="Pilsner 33 cl"
				/>
			</div>
			<div class="mobil">
				<Shop_item
					img="bombay.webp"
					titel="Nørrebro classic"
					pris="29kr"
					sub_titel="Pilsner 33 cl"
				/>
			</div>
			<button class="btn md:static md:pt-0 absolute right-28 pt-40"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					aria-hidden="true"
					role="img"
					class="iconify iconify--material-symbols"
					width="25"
					height="25"
					preserveAspectRatio="xMidYMid meet"
					viewBox="0 0 24 24"
					><path fill="black" d="M8.025 22L6.25 20.225L14.475 12L6.25 3.775L8.025 2l10 10Z" /></svg
				></button
			>
		</div>
	</section>
</main>

<style>
	.container {
		place-self: center;
		margin-left: 12rem;
		max-width: 900px;
		padding-top: 4rem;
		display: flex;
		justify-items: center;
	}

	.container img {
		margin-bottom: 4rem;
	}

	main {
		background-image: url('../../static/shop_bg.svg');
		background-size: auto;
		background-position: top;
		background-repeat: no-repeat;
	}

	.relaterede {
		display: flex;
		place-self: center;
	}

	@media (max-width: 600px) {
		.container {
			display: grid;
			margin-inline: 1rem;
			margin-left: 0rem;
		}

		.mobil {
			display: none;
		}

		.count {
			display: grid;
			place-items: center;
		}
	}

	.count {
		align-items: center;
	}

	h2 {
		color: black;
	}
</style>
