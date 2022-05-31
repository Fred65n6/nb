<script context="module">
	import Button from './Button_hero.svelte';
	import Button_mobile from './Button_mobile.svelte';
	import Button_white from './Button_white.svelte';
	import { page } from '$app/stores';
	import Cookie from './Cookie_banner.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="hero">
	<div class="left">
		<div class="kasse_1">
			<div class="desktop_button"><Button link="/book_bord">BOOK BORD</Button></div>
			<div class=" mobile_button">
				<Button_mobile link="/book_bord">BOOK BORD</Button_mobile>
			</div>
		</div>
	</div>
	<div class="right">
		<div class="kasse_2 ">
			<div class="desktop_button"><Button link="shop">ØL-SHOP</Button></div>
			<div class=" mobile_button"><Button_mobile link="/shop">ØL-SHOP</Button_mobile></div>
		</div>

		<div class="kasse_3">
			<div class="desktop_button"><Button link="/events">EVENTS</Button></div>
			<div class=" mobile_button"><Button_mobile link="/events">EVENTS</Button_mobile></div>
		</div>
	</div>
</section>

<section>
	<h1 class="text-center">Velkommen til Nørrebro Bryghus</h1>
	<div class="container">
		<div class="sm:flex grid gap-14">
			<div class="blomst_1 grid place-items-center gap-8">
				<img src="blomst_1.svg" alt="" />
				<h3>100% ØKOLOGI</h3>
			</div>
			<div class="blomst_2 grid place-items-center gap-8">
				<img src="blomst_2.svg" alt="" />
				<h3>LOKALT ENGAGEMENT</h3>
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
	<img class="mobile-blomst sm:hidden block" src="menu_blomst.svg" alt="" />
	<div class="bottom sm:flex sm:gap-[40rem] sm:py-[12rem] grid gap-6 pt-20">
		<a sveltekit:prefetch href="frokostmenu"><Button_white>Frokostmenu</Button_white></a>
		<a sveltekit:prefetch href="aftenmenu"><Button_white>Aftenmenu</Button_white></a>
	</div>
</section>

<Cookie />

<style>
	.hero {
		display: grid;
		height: 87vh;
		grid-template-columns: 1fr 1fr;
		gap: 10px;
		overflow-x: hidden;
	}

	.left {
		width: 100%;
		height: 100%;
	}

	.right {
		height: 100%;
		display: grid;
		width: 100%;
		gap: 10px;
	}
	.kasse_1 {
		display: grid;
		height: 100%;
		place-items: center;
		background-image: url('../../static/shrimp.mobile.webp');
		/* background-image: url('shrimp.mobile.webp'); */
		background-size: cover;
		background-repeat: no-repeat;
	}
	.kasse_2 {
		display: grid;
		place-items: center;
		height: 100%;
		background-image: url('../../static/bundle_4.webp');
		/* background-image: url('bundle_4.webp'); */
		background-size: cover;
		background-repeat: no-repeat;
	}
	.kasse_3 {
		display: grid;
		place-items: center;
		height: 100%;
		background-image: url('../../static/event.webp');
		/* background-image: url('event.webp'); */
		background-size: cover;
		background-repeat: no-repeat;
	}

	.container {
		display: grid;
		place-items: center;
		gap: 2rem;
		padding-block: 4rem;
	}

	.container img {
		width: 4rem;
	}

	.menu p,
	h2 {
		max-width: 600px;
		color: white;
	}

	.menu img {
		width: 9rem;
	}

	@media (min-width: 600px) {
		.container img {
			width: 7rem;
		}

		.mobile_button {
			display: none;
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
		.desktop_button {
			display: none;
		}
		.kasse_2 {
			background-image: url('../../static/bundle_3.mobile.webp');
			/* background-image: url('bundle_3.mobile.webp'); */
		}

		.kasse_3 {
			background-image: url('../../static/event.mobile.webp');
			/* background-image: url('event.mobile.webp'); */
		}

		.top {
			padding-bottom: 4rem;
		}

		.menu {
			display: grid;
			place-items: center;
			gap: 30px;
			padding-block: 4rem;
			text-align: center;
			padding: 1rem;
			background-image: url('../../static/red_bg.mobile.svg');
			/* background-image: url('red_bg.mobile.svg'); */
			background-size: cover;
			background-repeat: no-repeat;
		}
	}
</style>
