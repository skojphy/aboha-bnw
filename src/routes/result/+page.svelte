<script>
	import poster from '$lib/images/poster.jpeg';
</script>

<main>
	<h1>
		참전 신청이<br />
		완료되었습니다!
	</h1>

	<p>
		쌈장 개인 프로필 카카오페이 혹은<br />
		1002-044-760137 우리은행으로<br />
		5만 원을 입금해 주시면 정말 신청 완료!<br />
		10월 8일 16시 30분에 만나요!<br />
	</p>

	<img class="poster" src={poster} alt="가을운동회였던 흑백대전" />
</main>

<footer>
	<p>고생한 사람 물냉면 ㅣ 쌈장 ㅣ 촌장</p>
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

	footer {
		color: #bbb;
	}
</style>
