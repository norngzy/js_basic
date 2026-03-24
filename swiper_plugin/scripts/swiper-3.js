const ssf = document.querySelector('.ssf_hero');
const brand = document.querySelector('.brand_slide');
console.log(ssf,brand);

const ssfSwiper = new Swiper(ssf,{
    slidesPerView:3, //한 번에 보이는 슬라이드 개수
    spaceBetween:0, //간격-기본값이0
    //pagination:{el:'',},
    navigation:{
        prevEl:'.ssf_hero .prev',
        nextEl:'.ssf_hero .next', //대상구분가능하게 앞에 부모까지!!
    },
});

const brandSwiper = new Swiper(brand,{
    slidesPerView:3,
    spaceBetween:5,
    navigation:{
        prevEl:'.brand_slide ~ .prev', //옆에 ~
        nextEl:'.brand_slide ~ .next',
    },
});