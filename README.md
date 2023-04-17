# Eat Stamp
> **2023-03-14 ~ 2023-04-14	/ Web Project**


> OJT 기간 동안 전자정부 프레임워크를 사용하여 표준 개발 및 프로젝트 진행 과정의 흐름을 높임


> 서울시 공공 데이터를 사용해 강남구에 위치한 모범 음식점들의 상세 정보 제공


> **먹은 음식을 일기 형식으로 매일 기록하고, 자주 쓰인 키워드 분석을 통해 데이터상의 음식점 추천**

<br/>

- - -

<br/>

## OBJECTIVES

- 전자정부 프레임워크 숙련도 증가
- 프로젝트 서클 파악
- 사전에 계획된 개발 일정 준수
- 깔끔하고 직관적인 디자인과 세부 기능을 통해 접근성 좋은 사용자 환경 조성

<br/>

## STACKS
>**Environment**


<img src="https://img.shields.io/badge/Eclipse-FE7A16.svg?style=for-the-badge&logo=Eclipse&logoColor=white"> <img src="https://img.shields.io/badge/egovFramework-6DB33F?style=for-the-badge&logo=spring&logoColor=white">  <img src="https://img.shields.io/badge/spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white"> <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white">  <img src="https://img.shields.io/badge/apache tomcat-F8DC75?style=for-the-badge&logo=apachetomcat&logoColor=white">


**`TortoiseSVN`** 

<br/>

>**Development**


<img src="https://img.shields.io/badge/java-007396?style=for-the-badge&logo=java&logoColor=white">  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">  <img src="https://img.shields.io/badge/jquery-0769AD?style=for-the-badge&logo=jquery&logoColor=white"> <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 


<br/>


>**Communication**


 <img src="https://img.shields.io/badge/Notion-%23000000.svg?style=for-the-badge&logo=notion&logoColor=white">
 
<br/>
<br/>


>**ETC**


<img src="https://img.shields.io/badge/fontawesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white"> 


**`DBeaver` `Moqups`**

<br/>

## 팀원

- **이예지** 


`Layout` `메인화면` `키워드 추출` `게시글` `마이페이지`

- **최은지** 


`회원가입/탈퇴` `로그인/로그아웃` `식당상세` `검색`

<br/>

## 목차
- [화면 구성](#화면-구성)
- [구현](#구현)
- [트러블 슈팅](#트러블-슈팅)

<br/>

- - -

<br/>

## 화면 구성

> 로그인/회원가입

| 로그인 | 회원가입 | 비밀번호 찾기 |
| --- | --- | --- |
| ![](./docs/로그인.png)  | ![](./docs/회원가입.png)  | ![](./docs/pw찾기.png)  |

<br/>

> 메인화면

| 비회원 메인화면 | 회원 메인화면 | 헤더 드롭다운 |
| --- | --- | --- |
| ![](./docs/메인비회원.gif)  | ![](./docs/메인회원.gif)  | ![](./docs/헤더드롭다운.gif)  |

<br/>

> 글 작성

| 이미지 첨부 | 식당명 검색 | 태그 등록 |
| --- | --- | --- |
| ![](./docs/글쓰기1.gif)  | ![](./docs/글쓰기2.gif)  | ![](./docs/글쓰기3.gif)  |

| 글 상세 | 글 수정 | 글 삭제 |
| --- | --- | --- |
| ![](./docs/글상세.gif)  | ![](./docs/글수정.gif)  | ![](./docs/글삭제.gif)  |

<br/>

> 검색

| 기본 검색 | 추천 태그 클릭해서 검색 |
| --- | --- | 
| ![](./docs/검색기본.gif) | ![](./docs/검색태그클릭.gif) |

| 단일 태그 입력해서 검색 | 다중 태그 입력해서 검색 |
| --- | --- | 
| ![](./docs/검색태그입력.gif) | ![](./docs/검색다중태그입력.gif) |

<br/>

> 식당 상세 페이지

| 식당 상세 |
| --- |
| ![](./docs/식당찜하기.gif) |

<br/>

> 마이페이지

| 마이페이지 | 비밀번호 변경 |
| --- | --- | 
| ![](./docs/마이페이지.gif) | ![](./docs/마이페이지pw.gif) |

| 회원 탈퇴 | 탈퇴 유효성 검사 |
| --- | --- | 
| ![](./docs/탈퇴.gif) | ![](./docs/탈퇴유효성.gif) |


<br/>

- - -

<br/>

## 구현


<details><summary> 로그인 </summary>

<br/>

- 일반 로그인 및 카카오 API를 이용한 로그인 가능


-  카카오 아이콘 클릭 시 회원가입이 되어 있지 않으면 회원가입, 되어 있으면 카카오 로그인으로 이동
-  ‘로그인’ 버튼 클릭 시 유효성 검사 수행
   
   ``` 
   - 이메일/비밀번호 미입력 또는 불일치 시 ‘아이디, 비밀번호를 확인하세요.’ alert 출력
   - 일치 시 로그인 후 회원 메인화면으로 이동
   ```
- ‘회원가입’ 버튼 클릭 시 회원가입 페이지로 이동
- ‘비밀번호를 잊으셨나요?’ 텍스트 클릭 시 비밀번호 찾기 페이지로 이동
</details>


<details><summary> 회원가입 </summary>

<br/>

- 중복 확인 버튼 클릭 시 입력한 이메일의 중복 여부 확인

 
   ```
   중복 이메일로 회원가입 진행 시 FAIL
   ```

- 비밀번호 제약 조건: 8 자 이상, 숫자/대소문자/특수문자 포함

- 감긴 눈 아이콘 클릭 시 입력한 비밀번호 숨기기 해제
- 성별/프로필 아이콘 라디오 버튼 형식으로 선택
- ‘회원가입’ 버튼 클릭 시 빈 정보 유무에 따라
   ```
   - SUCCESS: ‘회원가입 완료’ alert 출력 후 비회원 메인화면으로 이동
   - FAIL: 경고 alert 출력
   ```
</details>


<details><summary> 비밀번호 찾기 </summary>

<br/>

- 이메일을 입력하고 ‘인증번호 전송’ 버튼 클릭 시 입력한 이메일의 존재 여부 확인 후

 
   ```
   - 존재하지 않는 이메일일 경우 ‘존재하지 않는 이메일입니다.’ 메시지 출력
   - 존재하는 이메일일 경우 인증번호 메일 전송
   ```

- 발송된 인증번호 입력 후 ‘다음’ 버튼 클릭 시 일치 여부 유효성 검사
   ```
   - SUCCESS: 비밀번호 재설정 화면으로 이동
   - FAIL: ‘인증번호가 일치하지 않습니다.’ 메시지 출력
   ```

- 새로운 비밀번호 설정
   ```
   - 제약조건: 8 자 이상, 숫자/대소문자/특수문자 포함
   - 제약조건에 맞지 않는 상태로 변경 시 ‘비밀번호를 다시 확인해 주세요.’ 메시지 출력
   ```

- 새로운 비밀번호 확인
   ```
   - 불일치 상태로 변경 시 ‘비밀번호가 일치하지 않습니다.’ 메시지 출력
   ```

- 감긴 눈 아이콘 클릭 시 입력한 비밀번호 숨기기 해제

- 비밀번호 변경 성공 시 로그인 페이지로 이동
</details>

<details><summary> 비회원 메인화면 </summary>

<br/>

- 비회원과 회원 메인 화면의 헤더 아이콘 상이

 
   ```
   - 비회원: 로그인, 회원가입으로 이동하는 아이콘
   ```

- 랜덤 추천 식당을 2 개 출력 (새로고침 시마다 변경)
   ```java
   Random random = new Random();
  int randomNumber = random.nextInt(340) + 1; // 1~341 범위의 랜덤 숫자 생성
  
  Map<String, Object> restMap = new HashMap<String, Object>();
  restMap.put("start", randomNumber);
  restMap.put("end", randomNumber+1);
  
  List<RestVO> rest1 = null;
  rest1 = restService.selectRestList(restMap);
   ```
</details>

<details><summary> 회원 메인화면 </summary>

<br/>

- 비회원과 회원 메인 화면의 헤더 아이콘 상이

 
   ```
   - 검색 페이지로 이동하는 아이콘
   - 마이페이지 및 로그아웃 페이지로 이동하는 아이콘 (Mouseover > Mini menu bar Dropdown)
   ```

- 헤더 드롭다운

   ```html
    <!--jsp/egovframework/common/header.jsp-->

    <div class="dropdown">
	   <i class="fa-regular fa-user header_user"></i>
	   <div class="dropdown-content">
			   <a href="${pageContext.request.contextPath}/mypage.do">마이페이지</a>
			   <a href="${pageContext.request.contextPath}/logout.do">로그아웃</a>
	   </div>
   </div>

   <style>
	/* 드롭다운 */
	.dropdown {
		positive: relative;
		display: inline-block;
	}
	
	.dropbtn {
		cursor: pointer;
	}
	
	.dropdown-content {
		font-family: 'Noto Sans KR', sans-serif;
		display: none;
		position: absolute;
		z-index: 1; /*다른 요소들보다 앞에 배치*/
		font-weight: 400;
		background-color: #f9f9f9;
		min-width: 100px;
	}
	
	.dropdown-content a {
		font-family: 'Noto Sans KR', sans-serif;
		display: block;
		text-decoration: none;
		color: rgb(37, 37, 37);
		font-size: 12px;
		padding: 12px 20px;
	}
	
	.dropdown-content a:hover {
		background-color: #ececec
	}
	
	.dropdown:hover .dropdown-content {
		display: block;
	}
	</style>
   ```

- 내가 쓴 글에서 형태소 분석(komoran library)을 통해 키워드 추출
   - 사용한 빈도수가 높은 순으로 8 개 출력
   ```java
    // com.EatStamp.service.impl.WordAnalysisServiceImpl

	@Override
	public Map<String, Integer> selectText(Map<String, Object> map) throws Exception {
		
		List<StampVO> stampList = keywordMapper.selectText(map); //내가 쓴 글의 content만 추출해서 분석할 문장에 삽입
		Map<String, Integer> rMap = new HashMap<String, Integer>()	; //분석된 결과
		List<Map<String, Integer>> rList = new ArrayList<Map<String, Integer>>(); //분석된 결과값 여러 개를 List로 통합
		
		if(stampList.size() > 0) { //분석할 문장이 있으면
			for(StampVO vo : stampList) {
				String content = vo.getS_content();
				rMap = doWordAnalysis(content); //분석 실행
				if (rMap.size()>0) { //분석할 문장에 명사가 있으면 (= 분석할 문장 사이즈가 0보다 크면) rList에 추가
					rList.add(rMap);
				}
				//System.out.println("rMap1: " + rMap);
			}

	        for (Map<String, Integer> map2 : rList) {
	            for (Map.Entry<String, Integer> entry : map2.entrySet()) {
	                String key = entry.getKey();
	                Integer value = entry.getValue();

	                //rMap에 Key가 이미 존재한다면 (map.containKey() 메소드 = 특정 key가 Map에 존재하는지 체크)
	                if (rMap.containsKey(key)) { 
	                    rMap.put(key, rMap.get(key) + value); //key에 value값 추가?
	                } else { //rMap에 존재하지 않는 key라면
	                    rMap.put(key, value); //key와 value값 같이 추가
	                }
	            }
	        }
	        System.out.println("키워드=빈도: " + rMap);
	        
	        // 내림차순 정렬
	        List<Map.Entry<String, Integer>> sortedList = new ArrayList<>(rMap.entrySet());
	        sortedList.sort(Map.Entry.<String, Integer>comparingByValue().reversed());

	        // 상위 8개 출력
	        int count = 0;
	        Map<String, Integer> result = new LinkedHashMap<>();
	        for (Map.Entry<String, Integer> entry : sortedList) {
	            result.put(entry.getKey(), entry.getValue());
	            count++;
	            if (count == 8) {
	                break;
	            }
	        }
	        System.out.println("빈도 높은 순으로 8 개 추출: " + result);
	        return result;
			}
		  return rMap;
	}

    // com.EatStamp.web.MemberController

	//================키워드 가져오기==============//
	HashMap<String, Object> paramMap = new HashMap<String, Object>();
	paramMap.put("mem_num", member.getMem_num());
	
	Map<String, Integer> rMap = (Map<String, Integer>) wordAnalysisService.selectText(paramMap);

	
	if(rMap == null) {
		rMap = new HashMap<String, Integer>();
	}
	
	List<Map.Entry<String, Integer>> list = rMap.entrySet()
			.stream()
			.collect(Collectors.toList());
	
	model.addAttribute("rMap", rMap);
   ```
   - 색상은 랜덤 색상 추출 방식으로 출력
   ```html
    <!--jsp/main.jsp-->

	<span class="main-title">가장 많이 등록된 키워드</span>
		<table>
			<tr>
		        <c:choose>
		            <c:when test="${!empty rMap}">
		                <c:forEach var="rMap" items="${rMap}">
		                    <td>${rMap.key}</td>
		                </c:forEach>
		            </c:when>
		            <c:otherwise>
		            	<div class="no-list">
		            		<span class="no-list">더 많은 기록을 남겨 보세요!</span>
		            	</div>
		            </c:otherwise>
		        </c:choose>
			</tr>
		</table>

		<script type="text/javascript">
		function randomDullColor() {
			  const colors = [
			    "#BFC8D7","#E2D2D2","#A2B59F","#D2D5B8","#BDC2BB",
			    "#C9BA9B","#D18063","#C9CBE0","#909FA6","#D5CB8E",
			    "#ECD4D4","#CCDBE2","#DEB3CF","#EECFBB","#F6B99D",
			    "#D5E1DF","#EACACB","#E2B3A3","#A3B6C5","#B1D3C5",
			    "#CFDD8E","#E4BEB3","#F5DDAD","#F1BCAE","#C9DECF",
			  ];
			  const randomIndex = Math.floor(Math.random() * colors.length);
			  const mixColor = colors[randomIndex];
			  
			  // 선택된 색상을 배열에서 제거 (색상이 중복되지 않도록)
			  colors.splice(randomIndex, 1);
			  
			  console.log(mixColor);
			  return mixColor;
			}
		
		for(td of document.getElementsByTagName('td')){
			  td.style.backgroundColor = randomDullColor();
			}
		</script>
   ```

- 추출한 키워드에 적합한 추천 식당 데이터를 2 개 출력
   ```java
    // com.EatStamp.web.MemberController

	//================키워드 기반 추천 식당 가져오기==============//
	Map<String, Object> comMap = new HashMap<String, Object>();
	Object[] keyArray = rMap.keySet().toArray();
	
	for (int i = 0; i < 8; i++) {
		if(i < keyArray.length) {
			comMap.put("k" + (i + 1), keyArray[i]);
		}else {
			comMap.put("k" + (i + 1), "null"); 
			//분석할 text가 없어서 rMap에 key가 안 들어가 있을 때 default value 넣어 줌
		}
	}
	
	comMap.put("start", 1);
	comMap.put("end", 2);
	
	int recCount = restService.selectRecRowCount(comMap);
	
	List<RestVO> recRest = null;
	recRest = restService.selectRecList(comMap);
	
	model.addAttribute("recRest", recRest);
	model.addAttribute("recCount", recCount);
   ```

- 내 기록/찜한 식당을 2 개 출력
   ```
   더보기 클릭 시 마이페이지 내의 내 기록/찜한 식당 목록 화면으로 이동
   ```

</details>

<details><summary> 글 작성 </summary>

<br/>

- 이미지 첨부
   ```
   - 업로드 가능 확장자: png, jps, jpeg, bmp
   - 파일명을 랜덤 생성해서 저장 
   ```
   ```java
    // com.EatStamp.web.StampController

	//날짜별로 폴더를 생성해서 파일을 관리
	SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
	Date date = new Date();
	String fileLoca = sdf.format(date);
	
	//저장할 폴더 경로
	String uploadPath = "D:/java/workspace/EatStamp3/src/main/webapp/images/imageUpload/upload" + fileLoca;
	
	File folder = new File(uploadPath);
	if(!folder.exists()) {
		folder.mkdir(); //폴더가 존재하지 않는다면 생성
	}
	
	String fileRealName = file.getOriginalFilename();
	
	//파일명을 고유한 랜덤 문자로 생성
	UUID uuid = UUID.randomUUID();
	String uuids = uuid.toString().replaceAll("-", "");
	
	//확장자 추출
	String fileExtension = fileRealName.substring(fileRealName.indexOf("."), fileRealName.length());
	
	System.out.println("저장할 폴더 경로: " + uploadPath);
	System.out.println("실제 파일명: " + fileRealName);
	System.out.println("폴더명: " + fileLoca);
	System.out.println("확장자: " + fileExtension);
	System.out.println("고유랜덤문자: " + uuids);
	
	String fileName = uuids + fileExtension;
	System.out.println("변경해서 저장할 파일명: " + fileName);
	
	//업로드한 파일을 서버의 지정한 경로 내에 실제로 저장
	File saveFile = new File(uploadPath + "\\" + fileName);
	file.transferTo(saveFile);
   ```

- 이미지 첨부 시 실시간 미리보기 출력
   ```java
    // com.EatStamp.web.StampController

	//게시글의 이미지 파일 전송 요청
	//ResponseEntity: 응답으로 변환될 정보를 모두 담은 요소들을 객체로 만들어서 반환해 줌
	@GetMapping("/display")
	public ResponseEntity<byte[]> getFile(String fileLoca, String fileName) throws IOException{
		
		File file = new File("/EatStamp3/src/main/webapp/images/imageUpload" + fileLoca + "\\" + fileName);
		System.out.println(file);
		
		ResponseEntity<byte[]> result = null;
		
		HttpHeaders headers = new HttpHeaders();
		
		//probeContentType: 파라미터로 전달받은 파일의 타입을 문자열로 변환해 주는 메서드
		//사용자에게 보여 주고자 하는 데이터가 어떤 파일인지를 검사해서 응답 상태 코드를 다르게 리턴할 수도 있음
		headers.add("Content-Type", Files.probeContentType(file.toPath()));
		
		result = new ResponseEntity<>(FileCopyUtils.copyToByteArray(file), headers, HttpStatus.OK);
		
		return result;
	}
   ```
   ```html
    <!--jsp/stamp/write.jsp-->

	<!-- 이미지 미리보기 -->
	<div class="fileDiv">
		<img class="fileImg" src="${pageContext.request.contextPath}/images/egovframework/common/no_image.png">
	</div>

   <script type="text/javascript">
	function readURL(input){
		if(input.files && input.files[0]){
			
			var reader = new FileReader(); //비동기 처리를 위한 파일을 읽는 자바스크립트 객체
			reader.readAsDataURL(input.files[0]); //readAsDataURL 메서드는 컨텐츠를 특정 Blob이나 File에서 읽어 오는 역할
			$(".fileDiv").css("display","block"); //파일업로드 시 화면에 숨겨져 있는 클래스 fileDiv를 보이게 한다
			
			reader.onload = function(event){ //읽기 동작이 성공적으로 완료되었을 때 실행되는 익명함수
				$('.fileImg').attr("src", event.target.result);
				console.log(event.target); //event.target은 이벤트로 선택된 요소를 의미
			}
		}
	}
	$("#file").change(function(){
		readURL(this); //this는 #file 자신 태그를 의미
	});
   </sctipt>
   ```
- 제목 및 내용 입력 시 (입력한 글자 수/제한 글자 수) 실시간 출력
   ```javascript
	//========글자수 카운트========//
	//제목 textarea에 내용 입력시 글자수 체크
	$(document).on('keyup','#s_title',function(){
		//입력한 글자수 구하기
		let inputLength = $(this).val().length;
		
		if(inputLength<=60){ //60자 이하인 경우
		    //남은 글자수 구하기
		    let remain = inputLength;
		    let text = remain + '/60';
		    //글자수 카운트 업데이트
		    $('#re_first .letter-count').text(text);
		  }else{ //60자를 넘어선 경우
		    $(this).val($(this).val().substring(0,60));
		  }
	});
	//내용 textarea에 내용 입력시 글자수 체크
	$(document).on('keyup','#s_content',function(){
		//입력한 글자수 구하기
		let inputLength = $(this).val().length;
		
		if(inputLength<=140){ //140자 이하인 경우
		    //남은 글자수 구하기
		    let remain = inputLength;
		    let text = remain + '/140';
		    //글자수 카운트 업데이트
		    $('#re_first .letter-count2').text(text);
		  }else{ //140자를 넘어선 경우
		    $(this).val($(this).val().substring(0,140));
		  }
	});
   ```
- ‘검색’ 버튼 클릭 시 자식창에서 검색 자동완성 기능으로 상호명 검색, 부모창으로 값 전송
   ```java
    // com.EatStamp.web.StampController

	//상호명 검색 폼
	@GetMapping("/stamp/rest.do")
	public String restForm() {
		return "stamp/rest";
	}
	
	//상호명 검색 폼에서 전송된 데이터 처리
	@PostMapping(value = "/stamp/rest_ok.do", produces = "text/plain; charset=UTF-8")
	@ResponseBody
	public String rest_ok(String r_name) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("name", r_name);
		
		//int count = restService.selectR_nameRowCount(map);

		List<RestVO> list = restService.selectR_nameList(map);
		
		StringBuilder sb = new StringBuilder();
		if (list != null && list.size() > 0) {
			sb.append("<table>");
			sb.append("<tbody>");
			for (RestVO rest : list) {
				sb.append("<tr><td>")
				  .append("<a href=\"javascript:setParentText('").append(rest.getR_name()).append("');\">")
				  .append(rest.getR_name())
				  .append("</a></td></tr>")
				  .append("<tr><td>").append(rest.getR_add()).append("/ ").append(rest.getR_category()).append("</td></tr>");
			}
			sb.append("</tbody></table>");
		} else {
			sb.append("<p>검색 결과를 찾을 수 없습니다.</p>");
		}

		return sb.toString();
	}
   ```

   ```html
    <!--jsp/stamp/write.jsp-->

	<!-- 가게 검색 -->
	<div class="section2">
		<span class="rest-name">식당명</span>
		<textarea class="form-control" 
			rows="1" name="rest" id="pInput" placeholder="검색 버튼을 눌러 검색하세요" readonly></textarea>
		<label class="input-file-btn" for="searchBtn">검색</label>
		<input id="searchBtn" type="button" value="검색" onclick="rest();" style="display: none;"/>
	</div>
	
	
	<script>
		function rest(){
			url = "rest.do";
			window.open(url,"rest",'width=500,height=400, scrollbars=no, resizable=no');
		}
	</script>
   ```

   ```html
    <!--jsp/stamp/rest.jsp-->

   <script type="text/javascript">
	$(document).ready(function() {
		$("#search-form").submit(function(event) {
			event.preventDefault();
			$.ajax({
				type : "POST",
				url : "rest_ok.do",
				data : $("#search-form").serialize(),
				success : function(result) {
					$("#result-container").html(result);
				}
			});
		});
	});
	
	function setParentText(r_name) {
		  opener.document.getElementById("pInput").value = r_name;
		  window.close();
		}
   </script>
   ```

- 식당 검색이 완료되면 평가를 단일 선택 체크박스로 선택
   ```html

	<!-- 체크박스 -->
	<div class="section3-1">				
		<input type="checkbox" name="s_rate" id="s_rate2" value=2 onclick='checkOnlyOne(this)' style="display: none;"/>
		<label for="s_rate2" class="check-text"><i class="fa-solid fa-check"></i>  좋아요!</label>				
	</div>
	<div class="section3-2">
		<input type="checkbox" name="s_rate" id="s_rate1" value=1 onclick='checkOnlyOne(this)' style="display: none;"/>
		<label for="s_rate1" class="check-text"><i class="fa-solid fa-check"></i>  보통이에요</label>
	</div>
	<div class="section3-3">
		<input type="checkbox" name="s_rate" id="s_rate0" value=0 onclick='checkOnlyOne(this)' style="display: none;"/>
		<label for="s_rate0" class="check-text"><i class="fa-solid fa-check"></i>  별로였어요</label>
	</div>

   <script type="text/javascript">
	//========체크박스========//
	//중복 체크 불가능
	function checkOnlyOne(element) {
	  
	  const checkboxes 
	      = document.getElementsByName("s_rate");
	  
	  checkboxes.forEach((cb) => {
	    cb.checked = false;
	  })
	  
	  element.checked = true;
	}
   </script>
   ```

- #으로 구분되는 태그 등록 가능
   ```java
    // com.EatStamp.service.impl.TagServiceImpl

	@Override
	public void createTagList(StampVO stampVO) {
		Pattern MY_PATTERN = Pattern.compile("#(\\S+)");
		Matcher mat = MY_PATTERN.matcher(stampVO.getS_tag());
		List<String> tagList = new ArrayList<>();
		
		while(mat.find()) {
			tagList.add((mat.group(1)));
		}
		
		System.out.println("Create HashTags Success! -----> " + tagList);
		saveTag(tagList, stampVO.getS_num(), stampVO.getMem_num());
	}

	@Override
	public Boolean saveTag(List<String> tagList, Integer s_num, Integer mem_num) {
		Integer result = 1;
		
		for (String tag : tagList) {
			TagVO findResult = tagMapper.findTagByContent(tag);
			
			//등록된 태그가 아니라면 태그부터 추가
			if(findResult == null) {
				tagMapper.saveTag(tag);
			}
			
			//태그-포스트 매핑 테이블에 데이터 추가
			TagVO findTag = tagMapper.findTagByContent(tag);
			result = tagPostMapper.saveTagPost(findTag.getTag_num(), s_num, mem_num);
		}
		
		return result == 1;
	}
   ```
   ```javascript
   //jsp/write.jsp

	//========태그에 #으로 시작하지 않는 문자열 입력 시 삭제========//
	let tagInput = document.getElementById("s_tag");

	tagInput.addEventListener("input", function() {
	  if (!tagInput.value.startsWith("#")) {
	    tagInput.value = "";
	  }
	});
   ```

- ‘등록’ 버튼 클릭 후 SUCCESS 시 작성글 상세페이지로 이동
- ‘취소’ 버튼 클릭 시 ‘기록을 취소하시겠습니까?’ alert 출력 후 이전 페이지로 복귀
</details>

<details><summary> 글 상세 </summary>

<br/>

- 사용자의 프로필, 글 제목, 작성일시, 이미지, 내용 출력

- 글 작성에서 검색한 장소와 평가 표시
- 입력한 태그 출력
```
- ‘수정’ 버튼 클릭 시 글 수정 페이지로 이동
- ‘삭제’ 버튼 클릭 시 ‘삭제하시겠습니까?’ alert 출력 후 ‘예’를 선택하면 게시글 삭제 및 목록 페이지로 이동
- ‘목록’ 버튼 클릭 시 마이페이지 내 글 목록 페이지로 이동
```
</details>

<details><summary> 글 수정 </summary>

<br/>

- 이미 등록된 이미지가 있다면 초기 미리보기 이미지 세팅
   ```html
   <!--jsp/stamp/update.jsp-->
   <!-- 이미지 미리보기 -->
     <div class="fileDiv">
         <c:if test="${stamp.s_fileName == null}">				
		       <img class="fileImg" src="${pageContext.request.contextPath}/images/egovframework/common/no_image.png">
				</c:if>
				<c:if test="${stamp.s_fileName != null}">
					<img class="fileImg" src="${pageContext.request.contextPath}
						/images/imageUpload/upload${stamp.s_fileLoca}/${stamp.s_fileName}">
				</c:if>
     </div>
   ```

- 이미지 파일 변경 시 이미 등록된 이미지 삭제 후 재등록
   ```java
    // com.EatStamp.web.StampController

    // 기존 파일 정보 가져오기
    String oldUploadPath = stamp.getS_uploadPath();
    String oldFileLoca = stamp.getS_fileLoca();
    String oldFileName = stamp.getS_fileName();

    if (file != null && !file.isEmpty()) {
        // 기존 파일 삭제
        if (oldFileName != null && !oldFileName.isEmpty()) {
            File oldFile = new File(oldUploadPath + "\\" + oldFileName);
            if (oldFile.exists()) {
                oldFile.delete();
            }
        }

        SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
        Date date = new Date();
        String fileLoca = sdf.format(date);

        String uploadPath = "D:/java/workspace/EatStamp3/src/main/webapp/images/imageUpload/upload" + fileLoca;

        File folder = new File(uploadPath);
        if (!folder.exists()) {
            folder.mkdir();
        }

        String fileRealName = file.getOriginalFilename();

        UUID uuid = UUID.randomUUID();
        String uuids = uuid.toString().replaceAll("-", "");

        String fileExtension = fileRealName.substring(fileRealName.indexOf("."), fileRealName.length());

        String fileName = uuids + fileExtension;

        File saveFile = new File(uploadPath + "\\" + fileName);
        file.transferTo(saveFile);

        stamp.setS_uploadPath(uploadPath);
        stamp.setS_fileLoca(fileLoca);
        stamp.setS_fileName(fileName);
        stamp.setS_fileRealName(fileRealName);
    }
   ```

   ```javascript
   //jsp/stamp/update.jsp

    const formData = new FormData();
    const data = $('#file');
    
    if ($('#file').val()) {
        let file = $('#file').val();
        console.log('mem_num: ', member);
        console.log('file: ', file);
        
        formData.append('file', data[0].files[0]);

        file = file.slice(file.indexOf('.') + 1).toLowerCase();
        console.log('확장자: ', file);
        if (file !== 'jpg' && file !== 'png' && file !== 'jpeg' && file !== 'bmp') {
            alert('이미지 파일(jpg, png, jpeg, bmp)만 등록이 가능합니다.');
            $('#file').val('');
            return;
        } else if (member === '') {
            alert('로그인이 필요한 서비스입니다.');
            return;
        }
    }
   ```

- ‘수정’ 버튼 클릭 후 SUCCESS 시 작성 내용 수정, 해당 게시글 상세 페이지로 이동
- ‘취소’ 버튼 클릭 시 ‘취소하시겠습니까?’ alert 출력 후 ‘예’를 선택하면 게시글 상세 페이지로 이동
</details>

<details><summary> 내 글 목록 </summary>

<br/>

- ‘+’ 아이콘 클릭 시 글 작성 페이지로 이동

- 사용자가 작성한 글을 한 페이지에 5 개씩 목록으로 출력

- 작성글이 6 개 이상일 경우 PagingUtil을 이용해 페이지 목록 표시 및 이동
   ```xml
    <!--StampMapper.xml-->
    <!--Oracle rnum을 MySQL rnum으로 변환-->

	<!-- 글목록 -->
	<select id="selectList" parameterType="map" resultType="stampVO">
		SELECT 
			s_num, 
			s_title, 
			s_content, 
			s_uploadPath,
			s_fileLoca, 
			s_fileName, 
			s_fileRealName, 
			s_rate, 
			reg_date, 
			r_name, 
			mem_num
		FROM(
			SELECT
				@rownum:=@rownum+1 AS rn,
				s_num,
				s_title,
				s_content,
				s_uploadPath,
				s_fileLoca, 
				s_fileName, 
				s_fileRealName, 
				s_rate,
				reg_date,
				r_name,
				mem_num
			FROM eatstamp.stamp, (SELECT @rownum:=0) TMP
			WHERE mem_num = #{mem_num}
			ORDER BY s_num DESC
			) t1
		WHERE rn BETWEEN #{start} and #{end}
		
	</select>
   ```
</details>

<details><summary> 검색 </summary>

<br/>

- 검색 전 초기 세팅
   ```
   - 검색창과 로그인한 사용자가 작성한 적 있는 추천 해시태그 목록, 토글 버튼만 출력
   - 토글 버튼 클릭 시 전체 식당 목록과 내가 쓴 글 목록 출력
   ```

- 추천 해시태그 목록 클릭 시 해당 해시태그가 존재하는 게시글 검색 및 출력

- 일반 검색 시 해당 키워드가 존재하는 게시글 및 식당 정보 출력 (토글 버튼으로 게시글/식당 정보 이동)
- ‘#’ 붙여서 검색 시 해당 해시태그가 존재하는 게시글만 검색 및 출력
   ```
   - 단일 태그 검색 및 다중 태그 검색 가능
   - 다중 태그 검색(해시태그를 두 개 이상 검색) 시 검색한 해시태그가 존재하는 게시글 모두 출력
   ```
- 검색 결과가 6 건 이상이면 PagingUtil을 이용해 페이지 목록 표시 및 이동
</details>
