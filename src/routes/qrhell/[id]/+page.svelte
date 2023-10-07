<script>
	export let data;
	let now = new Date();
	setInterval(() => {
		now = new Date();
	}, 1000);

	$: hours = now.getHours();
	$: minutes = now.getMinutes();
	$: seconds = now.getSeconds();
</script>

<main>
	<h1 class="visually-hidden">큐알지옥 {data.code.no}</h1>
	{#if data.code.no < 15}
		<img src={`%sveltekit.assets%/qr/success${data.code.no}.jpeg`} alt="보물찾기 성공" />
	{:else if data.code.no < 20}
		<img src={`%sveltekit.assets%/qr/fail${data.code.no - 14}.jpeg`} alt="보물찾기 실패" />
	{:else if data.code.no === 20}
		<img src={'%sveltekit.assets%/qr/king.jpeg'} alt="해적왕" />
	{/if}

	<p>
		{hours}시 {minutes > 9 ? minutes : '0' + minutes}분 {seconds > 9 ? seconds : '0' + seconds}초
	</p>
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
	p {
		margin: 0;
	}
</style>
