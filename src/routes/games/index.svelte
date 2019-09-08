<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`games.json`).then(r => r.json()).then(games => {
			return { games };
		});
	}
</script>

<script>
	export let games;
</script>

<style>
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	img {
		width: 200px;
		height: 200px;
	}

	.game-container {
		text-align: center;
		
	}

	.border {
		display: block;
		height: 3px;
		margin: 10px auto;
		width: 240px;
		border-bottom: 3px solid var(--link);
	}

	.item {
		margin-bottom: 50px;
	}
</style>

<svelte:head>
	<title>Games | Codescapade</title>
</svelte:head>

<ul>
	{#each games as game}
		<li class='column one-third item'>
			<a rel='prefetch' href='games/{game.slug}'>
				<div class="game-container">
					<h2>{game.title}</h2>
					<img src='{game.cover}' alt='cover picture'/>
				</div>
				<div class='border'></div>
			</a>
		</li>
	{/each}
</ul>