<script>
	import './styles.css';
	import poster from '$lib/images/poster.jpeg';
	import { onMount } from 'svelte';

	const now = new Date();
	const eventDay = new Date('2023-10-08 16:30');
	let diffTime = eventDay - now;

	setInterval(() => {
		diffTime = eventDay - new Date();
	}, 1000);

	$: hours = Math.floor(diffTime / (1000 * 60 * 60));
	$: minutes = Math.floor((diffTime / (1000 * 60)) % 60);
	$: seconds = Math.floor((diffTime / 1000) % 60);

	onMount(() => {
		const [lat, lng] = [37.504547, 126.897091];
		const container = document.getElementById('map');
		const markerPosition = new kakao.maps.LatLng(lat, lng);

		const options = {
			center: markerPosition,
			level: 3
		};

		const map = new kakao.maps.Map(container, options);

		const zoomControl = new kakao.maps.ZoomControl();

		const marker = new kakao.maps.Marker({
			position: markerPosition
		});
		const content =
			'<div class ="label" style="transform: translateY(-55px); background-color: black; padding: 2px 3px; border-radius: 8px;"><span class="left"></span><span class="center" style="color: white">4층 D2 파티룸!</span><span class="right"></span></div>';

		const customOverlay = new kakao.maps.CustomOverlay({
			position: markerPosition,
			content: content
		});

		map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
		marker.setMap(map);
		customOverlay.setMap(map);
	});
</script>

<main>
	<div class="container">
		<h1>
			<img class="poster" src={poster} alt="가을운동회였던 흑백대전" />
		</h1>
		<div class="info">
			<div class="tab">
				<span class="title">참전률</span><span class="content">1<span class="small">위</span></span>
			</div>
			<div class="line" />
			<div class="tab">
				<span class="title">평점</span><span class="content">5<span class="small">/5</span></span>
			</div>
			<div class="line" />
			<div class="tab">
				<span class="title">시작까지</span><span class="content"
					>{hours}<span class="small">시간</span>
					{minutes > 9 ? minutes : '0' + minutes}<span class="small">분</span>
					{seconds > 9 ? seconds : '0' + seconds}<span class="small">초</span></span
				>
			</div>
		</div>

		<div class="info2">
			<p>일시 ㅣ 2023년 10월 8일 16시 30분</p>
			<p>장소 ㅣ 서울 영등포구 도신로 36, 4층 D2파티룸</p>
		</div>

		<div id="map" />

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
		width: 100vw;
		height: 100vh;
		background-image: url('../lib/images/poster.jpeg');
		background-size: cover;
		filter: blur(20px);
	}

	.container {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.poster {
		width: 85vw;
	}

	.info {
		width: 85vw;
		display: grid;
		grid-template-columns: 1fr 1px 1fr 1px 3fr;
		justify-items: center;
		margin: 20px 0;
	}

	.info2 p {
		margin: 5px 0;
	}

	.tab {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.line {
		width: 1px;
		background-color: white;
	}

	.info .title {
		display: block;
	}

	.info .content {
		font-size: 25px;
		font-weight: 700;
	}

	.small {
		font-size: 15px;
		font-weight: 400;
	}

	#map {
		width: 85vw;
		height: 60vw;
		margin: 40px;
	}

	a {
		display: block;
		width: 85vw;
		height: 50px;
		border-radius: 30px;
		background-color: white;
		text-align: center;
		font-size: 15px;
		color: black;
		font-weight: 700;
		line-height: 50px;
	}
</style>
