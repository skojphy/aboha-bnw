<script>
	import './styles.css';
	import poster from '$lib/images/poster.jpeg';
	import { onMount } from 'svelte';
	const today = new Date();
	const eventDay = new Date('2023-10-08');
	const diff = eventDay - today;
	const diffDay = Math.floor(diff / (1000 * 60 * 60 * 24));

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
			<p>참전률 1위</p>
			<p>평점 5/5</p>
			<p>D-{diffDay}</p>
		</div>

		<div id="map" style="width:80%;height:300px;" />

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
