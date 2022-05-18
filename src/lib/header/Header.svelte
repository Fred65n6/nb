<script>
	import { page } from '$app/stores';
</script>

<header>
	<nav>
		<div class="desktop-menu">
			<ul>
				<div class="dropdown">
					<a href="/" class="dropbtn"
						><svg
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							aria-hidden="true"
							role="img"
							class="iconify iconify--material-symbols"
							width="20"
							height="20"
							preserveAspectRatio="xMidYMid meet"
							viewBox="0 0 24 24"
							><path
								fill="#444555"
								d="M7 22q-.825 0-1.412-.587Q5 20.825 5 20q0-.825.588-1.413Q6.175 18 7 18t1.412.587Q9 19.175 9 20q0 .825-.588 1.413Q7.825 22 7 22Zm10 0q-.825 0-1.412-.587Q15 20.825 15 20q0-.825.588-1.413Q16.175 18 17 18t1.413.587Q19 19.175 19 20q0 .825-.587 1.413Q17.825 22 17 22ZM3.625 17L6.6 11.6L3 4H1V2h3.25l.95 2h16.5l-4.975 9H8.1L7 15h12v2Z"
							/></svg
						>SHOP</a
					>
					<div class="dropdown-content">
						<a sveltekit:prefetch href="/">SHOP ØL</a>
						<a sveltekit:prefetch href="/">KØB GAVEKORT</a>
					</div>
				</div>

				<li class:active={$page.url.pathname === '/'}>
					<a sveltekit:prefetch href="/">BOOK BORD</a>
				</li>

				<li class:active={$page.url.pathname === '/'}>
					<a sveltekit:prefetch href="/">MENUKORT</a>
				</li>

				<div class="dropdown">
					<a href="/" class="dropbtn">VORES ØLUDVALG</a>
					<div class="dropdown-content">
						<a sveltekit:prefetch href="/">NØRREBRO BRYGHUS</a>
						<a sveltekit:prefetch href="/">BRAW</a>
						<a sveltekit:prefetch href="/">INFERNØL</a>
						<a sveltekit:prefetch href="/">ØL HEMMELIGHEDER</a>
					</div>
				</div>

				<!-- <li class:active={$page.url.pathname === '/'}> -->

				<div class="">
					<li class:active={$page.url.pathname === '/'}>
						<a sveltekit:prefetch href="/"><img src="nb_logo.svg" alt="" /></a>
					</li>
				</div>

				<div class="dropdown">
					<a href="/" class="dropbtn">EVENTS & SELSKABER</a>
					<div class="dropdown-content">
						<a sveltekit:prefetch href="/">EVENTKALENDER</a>
						<a sveltekit:prefetch href="/">SELSKABER & MØDELOKALER</a>
					</div>
				</div>

				<div class="dropdown">
					<a href="/" class="dropbtn">OM BRYGHUSET</a>
					<div class="dropdown-content">
						<a sveltekit:prefetch href="/">VORES HISTORIE</a>
						<a sveltekit:prefetch href="/">BÆREDYGTIGHED</a>
						<a sveltekit:prefetch href="/">OM BRAW BAR</a>
						<a sveltekit:prefetch href="/">ØLFORUM</a>
						<a sveltekit:prefetch href="/">NYHEDER FRA BRYGHUSET</a>
					</div>
				</div>

				<!-- </li> -->

				<!-- <li class:active={$page.url.pathname === '/'}> -->

				<div class="dropdown">
					<a href="/" class="dropbtn">FOR VIRKSOMHEDER</a>
					<div class="dropdown-content">
						<a sveltekit:prefetch href="/">FIRMAEVENTS</a>
						<a sveltekit:prefetch href="/">BOOK ET MØDELOKALE</a>
						<a sveltekit:prefetch href="/">BLIV FORHANDLER</a>
					</div>
				</div>

				<!-- </li> -->
			</ul>
		</div>

		<!-----------HAMBURGER MENU----------->

		<div class="hamburger-menu">
			<a sveltekit:prefetch href="/"><img src="nb_logo.svg" alt="" /></a>
			<input id="menu__toggle" type="checkbox" />
			<label class="menu__btn" for="menu__toggle">
				<span />
			</label>

			<ul class="menu__box">
				<li>
					<div class="dropdown">
						<div class="dropbtn">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								xmlns:xlink="http://www.w3.org/1999/xlink"
								aria-hidden="true"
								role="img"
								class="iconify iconify--material-symbols"
								width="20"
								height="20"
								preserveAspectRatio="xMidYMid meet"
								viewBox="0 0 24 24"
								><path
									fill="#444555"
									d="M7 22q-.825 0-1.412-.587Q5 20.825 5 20q0-.825.588-1.413Q6.175 18 7 18t1.412.587Q9 19.175 9 20q0 .825-.588 1.413Q7.825 22 7 22Zm10 0q-.825 0-1.412-.587Q15 20.825 15 20q0-.825.588-1.413Q16.175 18 17 18t1.413.587Q19 19.175 19 20q0 .825-.587 1.413Q17.825 22 17 22ZM3.625 17L6.6 11.6L3 4H1V2h3.25l.95 2h16.5l-4.975 9H8.1L7 15h12v2Z"
								/></svg
							>SHOP
						</div>
						<div class="dropdown-content">
							<a sveltekit:prefetch href="/">SHOP ØL</a>
							<a sveltekit:prefetch href="/">KØB GAVEKORT</a>
						</div>
					</div>
				</li>

				<li class:active={$page.url.pathname === '/'}>
					<a sveltekit:prefetch href="/">BOOK BORD</a>
				</li>

				<li class:active={$page.url.pathname === '/'}>
					<a sveltekit:prefetch href="/">MENUKORT</a>
				</li>

				<li>
					<div class="dropdown">
						<div class="dropbtn">VORES ØLUDVALG</div>
						<div class="dropdown-content">
							<a sveltekit:prefetch href="/">NØRREBRO BRYGHUS</a>
							<a sveltekit:prefetch href="/">BRAW</a>
							<a sveltekit:prefetch href="/">INFERNØL</a>
							<a sveltekit:prefetch href="/">ØL HEMMELIGHEDER</a>
						</div>
					</div>
				</li>

				<li>
					<div class="dropdown">
						<div class="dropbtn">EVENTS & SELSKABER</div>
						<div class="dropdown-content">
							<a sveltekit:prefetch href="/">EVENTKALENDER</a>
							<a sveltekit:prefetch href="/">SELSKABER & MØDELOKALER</a>
						</div>
					</div>
				</li>

				<li>
					<div class="dropdown">
						<div class="dropbtn">OM BRYGHUSET</div>
						<div class="dropdown-content">
							<a sveltekit:prefetch href="/">VORES HISTORIE</a>
							<a sveltekit:prefetch href="/">BÆREDYGTIGHED</a>
							<a sveltekit:prefetch href="/">OM BRAW BAR</a>
							<a sveltekit:prefetch href="/">ØLFORUM</a>
							<a sveltekit:prefetch href="/">NYHEDER FRA BRYGHUSET</a>
						</div>
					</div>
				</li>

				<li>
					<div class="dropdown">
						<div class="dropbtn">FOR VIRKSOMHEDER</div>
						<div class="dropdown-content">
							<a sveltekit:prefetch href="/">FIRMAEVENTS</a>
							<a sveltekit:prefetch href="/">BOOK ET MØDELOKALE</a>
							<a sveltekit:prefetch href="/">BLIV FORHANDLER</a>
						</div>
					</div>
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
	}

	ul {
		padding-block: 4rem;
		position: relative;
		margin-right: 0.3rem;
		height: 3em;
		display: flex;
		justify-content: space-around;
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
		font-size: 0.7rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	.dropbtn {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 2em;
		color: black;
		font-weight: 400;
		font-size: 0.7rem;
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
		top: 20px;
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

	.hamburger-menu img {
		width: 4rem;
		padding-top: 0.5rem;
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
		padding: 125px 0;

		list-style: none;

		background-color: white;
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
		background-color: rgb(255, 255, 255);
		width: auto;
		padding-inline: 0.5rem;
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
