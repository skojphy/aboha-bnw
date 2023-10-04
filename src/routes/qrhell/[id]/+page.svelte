<script>
	export let data;
</script>

<main>
	<h1>큐알지옥{data.code.no}</h1>
	<p>id: {data.code.id}</p>
	<p>isSuccess: {data.code.isSuccess}</p>
</main>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
		background-color: white;
		color: black;
		text-align: center;
		font-size: 30px;
	}
</style>
