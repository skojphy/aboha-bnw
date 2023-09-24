<script>
	export let data;
	$: ({ database } = data);

	let nick = '';
	data.database.forEach((item) => {
		console.log('>>>> 닉네임: ' + item.name);
		nick = item.name;
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="아보하 흑백전" />
</svelte:head>

<section>
	<h2>흑백전ㅋㅋ</h2>
	<p>{nick}</p>
	<button>클릭해봥</button>
</section>

<style>
</style>
