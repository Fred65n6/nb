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
			<div class="dropbtn">FILTRER EVENTS ⯆</div>
			<div class="dropdown-content">
				<fieldset>
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

<style>
	.heading {
		padding-top: 3rem;
		text-align: center;
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
		padding-inline: 0.5rem;
		z-index: 1;
	}

	.dropdown:hover .dropdown-content {
		display: block;
	}

	.filter {
		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	@media (max-width: 600px) {
		.dropdown-content {
			text-align: center;
		}
	}

	@media (min-width: 600px) {
	}
</style>
