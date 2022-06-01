<script context="module">
	import Button from './Button_hero.svelte';
	import Button_mobile from './Button_mobile.svelte';
	import Button_white from './Button_white.svelte';
	import Event_card from './Event_cards.svelte';
	import Modal_smag, { getModalSmag } from './Modal_smag.svelte';
	import Modal_dj, { getModalDj } from './Modal_dj.svelte';
	import Modal_by, { getModalBy } from './Modal_byen.svelte';
	import { page } from '$app/stores';
	import Checkbox from './Checkbox.svelte';
	import Header from '$lib/header/Header.svelte';
</script>

<Header />

<svelte:head>
	<title>events</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="heading">
	<h1>Det sker i bryghuset</h1>
	<p>
		Følg med i aktiviteterne på Nørrebro Bryghus i vores eventkalender herunder. Vores hus byder på
		mange forskellige arrangementer, og vi glæder os til at se dig i vores ølslaraffenland i hjertet
		af Nørrebro.
	</p>
</section>

<section class="filter">
	<div class="">
		<div class="dropdown">
			<div class="dropbtn flex ">FILTRER ▼</div>
			<div class="dropdown-content flex">
				<fieldset class="grid p-4 gap-4 ">
					<div class="flex kasse">
						<Checkbox>
							ØLSMAGNING <svg
								width="20"
								height="20"
								viewBox="0 0 6 6"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M5 0H0V5H5V0Z" fill="#EBD37F" />
							</svg></Checkbox
						>
					</div>

					<div class="flex kasse">
						<Checkbox>
							BYVANDRING <svg
								width="20"
								height="20"
								viewBox="0 0 6 6"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M5 0H0V5H5V0Z" fill="#ABCCD8" />
							</svg>
						</Checkbox>
					</div>

					<div class="flex kasse">
						<Checkbox
							>DJ EVENT
							<svg
								width="20"
								height="20"
								viewBox="0 0 6 6"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M5 0H0V5H5V0Z" fill="#6E0B20" />
							</svg></Checkbox
						>
					</div>
				</fieldset>
			</div>
		</div>
	</div>
	<div class="btn-group">
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
		<button class="btn">MAJ, 2022</button>
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

<section class="kalender">
	<button on:click={() => getModalSmag().open()}>
		<div class="event smag" data-name="smag">
			<Event_card
				dato="4/5/2022"
				img="smag_blomst.svg"
				name="ølsmagnings blomst grafik"
				titel="ølsmagning"
				sub_titel="En smagsoplevelse i øllets verden"
				tid="17:00-19:00"
				sted="Ryesgade 3, 2200 KBH NV"
			/>
		</div>
	</button>

	<button on:click={() => getModalBy().open()}>
		<div class="event by" data-name="by">
			<Event_card
				dato="6/5/2022"
				img="by_blomst.svg"
				name="byvandring blomst grafik"
				titel="Øl-byvandring"
				sub_titel="Oplev københavn igennem øllets verden"
				tid="17:00-19:00"
				sted="Ryesgade 3, 2200 KBH NV"
			/>
		</div>
	</button>

	<button on:click={() => getModalDj().open()}>
		<div class="event dj" data-name="dj">
			<Event_card
				dato="7/5/2022"
				img="dj_blomst.svg"
				name="DJ event blomst grafik"
				titel="DJ I BRYGHUSET"
				sub_titel="Bliv forført af lækker øl til lyden af lækre toner"
				tid="17:00-19:00"
				sted="Ryesgade 3, 2200 KBH NV"
			/>
		</div>
	</button>

	<button on:click={() => getModalBy().open()}>
		<div class="event by">
			<Event_card
				dato="10/5/2022"
				img="by_blomst.svg"
				name="byvandring blomst grafik"
				titel="Øl-byvandring"
				sub_titel="Oplev københavn igennem øllets verden"
				tid="17:00-19:00"
				sted="Ryesgade 3, 2200 KBH NV"
			/>
		</div>
	</button>

	<button on:click={() => getModalSmag().open()}>
		<div class="event smag">
			<Event_card
				dato="11/5/2022"
				img="smag_blomst.svg"
				name="ølsmagnings blomst grafik"
				titel="ølsmagning"
				sub_titel="En smagsoplevelse i øllets verden"
				tid="17:00-19:00"
				sted="Ryesgade 3, 2200 KBH NV"
			/>
		</div>
	</button>

	<button on:click={() => getModalDj().open()}>
		<div class="event dj">
			<Event_card
				dato="12/5/2022"
				img="dj_blomst.svg"
				name="DJ event blomst grafik"
				titel="DJ I BRYGHUSET"
				sub_titel="Bliv forført af lækker øl til lyden af lækre toner"
				tid="17:00-19:00"
				sted="Ryesgade 3, 2200 KBH NV"
			/>
		</div>
	</button>

	<button on:click={() => getModalBy().open()}>
		<div class="event by">
			<Event_card
				dato="16/5/2022"
				img="by_blomst.svg"
				name="byvandring blomst grafik"
				titel="Øl-byvandring"
				sub_titel="Oplev københavn igennem øllets verden"
				tid="17:00-19:00"
				sted="Ryesgade 3, 2200 KBH NV"
			/>
		</div>
	</button>

	<button on:click={() => getModalDj().open()}>
		<div class="event dj">
			<Event_card
				dato="17/5/2022"
				img="dj_blomst.svg"
				name="DJ event blomst grafik"
				titel="DJ I BRYGHUSET"
				sub_titel="Bliv forført af lækker øl til lyden af lækre toner"
				tid="17:00-19:00"
				sted="Ryesgade 3, 2200 KBH NV"
			/>
		</div>
	</button>

	<button on:click={() => getModalBy().open()}>
		<div class="event by">
			<Event_card
				dato="18/5/2022"
				img="by_blomst.svg"
				name="byvandring blomst grafik"
				titel="Øl-byvandring"
				sub_titel="Oplev københavn igennem øllets verden"
				tid="17:00-19:00"
				sted="Ryesgade 3, 2200 KBH NV"
			/>
		</div>
	</button>

	<button on:click={() => getModalDj().open()}>
		<div class="event dj">
			<Event_card
				dato="23/5/2022"
				img="dj_blomst.svg"
				name="DJ event blomst grafik"
				titel="DJ I BRYGHUSET"
				sub_titel="Bliv forført af lækker øl til lyden af lækre toner"
				tid="17:00-19:00"
				sted="Ryesgade 3, 2200 KBH NV"
			/>
		</div>
	</button>

	<button on:click={() => getModalSmag().open()}>
		<div class="event smag">
			<Event_card
				dato="24/5/2022"
				img="smag_blomst.svg"
				name="ølsmagnings blomst grafik"
				titel="ølsmagning"
				sub_titel="En smagsoplevelse i øllets verden"
				tid="17:00-19:00"
				sted="Ryesgade 3, 2200 KBH NV"
			/>
		</div>
	</button>

	<button on:click={() => getModalDj().open()}>
		<div class="event dj">
			<Event_card
				dato="27/5/2022"
				img="dj_blomst.svg"
				name="DJ event blomst grafik"
				titel="DJ I BRYGHUSET"
				sub_titel="Bliv forført af lækker øl til lyden af lækre toner"
				tid="17:00-19:00"
				sted="Ryesgade 3, 2200 KBH NV"
			/>
		</div>
	</button>
</section>

<Modal_by>
	<div class="bg_by" />
	<div class="mx-4">
		<h1>Øl-byvandring</h1>

		<p>
			Kan du godt lide urban kunst og gode øl?🍺 <br /> <br />

			Så skal du tage med os på by-vandring på Nørrebro. <br />
			Her vil Rikke Severinsen guide dig gennem en rundtur på Nørrebro, hvor der er fokus på alt fra
			gavlmalerier til streetart <br /> <br />

			Rikke står bag malebogen Nørrebros Gadekunst, som er en serie af ti bøger om Københavns
			gadekunst. Vi skal se på alt fra det helt urbane undergrund til anerkendte gavlværker.
			<br /><br />

			Der vil blive serveret en øl under selve byvandringen, med start fra bryghuset og
			efterfølgende vil vi give en øl mere nede i vores BRAW bar, hvor Rikke vil være klar til at
			svare på eventuelle spørgsmål om Nørrebros gadekunst.
		</p>
		<br />

		<p class="flex">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				aria-hidden="true"
				role="img"
				class="iconify iconify--mdi"
				width="25"
				height="25"
				preserveAspectRatio="xMidYMid meet"
				viewBox="0 0 24 24"
				><path
					fill="black"
					d="M12 20c4.4 0 8-3.6 8-8s-3.6-8-8-8s-8 3.6-8 8s3.6 8 8 8m0-18c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2m.5 11H11l-4-2.3l.8-1.3l3.3 1.9V7h1.5v6Z"
				/></svg
			>17:00 - 19:00
		</p>
		<br />
		<p class="flex text-center">
			<svg
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
					d="M12 14q.425 0 .713-.288Q13 13.425 13 13v-2h2q.425 0 .713-.288Q16 10.425 16 10t-.287-.713Q15.425 9 15 9h-2V7q0-.425-.287-.713Q12.425 6 12 6t-.712.287Q11 6.575 11 7v2H9q-.425 0-.712.287Q8 9.575 8 10t.288.712Q8.575 11 9 11h2v2q0 .425.288.712q.287.288.712.288Zm0 5.35q3.05-2.8 4.525-5.088Q18 11.975 18 10.2q0-2.725-1.738-4.463Q14.525 4 12 4Q9.475 4 7.737 5.737Q6 7.475 6 10.2q0 1.775 1.475 4.062Q8.95 16.55 12 19.35Zm0 2.275q-.2 0-.4-.075t-.35-.2Q7.6 18.125 5.8 15.363Q4 12.6 4 10.2q0-3.75 2.413-5.975Q8.825 2 12 2t5.587 2.225Q20 6.45 20 10.2q0 2.4-1.8 5.163q-1.8 2.762-5.45 5.987q-.15.125-.35.2q-.2.075-.4.075ZM12 10.2Z"
				/></svg
			>Ryesgade 3, 2200 KBH N
		</p>
		<br />
	</div>
</Modal_by>

<Modal_smag>
	<div class="bg_smag" />
	<div class="mx-4">
		<h1>ølSmagning</h1>

		<p>
			Vi åbner dørene til åben ølsmagning i vores bryggeri i Ryesgade, hvor I får mulighed for at
			smage vores klassiske Nørrebro Bryghus øl samt de mere eksperimenterende øl fra BRAW. I hører
			historien bag et af Danmarks ældste mikrobryggerier, lærer omkring bryggeprocessen mens I
			smager jer igennem 4 x 15cl økologisk øl. <br /> <br /> Pris: 175 kr. pr. person Der er plads
			til 30 deltagere, og der skal bestilles billet i forvejen. Er I mere end 8 personer, kan I
			kontakte os for en privat ølsmagning. <br /> <br />
		</p>

		<p class="flex">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				aria-hidden="true"
				role="img"
				class="iconify iconify--mdi"
				width="25"
				height="25"
				preserveAspectRatio="xMidYMid meet"
				viewBox="0 0 24 24"
				><path
					fill="black"
					d="M12 20c4.4 0 8-3.6 8-8s-3.6-8-8-8s-8 3.6-8 8s3.6 8 8 8m0-18c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2m.5 11H11l-4-2.3l.8-1.3l3.3 1.9V7h1.5v6Z"
				/></svg
			>17:00 - 19:00
		</p>
		<br />
		<p class="flex text-center">
			<svg
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
					d="M12 14q.425 0 .713-.288Q13 13.425 13 13v-2h2q.425 0 .713-.288Q16 10.425 16 10t-.287-.713Q15.425 9 15 9h-2V7q0-.425-.287-.713Q12.425 6 12 6t-.712.287Q11 6.575 11 7v2H9q-.425 0-.712.287Q8 9.575 8 10t.288.712Q8.575 11 9 11h2v2q0 .425.288.712q.287.288.712.288Zm0 5.35q3.05-2.8 4.525-5.088Q18 11.975 18 10.2q0-2.725-1.738-4.463Q14.525 4 12 4Q9.475 4 7.737 5.737Q6 7.475 6 10.2q0 1.775 1.475 4.062Q8.95 16.55 12 19.35Zm0 2.275q-.2 0-.4-.075t-.35-.2Q7.6 18.125 5.8 15.363Q4 12.6 4 10.2q0-3.75 2.413-5.975Q8.825 2 12 2t5.587 2.225Q20 6.45 20 10.2q0 2.4-1.8 5.163q-1.8 2.762-5.45 5.987q-.15.125-.35.2q-.2.075-.4.075ZM12 10.2Z"
				/></svg
			>Ryesgade 3, 2200 KBH N
		</p>
		<br />
	</div>
</Modal_smag>

<Modal_dj>
	<div class="bg_dj" />
	<div class="mx-4">
		<h1>DJ i bryghuset</h1>

		<p>
			Der er garanteret ekstra feststemning, når vores Hus DJ spinner funky plader og inviterer til
			ægte weekendsstemning.
			<br /> <br />
			Musikken kan høres i hele huset, og der er kolde fadøl og cocktails i baren, så puds danseskoene
			og kom forbi BRAW Baren.
			<br /><br />
		</p>

		<p class="flex">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				aria-hidden="true"
				role="img"
				class="iconify iconify--mdi"
				width="25"
				height="25"
				preserveAspectRatio="xMidYMid meet"
				viewBox="0 0 24 24"
				><path
					fill="black"
					d="M12 20c4.4 0 8-3.6 8-8s-3.6-8-8-8s-8 3.6-8 8s3.6 8 8 8m0-18c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2m.5 11H11l-4-2.3l.8-1.3l3.3 1.9V7h1.5v6Z"
				/></svg
			>17:00 - 19:00
		</p>
		<br />
		<p class="flex text-center">
			<svg
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
					d="M12 14q.425 0 .713-.288Q13 13.425 13 13v-2h2q.425 0 .713-.288Q16 10.425 16 10t-.287-.713Q15.425 9 15 9h-2V7q0-.425-.287-.713Q12.425 6 12 6t-.712.287Q11 6.575 11 7v2H9q-.425 0-.712.287Q8 9.575 8 10t.288.712Q8.575 11 9 11h2v2q0 .425.288.712q.287.288.712.288Zm0 5.35q3.05-2.8 4.525-5.088Q18 11.975 18 10.2q0-2.725-1.738-4.463Q14.525 4 12 4Q9.475 4 7.737 5.737Q6 7.475 6 10.2q0 1.775 1.475 4.062Q8.95 16.55 12 19.35Zm0 2.275q-.2 0-.4-.075t-.35-.2Q7.6 18.125 5.8 15.363Q4 12.6 4 10.2q0-3.75 2.413-5.975Q8.825 2 12 2t5.587 2.225Q20 6.45 20 10.2q0 2.4-1.8 5.163q-1.8 2.762-5.45 5.987q-.15.125-.35.2q-.2.075-.4.075ZM12 10.2Z"
				/></svg
			>Ryesgade 3, 2200 KBH N
		</p>
		<br />
	</div>
</Modal_dj>

<style>
	.heading {
		padding-top: 3rem;
		text-align: center;
	}

	.event:hover {
		transform: scale(1.05);
		transition: ease-in 0.3s;
	}

	.kasse {
		align-items: baseline;
	}

	.bg_smag {
		height: 150px;
		background-image: url('../../static/smag.webp');
		background-size: cover;
		background-position: center;
		margin-bottom: 2rem;
	}
	.bg_dj {
		height: 150px;
		background-image: url('../../static/dj.webp');
		background-size: cover;
		background-position: center;
		margin-bottom: 2rem;
	}
	.bg_by {
		height: 150px;
		background-image: url('../../static/by.webp');
		background-size: cover;
		background-position: top;
		margin-bottom: 2rem;
	}

	.dj {
		background-color: #6e0b20;
	}

	.smag {
		background-color: #ebd37f;
	}

	.by {
		background-color: #abccd8;
	}

	.kalender {
		margin: 0 auto;
		max-width: 1600px;
		place-items: center;
		display: grid;
		grid-template-columns: 1fr;
		gap: 20px;
	}

	@media (min-width: 1200px) {
		.kalender {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}

	.heading p {
		max-width: 560px;
	}

	.btn-group {
		display: flex;
		gap: 8px;
		align-items: center;
	}

	.dropdown {
		position: relative;
		display: inline-block;
	}

	.dropbtn {
		margin-left: 0.5rem;
		font-family: 'Josefin Sans', sans-serif;
		display: flex;
		border: black 2px;
		border-style: solid;
		width: 166px;
		height: 45px;
		cursor: pointer;
		display: inline-block;
		font-size: 1rem;
		line-height: 45px;
		text-align: center;
	}

	.dropdown-content {
		text-align: left;
		display: none;
		position: absolute;
		background-color: white;
		width: 200px;
		z-index: 1;
	}

	.dropdown:hover .dropdown-content {
		display: block;
	}

	.filter {
		display: grid;
		align-items: center;
		grid-template-columns: 1fr 1fr 1fr;
	}

	@media (max-width: 600px) {
		.dropdown-content {
			text-align: left;
		}

		.dropbtn {
			font-size: 1rem;
		}

		.filter {
			display: flex;
			justify-content: space-between;
		}
	}
</style>
