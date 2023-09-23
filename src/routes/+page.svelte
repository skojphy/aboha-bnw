<script>
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';

	import { onMount } from 'svelte';

	export let data;
	$: ({ database } = data);

	data.database.forEach((item) => {
		console.log('>>>> ' + item.title);
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="아보하 흑백전" />
</svelte:head>

<section>
	<h2>흑백전ㅋㅋ</h2>
</section>

<style>
</style>
