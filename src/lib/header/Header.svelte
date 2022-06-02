<script>
	import { page } from '$app/stores';
	let active = false;
</script>

<header>
	<ul class="ikoner">
		<li>
			<a aria-label="indkøbskurv" sveltekit:prefetch href="/"
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
		</li>
		<li>
			<a
				aria-label="login"
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
		</li>
	</ul>
	<nav>
		<div class="desktop-menu">
			<ul class="">
				<li class:active={$page.url.pathname === '/'}>
					<a aria-label="hjem" sveltekit:prefetch href="/"
						><img src="nb_logo.svg" alt="nørrebro bryghus logo" /></a
					>
				</li>

				<li>
					<div class="dropdown">
						<div class="dropbtn">
							SHOPPEN <svg
								xmlns="http://www.w3.org/2000/svg"
								xmlns:xlink="http://www.w3.org/1999/xlink"
								aria-hidden="true"
								role="img"
								class="iconify iconify--material-symbols"
								width="20"
								height="20"
								preserveAspectRatio="xMidYMid meet"
								viewBox="0 0 24 24"
								><path fill="black" d="m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4Z" /></svg
							>
						</div>
						<div class="dropdown-content">
							<a sveltekit:prefetch href="shop">SHOP ØL</a>
							<a sveltekit:prefetch href="/">GAVEKORT</a>
						</div>
					</div>
				</li>

				<li class:active={$page.url.pathname === '/'}>
					<div class="dropdown">
						<a href="/" class="dropbtn"
							>MENU <svg
								xmlns="http://www.w3.org/2000/svg"
								xmlns:xlink="http://www.w3.org/1999/xlink"
								aria-hidden="true"
								role="img"
								class="iconify iconify--material-symbols"
								width="20"
								height="20"
								preserveAspectRatio="xMidYMid meet"
								viewBox="0 0 24 24"
								><path fill="black" d="m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4Z" /></svg
							></a
						>
						<div class="dropdown-content">
							<a sveltekit:prefetch href="frokostmenu">FROKOSTMENU</a>
							<a sveltekit:prefetch href="aftenmenu">AFTENMENU</a>
							<a sveltekit:prefetch href="drikkemenu">DRIKKEMENU</a>
						</div>
					</div>
				</li>

				<li class:active={$page.url.pathname === 'book_bord'} on:click={() => (active = !active)}>
					<a sveltekit:prefetch href="book_bord">BOOK BORD</a>
				</li>

				<li>
					<div class="dropdown">
						<div class="dropbtn">
							EVENTS & SELSKABER <svg
								xmlns="http://www.w3.org/2000/svg"
								xmlns:xlink="http://www.w3.org/1999/xlink"
								aria-hidden="true"
								role="img"
								class="iconify iconify--material-symbols"
								width="20"
								height="20"
								preserveAspectRatio="xMidYMid meet"
								viewBox="0 0 24 24"
								><path fill="black" d="m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4Z" /></svg
							>
						</div>
						<div class="dropdown-content">
							<a sveltekit:prefetch href="events">EVENTKALENDER</a>
							<a sveltekit:prefetch href="/">SELSKABER & MØDELOKALER</a>
						</div>
					</div>
				</li>

				<li>
					<div class="dropdown">
						<div class="dropbtn">
							BRYGHUSETS SORTIMENT <svg
								xmlns="http://www.w3.org/2000/svg"
								xmlns:xlink="http://www.w3.org/1999/xlink"
								aria-hidden="true"
								role="img"
								class="iconify iconify--material-symbols"
								width="20"
								height="20"
								preserveAspectRatio="xMidYMid meet"
								viewBox="0 0 24 24"
								><path fill="black" d="m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4Z" /></svg
							>
						</div>
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
						<div class="dropbtn">
							OM BRYGHUSET <svg
								xmlns="http://www.w3.org/2000/svg"
								xmlns:xlink="http://www.w3.org/1999/xlink"
								aria-hidden="true"
								role="img"
								class="iconify iconify--material-symbols"
								width="20"
								height="20"
								preserveAspectRatio="xMidYMid meet"
								viewBox="0 0 24 24"
								><path fill="black" d="m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4Z" /></svg
							>
						</div>
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
						<div class="dropbtn">
							FOR VIRKSOMHEDER <svg
								xmlns="http://www.w3.org/2000/svg"
								xmlns:xlink="http://www.w3.org/1999/xlink"
								aria-hidden="true"
								role="img"
								class="iconify iconify--material-symbols"
								width="20"
								height="20"
								preserveAspectRatio="xMidYMid meet"
								viewBox="0 0 24 24"
								><path fill="black" d="m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4Z" /></svg
							>
						</div>
						<div class="dropdown-content">
							<a sveltekit:prefetch href="/">MØDELOKALER</a>
							<a sveltekit:prefetch href="/">BLIV FORHANDLER</a>
						</div>
					</div>
				</li>
			</ul>
		</div>

		<!-----------HAMBURGER MENU----------->

		<div class="hamburger-menu flex justify-start">
			<div class="flex gap-8">
				<a aria-label="Hjem" sveltekit:prefetch href="/"
					><img src="nb_logo.svg" alt="Nørrebro bryghus logo" /></a
				>
				<div class="flex gap-4">
					<a aria-label="inkøbskurv" sveltekit:prefetch href="/"
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
						aria-label="login"
						sveltekit:prefetch
						href="/"
						class="text-decoration-underline: no-underline text-[0.7rem]"
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
			</div>

			<input id="menu__toggle" type="checkbox" />
			<label class="menu__btn" for="menu__toggle">
				<span />
			</label>

			<ul class="menu__box">
				<li class:active={$page.url.pathname === '/'}>
					<a aria-label="hjem" sveltekit:prefetch href="/"
						><img src="nb_logo.svg" alt="nørrebro bryghus logo" /></a
					>
				</li>

				<li>
					<div class="dropdown">
						<div class="dropbtn">
							SHOPPEN <svg
								xmlns="http://www.w3.org/2000/svg"
								xmlns:xlink="http://www.w3.org/1999/xlink"
								aria-hidden="true"
								role="img"
								class="iconify iconify--material-symbols"
								width="20"
								height="20"
								preserveAspectRatio="xMidYMid meet"
								viewBox="0 0 24 24"
								><path fill="black" d="m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4Z" /></svg
							>
						</div>
						<div class="dropdown-content">
							<a sveltekit:prefetch href="shop">SHOP ØL</a>
							<a sveltekit:prefetch href="/">GAVEKORT</a>
						</div>
					</div>
				</li>

				<li class:active={$page.url.pathname === '/'}>
					<div class="dropdown">
						<a href="/" class="dropbtn"
							>MENU <svg
								xmlns="http://www.w3.org/2000/svg"
								xmlns:xlink="http://www.w3.org/1999/xlink"
								aria-hidden="true"
								role="img"
								class="iconify iconify--material-symbols"
								width="20"
								height="20"
								preserveAspectRatio="xMidYMid meet"
								viewBox="0 0 24 24"
								><path fill="black" d="m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4Z" /></svg
							></a
						>
						<div class="dropdown-content">
							<a sveltekit:prefetch href="frokostmenu">FROKOSTMENU</a>
							<a sveltekit:prefetch href="aftenmenu">AFTENMENU</a>
							<a sveltekit:prefetch href="drikkemenu">DRIKKEMENU</a>
						</div>
					</div>
				</li>

				<li class:active={$page.url.pathname === 'book_bord'}>
					<a sveltekit:prefetch href="book_bord">BOOK BORD</a>
				</li>

				<li>
					<div class="dropdown">
						<div class="dropbtn">
							EVENTS & SELSKABER <svg
								xmlns="http://www.w3.org/2000/svg"
								xmlns:xlink="http://www.w3.org/1999/xlink"
								aria-hidden="true"
								role="img"
								class="iconify iconify--material-symbols"
								width="20"
								height="20"
								preserveAspectRatio="xMidYMid meet"
								viewBox="0 0 24 24"
								><path fill="black" d="m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4Z" /></svg
							>
						</div>
						<div class="dropdown-content">
							<a sveltekit:prefetch href="events">EVENTKALENDER</a>
							<a sveltekit:prefetch href="/">SELSKABER & MØDELOKALER</a>
						</div>
					</div>
				</li>

				<li>
					<div class="dropdown">
						<div class="dropbtn">
							BRYGHUSETS SORTIMENT <svg
								xmlns="http://www.w3.org/2000/svg"
								xmlns:xlink="http://www.w3.org/1999/xlink"
								aria-hidden="true"
								role="img"
								class="iconify iconify--material-symbols"
								width="20"
								height="20"
								preserveAspectRatio="xMidYMid meet"
								viewBox="0 0 24 24"
								><path fill="black" d="m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4Z" /></svg
							>
						</div>
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
						<div class="dropbtn">
							OM BRYGHUSET <svg
								xmlns="http://www.w3.org/2000/svg"
								xmlns:xlink="http://www.w3.org/1999/xlink"
								aria-hidden="true"
								role="img"
								class="iconify iconify--material-symbols"
								width="20"
								height="20"
								preserveAspectRatio="xMidYMid meet"
								viewBox="0 0 24 24"
								><path fill="black" d="m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4Z" /></svg
							>
						</div>
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
						<div class="dropbtn">
							FOR VIRKSOMHEDER <svg
								xmlns="http://www.w3.org/2000/svg"
								xmlns:xlink="http://www.w3.org/1999/xlink"
								aria-hidden="true"
								role="img"
								class="iconify iconify--material-symbols"
								width="20"
								height="20"
								preserveAspectRatio="xMidYMid meet"
								viewBox="0 0 24 24"
								><path fill="black" d="m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4Z" /></svg
							>
						</div>
						<div class="dropdown-content">
							<a sveltekit:prefetch href="/">MØDELOKALER</a>
							<a sveltekit:prefetch href="/">BLIV FORHANDLER</a>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</nav>
</header>

<style>
	header {
		padding-bottom: 1rem;
	}
	nav {
		margin-inline: 1rem;
		width: 100%;
		font-family: 'Josefin Sans', sans-serif;
	}

	a:active {
		text-decoration: underline;
	}

	.ikoner {
		padding-top: 1rem;
		margin-bottom: -2rem;
		margin-right: 1.5rem;
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
		display: flex;
		align-items: center;
		position: absolute;
		top: 45px;
		right: 30px;

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
		padding-block: 0.8rem;
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

		header {
			overflow-x: hidden;
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

	.menu__btn {
		top: 37px;
	}

	.dropdown-content a:hover {
		text-decoration: underline;
	}

	.dropdown:hover .dropdown-content {
		display: block;
	}
</style>
