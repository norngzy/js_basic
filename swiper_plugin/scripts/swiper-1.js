//swiepr-1.js
const wrap = document.querySelector('#wrap');
const wrapSwiper = new Swiper(wrap,{
    mousewheel:true,
    speed:1000, //slide 넘어가는 속도조절 기본400
    direction:'vertical',
});
console.log(wrap);
const web = document.querySelector('.web');
const webSwiper = new Swiper(web,{
    //effect:'fade',
    autoplay:{delay:2000,},
    loop:true,
    pagination:{
        // 페이지 대상 html연결, 모양, 동적옵션
        el:'.web + .web_page', //형제끼리니까 + 넣어주기
        type:'fraction', //bullets(기본값) ,fraction
        //dynamicBullets:true, //type이 bullets(기본값)일때만 가능
    },
});
const graphic = document.querySelector('.graphic');
const graphicSwiper = new Swiper(graphic,{
    autoplay:{delay:2000,},
    loop:true,
    pagination:{
        el:'.project2 .group .graphic_page',
        type:'bullets',
    },
});