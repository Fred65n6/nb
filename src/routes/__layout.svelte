<script>
	import '../app.css';
	import Footer from './Footer.svelte';
	// import Header from '$lib/header/Header.svelte';
</script>

<main>
	<slot />
</main>

<Footer />

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
