<script context="module">
	import Button from './Button_hero.svelte';
	import Button_white from './Button_white.svelte';
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="hero">
	<div class="left">
		<div class="kasse_1">
			<Button link="/om_os">BOOK BORD</Button>
		</div>
	</div>
	<div class="right">
		<div class="kasse_2"><Button link="/om_os">ØL-SHOP</Button></div>
		<div class="kasse_3"><Button link="/om_os">EVENTS</Button></div>
	</div>
</section>

<section>
	<h1>Velkommen til Nørrebro Bryghus</h1>
	<div class="container">
		<div class="flex sm:gap-20">
			<div class="blomst_1 grid place-items-center gap-8">
				<img src="blomst_1.svg" alt="" />
				<h3>100% ØKOLOGI</h3>
			</div>
			<div class="blomst_2 grid place-items-center gap-8">
				<img src="blomst_2.svg" alt="" />
				<h3>LOKALT ENGEGAMENT</h3>
			</div>
			<div class="blomst_3 grid place-items-center gap-8">
				<img src="blomst_3.svg" alt="" />
				<h3>SOCIALT ANSVAR</h3>
			</div>
		</div>
	</div>
</section>

<section class="menu">
	<div class="top">
		<h2>Gastronomiske oplevelser</h2>
		<p>
			Lad dine smagsløg blive forkælet, når vi inviterer indenfor til et ukonventionelt og 100%
			økologisk måltid i bryghuset. Få den fulde oplevelse sammensæt retterne med nogle af vores
			fantastiske øl fra Nørrebro Bryghus.
		</p>
	</div>
	<div class="bottom sm:flex sm:gap-[40rem] sm:py-[12rem] grid gap-6 pt-36">
		<Button_white link="/">FROKOSTMENU</Button_white>
		<Button_white link="/">AFTENMENU</Button_white>
	</div>
</section>

<style>
	.hero {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr;
		gap: 10px;
	}

	.left {
		width: 100%;
	}

	.right {
		height: 100%;
		display: grid;
		width: 100%;
		gap: 10px;
	}
	.kasse_1 {
		display: grid;
		place-items: center;
		width: 100%;
		height: 37rem;
		background-image: url('../../static/shrimp.mobile.webp');
		background-image: url('shrimp.mobile.webp');
		background-size: cover;
		background-repeat: no-repeat;
	}
	.kasse_2 {
		display: grid;
		place-items: center;
		width: 100%;
		height: 100%;
		background-image: url('../../static/bundle_3.webp');
		background-image: url('bundle_3.webp');
		background-size: cover;
		background-repeat: no-repeat;
	}
	.kasse_3 {
		display: grid;
		place-items: center;
		width: 100%;
		height: 100%;
		background-image: url('../../static/event.webp');
		background-image: url('event.webp');
		background-size: cover;
		background-repeat: no-repeat;
	}

	.container {
		display: grid;
		place-items: center;
		gap: 30px;
		padding-block: 4rem;
		text-align: center;
	}

	.container img {
		width: 4rem;
	}

	.menu p,
	h2 {
		color: white;
		max-width: 600px;
		text-align: center;
	}

	@media (min-width: 600px) {
		.container img {
			width: 7rem;
		}

		.menu {
			padding-top: 3rem;
			background-image: url('../../static/red_bg.svg');
			/* background-image: url('red_bg.svg'); */
			background-size: contain;
			background-repeat: no-repeat;
		}
	}

	@media (max-width: 600px) {
		.kasse_2 {
			background-image: url('../../static/bundle_3.mobile.webp');
			background-image: url('bundle_3.mobile.webp');
		}

		.kasse_3 {
			background-image: url('../../static/event.mobile.webp');
			background-image: url('event.mobile.webp');
		}

		.top {
			padding-bottom: 8rem;
		}

		.menu {
			padding: 1rem;
			background-image: url('../../static/red_bg.mobile.svg');
			background-image: url('red_bg.mobile.svg');
			background-size: cover;
			background-repeat: no-repeat;
		}
	}
</style>
