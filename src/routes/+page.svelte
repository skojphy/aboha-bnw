<script>
	import poster from '$lib/images/poster.jpeg';
	const today = new Date();
	const eventDay = new Date('2023-10-08');
	const diff = eventDay - today;
	const diffDay = Math.floor(diff / (1000 * 60 * 60 * 24));
</script>

<main>
	<div class="container">
		<h1>
			<img class="poster" src={poster} alt="가을운동회였던 흑백대전" />
		</h1>
		<div class="info">
			<p>참전률 1위</p>
			<p>평점 5/5</p>
			<p>D-{diffDay}</p>
		</div>
		<a href="/reservation">나도 참전하기</a>
	</div>
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
		color: white;
	}

	main::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url('../lib/images/poster.jpeg');
		background-size: cover;
		filter: blur(20px);
	}

	.container {
		position: relative;
	}

	.poster {
		width: 80%;
	}

	a {
		display: block;
		width: 80%;
		height: 50px;
		border-radius: 30px;
		background-color: white;
	}
</style>
