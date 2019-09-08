<script context="module">
	export async function preload({ params, query }) {
		const res = await this.fetch(`blog/${params.year}/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let post;
</script>

<style>
	.content :global(pre) {
		padding: 0.5em;
		border-radius: 2px;
		overflow-x: auto;
		border: 1px solid #888;
	}

	.content :global(pre) :global(code) {
		background-color: transparent;
		padding: 0;
	}

	.post-title {
		color: var(--header-color);
		font-size: 2.2rem;
		font-weight: bold;
	}

	.post-date {
		font-size: 1.2rem;
		color: var(--header-color);
		font-weight: bold;
		margin: 10px 0 30px 0;
	}
</style>

<svelte:head>
	<title>{post.title} | Codescapade</title>
</svelte:head>

<div class="post-title">{post.title}</div>
<div class="post-date">Date: {post.displaydate}</div>
<div class='content'>
	{@html post.html}
</div>
