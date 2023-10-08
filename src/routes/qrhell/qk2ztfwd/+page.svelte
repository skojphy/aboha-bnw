<script>
	import find from '$lib/images/qr/find.jpeg';
</script>

<main>
	<h1>숨겨진 보물을 찾아라!</h1>
	<p>
		실내외 곳곳에 숨겨진 큐알코드를 찍어 보물을 찾아 주세요. <br />
		가장 많은 성공 큐알코드를 찍어서 큐알왕이 되어 보세요🤡<br />
		숨겨진 원피스를 가장 먼저 찾는 단 한 명은 해적왕이 될 수 있습니다.<br /><br />
		👉 큐알코드를 찍어서 성공 화면이 나오면 캡쳐해 주세요.<br />
		👉 원피스 큐알코드를 가장 먼저 찾았다면, 큐알코드 종이를 떼 주세요!<br />
		👉 다섯 시까지 스크린 앞에 모여 주세요.<br />
	</p>
	<img
		src={find}
		alt="나의 보물? 원한다면 주도록 하지, 찾아라! 이 세상 전부를 그곳에 두고 있으니까"
	/>
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
	h1 {
		font-weight: 700;
	}
	p {
		margin: 30px;
		font-size: 16px;
		text-align: left;
		font-weight: 400;
	}
</style>
