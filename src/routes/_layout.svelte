<!--
	Layout template. Holds all building blocks used on every page like the navigation and footer.
-->

<script>
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';
	import { theme } from '../store';
	import { onMount } from 'svelte';
	
	// Enable the theme local storage so it saves/loads the last used theme.
	onMount(() => {
		theme.useLocalStorage();
	});
	
	export let segment;
</script>

<style>
	.container {
		position: relative;
		margin: 0 auto;
		max-width: 1000px;
		min-height: calc(100vh - 2rem);
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

<svelte:head>
	<!-- Add dark theme css only when dark theme is active. -->
	{#if $theme === 'dark'}
		<link rel="stylesheet" href="dark.css">
	{/if}
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-147356096-1"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());

		gtag('config', 'UA-147356096-1');
	</script>
	
	<script type="text/javascript">
		var _iub = _iub || [];
		_iub.csConfiguration = {"lang":"en","siteId":1652138,"localConsentDomain":"codescapade.github.io","cookiePolicyId":41964441, "banner":{ "acceptButtonDisplay":true,"customizeButtonDisplay":true,"acceptButtonColor":"#47c2ff","acceptButtonCaptionColor":"white","customizeButtonColor":"#50D7A4","customizeButtonCaptionColor":"white","position":"float-top-center","textColor":"black","backgroundColor":"#dedede" }};
	</script>
	<script type="text/javascript" src="//cdn.iubenda.com/cs/iubenda_cs.js" charset="UTF-8" async></script>
</svelte:head>

<div class="container">
	<img class="title-img" src="title.png" alt="title"/>
	<Nav {segment}/>
	<main>
		<slot></slot>
	</main>
	<Footer />
</div>
