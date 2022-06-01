<script>
</script>

<svelte:head>
	<title>Aftenmenu</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<main>
	<section class="grid gap-4 menu">
		<br />
		<h1>Aftenmenu</h1>
		<br />
		<h2>7-retters menu</h2>
		<h3>DKK 375 ,-</h3>
		<p>
			Læn dig tilbage og nyd de 7 retter, der kommer over 4 serveringer. <br /> Vores kokke sætter
			menuen sammen til jer på dagen. <br /> Menuen kan i øvrigt også fås som 100% vegetarisk.
		</p>
		<br />

		<h3>TILKØB ØLMENU for DKK 275,-</h3>
		<p>Du får både Ølcocktail og 3 øl, nøje udvalgt til at matche menuen.</p>
		<br />
		<h2>A LA CARTE</h2>
		<h3>Snacks</h3>
		<p>
			Oliven mix <br /> <span> DKK 45,- </span><br /><br /> Mandler <br /> <span>DKK 40,-</span>
			<br /><br />
			Padrones <br /> <span> DKK 55,- </span><br /><br />
			Østers petit la gamen M/hyldeblomst IPA & skalotteløg <br /> <span>DKK 25,- pr stk.</span><br
			/><br />
			Coppa fra Folkets Madhus med padrón peberfrugter <br /> <span> 105 kr.</span>
		</p>
		<br />
		<h2>Små retter til deling... <br /> eller til dig selv</h2>
		<p>
			Grillet courgette <br />
			M/ mahmara, knuste mandler, mint & zaatar <br /> <span>DKK 95,-</span>
		</p>
		<p>
			Pulpo <br />

			M/ tyrkisk tomat & peber relish <br /> <span>DKK 115,-</span>
		</p>
		<p>
			Grønne asparges <br />
			M/ coppa, æggecream og røget vesterhavs ost <br /> <span>DKK 125,-</span>
		</p>
		<br />
		<h2>Hovedretter</h2>
		<p>
			Kokkens udvalgte kød <br />
			M/shallots, tomatoes, peas & ndjua, served w/ porter sauce <br /><span>DKK 255,-</span>
		</p>
		<p>
			Risotto <br />
			M/ Danske økologiske ærter & ramsløg <br /> <span>DKK 185,-</span>
		</p>
		<p>
			Friteret torsk <br />
			M/ mojo rojo sauce og krydret ærter <br /><span>DKK 185,-</span>
		</p>
		<p>Tilkøb nye kartofler<br /> Urter & smør <br /><span>DKK35,-</span>.</p>
		<br />
		<h2>Desserter</h2>
		<p>
			Lille mandelkage <br />
			M/ flødeskum <br /><span>DKK 45,-</span>
		</p>
		<p>
			Cheesecake <br />
			M/ hvid chokolade <br /><span> DKK 95,-</span>
		</p>
		<p>
			Marengs <br />
			M/ lemon curd, fløde, danske jordbær & vaniljeis <br /><span>DKK 105,-</span>
		</p>
	</section>
</main>

<style>
	main {
		background-image: url('../../static/shop_bg.svg');
		background-size: auto;
		background-position: top;
	}

	.menu {
		padding-inline: 1rem;
		display: grid;
		place-items: center;
		text-align: center;
		max-width: 600px;
		margin: 0 auto;
	}

	span {
		font-style: italic;
	}

	h2 {
		color: black;
	}
</style>
