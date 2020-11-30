# jQuery

## 1. jQuery의 특징

1. html + CSS + javascript를 통합한 하나의 라이브러리
2. 굉장히 쉬운 접근방법을 제공한다. --> 전체 처리 속도 감소.
3. 모든 javascript 문법은 그대로 사용 가능.
4. 대소문자 구별
5. " or "은 구별하지 않음.
6. 라이브러리를 사용하는 방법
   1. CDN (Contents Delivery Network)
   2. 라이브러리를 해당 프로젝트내에 복사해서 사용.
7. jQuery는 모든 것이 함수화되어 있기 때문에 함수에 대한 이해가 좋을수록 jQuery의 이해도가 높아질 수 있다.
   - ex) id='abc'인 요소를 선택
8. jQuery는 "", ''를 구별하지 않는다.
 
## 2. jQuery 코드 작성 방법

javascript 코드는 다음과 같다.

```javascript
   var id = document.getElementById('abc');
   
   var getID = function(id) {
      return document.getElementById(id);
   }

   var id = getID('abc');
```

jQuery 코드는 다음과 같다.

```jquery
   var id = $('#abc');
```
## 2.1. jQuery 라이브러리 다운로드 방법

1. http://www.jquery.com 에서 라이브러리를 다운 받자.
   - https://code.jquery.com/jquery-3.5.1.min.js
   - 오른쪽 클릭 후 '다른 이름으로 링크 저장'

### eclipse EE 버전 설치 후 환경 설정

1. 한글 인코딩 작업: UTF-8
2. 자바 연결 확인
3. 웹서버 설정: JSP 컨테이너(톰캣)
4. 현재 프로젝트에 웹서버 설정

### jsp 문법
<%@   %>
- 지시문

<%!   %>
- 선언문

<%=   %>
- 표현식

<%    %>
- scriptlet


## 3. jQuery 설정 방법 (2가지 방법)

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Intro</title>
	<!-- 
	첫 번째 방법
	<script src="https://code.jquery.com/jquery-3.5.1.js" 
      integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" 
      crossorigin="anonymous"></script>
     -->
      <!-- 
      CDN 형태로 가져다 썼다.
      네트워크가 원활하지 않은 경우에는 jQuery 코드들이 정상적이지 않을 수 있다.
      그래서 그 보안책으로 네트웍이 불안정, 사용 불가능한 환경에서도 jQuery 라이브러리 환경을 쓰고싶다면?
      라이브러리를 다운받아서 설치해서 써야 한다. 
      WebContent 프로젝트에 lib 폴더 만들고 jQuery 다운 받은 파일 넣어놓기-->
      
      <!-- 두 번째 방법 -->
	 <script src='./lib/jquery-3.5.1.min.js'></script>
</head>
<body>

	<% //스크립틀릿(scriptlet) : java coding area
	  // java(표준 출력 장치): System.out.println()
	  // javascript: document.write(), console.log()
	out.print("hi jQuery...");
	
	%>
	<h1 id='header'>jQuery Test를 위한 태그(II)</h1>
	
	<script>
	$('#header').css('color', '#f00');
	
	</script>
</body>
</html>
```

## 4. jQuery 코드와 CSS 코드 비교

CSS에서의 코드

- id: #element (#header { color: #f00; })
  - 정적이다.
- class: .element
- #ele > ele 
- #ele ele
- #ele[]

jQuery에서의 코드

- $(ele).css(key, value)
  - 동적이다.
- $('#header').css('color', '#f00');

## 5. DOM ?

- HTML을 트리구조로 표현한 것.
  
- selectors, Attributes, Traversing, Manipulation, CSS
- Event, Effects, Ajax


## 6. JSON 표기 방법

함수니까 기본 문법까지는 동일하다.
 - $('#index > #footer').css();


1. KEY:VALUE => { KEY:VALUE, KEY:VALUE, ... }
2. 배열 => [v1, v2, v3, ... ]
3. 혼합형: 
   1. 배열 안에 MAP
      - [{  }, {  }, {  }, ... ]
   2. MAP 안에 배열
      - { key: [,,,,] }


jQuery로 작성한 코드

```javascript
<script>
$('#index > #footer').css('height', '100px');
$('#index > #footer').css('background-color', '#bbb');
$('#index > #footer').css('text-align', 'center');
$('#index > #footer').css('line-height', '100px');
</script>
```

JSON으로 작성한 코드

```javascript
<script>
$('#index > #footer').css({
	'height' 			: '100px',
	'background-color': '#bbb',
	'text-align' 		: 'center',
	'line-height' 		: '100px'
});
</script>
```

## 7. MVC

- M: model(데이터)
- V: view(UI, UX)
- C: Control(code)

## 8. parameter값 가져오는 방법

index.jsp?inc=./jquery/filter.jsp


