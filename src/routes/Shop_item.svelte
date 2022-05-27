<script>
	// @ts-nocheck

	import ButtonBlack from './Button_black.svelte';
	export let img;
	export let titel;
	export let sub_titel;
	export let pris;
	let count = 0;
</script>

<div class="card">
	<img src={img} alt="" />
	<h3>{titel}</h3>
	<p>{sub_titel}</p>
	<h3>{pris}</h3>
	<div class="flex gap-4">
		<button class="font-xl" on:click={() => (count -= 1)}>-</button>
		<span class="bg-white px-4 border-2">{count}</span>
		<button on:click={() => (count += 1)}>+</button>
	</div>
	<ButtonBlack>Tilføj til Kurv</ButtonBlack>
</div>

<style>
	.card {
		display: grid;
		gap: 15px;
		place-items: center;
		width: 23rem;
		height: 23rem;
		text-align: center;
		padding: 1rem;
		margin-block: 4rem;
	}

	@media (max-width: 600px) {
		.card {
			width: 18em;
		}
	}

	.card,
	h3,
	p {
		color: black;
	}

	img {
		width: 20rem;
	}
</style>
