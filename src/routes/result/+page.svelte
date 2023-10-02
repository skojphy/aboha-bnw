<script>
	import poster from '$lib/images/poster.jpeg';
</script>

<main>
	<h1>
		참전 신청이<br />
		완료되었습니다!
	</h1>

	<p>
		쌈장 개인 프로필 <span class="bold">카카오페이</span> 혹은<br />
		<span class="bold">1002-044-760137 우리은행</span>으로<br />
		5만 원을 입금해 주시면 정말 신청 완료!<br /><br />
		<span class="bold bye">10월 8일 16시 30분에 만나요!</span><br />
	</p>

	<img class="poster" src={poster} alt="가을운동회였던 흑백대전" />
</main>

<footer>
	<p>고생한 사람<span class="bold">물냉면 ㅣ 쌈장 ㅣ 촌장</span></p>
</footer>

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
		color: white;
	}
	main::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-image: url('../lib/images/poster.jpeg');
		background-size: cover;
		filter: blur(20px);
	}
	h1 {
		font-weight: 700;
	}
	p {
		text-align: center;
	}
	main p {
		font-size: 20px;
		font-weight: 200;
	}

	.bold {
		font-weight: 700;
	}

	.bye {
		font-size: 18px;
	}

	footer {
		color: #ddd;
	}
	footer .bold {
		margin-left: 15px;
	}
</style>
