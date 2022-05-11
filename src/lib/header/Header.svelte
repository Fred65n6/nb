<script>
	import { page } from '$app/stores';
</script>

<header>
	<nav>
		<div class="desktop-menu">
			<ul>
				<li class:active={$page.url.pathname === '/'}>
					<a sveltekit:prefetch href="/">Hjem</a>
				</li>
				<!-- <li class:active={$page.url.pathname === '/'}> -->
				<div class="dropdown">
					<a href="/" class="dropbtn">Praktisk info ▼</a>
					<div class="dropdown-content">
						<a sveltekit:prefetch href="/">Venues</a>
						<a sveltekit:prefetch href="/">Billetter</a>
					</div>
				</div>
				<!-- </li> -->

				<li class:active={$page.url.pathname === '/'}>
					<a sveltekit:prefetch href="/"><img src="nb_logo.svg" alt="" /></a>
				</li>

				<!-- <li class:active={$page.url.pathname === '/'}> -->
				<div class="dropdown">
					<a href="/" class="dropbtn">Praktisk info ▼</a>
					<div class="dropdown-content">
						<a sveltekit:prefetch href="/">Venues</a>
						<a sveltekit:prefetch href="/">Billetter</a>
					</div>
				</div>
				<!-- </li> -->
				<li class:active={$page.url.pathname === '/om_os'}>
					<a sveltekit:prefetch href="/om_os">Om os</a>
				</li>
			</ul>
		</div>
		<div class="hamburger-menu">
			<input id="menu__toggle" type="checkbox" />
			<label class="menu__btn" for="menu__toggle">
				<span />
			</label>

			<ul class="menu__box">
				<li class:active={$page.url.pathname === '/'}><a sveltekit:prefetch href="/">Hjem</a></li>

				<li class:active={$page.url.pathname === '/'}>
					<a sveltekit:prefetch href="/">Programoversigt</a>
				</li>
				<li class:active={$page.url.pathname === '/'}>
					<a sveltekit:prefetch href="/">Venues</a>
				</li>
				<li class:active={$page.url.pathname === '/'}>
					<a sveltekit:prefetch href="/">Billetter</a>
				</li>
				<li class:active={$page.url.pathname === '/'}>
					<a sveltekit:prefetch href="/">Vær med</a>
				</li>
				<li class:active={$page.url.pathname === '/'}>
					<a sveltekit:prefetch href="/">Om os</a>
				</li>
			</ul>
		</div>
	</nav>
</header>

<style>
	nav {
		width: 100%;
		display: grid;
		place-items: center;

		padding-inline: 2rem;
		height: 6rem;
	}
	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background-size: contain;
	}

	ul img {
		width: 5rem;
	}

	.desktop-menu li {
		position: relative;
		height: 100%;
	}
	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 2em;
		color: black;
		font-weight: 400;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		text-decoration: underline;
	}

	.hamburger-menu li {
		padding: 1rem;
		color: black;
	}

	#menu__toggle {
		opacity: 0;
	}

	#menu__toggle:checked ~ .menu__btn > span {
		transform: rotate(45deg);
	}
	#menu__toggle:checked ~ .menu__btn > span::before {
		top: 0;
		transform: rotate(0);
	}
	#menu__toggle:checked ~ .menu__btn > span::after {
		top: 0;
		transform: rotate(90deg);
	}
	#menu__toggle:checked ~ .menu__box {
		visibility: visible;
		right: 0;
	}

	.menu__btn {
		display: flex;
		align-items: center;
		position: fixed;
		top: 10px;
		right: 20px;

		width: 26px;
		height: 26px;

		cursor: pointer;
		z-index: 100;
	}

	.menu__btn > span,
	.menu__btn > span::before,
	.menu__btn > span::after {
		display: block;
		position: absolute;

		width: 100%;
		height: 2.5px;
		border-radius: 12px;

		background-color: #1c1c1c;

		transition-duration: 0.25s;
	}
	.menu__btn > span::before {
		content: '';
		top: -8px;
	}
	.menu__btn > span::after {
		content: '';
		top: 8px;
	}

	.menu__box {
		display: flex;
		flex-direction: column;
		position: fixed;
		visibility: hidden;
		top: 0;
		right: -100%;
		z-index: 90;

		width: 100%;
		height: 100%;

		margin: 0;
		padding: 80px 0;

		list-style: none;

		background-color: #8072a8;
		box-shadow: 1px 0px 6px rgba(0, 0, 0, 0.2);

		transition-duration: 0.25s;
	}

	@media (max-width: 600px) {
		.desktop-menu {
			display: none;
		}

		a:hover {
			color: #b12222;
		}
	}

	@media (min-width: 600px) {
		.hamburger-menu {
			display: none;
		}
	}

	.dropdown {
		position: relative;
		display: inline-block;
	}

	.dropdown-content {
		text-align: center;
		display: none;
		position: absolute;
		background-color: white;
		min-width: 180px;
		box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
		z-index: 1;
	}

	.dropdown-content a {
		color: black;
		padding: 12px 16px;
		text-decoration: none;
		display: block;
	}

	.dropdown-content a:hover {
		text-decoration: underline;
	}

	.dropdown:hover .dropdown-content {
		display: block;
	}
</style>
