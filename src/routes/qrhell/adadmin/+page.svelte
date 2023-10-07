<script>
	export let data;
	const { qr } = data;
</script>

<main>
	<h1>보물찾기 현황</h1>

	{#each qr as item, i}
		<div class="card">
			<p>입력 시간: {item?.timeStamp}</p>
			<p>이름: {item.name}</p>
			<p>큐알코드: {item.no}</p>
		</div>
	{/each}
</main>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
		background-color: white;
		color: black;
	}

	.card {
		background-color: lightskyblue;
		margin: 20px;
		border-radius: 10px;
		padding: 10px;
	}

	.card p {
		margin: 5px;
	}
</style>
