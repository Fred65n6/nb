<script>
</script>

<label class="form-control">
	<input type="checkbox" name="checkbox" /><slot />
</label>

<style>
	input[type='checkbox'] {
		/* Add if not using autoprefixer */
		-webkit-appearance: none;
		appearance: none;
		/* For iOS < 15 to remove gradient background */

		/* Not removed via appearance */
		margin: 0;
	}

	.form-control {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	input[type='checkbox'] {
		appearance: none;

		margin: 0;
		font: inherit;
		color: currentColor;
		width: 1.15em;
		height: 1.15em;
		border: 0.15em solid currentColor;
		border-radius: 0.15em;
		transform: translateY(-0.075em);
	}

	input[type='checkbox']::before {
		content: '';
		width: 0.65em;
		height: 0.65em;
		transform: scale(0);
		transition: 120ms transform ease-in-out;
		box-shadow: inset 1em 1em var(--form-control-color);
	}

	input[type='checkbox'] {
		/* ...existing styles */
		display: grid;
		place-content: center;
	}

	input[type='checkbox']::before {
		content: '';
		width: 0.65em;
		height: 0.65em;
		transform: scale(0);
		transition: 120ms transform ease-in-out;
		box-shadow: inset 1em 1em var(--form-control-color);
	}

	input[type='checkbox']:checked::before {
		transform: scale(1);
	}

	input[type='checkbox']::before {
		/* ...existing styles */

		/* Windows High Contrast Mode */
		background-color: CanvasText;
	}

	input[type='checkbox']::before {
		/* ...existing styles */

		transform-origin: bottom left;
		clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
	}
</style>
