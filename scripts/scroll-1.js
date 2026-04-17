const topA = document.querySelector('.popup .top');
const cateTitle = document.querySelectorAll('.category_title a');
const cateContent = document.querySelectorAll('.category_contents section');
console.log(topA, cateTitle, cateContent );

topA.addEventListener('click',function(e){
    e.preventDefault(); //href막기 
    //객체.함수();
    //window.scrollTo(x좌표, y좌표);
    window.scrollTo(0, 0); /* 상단이동좌표 ,밑으로내려올수록y양수값으로작성 */ 
})

//클릭 시 위치 이동
// cateTitle[3].addEventListener('click',function(e){
//     e.preventDefault(); //href막기
//     window.scrollTo(0, cateContent[3].offsetTop-150);
//     //scrollTo y좌표 수치값은 최상단(0) 또는 header의 높이 위치 정도일 때 숫자로 작성
//     //그 이상의 큰 값은 객체.속성을 활용
//     console.log(cateContent[3].offsetTop);
//     activeFunc(cateTitle[3]);
// })

// cateTitle[0].addEventListener('click',function(e){
//     e.preventDefault();
//     window.scrollTo(0, cateContent[0].offsetTop-100);
//     activeFunc(cateTitle[0]);
// })

// cateTitle[1].addEventListener('click',function(e){
//     e.preventDefault();
//     window.scrollTo(0, cateContent[1].offsetTop-150);
//     activeFunc(cateTitle[1]);
// })

// cateTitle[2].addEventListener('click',function(e){
//     e.preventDefault();
//     window.scrollTo(0, cateContent[2].offsetTop-150);
//     activeFunc(cateTitle[2]);
// })

//for~of로 위 이벤트4개 압축하기
for(let title of cateTitle){
    console.log(title); //Nodelist 출력이 아닌 개별출력 확인
    title.addEventListener('click',function(e){
        e.preventDefault();
        activeFunc(title);
        //클릭한 제목에 관련한 내용으로 스크롤 이동하기
        //console.log(e.currentTarget.dataset.index)
        // 객체속성매개변수.currentTarget.dataset.데이터속성이름 
        //data는a의속성이기때문에 e로 작성 
        const i = e.currentTarget.dataset.index; //dataset.index(js) = data-index(html)
        window.scrollTo(0, cateContent[i].offsetTop-150);
    })
}

//active 적용/해제 함수
function activeFunc(target){
    for(let i of cateTitle) i.classList.remove('active');
    return target.classList.add('active');
}