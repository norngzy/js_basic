// operator.js
let greeting = '안녕'+'봄'; //'안녕 봄' 반복데이터 변수
// let greeting 변수생성
// '안녕'+'봄' 문자열 2개를 연결
// = 우측의 값을 좌측 변수로 대입
console.log(greeting+'잘가'); //'잘가' 일회성데이터
// console.log() 객체.함수() 
// console 출력되고 싶은 위치대상(객체)
// log 실행하고 싶은 함수 명령어
console.log(typeof(greeting)); //변수의 데이터 타입은? 
// greeting 변수의 데이터타입을 typeof함수로 확인하고 
// consol.log로 출력한다
let a = 1; //숫자 대입 a
let b = '1'; //문자 대입 b 
// 결과를 담는 변수
let total = a+b; // 1+'1'
// 결과를 출력하는 함수
console .log(total); // b가 문자이기때문에 1 1 로 나옴 
let x; 
const y = '20';
console.log(x,y); // x값이 정의안됨(undefined), y는'20'
console.log(y+a); // 201
// y 초기화 하고 싶다 .. -> 불가능 -> const 상수라서..! 변경할수없는수 니까..~!!
x = '10'; // 정의안됨 -> 문자 10 대입 
console.log(x+y); // 1020
x = null; // x 변수의 값을 초기화한다 nul==0
console.log(x+y); // null20 / null->문자취급
console.log(x+a); // y는문자 a는 숫자 -> 1 
console.log('-----------------------------------------------------')
// log(), typeof()
// prompt() 질문,답변 창을 띄우는 함수 (문자열로 인식)
// Number()
// 괄호안의 데이터를 숫자로 변환하는 함수
// 1+4=?
// 유치원생 대상 두 수를 더하는 문제 프로그래밍
// const num1 = prompt('첫번째 수를 입력하세요'); /* prompt -> 문자 */
const num1 = Number(prompt('첫번째 수를 입력하세요'));
// 받을때부터 숫자로 변환
// 1. const num1 상수 생성
// 2. prompt() 질문하고 사용자에게 문자열 답변받고 
// 3. Number() 문자열을 숫자로 변환
// 4. 대입연산자로 num1 대입완료
const num2 = Number(prompt('두번째 수를 입력하세요'));
// const num2 = prompt('두번째 수를 입력하세요');
// console.log(num1, typeof(num1));
// 결과 담는 변수 
// 문자로 받고 숫자로 변환
// const result = Number(num1) + Number(num2); // 문자인데이터를 숫자로 변환 -> Number
const result = num1 + num2;
// 결과 출력
console.log(result);
// 1+1의 정답은 2입니다~!
console.log('${num1}+${num2}의 정답은 ${result}입니다~!')