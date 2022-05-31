<script>
	let current = '';
	import Button_white from './Button_white.svelte';
</script>

<div class={current === 'cookie' ? 'selected' : ''} on:click={() => (current = 'cookie')}>
	<div class="fixed w-full grid bottom-0  right-0 z-50 cookie">
		<div class="relative p-4 m-4 bg-black/80 ">
			<div class="md:flex grid justify-between items-center ">
				<div class="w-full md:w-auto mb-4 lg:mb-0 mx-8">
					<h3 class="mb-2 text-xl font-bold font-heading text-white">Vi bruger cookies</h3>
					<p class="max-w-xs text-gray-200 leading-loose text-sm">
						Vi bruger cookies for at forbedre brugeroplevelsen på vores site.
					</p>
				</div>
				<div class="w-full md:w-1/3 md:px-4 flex place-center pr-16">
					<a
						class="inline-flex ml-auto items-center px-8 md:py-4 md:mr-2 text-lg text-white hover:text-gray-100 font-light underline"
						href="/"
					>
						<span>AFSLÅ</span>
					</a>
					<button
						class={current === 'cookie' ? 'selected' : ''}
						on:click={() => (current = 'cookie')}
					>
						<Button_white>ACCEPTER</Button_white></button
					>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	button {
		display: block;
	}

	.selected {
		display: none;
	}

	@media (max-width: 400px) {
		.cookie {
			max-width: 350px;
		}
	}
</style>
