<script>
	import { enhance } from '$app/forms';
	const checked = [false, false, false, false, false];
	const handleClick = (index) => {
		checked[index] = !checked[index];
	};

	const handleSubmit = () => {
		const allChecked = checked.every((value) => value);

		if (!allChecked) {
			window.alert('주의사항을 모두 확인해 주세요.');
			const location = document.querySelector('#card' + checked.find((val) => false)).offsetTop;
			window.scrollTo({ top: location, behavior: 'smooth' });
		}
		return allChecked;
	};
</script>

<main>
	<h1 class="visually-hidden">흑백전 참가 신청</h1>
	<section class="info">
		<div class="container">
			<div class="title">
				<p>잠깐, 멈춰!</p>
				<h2>신청 전 확인해 주세요.</h2>
			</div>

			<div class="card" id="card0">
				<div class="card-text">
					<span class="title">흑백전은 팀전으로 진행돼요.</span>
					<p class="desc">
						<span>늦참 및 조기퇴근은 권장하지 않아요. </span>
						<span>시작 시간은 16시 30분이고요,</span>
						<span>종료 시간은 추후 공지 예정이에요!</span>
					</p>
				</div>
				<button class={checked[0] ? 'checked' : 'not-checked'} on:click={() => handleClick(0)}
					>확인</button
				>
			</div>

			<div class="card" id="card1">
				<div class="card-text">
					<span class="title">참전 비용은 5만 원이에요.</span>
					<p class="desc">
						<span>남은 금액은 흑백전 종료 일주일 이내에 계좌로 환급해 드릴 예정이에요.</span>
						<span>수집한 계좌번호는 일주일 내에 안전하게 파기할게요!</span>
					</p>
				</div>
				<button class={checked[1] ? 'checked' : 'not-checked'} on:click={() => handleClick(1)}
					>확인</button
				>
			</div>

			<div class="card" id="card2">
				<div class="card-text">
					<span class="title">준비물도 잊지 말아 주세요.</span>
					<p class="desc">
						<span>정모 국룰 이벤트, 쓸데없는 선물 교환식!</span>
						<span>5천 원 이하의 쓸데없는 선물을 준비해 주세요.</span>
						<span>선물을 스포하지 않도록 포장은 필수예요.</span>
					</p>
				</div>
				<button class={checked[2] ? 'checked' : 'not-checked'} on:click={() => handleClick(2)}
					>확인</button
				>
			</div>
			<div class="card" id="card3">
				<div class="card-text">
					<span class="title">드레스 코드도 있답니다.</span>
					<p class="desc">
						<span>팀에 따라 흰색, 검은색 상의를 입어 주세요.</span>
						<span>팀은 흑백전 3일 전에 문자로 알려 드릴게요!</span>
						<span>어떤 팀인지는 철저히 비밀로 해 주세요!</span>
					</p>
				</div>
				<button class={checked[3] ? 'checked' : 'not-checked'} on:click={() => handleClick(3)}
					>확인</button
				>
			</div>
			<div class="card" id="card4">
				<div class="card-text">
					<span class="title">보드게임 가져와 주세요.</span>
					<p class="desc">
						<span>이번 흑백전 장소에는 비치된 보겜이 없답니다.</span>
						<span>함께 즐기고 싶은 보드게임이 있다면</span>
						<span>부피와 무게를 고려해 챙겨와 주세요!</span>
					</p>
				</div>
				<button class={checked[4] ? 'checked' : 'not-checked'} on:click={() => handleClick(4)}
					>확인</button
				>
			</div>
		</div>
	</section>

	<section class="form">
		<div class="container">
			<div class="title">
				<p>키미노..나마에와..!</p>
				<h2>개인정보 좀 털어 갈게요.</h2>
			</div>

			<div class="wrapper">
				<form
					method="POST"
					action="?/submitForm"
					use:enhance={() => {
						if (!checked.every((value) => value)) return false;

						return async ({ result }) => {
							if (result.type === 'error') {
								window.alert('잠시 후 다시 시도해 주세요.');
							}
							window.location.href = '/result';
						};
					}}
					on:submit={handleSubmit}
				>
					<label>
						이름이 뭐예요?
						<input type="text" name="name" placeholder="본명(예금주 확인 용) / 닉네임" required />
					</label>
					<label>
						전화번호 뭐예요?
						<span>흑백전 종료 이후 삭제할게요!</span>
						<input type="text" name="phone" placeholder="010-0000-0000" required />
					</label>
					<label>
						계좌번호 뭐예요?
						<span>흑백전 종료 이후 삭제할게요!</span>
						<input type="text" name="account" placeholder="우리은행 1002044760137" required />
					</label>
					<label>
						몇 시까지 오실 수 있죠?
						<input type="text" name="arrival" placeholder="시작 시간 맞춰서, 17시요" required />
					</label>
					<label>
						집에는 언제 가실 거예요?
						<input type="text" name="leave" placeholder="밤샘 가능, 24시" required />
					</label>

					<div class="title">
						<p>아, 맞다!</p>
						<h2>가져올 보드게임이 있나요?</h2>
					</div>
					<textarea
						name="boardgame"
						id=""
						cols="30"
						rows="10"
						placeholder="보드게임 이름을 입력해 주세요!"
					/>

					<div class="title">
						<p>이제 마지막이에요.</p>
						<h2>사랑의 메시지 써 주세요💌</h2>
					</div>

					<textarea
						name="message"
						id=""
						cols="30"
						rows="10"
						placeholder="사랑의 메시지, 바라는 점 등 뭐든!"
					/>

					<details>
						<summary>개인정보 수집 및 이용 내용</summary>
						<table>
							<colgroup
								><col style="width:34%" /><col style="width:41%" /><col
									style="width:25%"
								/></colgroup
							>
							<thead>
								<tr>
									<th scope="col">목적</th><th scope="col">항목</th><th scope="col">보유 기간</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td
										>예금주 본인 확인, 참전 비용 입금 확인, 흑백전 행사 진행 및 서비스 제공, 긴급
										사항 발생 시 비상 연락</td
									>
									<td>성명, 닉네임<br />휴대폰번호, 계좌번호</td>
									<td rowspan="5" class="imp_txt"
										><strong
											>흑백전 종료 후 14일 이내<br />또는 제반 비용의 정산 완료 후 3일 이내</strong
										></td
									>
								</tr>
								<tr>
									<td>부정 이용 방지, 비인가 사용 방지</td>
									<td>방문 일시, 서비스 이용 기록 및 기기 정보 </td>
								</tr>
							</tbody>
						</table>
					</details>

					<label>
						<input class="checkbox" type="checkbox" required />
						<p class="checkbox">개인정보 수집 및 이용에 동의합니다.</p>
					</label>

					<button type="submit" disabled>신청이 마감되었습니다.</button>
				</form>
			</div>
		</div>
	</section>
</main>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
		color: white;
	}

	section {
		width: 100%;
	}

	.info {
		background-color: black;
	}
	.info .container {
		background-color: white;
		border-radius: 0 0 70px 0;
		padding: 50px 30px;
		color: black;
	}

	.form {
		background-color: white;
	}
	.form .container {
		background-color: black;
		border-radius: 70px 0 0 0;
		padding: 50px 30px;
	}

	.title p {
		font-size: 23px;
		font-weight: 100;
		margin: 0;
		word-spacing: -1px;
	}
	.title h2 {
		font-size: 23px;
		font-weight: 600;
		margin: 0 0 15px 0;
		word-spacing: -3px;
	}

	.card {
		background-color: black;
		border-radius: 20px;
		color: white;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 20px 0;
		padding: 18px;
	}

	.card .title {
		font-weight: 600;
	}

	.card-text {
		width: 85%;
		font-size: 16px;
	}

	.card button {
		width: 40px;
		height: 40px;
		border-radius: 100%;
		border: 1px solid white;
		font-size: 13px;
		word-wrap: normal;
		word-spacing: -2px;
		font-weight: 100;
		padding: 0;
		text-align: center;
	}
	.card button.checked {
		background-color: white;
		color: black;
	}
	.card button.not-checked {
		background-color: black;
		color: white;
	}

	.desc {
		margin: 10px 0;
	}

	.card-text .desc span {
		display: inline-block;
		font-size: 14px;
		font-weight: 100;
		word-break: keep-all;
		line-height: 1.4;
	}

	label {
		display: block;
		font-size: 15px;
		font-weight: 500;
	}

	label span {
		font-weight: 100;
		word-spacing: -1px;
	}

	input {
		display: block;
		width: 100%;
		height: 50px;
		box-sizing: border-box;
		margin: 5px 0 20px 0;
		border-radius: 30px;
		padding: 15px;
		font-size: 16px;
	}

	input::placeholder,
	textarea::placeholder {
		color: #b4b4b4;
		font-size: 14px;
		font-family: 'Noto Sans KR', sans-serif;
	}

	textarea {
		display: block;
		width: 100%;
		height: 200px;
		box-sizing: border-box;
		margin: 5px 0 20px 0;
		border-radius: 20px;
		padding: 16px;
		font-size: 15px;
		font-family: 'Noto Sans KR';
	}

	input.checkbox {
		display: inline;
		width: 15px;
		height: 15px;
		accent-color: black;
		position: relative;
		top: 3px;
	}
	p.checkbox {
		display: inline-block;
		margin-left: 5px;
	}

	summary {
		font-size: 13px;
	}

	table {
		list-style: none;
		margin: 0;
		padding: 0;
		color: #676767;
		font-family: 'Noto Sans KR', sans-serif;
		width: 100%;
		border-collapse: collapse;
		font-size: 11px;
		border: 1px solid #dbdbdb;
		margin: 10px 0;
	}

	td {
		padding: 5px;
	}

	form button {
		width: 100%;
		height: 50px;
		border-radius: 30px;
		background-color: gray;
		text-align: center;
		font-size: 15px;
		color: black;
		font-weight: 700;
		margin: 20px 0;
	}
</style>
