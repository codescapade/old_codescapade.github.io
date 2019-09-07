
<script>
	import Divider from './Divider.svelte';
	import { HomeIcon, BookOpenIcon } from 'svelte-feather-icons';

	export let segment;

	const items = [
		{
			name: 'Home',
			link: '.',
			active: undefined,
			icon: '<i class=\"material-icons-outlined mobile-nav\">home</i>',
		},
		{
			name: 'Blog',
			link: 'blog',
			active: 'blog',
			icon: '',
		},
		{
			name: 'Games',
			link: 'games',
			active: 'games',
			icon: '<i class=\"material-icons-outlined mobile-nav\">videogame_asset</i>',
		},
		{
			name: 'About',
			link: 'about',
			active: 'about',
			icon: '<i class=\"material-icons-outlined mobile-nav\">info</i>',
		}
	];
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
		color: #a6a6a6;
	}

	.navigation {
		position: -webkit-sticky; /* Safari */
		position: sticky;
		top: 0;
		background-color: #fff;
		z-index: 5;
	}

	.desktop-nav {
		display: none;
	}

	.mobile-nav {
		width: 2.2rem;
		height: 2.2rem;
		font-size: 2.2rem;
	}

	@media screen and (min-width: 800px) {
		.mobile-nav {
			display: none;
		}

		.desktop-nav {
			display: block;
			font-size: 1.5rem;
		}

		a {
			padding-bottom: 8px;
		}

		a:hover {
			color: #50D7A4 !important;
		}
	}

	.active {
		color: #47C2FF !important;
	}

</style>

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
					<span class='desktop-nav'>Game</span>
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
			<!-- <li><a class='{segment === undefined ? "active" : ""}' href='.'>Home</a></li>
			<li><a rel=prefetch class='{segment === "blog" ? "active" : ""}' href='blog'>Blog</a></li>
			<li><a rel=prefetch class='{segment === "games" ? "active" : ""}' href='games'>Games</a></li>
			<li><a class='{segment === "about" ? "active" : ""}' href='about'>About</a></li> -->
		</ul>
	</nav>
	<Divider/>
</div>
