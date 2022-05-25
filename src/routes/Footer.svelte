<script>
	import Button_black from './Button_black.svelte';
</script>

<footer>
	<div class="top grid place-items-center">
		<h3 class="text-center">Tilmeld dig vores nyhedsbrev</h3>
		<div class="md:flex grid pt-4">
			<input class="h-[45px] w-[166px] border-2" placeholder="E-mail" type="Email" />
			<Button_black link="/">TILMELD</Button_black>
		</div>
	</div>
	<div class="bottom">
		<div class="mt-12">
			<h3>Kontakt</h3>
			<p>
				Vi er altid klar til dit besøg og til at tage imod eventuelle spørgsmål <br /><br />
				Nørrebro Bryghus <br />
				Ryesgade 3 <br /> 2200 København N <br /><br /> Cvr. nr. 26882451 <br /><br /> Telefon:
				<br />
				3530 0530 <br /><br /> Mail vedr. restaurant og bar:
				<a href="mailto: info@noerrebrobryghus.dk">info@noerrebrobryghus.dk</a>
			</p>
		</div>
		<div class="mt-12">
			<h3>åbningstider</h3>
			<p>
				Åbningstider i restauranten: <br /><br />

				Mandag: Kun åbent i BRAW baren 15-23 <br /> <br />

				Tir-ons: <br />
				12.00-23.00 <br />
				Torsdag: <br />
				12.00-00.00 <br />
				Fre-lør: <br />
				12.00-00.00 <br />
				Søn: <br />
				Lukket
			</p>
		</div>
		<div class="mt-12">
			<h3>Links</h3>
			<ul class="">
				<li>
					<a href="/">Facebook</a>
					<br />
					<a href="/">Instagram</a>
				</li>
			</ul>
			<div class="pt-12">
				<img class="w-28" src="nb_logo_fill.svg" alt="logo" />
			</div>
		</div>
	</div>
</footer>

<style>
	footer {
		margin-inline: 1rem;
		padding-bottom: 10rem;
		padding-top: 2rem;
		margin-top: 7rem;
		background-image: url('../../static/footer_bg.mobile.webp');
		/* background-image: url('footer_bg.mobile.webp'); */
		background-size: cover;
		background-repeat: no-repeat;
	}

	.bottom {
		padding-top: 6rem;
		display: grid;
		align-items: flex-start;
	}

	@media (min-width: 600px) {
		.bottom {
			grid-template-columns: 1fr 1fr 1fr;
			place-items: center;
			align-items: flex-start;
		}

		footer {
			background-image: url('../../static/footer_bg.webp');
			background-image: url('footer_bg.webp');
			background-size: 100%;
			padding-inline: 8rem;
			padding-top: 9rem;
		}
	}
</style>
