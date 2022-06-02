<script>
	// @ts-nocheck
	import Button_white from './Button_white.svelte';
	import InputField from './InputField.svelte';
	export let active_step;
	let formData = {};

	const handleSubmit = () => {
		console.log('Your form data => ', formData);
	};
</script>

<form class="form-container" on:submit={handleSubmit}>
	{#if active_step == '1'}
		<div class="">
			<p>Dato for besøg*</p>
			<input type="Dato" class="p-2 w-[210px]" placeholder="18/05/2022" />
		</div>
		<br />
		<div class="form-control">
			<div class="input-group">
				<p>Hvor mange er i?*</p>
				<select class="select select-bordered h-[45px] w-[210px] text-black/40 p-2">
					<option class="text-black/80" disabled selected>Antal gæster</option>
					<option>1</option>
					<option>2</option>
					<option>3</option>
					<option>4</option>
					<option>5</option>
					<option>6</option>
					<option>7</option>
					<option>8</option>
				</select>
			</div>
		</div>
	{:else if active_step == '2'}
		<div class="form-control">
			<div class="input-group">
				<p>Tidspunkt*</p>
				<select class="select select-bordered h-[45px] w-[166px] text-black/40 p-2">
					<option class="text-black/80 " disabled selected>14:00</option>
					<option>14:00</option>
					<option>16:30</option>
					<option>17:00</option>
					<option>17:30</option>
					<option>17:45</option>
					<option>18:45</option>
					<option>19:15</option>
					<option>21:00</option>
				</select>
			</div>
		</div>
	{:else if active_step == '3'}
		<div class="md:flex grid gap-4">
			<div class="">
				<p>Dit navn*</p>
				<input type="Dato" class="p-2 h-[45px] w-[166px]" placeholder="Anders Andersen" />
			</div>
			<div class="">
				<p>Din Email*</p>
				<input type="Dato" class="p-2 h-[45px] w-[166px]" placeholder="anders@gmail.com" />
			</div>
		</div>
		<div class="md:flex pt-4 md:pt-0 grid gap-4">
			<div class="">
				<p>Dit tlf. nummer*</p>
				<input type="Dato" class="p-2 h-[45px] w-[166px]" placeholder="23249020" />
			</div>
			<div class="">
				<p>Evt. Virksomhed</p>
				<input type="Dato" class="p-2 h-[45px] w-[166px]" placeholder="NB Bryghus" />
			</div>
		</div>
	{:else if active_step == '4'}
		<div class="text-center">
			<h3 class="text-white">
				Vi glæder os til at se dig! <br />
			</h3>
			<br />
			<p class="text-white">
				Tryk 'bekræft' for at færdiggøre din booking. <br /> Så sender vi en bekræftelses mail tilbage.
			</p>
			<br />
			<button class="btn submit"><Button_white>BEKRÆFT</Button_white></button>
		</div>
	{/if}
</form>

<style>
	.form-container {
		display: grid;
		place-items: center;
		width: 30rem;
		text-align: left;
	}

	@media (max-width: 600px) {
		.form-container {
			width: 100%;
		}
	}

	input {
		height: 3rem;
	}

	p {
		color: var(--default-white);
	}
</style>
