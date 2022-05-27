<script context="module">
	import Button from './Button_hero.svelte';
	import Button_mobile from './Button_mobile.svelte';
	import Button_white from './Button_white.svelte';
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Book bord</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>Book bord</h1>
</section>

<section class="book">
	<div class="mobil_img"><img src="book_bord.mobile.webp" alt="" /></div>
	<div class="booking">
		<h2>Book dit bord her</h2>
		<p>Trin 1 af 3</p>
		<br />
		<div class="sm:flex grid gap-8">
			<div class="">
				<p>Dato for jeres besøg</p>
				<input class="h-[45px] w-[166px]" placeholder="18/05/2022" type="Email" />
			</div>
			<div class="">
				<p>Hvor mange er</p>
				<input class="h-[45px] w-[166px]" placeholder="Antal gæster" type="Email" />
			</div>
		</div>
		<br />
		<Button_white link="/book_bord">Næste Trin</Button_white>
	</div>
	<div class="image">
		<img class="" src="book_bord.webp" alt="" />
	</div>
</section>

<section class="menuer">
	<div class="card_1">
		<h3>Se vores <br />Aftenmenu</h3>
		<Button_white link="/book_bord">Se aftenmenu her</Button_white>
	</div>
	<div class="card_2">
		<h3>Se vores <br />frokostmenu</h3>
		<Button_white link="/book_bord">Se frokostmenu her</Button_white>
	</div>
	<div class="card_3">
		<h3>Se vores <br />Ølsortiment</h3>
		<Button_white link="/book_bord">Se Ølsortiment her</Button_white>
	</div>
</section>

<style>
	.book {
		margin: 0 auto;
		background-color: #6e0b20;
		display: grid;
	}

	.book p {
		color: white;
		padding: 1rem;
	}

	.menuer {
		display: grid;
		grid-template-columns: 1fr;
		gap: 20px;
		padding-top: 3rem;
	}

	.menuer h3 {
		color: white;
	}

	.card_1 {
		width: 27rem;
		height: 27rem;
		background-image: url('../../static/aftenmenu.webp');
		/* background-image: url('aftenmenu.webp'); */
		background-size: contain;
		padding: 1rem;
		padding-top: 18rem;
	}
	.card_2 {
		width: 27rem;
		height: 27rem;
		background-image: url('../../static/frokostmenu.webp');
		/* background-image: url('frokostmenu.webp'); */
		background-size: contain;
		padding: 1rem;
		padding-top: 18rem;
	}
	.card_3 {
		width: 27rem;
		height: 27rem;
		background-image: url('../../static/olsortiment.webp');
		/* background-image: url('olsortiment.webp'); */
		background-size: contain;
		padding: 1rem;
		padding-top: 18rem;
	}

	@media (max-width: 400px) {
		.book {
			width: 16em;
			display: grid;
			place-items: center;
		}

		.card_1,
		.card_2,
		.card_3 {
			width: 16em;
			height: 16em;
			padding-top: 9rem;
		}

		.booking {
			padding-block: 2rem;
		}

		.mobil_img {
			width: 16em;
		}
	}

	@media (max-width: 600px) {
		.image {
			display: none;
		}
	}

	@media (min-width: 600px) {
		.book {
			height: 26.3rem;
			grid-template-columns: 1fr 1fr;
		}
		.image {
			width: 50rem;
			height: 26.3rem;
		}

		.mobil_img {
			display: none;
		}

		.menuer {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}
</style>
