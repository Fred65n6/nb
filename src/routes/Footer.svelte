<script>
	import Button_black from './Button_blacks.svelte';
	function handleClick() {
		alert(
			'Tak fordi du tilmeldte dig vores nyhedsbrev! Vi glæder os til at give dig en masse fede tilbud fra vores bryghus.'
		);
	}
</script>

<footer>
	<div class=" md:grid md:place-items-center">
		<div class="anmeldelse  md:flex gap-4 pb-12">
			<img class="pb-8 md:pb-2" src="5_stars.svg" alt="4,5 stjerner" />
			<h3>73 Anmeldelser på</h3>
			<img class="pb-2" src="trustpilot_logo.webp" alt="Trustpilot logo" />
		</div>
	</div>
	<div class="top md:grid md:place-items-center pb-8">
		<h3 class="md:text-center text-left">Tilmeld dig vores nyhedsbrev</h3>
		<p class="md:text-center text-left">Og få eklusive tilbud direkte ind på din mail</p>
		<div class="md:flex grid gap-4 pt-4">
			<input
				class="h-[45px] w-[220px] border-2 p-2"
				placeholder="Eks. lars.larsen@gmail.com"
				type="Email"
			/>

			<button on:click={handleClick}>
				<Button_black>TILMELD NU</Button_black>
			</button>
		</div>
	</div>
	<div class="bottom">
		<div class="mt-12">
			<h3>Kontakt os</h3>
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
				<span class="font-semibold"> Man:</span> <br />
				Kun åbent i BRAW baren 15-23 <br /><br />
				<span class="font-semibold"> Tirs-ons:</span> <br />
				12.00-23.00 <br /><br />
				<span class="font-semibold"> Tors:</span> <br />
				12.00-00.00 <br /><br />
				<span class="font-semibold"> Fre-lør:</span> <br />
				12.00-00.00 <br /><br />
				<span class="font-semibold"> Søn:</span> <br />
				Lukket
			</p>
		</div>
		<div class="mt-12">
			<h3>Følg os her</h3>
			<ul class="grid gap-4">
				<li>
					<div class="flex gap-4">
						<a aria-label="Facebook logo" href="/"
							><svg
								xmlns="http://www.w3.org/2000/svg"
								xmlns:xlink="http://www.w3.org/1999/xlink"
								aria-hidden="true"
								role="img"
								class="iconify iconify--ic"
								width="32"
								height="32"
								preserveAspectRatio="xMidYMid meet"
								viewBox="0 0 24 24"
								><path
									fill="black"
									d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"
								/></svg
							></a
						>

						<a aria-label="instagram logo" href="/"
							><svg
								xmlns="http://www.w3.org/2000/svg"
								xmlns:xlink="http://www.w3.org/1999/xlink"
								aria-hidden="true"
								role="img"
								class="iconify iconify--mdi"
								width="32"
								height="32"
								preserveAspectRatio="xMidYMid meet"
								viewBox="0 0 24 24"
								><path
									fill="black"
									d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"
								/></svg
							></a
						>
					</div>
				</li>
				<br />
				<h3>Politikker</h3>
				<li><a class="underline" href="/">Privatlivspolitik</a></li>
				<li><a class="underline" href="/">Cookiepolitik</a></li>
				<li><a class="underline" href="/">Handelspolitik</a></li>
			</ul>
			<div aria-label="Nørrebro bryghus logo" class="pt-12">
				<img class="w-28" src="nb_logo_fill.svg" alt="Nørrebro bryghus logo" />
			</div>
		</div>
	</div>
</footer>

<style>
	footer {
		margin-top: 2rem;
		padding-bottom: 10rem;
		padding-inline: 3rem;
		background-image: url('../../static/footer_bg.mobile.webp');
		/* background-image: url('footer_bg.mobile.webp'); */
		background-size: cover;
		background-repeat: no-repeat;
	}

	.anmeldelse {
		align-items: center;
	}

	.anmeldelse img {
		width: 150px;
	}

	.bottom {
		/* padding-top: 6rem; */
		display: grid;
		align-items: flex-start;
	}

	@media (min-width: 600px) {
		.bottom {
			grid-template-columns: 1fr 1fr 1fr;
			place-items: center;
			align-items: flex-start;
		}
		/*  */
		footer {
			background-image: url('../../static/footer_bg.webp');
			/* background-image: url('footer_bg.webp'); */
			background-size: 100%;
			padding-inline: 7rem;
			padding-top: 9rem;
			padding-inline: 7rem;
		}
	}
</style>
