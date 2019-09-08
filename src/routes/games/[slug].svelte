<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`games/${params.slug}.json`);
    const data = await res.json();
    if (res.status === 200) {
      return { game: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let game;
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

  .game-title {
    color: var(--header-color);
    font-size: 2.2rem;
    font-weight: bold;
  }

  .game-date {
    font-size: 1.2rem;
    color: var(--header-color);
    font-weight: bold;
    margin: 10px 0 30px 0;
  }
</style>

<svelte:head>
	<title>{game.title} | Codescapade</title>
</svelte:head>

<div class="game-title">{game.title}</div>
<div class="game-date">Release Date: {game.displaydate}</div>
<div class='content'>
	{@html game.html}
</div>