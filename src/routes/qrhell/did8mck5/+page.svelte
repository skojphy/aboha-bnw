<script>
	export let data;
	import { enhance } from '$app/forms';

	let now = new Date();
	setInterval(() => {
		now = new Date();
	}, 1000);

	$: hours = now.getHours();
	$: minutes = now.getMinutes();
	$: seconds = now.getSeconds();

	import success13 from '$lib/images/qr/success13.jpeg';
</script>

<main>
	<h1 class="visually-hidden">큐알지옥 {data.code.no}</h1>

	<div class="container">
		<img src={success13} alt="보물찾기 성공" />

		<form
			method="POST"
			action="?/submitForm"
			use:enhance={() => {
				return async ({ result }) => {
					if (result.type === 'error') {
						window.alert('잠시 후 다시 시도해 주세요.');
					}
					window.alert('제출 완료! 화면을 캡쳐한 뒤 다른 큐알코드를 찾아 주세요.');
				};
			}}
		>
			<input type="hidden" name="no" value={data.code.no} />
			<div class="nickname">
				<input type="text" name="name" placeholder="닉네임" required />
				<button type="submit">제출</button>
			</div>
		</form>

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
