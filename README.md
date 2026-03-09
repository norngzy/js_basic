# 제이쿼리
* 자바스크립트를 이용한 HTML 동작처리를 좀 더 쉽게 해주는 라이브러리 언어 제이쿼리
* `<title></title>` 태그 다음 위치에 
 **CDN주소연결필수** https://cdnjs.com/libraries/jquery
## 제이쿼리 기본 문법
* `$()` 제이쿼리 기본 선언법
* `$('.클래스명')`
* `$('.아아디명')`
* `$('.태그명')`
* `''` 따옴표 안 CSS선택자처럼 원하는 대상 작성 가능
* `$('.대상').show();` 대상보이기
* `$('.대상').hide();` 대상숨기기
* `$('.대상').css('속성','값');` CSS적용하기
* `$('.대상').removeClass();` class제거하기 (괄호 비우면 모든 클래스제거)
* `$('.대상').adClass('추가 클래스명');` class적용하기 
# 자바스크립트 260306
ex) <button type="button" id="btn" onclick"prompt()"></button>
* obect 객체(태그) ex)buttton 
* event 이벤트(실행되는동작/속성) ex)onclick
* function 함수 / method 메소드  -(이벤트로인해)실행
    * 클래스 내부에 선언된 함수는 메소드 클래스와 관련없다면 일반적으로 전부 함수라고 부름
=> "객체에 이벤트 했을 때 객체메소드(함수) 실행"
* async : 페이지 로드 관계없이 다운로드 후 즉시 실행 
    * <script src="./scripts/start.js" async></script>
* defer : 페이지 로드가 완료된 후 즉시 실행 / 외부스크립트시에만 사용가능 
    * <script src="./scripts/start.js" defer></script>
    * defer없이 html동적 js를 아래파일에서 작성 시 -> error (읽기전이기때문)
    * script 위치 무시하고 html 모두 읽은 후 -> script 처리 (ok)