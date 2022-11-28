var swiper1 = new Swiper('.swiper1', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
  });

var swiper2 = new Swiper('.swiper2');

var swiper3 = new Swiper('.swiper3', {
    initialSlide: 1,
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows : true,
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: false,
      draggable: true
    }
  });

