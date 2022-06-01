<script>
	let current = '';
	import Button_white from './Button_white.svelte';
</script>

<div class={current === 'cookie' ? 'selected' : ''} on:click={() => (current = 'cookie')}>
	<div class="fixed md:w-full grid bottom-0 z-50 cookie">
		<div class="relative p-8 mb-4 md:mr-8 mr-4 bg-black/80 ">
			<div class="md:flex md:justify-between md:items-center ">
				<div class="md:w-full w-auto mb-4 lg:mb-0 mx-8">
					<h3 class="mb-2 text-white">Vi bruger cookies</h3>
					<p class="max-w-xs text-gray-200">
						Vi bruger cookies for at forbedre brugeroplevelsen på vores site.
					</p>
				</div>
				<div class="w-full md:w-1/3 md:px-4 sm:flex grid gap-4 md:flex place-center ">
					<a
						class="inline-flex md:ml-auto items-center px-8 md:py-4 md:mr-2  text-white hover:text-gray-100 font-light underline"
						href="/"
					>
						<span>REDIGER</span>
					</a>
					<div
						class="inline-flex md:ml-auto items-center px-8 md:py-4 md:mr-2  text-white hover:text-gray-100 font-light underline"
					>
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
</div>

<style>
	button {
		display: block;
	}

	.selected {
		display: none;
	}
</style>
