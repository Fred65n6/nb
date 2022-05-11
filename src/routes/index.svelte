<script context="module">
	import Button from './Button.svelte';
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<Button link="/om_os">HEJ</Button>
	<a href="https://www.google.dk/" target="blank">GOOGLE</a>
</section>

<style>
</style>
