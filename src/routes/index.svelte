<script context="module">
	export function preload({ params, query }) {
		return this.fetch('index.json').then(r => r.json()).then(content => {
			return { content };
		});
	}
</script>

<script>
	export let content = {};
</script>
<style>
	.post {
		padding-bottom: 50px;
	}
</style>

<svelte:head>
	<title>Codescapade</title>
</svelte:head>

{#if content.post}
<div class="post">
	<h1>Latest Blog Post</h1>
	
	<h3>{content.post.title}</h3>
	<p>
		{content.post.excerpt}<br>
		<a href='blog/{content.post.slug}'>Read More...</a>
	</p>
</div>
{/if}
{#if content.game}
<div class="post">
	<h1>Latest Game</h1>
	<h3>{content.game.title}</h3>
	<p>
		{content.game.excerpt}<br>
		<a href='games/{content.game.slug}'>Read More...</a>
	</p>
</div>
{/if}
