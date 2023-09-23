<script>
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
