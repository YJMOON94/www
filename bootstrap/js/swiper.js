// var appendNumber = 4;
// var prependNumber = 1;
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 5,
    grabCursor: true,

    breakpoints: {
        0:{
            slidesPerView:1
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        1280: {
            slidesPerView: 5,
            spaceBetween: 30
        }
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
});