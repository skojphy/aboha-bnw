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

	import success1 from '$lib/images/qr/success1.jpeg';
	import success2 from '$lib/images/qr/success2.jpeg';
	import success3 from '$lib/images/qr/success3.jpeg';
	import success4 from '$lib/images/qr/success4.jpeg';
	import success5 from '$lib/images/qr/success5.jpeg';
	import success6 from '$lib/images/qr/success6.jpeg';
	import success7 from '$lib/images/qr/success7.jpeg';
	import success8 from '$lib/images/qr/success8.jpeg';
	import success9 from '$lib/images/qr/success9.jpeg';
	import success10 from '$lib/images/qr/success10.jpeg';
	import success11 from '$lib/images/qr/success11.jpeg';
	import success12 from '$lib/images/qr/success12.jpeg';
	import success13 from '$lib/images/qr/success13.jpeg';
	import success14 from '$lib/images/qr/success14.jpeg';
	import fail1 from '$lib/images/qr/fail1.jpeg';
	import fail2 from '$lib/images/qr/fail2.jpeg';
	import fail3 from '$lib/images/qr/fail3.jpeg';
	import fail4 from '$lib/images/qr/fail4.jpeg';
	import fail5 from '$lib/images/qr/fail5.jpeg';
	import king from '$lib/images/qr/king.jpeg';
</script>

<main>
	<h1 class="visually-hidden">큐알지옥 {data.code.no}</h1>

	<div class="container">
		{#if data.code.no === 1}
			<img src={success1} alt="보물찾기 성공" />
		{:else if data.code.no === 2}
			<img src={success2} alt="보물찾기 성공" />
		{:else if data.code.no === 3}
			<img src={success3} alt="보물찾기 성공" />
		{:else if data.code.no === 4}
			<img src={success4} alt="보물찾기 성공" />
		{:else if data.code.no === 5}
			<img src={success5} alt="보물찾기 성공" />
		{:else if data.code.no === 6}
			<img src={success6} alt="보물찾기 성공" />
		{:else if data.code.no === 7}
			<img src={success7} alt="보물찾기 성공" />
		{:else if data.code.no === 8}
			<img src={success8} alt="보물찾기 성공" />
		{:else if data.code.no === 9}
			<img src={success9} alt="보물찾기 성공" />
		{:else if data.code.no === 10}
			<img src={success10} alt="보물찾기 성공" />
		{:else if data.code.no === 11}
			<img src={success11} alt="보물찾기 성공" />
		{:else if data.code.no === 12}
			<img src={success12} alt="보물찾기 성공" />
		{:else if data.code.no === 13}
			<img src={success13} alt="보물찾기 성공" />
		{:else if data.code.no === 14}
			<img src={success14} alt="보물찾기 성공" />
		{:else if data.code.no === 15}
			<img src={fail1} alt="보물찾기 실패" />
		{:else if data.code.no === 16}
			<img src={fail2} alt="보물찾기 실패" />
		{:else if data.code.no === 17}
			<img src={fail3} alt="보물찾기 실패" />
		{:else if data.code.no === 18}
			<img src={fail4} alt="보물찾기 실패" />
		{:else if data.code.no === 19}
			<img src={fail5} alt="보물찾기 실패" />
		{:else if data.code.no === 20}
			<img src={king} alt="해적왕" />
		{/if}

		{#if data.code.no < 15 || data.code.no === 20}
			<form
				method="POST"
				action="?/submitForm"
				use:enhance={() => {
					return async ({ result }) => {
						if (result.type === 'error') {
							window.alert('잠시 후 다시 시도해 주세요.');
						}
						window.alert('제출 완료! 다른 큐알코드를 찾아 주세요.');
					};
				}}
			>
				<input type="hidden" name="no" value={data.code.no} />
				<input type="hidden" name="userAgent" value={navigator.userAgent} />
				<div class="nickname">
					<input type="text" name="name" placeholder="닉네임" required />
					<button type="submit">제출</button>
				</div>
			</form>
		{/if}

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
