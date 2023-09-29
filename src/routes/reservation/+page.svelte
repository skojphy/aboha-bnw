<script>
	import { enhance } from '$app/forms';
</script>

<main>
	<p>잠깐, 멈춰!</p>
	<h2>참전 신청 전에 확인해 주세요.</h2>

	<div>
		<p>흑백전은 팀전으로 진행돼요.</p>
		<p>
			<span>늦참 및 조기퇴근은 권장하지 않아요. </span>
			<span>시작 시간은 16시 30분이고요,</span>
			<span>종료 시간은 추후 공지 예정이에요!</span>
		</p>
		<button>확인</button>
	</div>
	<div>
		<p>참전 비용은 5만 원이에요.</p>
		<p>
			<span>남은 금액은 흑백전 종료 일주일 이내에</span>
			<span>계좌로 환급해 드릴 예정이에요.</span>
			<span>수집한 계좌번호는 일주일 내에 안전하게 파기할게요!</span>
		</p>
		<button>확인</button>
	</div>
	<div>
		<p>준비물도 잊지 말아 주세요.</p>
		<p>
			<span>정모 국룰 이벤트, 쓸데없는 선물 교환식!</span>
			<span>5천원 이하의 쓸데없는 선물을 준비해 주세요.</span>
			<span>선물을 스포하지 않도록 포장은 필수예요.</span>
		</p>
		<button>확인</button>
	</div>
	<div>
		<p>드레스코드도 있답니다.</p>
		<p>
			<span>팀에 따라 흰색, 검은색 상의를 입어주세요.</span>
			<span>팀은 흑백전 3일 전에 문자로 알려드릴게요!</span>
			<span>어떤 팀인지는 철저히 비밀로 해 주세요!</span>
		</p>
		<button>확인</button>
	</div>
	<div>
		<p>보드게임이 있다면 가져와 주세요.</p>
		<p>
			<span>이번 흑백전 장소에는 비치된 보겜이 없답니다.</span>
			<span>함께 즐기고 싶은 보드게임이 있다면</span>
			<span>부피와 무게를 고려해 챙겨와 주세요!</span>
		</p>
		<button>확인</button>
	</div>

	<p>키미노..나마에와..!</p>
	<h2>개인정보 좀 털어가겠습니다.</h2>

	<div class="wrapper">
		<form
			method="POST"
			action="?/submitForm"
			use:enhance={() => {
				return async () => {
					console.log('Submitted.');
				};
			}}
		>
			<label>
				이름이 뭐예요?
				<input type="text" name="name" placeholder="본명(예금주 확인 용) / 아보하 닉네임" />
			</label>
			<label>
				전화번호 뭐예요?
				<span>흑백전 종료 이후 삭제할게요!</span>
				<input type="text" name="phone" placeholder="010-0000-0000" />
			</label>
			<label>
				계좌번호 뭐예요?
				<span>흑백전 종료 이후 삭제할게요!</span>
				<input type="text" name="account" placeholder="우리은행 1002044760137" />
			</label>
			<label>
				몇 시까지 오실 수 있죠?
				<input type="text" name="arrival" placeholder="시작 시간 맞출 수 있어요, 17시요" />
			</label>
			<label>
				집에는 언제 가실 거예요?
				<input type="text" name="leave" placeholder="밤샘 가능, 24시" />
			</label>
			<label>
				아, 맞다! 가져오실 보드게임이 있나요?
				<textarea
					name="boardgame"
					id=""
					cols="30"
					rows="10"
					placeholder="보드게임 이름을 입력해 주세요!"
				/>
			</label>
			<label>
				이제 마지막이에요. 사랑의 메시지 💌 남겨주세요 😘
				<textarea
					name="message"
					id=""
					cols="30"
					rows="10"
					placeholder="사랑의 메시지, 바라는 점 등 뭐든 남겨주세요!"
				/>
			</label>

			<label>
				<input class="checkbox" type="checkbox" />
				개인정보 수집 및 이용에 동의합니다.
			</label>

			<details>
				<summary>개인정보 수집 및 이용 내용</summary>
				<table>
					<colgroup
						><col style="width:34%" /><col style="width:41%" /><col style="width:25%" /></colgroup
					>
					<thead>
						<tr>
							<th scope="col">목적</th><th scope="col">항목</th><th scope="col">보유기간</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td
								>예금주 본인 확인, 흑백전 행사 진행 및 서비스 제공,<br />
								긴급 사항 발생 시 비상 연락</td
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
							<td>방문일시, 서비스 이용 기록 및 기기정보 </td>
						</tr>
					</tbody>
				</table>
			</details>

			<button type="submit">제출하기</button>
		</form>
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
	label {
		display: block;
	}
	input {
		display: block;
	}
	textarea {
		display: block;
	}
	input.checkbox {
		display: inline;
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
	}
</style>
