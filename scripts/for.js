//반복문 for
//for(1초기변수생성(i, j, k, m, n)과 초기값대입; 2조건식; 4증감식){3반복실행문}

//자바스크립트 10번 반복 출력 (반복문 이용)
//DOM요소(li[index]) 20개라면 1~20 기준으로 생각해서 숫자데이터로 생각해야함
for(let i=0; i<10; i++){//증감이 더 이상 안쓰이니까;안붙임
console.log('자바스크립트');
}

//"CSS" 5번 반복 출력
for(let i=0; i<=4; i++)//1부터 시작해서 4랑같거나4까지 증감한다
    {console.log('css');}

//"HTML" 20번 반복 출력
for(let i=0; i<20; i++){console.log(`html${i+1}`);}

//구구단 2단 반복 출력 "2x1=2"
//반복문 없이 함수 활용한 2단 예시
function dan2(){
    let num = 2;
    let result = '';
    result += `${num}x1=${num*1}`;
    result += `${num}x2=${num*2}`;
    result += `${num}x3=${num*3}`;
    return result;
}
//반복문 활용
const danResult =document.querySelectorAll('.dan .result');
console.log(danResult);
//1 시작한 예시
for(let i=1; i<10; i++){ //1부터 시작해서 10까지 증감한다
    let result = `2x${i}=${2*i}<br>`;
    danResult[0].innerHTML += result; //태그를 인식하게끔
    result = `3x${i}=${3*i}<br>`;
    danResult[1].innerHTML += result; //태그를 인식하게끔
    result = `4x${i}=${4*i}<br>`;
    danResult[2].innerHTML += result; //태그를 인식하게끔
    //console.log(result);
    //dan2Result.textContent += result;
}
console.log('-------------------')
//0 시작한 예시
for(let i=0; i<9; i++){
    let result = `2x${i+1}=${2*(i+1)}`;
    //console.log(result);
}

//자바스크립트 10번 반복 출력 (반복문 없을 때)
console.log('자바스크립트');
console.log('자바스크립트');
console.log('자바스크립트');
console.log('자바스크립트');
console.log('자바스크립트');
console.log('자바스크립트');
console.log('자바스크립트');
console.log('자바스크립트');
console.log('자바스크립트');
console.log('자바스크립트');

//자바스크립트를 이용한 태그 생성
const target = document.querySelector('.target'); //실제html있는걸 잡겠다
//태그 생성 목적의 변수(저장소)생성
const ul = document.createElement('ul'); //없는걸 만들겠다 꺽새를안써도요소생성
ul.innerHTML = '<li>목록1</li>';
console.log(ul);
//target.innerHTML = ul;
target.appendChild(ul); //createElement로 생성한 태그 삽입방법 , 타겟의 마지막자식으로 들어가라
//console.log(target); //ul li 따로 생성됨..
// target.innerHTML = '<ul>'
// target.innerHTML += '<li>목록1</li>'
// target.innerHTML += '<li>목록2</li>'
// target.innerHTML += '</ul>'