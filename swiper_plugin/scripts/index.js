const heroBnr = document.querySelector('.hero_bnr');
console.log(heroBnr);
const heroSlide = new Swiper(heroBnr,{
    //옵션:값, 
    //옵션:{옵션:값, 옵션:값},
    loop:true, /* 슬라이드 끝 -> 시작 반복하는 것 /true, false(기본값) */
    // direction:'vertical', /* 슬라이드 방향 : horizontal수평(기본값) */
    //제자리 나타나기/사라지기 할때는 direction 적용해제
    effect:'fade', //fade, cube, flip
    //mousewheel:true, //마우스휠 기능 옵션
    //자동재생
    autoplay:{
        delay:2000, //1000(1초)
        pauseOnMouseEnter:true, //마우스가 올라오면 일시정지
        disableOnInteraction:true, 
        //마우스 상호작용 후에 멈출건지, 움직일건지(false) 결정하는 옵션
    }
});
const marketSlide = document.querySelector('.market_bnr');
console.log(marketSlide);
const contents = new Swiper(marketSlide,{
    loop:true,
    direction:'horizontal',
    autoplay:{delay:2000,},
});