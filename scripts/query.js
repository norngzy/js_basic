//query.js
//tag : header, nav, ul, li, a
//class : gnb, lnb

//변수 생성 태그5개, 클래스2개
const header = document.querySelector('header');
const nav = document.querySelector('nav');
const ul = document.querySelectorAll('ul');
// ul은 두개이상이니까 All붙이기
const li = document.querySelectorAll('.gnb > li');
const li2 = document.querySelectorAll('.gnb > li li');
//gnb의 안에있는 li안에 있는 li
// const li2 = document.querySelectorAll('.lnb > li');
//lnb부모안의 자식 s
const gnbA = document.querySelectorAll('.gnb > li > a');
const lnbA = document.querySelectorAll('.lnb > li > a');
const gnbCls = document.querySelector('.gnb'); 
const lnbCls = document.querySelector('.lnb'); 
//콘솔확인(오류 조기 확인)
console.log(header,nav,ul[0],ul[1],li[1],li2,
    gnbA,lnbA,gnbCls,lnbCls);

//============================함수 기초 활용
//function 함수명(매개변수){반복실행명령어}함수호출();
//1. 할인율 계산기
//(100-할인율) / 100
//(100-5) / 100 = 0.95
// 판매가 * 0.95

let disCount = '';
//disCountfunc(24990);
//disCountfunc(85100);
console.log(disCountfunc(24990));
alert(disCountfunc(85100));

function disCountfunc(price){
    disCount = `5% 할인 : ${price * 0.95}원,`;
    disCount += `10% 할인 : ${price * 0.9}원,`;
    disCount += `20% 할인 : ${price * 0.8}원,`;
    disCount += `30% 할인 : ${price * 0.7}원`;
    // console.log(disCount);
    return disCount; //함수밖으로 disCount의 값만 내보낸다 (함수호출시)
    //함수의 결과값은 다양한 함수로 실행 할 수 있어야하기때문에 
    //함수 내부에서 실행함수를 정하는 것이 아닌 리턴으로 값만 내보내고 함수밖에서 실행함수를 정한다
}