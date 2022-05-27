<script context="module">
	import Button from './Button_hero.svelte';
	import Button_mobile from './Button_mobile.svelte';
	import Button_white from './Button_white.svelte';
	// @ts-ignore
	import Event_card from './Event_card.svelte';
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Book bord</title>
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
			<div class="dropbtn flex">
				FILTRER EVENTS<svg
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					aria-hidden="true"
					role="img"
					class="iconify iconify--material-symbols mt-1"
					width="20"
					height="20"
					preserveAspectRatio="xMidYMid meet"
					viewBox="0 0 24 24"
					><path fill="black" d="m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4Z" /></svg
				>
			</div>
			<div class="dropdown-content flex">
				<fieldset class="grid">
					<div>
						<input type="radio" id="byvandring" name="drone" value="byvandring" checked />
						<label for="byvandring">BYVANDRING</label>
					</div>

					<div>
						<input type="radio" id="olsmagning" name="drone" value="olsmagning" />
						<label for="olsmagning">ØLSMAGNING</label>
					</div>

					<div>
						<input type="radio" id="djevent" name="drone" value="djevent" />
						<label for="djevent">DJ EVENT</label>
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
	<div class="smag">
		<Event_card
			dato="4/5/2022"
			img="smag_blomst.svg"
			titel="ølsmagning"
			sub_titel="En smagsoplevelse i øllets verden"
			tid="17:00-19:00"
			sted="Ryesgade 3, 2200 KBH NV"
		/>
	</div>
	<div class="by">
		<Event_card
			dato="6/5/2022"
			img="by_blomst.svg"
			titel="Øl-byvandring"
			sub_titel="Oplev københavn igennem øllets verden"
			tid="17:00-19:00"
			sted="Ryesgade 3, 2200 KBH NV"
		/>
	</div>
	<div class="dj">
		<Event_card
			dato="7/5/2022"
			img="dj_blomst.svg"
			titel="DJ I BRYGHUSET"
			sub_titel="Bliv forført af lækker øl til lyden af lækre toner"
			tid="17:00-19:00"
			sted="Ryesgade 3, 2200 KBH NV"
		/>
	</div>
	<div class="by">
		<Event_card
			dato="10/5/2022"
			img="by_blomst.svg"
			titel="Øl-byvandring"
			sub_titel="Oplev københavn igennem øllets verden"
			tid="17:00-19:00"
			sted="Ryesgade 3, 2200 KBH NV"
		/>
	</div>
	<div class="smag">
		<Event_card
			dato="11/5/2022"
			img="smag_blomst.svg"
			titel="ølsmagning"
			sub_titel="En smagsoplevelse i øllets verden"
			tid="17:00-19:00"
			sted="Ryesgade 3, 2200 KBH NV"
		/>
	</div>

	<div class="dj">
		<Event_card
			dato="12/5/2022"
			img="dj_blomst.svg"
			titel="DJ I BRYGHUSET"
			sub_titel="Bliv forført af lækker øl til lyden af lækre toner"
			tid="17:00-19:00"
			sted="Ryesgade 3, 2200 KBH NV"
		/>
	</div>
	<div class="by">
		<Event_card
			dato="16/5/2022"
			img="by_blomst.svg"
			titel="Øl-byvandring"
			sub_titel="Oplev københavn igennem øllets verden"
			tid="17:00-19:00"
			sted="Ryesgade 3, 2200 KBH NV"
		/>
	</div>
	<div class="dj">
		<Event_card
			dato="17/5/2022"
			img="dj_blomst.svg"
			titel="DJ I BRYGHUSET"
			sub_titel="Bliv forført af lækker øl til lyden af lækre toner"
			tid="17:00-19:00"
			sted="Ryesgade 3, 2200 KBH NV"
		/>
	</div>
	<div class="by">
		<Event_card
			dato="18/5/2022"
			img="by_blomst.svg"
			titel="Øl-byvandring"
			sub_titel="Oplev københavn igennem øllets verden"
			tid="17:00-19:00"
			sted="Ryesgade 3, 2200 KBH NV"
		/>
	</div>

	<div class="dj">
		<Event_card
			dato="23/5/2022"
			img="dj_blomst.svg"
			titel="DJ I BRYGHUSET"
			sub_titel="Bliv forført af lækker øl til lyden af lækre toner"
			tid="17:00-19:00"
			sted="Ryesgade 3, 2200 KBH NV"
		/>
	</div>
	<div class="smag">
		<Event_card
			dato="24/5/2022"
			img="smag_blomst.svg"
			titel="ølsmagning"
			sub_titel="En smagsoplevelse i øllets verden"
			tid="17:00-19:00"
			sted="Ryesgade 3, 2200 KBH NV"
		/>
	</div>
	<div class="dj">
		<Event_card
			dato="27/5/2022"
			img="dj_blomst.svg"
			titel="DJ I BRYGHUSET"
			sub_titel="Bliv forført af lækker øl til lyden af lækre toner"
			tid="17:00-19:00"
			sted="Ryesgade 3, 2200 KBH NV"
		/>
	</div>
</section>

<style>
	.heading {
		padding-top: 3rem;
		text-align: center;
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
		max-width: 600px;
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

	input {
		margin: 1rem;
	}

	.dropbtn {
		background-color: white;
		padding: 0.5rem;
		border: black 2px;
		border-style: solid;
	}

	.dropdown-content {
		text-align: left;
		display: none;
		position: absolute;
		background-color: rgb(255, 255, 255);
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

		.filter {
			display: flex;
			justify-content: space-between;
		}
	}

	@media (min-width: 600px) {
	}
</style>
