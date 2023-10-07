<script>
	export let data;

	let now = new Date();
	setInterval(() => {
		now = new Date();
	}, 1000);

	$: hours = now.getHours();
	$: minutes = now.getMinutes();
	$: seconds = now.getSeconds();

	import fail1 from '$lib/images/qr/fail1.jpeg';
</script>

<main>
	<h1 class="visually-hidden">큐알지옥 {data.code.no}</h1>

	<div class="container">
		<img src={fail1} alt="보물찾기 실패" />

		<p class="time">
			{hours}시 {minutes > 9 ? minutes : '0' + minutes}분 {seconds > 9 ? seconds : '0' + seconds}초
		</p>
	</div>
</main>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100vw;
		margin: 0 auto;
		box-sizing: border-box;
		background-color: white;
		color: black;
		text-align: center;
		font-size: 30px;
	}
	img {
		object-fit: contain;
		max-height: 70vh;
	}
	.time {
		margin: 15px 0;
		font-size: 22px;
	}
	.nickname {
		display: flex;
		width: 80vw;
		font-size: 18px;
	}
	input {
		width: 60vw;
		height: 50px;
		box-sizing: border-box;
		border-radius: 25px;
		padding: 20px;
	}
	button {
		width: 20vw;
		font-size: 15px;
		background-color: black;
		color: white;
		height: 50px;
		box-sizing: border-box;
		border-radius: 25px;
		margin-left: 20px;
	}
	form {
		display: flex;
		justify-content: center;
	}
</style>
