<!--
	Create the blog overview page.
-->

<script context="module">
	// Preload the overview post data.
	export function preload({ params, query }) {
		return this.fetch('blog.json').then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	export let posts;
</script>

<style>
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	li {
		padding-bottom: 30px;
	}

	@media screen and (min-width: 800px) {
		li {
			padding-bottom: 30px;
		}
	}

	.post-title {
		color: var(--header-color);
		font-size: 1.8rem;
		font-weight: bold;
	}

	.post-date {
		color: var(--header-color);
		font-weight: bold;
		margin-top: 5px
	}
</style>

<svelte:head>
	<title>Blog | Codescapade</title>
</svelte:head>

<ul>
	{#each posts as post}
		<li>
			<div class="post-title">{post.title}</div>
			<div class="post-date">Date: {post.displaydate}</div>
			<p>
				{@html post.excerpt}
				<br>
				<a rel='prefetch' href='blog/{post.slug}'>Read more...</a>
			</p>
		</li>
	{/each}
</ul>