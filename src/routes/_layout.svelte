<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	.container {
		position: relative;
		margin: 0 auto;
		max-width: 1000px;
		min-height: cacl(100vh - 2rem);
	}

	main {
		padding: 30px 20px 50px 20px;
		overflow: hidden;
	}

	.title-img {
		display: block;
		margin: 30px auto;
	}
</style>


<div class="container">
	<img class="title-img" src="title.png" alt="title"/>
	<Nav {segment}/>
	<main>
		
		<slot></slot>
	</main>
</div>
