
<script>
	import Divider from './Divider.svelte';
	import { HomeIcon, BookOpenIcon, SunIcon, MoonIcon } from 'svelte-feather-icons';
	import { theme } from '../store';

	export let segment;

	function toggleTheme() {
		if ($theme === 'light') {
			theme.set('dark');
		} else {
			theme.set('light');
		}
	}
</script>

<style>
	nav ul {
		display: flex;
		text-align: center;
		list-style-type: none;
		justify-content: space-around;
		padding: 0;
		margin: 0;
	}

	nav ul li {
		padding-top: 10px;
		display: inline;
	}

	nav ul li a {
		display: inline-block;
		text-align: center;
	}

	.navigation {
		position: -webkit-sticky; /* Safari */
		position: sticky;
		top: 0;
		background-color: var(--background);
		z-index: 5;
		transition: 0.5s;
	}

	.desktop-nav {
		display: none;
	}

	.mobile-nav {
		width: 2.2rem;
		height: 2.2rem;
		font-size: 2.2rem;
	}

	a {
		color: var(--header-color);
		transition: 0.3s;
	}

	@media screen and (min-width: 800px) {
		.mobile-nav {
			display: none;
		}

		.desktop-nav {
			display: block;
			padding-top: 6px;
			font-size: 1.2rem;
		}

		a:hover {
			color: var(--link-hover) !important;
			transition: 0.3s;
		}
	}

	.active {
		color: var(--link) !important;
	}

</style>
<svelte:head>
	{#if $theme === 'dark'}
	<link rel="stylesheet" href="dark.css">
	{/if}
</svelte:head>

<div class='navigation'>
	<nav>
		<ul>
			<li>
				<a class='{segment === undefined ? "active" : ""}' href='.'>
					<span class='desktop-nav'>Home</span>
					<span class='mobile-nav'>
						<HomeIcon />
					</span>
				</a>
			</li>
			<li>
				<a class='{segment === "blog" ? "active" : ""}' href='blog'>
					<span class='desktop-nav'>Blog</span>
					<span class='mobile-nav'>
						<BookOpenIcon />
					</span>
				</a>
			</li>
			<li>
				<a class='{segment === "games" ? "active" : ""}' href='games'>
					<span class='desktop-nav'>Games</span>
					<span class='mobile-nav'>
							<i class='material-icons-outlined mobile-nav'>videogame_asset</i>
					</span>
				</a>
			</li>
			<li>
				<a href='about'>
					<span class='desktop-nav {segment === "about" ? "active" : ""}'>About</span>
					<span class='mobile-nav {segment === "about" ? "active" : ""}'>
						<i class='material-icons-outlined mobile-nav'>info</i>
					</span>
				</a>
			</li>
			<li>
				<a href="javascript:void(0)" on:click='{toggleTheme}'>
					{#if $theme === 'dark'}
						<SunIcon />
					{:else}
						<MoonIcon />
					{/if}
				</a>
			</li>
		</ul>
	</nav>
	<Divider/>
</div>
