<script>
	export let data;
</script>

<main>
	<h1>{data.code.id}</h1>
	<div>{data.code.desc}</div>
	<div>{data.code.isSuccess}</div>
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
	}
</style>
