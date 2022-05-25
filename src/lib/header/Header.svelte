<script>
	import { page } from '$app/stores';
</script>

<header>
	<div class="ikoner">
		<a sveltekit:prefetch href="/"
			><svg
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				aria-hidden="true"
				role="img"
				class="iconify iconify--ph"
				width="20"
				height="20"
				preserveAspectRatio="xMidYMid meet"
				viewBox="0 0 256 256"
				><path
					fill="black"
					d="M94 216a14 14 0 1 1-14-14a14 14 0 0 1 14 14Zm90-14a14 14 0 1 0 14 14a14 14 0 0 0-14-14Zm43.5-128.4L201.1 166a22.2 22.2 0 0 1-21.2 16H84.1a22.2 22.2 0 0 1-21.2-16L36.5 73.8v-.3l-9.8-34a1.9 1.9 0 0 0-1.9-1.5H8a6 6 0 0 1 0-12h16.8a14.1 14.1 0 0 1 13.5 10.2L46.8 66h174.9a6 6 0 0 1 4.8 2.4a6 6 0 0 1 1 5.2ZM213.8 78H50.2l24.3 84.7a10 10 0 0 0 9.6 7.3h95.8a10 10 0 0 0 9.6-7.3Z"
				/></svg
			></a
		>
		<a
			sveltekit:prefetch
			href="/"
			class="text-decoration-underline: no-underline  flex  gap-2  text-[0.7rem]"
			><svg
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				aria-hidden="true"
				role="img"
				class="iconify iconify--ph"
				width="20"
				height="20"
				preserveAspectRatio="xMidYMid meet"
				viewBox="0 0 256 256"
				><path
					fill="black"
					d="M231.9 212a120.7 120.7 0 0 0-67.1-54.2a72 72 0 1 0-73.6 0A120.7 120.7 0 0 0 24.1 212a8 8 0 1 0 13.8 8a104.1 104.1 0 0 1 180.2 0a8 8 0 1 0 13.8-8ZM72 96a56 56 0 1 1 56 56a56 56 0 0 1-56-56Z"
				/></svg
			></a
		>
	</div>
	<nav>
		<div class="desktop-menu">
			<ul>
				<div class="">
					<div class="">
						<li class:active={$page.url.pathname === '/'}>
							<a sveltekit:prefetch href="/"><img src="nb_logo.svg" alt="" /></a>
						</li>
					</div>
				</div>

				<div class="">
					<div class="dropdown">
						<a href="/" class="dropbtn">SHOPPEN ⯆</a>
						<div class="dropdown-content">
							<a sveltekit:prefetch href="/">ØL-SHOP</a>
							<a sveltekit:prefetch href="/">GAVEKORT</a>
						</div>
					</div>

					<div class="dropdown">
						<div class:active={$page.url.pathname === '/'}>
							<a sveltekit:prefetch href="/">MENUKORT</a>
						</div>
					</div>

					<div class="dropdown">
						<div class:active={$page.url.pathname === '/'}>
							<a sveltekit:prefetch href="/">BOOK BORD</a>
						</div>
					</div>

					<div class="dropdown">
						<a href="/" class="dropbtn">EVENTS & SELSKABER ⯆</a>
						<div class="dropdown-content">
							<a sveltekit:prefetch href="/">EVENTKALENDER</a>
							<a sveltekit:prefetch href="/">SELSKABER & MØDELOKALER</a>
						</div>
					</div>

					<div class="dropdown">
						<a href="/" class="dropbtn">VORES ØLUDVALG ⯆</a>
						<div class="dropdown-content">
							<a sveltekit:prefetch href="/">NØRREBRO BRYGHUS</a>
							<a sveltekit:prefetch href="/">BRAW</a>
							<a sveltekit:prefetch href="/">INFERNØL</a>
							<a sveltekit:prefetch href="/">ØL HEMMELIGHEDER</a>
						</div>
					</div>

					<div class="dropdown">
						<a href="/" class="dropbtn">OM BRYGHUSET ⯆</a>
						<div class="dropdown-content">
							<a sveltekit:prefetch href="/">VORES HISTORIE</a>
							<a sveltekit:prefetch href="/">BÆREDYGTIGHED</a>
							<a sveltekit:prefetch href="/">OM BRAW BAR</a>
							<a sveltekit:prefetch href="/">ØLFORUM</a>
							<a sveltekit:prefetch href="/">NYHEDER FRA BRYGHUSET</a>
						</div>
					</div>

					<div class="dropdown">
						<a href="/" class="dropbtn">FOR VIRKSOMHEDER ⯆</a>
						<div class="dropdown-content">
							<a sveltekit:prefetch href="/">FIRMAEVENTS</a>
							<a sveltekit:prefetch href="/">BOOK ET MØDELOKALE</a>
							<a sveltekit:prefetch href="/">BLIV FORHANDLER</a>
						</div>
					</div>
				</div>
			</ul>
		</div>

		<!-----------HAMBURGER MENU----------->

		<div class="hamburger-menu flex">
			<a class=" " sveltekit:prefetch href="/"><img src="nb_logo.svg" alt="" /></a>

			<div class="flex gap-4 mx-4">
				<a sveltekit:prefetch href="/"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						aria-hidden="true"
						role="img"
						class="iconify iconify--ph"
						width="20"
						height="20"
						preserveAspectRatio="xMidYMid meet"
						viewBox="0 0 256 256"
						><path
							fill="black"
							d="M94 216a14 14 0 1 1-14-14a14 14 0 0 1 14 14Zm90-14a14 14 0 1 0 14 14a14 14 0 0 0-14-14Zm43.5-128.4L201.1 166a22.2 22.2 0 0 1-21.2 16H84.1a22.2 22.2 0 0 1-21.2-16L36.5 73.8v-.3l-9.8-34a1.9 1.9 0 0 0-1.9-1.5H8a6 6 0 0 1 0-12h16.8a14.1 14.1 0 0 1 13.5 10.2L46.8 66h174.9a6 6 0 0 1 4.8 2.4a6 6 0 0 1 1 5.2ZM213.8 78H50.2l24.3 84.7a10 10 0 0 0 9.6 7.3h95.8a10 10 0 0 0 9.6-7.3Z"
						/></svg
					></a
				>
				<a sveltekit:prefetch href="/" class="text-decoration-underline: no-underline text-[0.7rem]"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						aria-hidden="true"
						role="img"
						class="iconify iconify--ph"
						width="20"
						height="20"
						preserveAspectRatio="xMidYMid meet"
						viewBox="0 0 256 256"
						><path
							fill="black"
							d="M231.9 212a120.7 120.7 0 0 0-67.1-54.2a72 72 0 1 0-73.6 0A120.7 120.7 0 0 0 24.1 212a8 8 0 1 0 13.8 8a104.1 104.1 0 0 1 180.2 0a8 8 0 1 0 13.8-8ZM72 96a56 56 0 1 1 56 56a56 56 0 0 1-56-56Z"
						/></svg
					></a
				>
			</div>

			<input id="menu__toggle" type="checkbox" />
			<label class="menu__btn" for="menu__toggle">
				<span />
			</label>

			<ul class="menu__box">
				<li class:active={$page.url.pathname === '/'}>
					<a sveltekit:prefetch href="/"><img src="nb_logo.svg" alt="" /></a>
				</li>

				<li>
					<div class="dropdown">
						<div class="dropbtn">SHOPPEN ⯆</div>
						<div class="dropdown-content">
							<a sveltekit:prefetch href="/">SHOP</a>
							<a sveltekit:prefetch href="/">GAVEKORT</a>
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
						<div class="dropbtn">VORES ØLUDVALG ⯆</div>
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
						<div class="dropbtn">EVENTS & SELSKABER ⯆</div>
						<div class="dropdown-content">
							<a sveltekit:prefetch href="/">EVENTKALENDER</a>
							<a sveltekit:prefetch href="/">SELSKABER & MØDELOKALER</a>
						</div>
					</div>
				</li>

				<li>
					<div class="dropdown">
						<div class="dropbtn">OM BRYGHUSET ⯆</div>
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
						<div class="dropbtn">FOR VIRKSOMHEDER ⯆</div>
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
		margin-inline: 1rem;
		width: 100%;
		font-family: 'Josefin Sans', sans-serif;
	}

	.ikoner {
		padding-top: 0.5rem;
		margin-inline: 1rem;
		display: flex;
		place-content: flex-end;
		gap: 2rem;
		font-family: 'Josefin Sans', sans-serif;
	}

	@media (max-width: 1300px) {
		.ikoner {
			display: none;
		}
	}

	ul {
		margin-inline: 1rem;
		padding-block: 2.5rem;
		height: 3em;
		display: flex;
		justify-content: space-between;
		align-items: center;
		list-style: none;
	}

	ul img {
		width: 80px;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;

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
		overflow-x: hidden;
		display: flex;
		align-items: center;
		position: fixed;
		top: 25px;
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

	.hamburger-menu ul {
		justify-content: start;
	}

	.hamburger-menu li {
		padding-block: 1.3rem;
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
		padding: 0;
		list-style: none;
		background-color: rgb(168, 212, 221);
		box-shadow: 1px 0px 6px rgba(0, 0, 0, 0.2);
		transition-duration: 0.25s;
	}

	@media (max-width: 1300px) {
		.desktop-menu {
			display: none;
		}
	}

	@media (min-width: 1300px) {
		.hamburger-menu {
			display: none;
		}
	}

	/******************DROPDOWN***************/

	.dropdown {
		position: relative;
		display: inline-block;
	}

	.dropdown-content {
		text-align: left;
		display: none;
		position: absolute;
		background-color: rgb(255, 255, 255);
		width: auto;
		padding-inline: 0.5rem;
		z-index: 1;
	}

	@media (max-width: 600px) {
		.dropdown-content {
			text-align: center;
		}
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
