<script>
	// @ts-nocheck
	import ShopItem from './Shop_item.svelte';
	import ButtonBlack from './Button_blacks.svelte';
	let count = 0;
	import Shop_item from './Shop_item.svelte';
</script>

<section class="container">
	<div class=""><img src="classic.webp" alt="classic" /></div>

	<div class="grid gap-8">
		<div class="grid gap-4">
			<h1>Nørrebro Classic</h1>
			<h3>Pilsner, 33cl, 4.6%</h3>
			<h2>kr 29,-</h2>
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
		<button class="btn"
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
		<Shop_item img="blanche.webp" titel="Nørrebro classic" pris="29kr" sub_titel="Pilsner 33 cl" />
		<div class="mobil">
			<Shop_item
				img="ravnsborg.webp"
				titel="Nørrebro classic"
				pris="29kr"
				sub_titel="Pilsner 33 cl"
			/>
		</div>
		<div class="mobil">
			<Shop_item img="bombay.webp" titel="Nørrebro classic" pris="29kr" sub_titel="Pilsner 33 cl" />
		</div>
		<button class="btn"
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

<style>
	.container {
		place-self: center;
		margin-right: 15rem;
		max-width: 900px;
		padding-top: 4rem;
		display: flex;
		justify-items: center;
	}

	.relaterede {
		display: flex;
		place-self: center;
	}

	@media (max-width: 600px) {
		.container {
			display: grid;
			margin-inline: 1rem;
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
