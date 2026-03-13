// arrary_func.js
// 여러개의 값을 변수에 저장 할 수 있는 배열
// 특정 동일 주제에 묶여있는 2개 이상의 값 배열 묶음

// 배열 사용안한 경우 
const month = '월';
const tue ='화';
console.log(month,tue);
// 배열 사용한 경우
const day = ['월','화','수','목','금','토','일'];
console.log(day); // 모든배열출력
console.log(day[0]); // 배열값 중 원하는 인덱스 출력
console.log(day.length); //요일 객체의 길이속성

//=====================================배열기초1.
// 원하는 색상을 자유롭게 6개 배열로 저장하고 
// 그 중 좋아하는 색상만 인덱스로 골라 콘솔로그로 출력하기
const color=['빨강','주황','노랑','초록','파랑','보라'];
console.log(color);
console.log(`내가 좋아하는 색상은 ${color[5]}입니다.`);

//=====================================배열생성법
// new Array() 내장함수 선언법
let wh = new Array(2); // 숫자2대입(x), 빈배열위치2자리삽입(o)
console.log(wh); 

wh[0] = 100;
wh[1] = 50;
console.log(wh); 

//=====================================신발 쇼핑몰 색상/사이즈 배열
let colorSize = new Array(2); //빈배열2개준비
//colorSize[0] = prompt('pink, white 중 하나를 선택하세요');
//colorSize[1] = prompt('220, 230, 240 중 하나를 선택하세요');
colorSize[0] = 'pink';
colorSize[1] = 220;
let order = `주문옵션 : 색상:${colorSize[0]}, 사이즈:${colorSize[1]}`;
console.log(order);

//=====================================의류쇼핑몰 선택옵션 배열로 만들기
// 사이즈 : S M L 
// 색상 : 화이트 블랙 그레이
// 추가상품 : 양말 손수건

let shop = new Array(3);
// shop[0] = prompt('사이즈 S M L 중 하나를 선택하세요');
// shop[1] = prompt('색상 화이트 블랙 그레이 중 하나를 선택하세요');
// shop[2] = prompt('추가상품 양말 손수건 중 하나를 선택하세요');
shop[0] = 'S';
shop[1] = '화이트';
shop[2] = '양말';
let shopOrder = `주문옵션 : 사이즈:${shop[0]}, 색상:${shop[1]}, 추가상품:${shop[2]}`;
console.log(shopOrder);

//=====================================배열과 사용자정의 함수
// 날씨 소식을 안내하는 앱
// 출력예시1) 오늘은 맑음, 내일은 비 소식이 있습니다
// 출력예시2) 오늘은 흐림, 내일은 눈 소식이 있습니다
// 출력예시3) 오늘은 눈, 내일은 맑음 소식이 있습니다

// 날씨상태를 저장한 배열
const weahter = ['맑음','흐림','비','눈']
// 함수 실행 시 마다 다른 데이터를 전달하는 매개변수
weatherFunc(weahter[0],weahter[2]); //호출
weatherFunc(weahter[1],weahter[3]);
weatherFunc(weahter[3],weahter[0]);
function weatherFunc(today,tomorrow){
    let msg = `오늘은 ${today}, 내일은 ${tomorrow} 소식이 있습니다.`;
    console.log(msg);
}

//=====================================영화 좌석 예매 배열+함수
// 일반 2명 좌석 선택 기준
// 일반 1명당 표 가격은 10,000원 => 2명 20,000원

let cgvSeat = new Array(2); //빈 좌석2개 준비
cgvSeat[0]='F9'; 
cgvSeat[1]='F10';
const price = 10000; ///일반 1명 만원준비

// 함수호출
cgvFun(cgvSeat[0],cgvSeat[1],price*cgvSeat.length);
function cgvFun(seat1,seat2,won){
    let movie = `일반 2명 예약한 좌석은 ${seat1},${seat2}`;
    movie += `결제 가격은 ${won.toLocaleString('ko-kr')}입니다.`
    console.log(movie);
}
//=====================================구구단 함수
// 아래 함수 활용 매개변수 추가와 함께 2단~9단까지 모두 출력할 수 있는 함수 만들기
// +아래 함수의 틀린 부분 찾아서 고치기

// 3.함수 호출 위치에 2에서 생성한 매개변수에 전달하고 싶은 값 입력하기
// 함수명(매개변수전달값);
// function 함수명(매개변수){매개변수가 들어간 반복출력값;}

//함수호출
dan99(2); //()안에 생성된 매개변수 자리에 대입해야 하는 값 입력위치
dan99(3);
dan99(4);
dan99(5);
dan99(6);
dan99(7);
dan99(8);
dan99(9);

// 1.반복 출력하고 싶은 대상은 함수로 생성하기
// function 함수명(){반복출력명령어}
//2. 함수 호출 시 마다 바꾸고 싶은 값이 있다면 그 값 개수만큼 매개변수로 만들기
// 함수명()://호출
// function 함수명(){반복출력명령어} 바뀌는 값이 없을 때
// function 함수명(매개변수){반복출력명령어} 바뀌는 값이 1개일때
// function 함수명(매개변수1,매개변수2){반복출력명령어} 바뀌는 값이 2개일때

function dan99(num) { //num 매개변수를 생성(호출 시 대입받는 값을 받는 위치)
    let dan = '';
    dan = `${num}x1=${num*1}`; //num 호출 시 대입받은 값을 최종 전달받는 위치
    dan += `${num}x2=${num*2}`;
    dan += `${num}x3=${num*3}`;
    dan += `${num}x4=${num*4}`;
    dan += `${num}x5=${num*5}`;
    dan += `${num}x6=${num*6}`;
    dan += `${num}x7=${num*7}`;
    dan += `${num}x8=${num*8}`;
    dan += `${num}x9=${num*9}`;
    console.log(dan);
}
