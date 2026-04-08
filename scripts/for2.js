//반복문
//for(초기값; 조건식; 증감식){반복실행결과}

//5번반복
//for(let i=1; i<=5; i++)
console.log('<ul>'); //반복되지않는것은 for밖에 
for(let i=1; i<6; i++){ //반복되는것은 안에
    console.log(`<li>${i}</li>`);
}
console.log('</ul>');

console.log('<dl>');
console.log('<dt>제목</dt>');
for(let i=1; i<6; i++){ //
    console.log(`<dd>${i}</dd>`);
}
console.log('</dl>');

//table>tr>th+td*10
console.log('<table>');
console.log('<tr>');
console.log('<th>제목</th>');
for(let i=1; i<11; i++){
    console.log('<td>내용</td>');
}
console.log('</tr>');
console.log('</table>');

console.log('-----------------------');

const navA = document.querySelectorAll('nav a');
console.log(navA);

for(let i=0; i<7; i++){
    console.log(i);
    //요소.이벤트함수(이벤트종류,이벤트했을때 실행 함수)
    navA[i].addEventListener('click',function(){
        console.log('클릭확인');
        navA[i].style.backgroundColor = '#ff0';
    })
    
    //나머지연산자로 결과가 0, 1에 따라 홀, 짝 구분
    //if(i%2==1) navA[i].style.backgroundColor = '#ff0'; //짝수
    //else navA[i].style.backgroundColor = '#0f0'; //홀수

    //if(i==0 || i==1) navA[i].style.backgroundColor = '#ff0'; 
    //i값이 두개일수없음..참X
    //&&모두참 ||하나만참이여도참

    //if(i<4) navA[i].style.backgroundColor = '#ff0'; 
    //else navA[i].style.backgroundColor = 'rgb(0,208,205)'; 
    //if(i>=4) navA[i].style.backgroundColor = 'rgb(0,208,205)'; 
    navA[i].style.borderBottom = '2px solid #f00';
}

//메인메뉴와 서브메뉴(반복문활용)
const gnb =document.querySelectorAll('.gnb > li');
const lnb =document.querySelectorAll('.lnb');
console.log(gnb, lnb);

for(let i=0; i<2; i++){
    lnb[i].style.display = 'none';
    gnb[i].addEventListener('mouseover',function(){
        console.log('마우스 올린 이벤트 확인');
        gnb[i].style.backgroundColor ='#eee';
        gnb[i].children[0].style.color ='#f00'; //글자색은a에 넣어야함 gnb는li이기때문에 첫번째자식[0]
        lnb[i].style.display = 'block';
    })
    gnb[i].addEventListener('mouseout',function(){
        console.log('마우스 나간 이벤트 확인');
        lnb[i].style.display = 'none';
        gnb[i].style.background='none'; 
        //값을 none이라고 쓸 때 none은 color 속성이 아니기때문에 색상에는none이없음!
        gnb[i].children[0].style.color ='#000';
    })
}