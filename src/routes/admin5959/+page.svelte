<script>
	export let data;
	const { database } = data;
</script>

<main>
	<h1>흑백전 예약 현황</h1>

	{#each database as item, i}
		<div class="card">
			<p>입력 시간: {item?.timeStamp}</p>
			<p>이름: {item.name}</p>
			<p>전화번호: {item.phone}</p>
			<p>계좌번호: {item.account}</p>
			<p>오는 시간: {item.arrival}</p>
			<p>떠나는 시간: {item.leave}</p>
			<p>보드게임: {item.boardgame}</p>
			<p>메시지: {item.message}</p>
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
