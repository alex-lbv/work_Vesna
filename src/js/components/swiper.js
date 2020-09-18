let mainBanner = new Swiper('.main-banner', {
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
  }
});

let mainTabs = new Swiper('.main-tabs__swiper', {
  slidesPerView: 1,
  breakpoints: {
    540: {
      slidesPerView: 2
    },
    992: {
      slidesPerView: 3
    },
    1200: {
      slidesPerView: 4
    }
  },
  observer: true,
  observeParents: true
});

let lkSwiper1 = new Swiper('.lk__swiper--1', {
  slidesPerView: 1,
  breakpoints: {
    540: {
      slidesPerView: 2
    },
    992: {
      slidesPerView: 3
    },
    1200: {
      slidesPerView: 4
    }
  },
  observer: true,
  observeParents: true
});

let lkSwiper2 = new Swiper('.lk__swiper--2', {
  slidesPerView: 1,
  breakpoints: {
    540: {
      slidesPerView: 2
    },
    992: {
      slidesPerView: 3
    },
    1200: {
      slidesPerView: 4
    }
  },
  observer: true,
  observeParents: true
});

let promotions = new Swiper('.promotions__swiper', {
  slidesPerView: 1,
  spaceBetween: 15,
  breakpoints: {
    540: {
      slidesPerView: 2,

    },
  },
});

let sales = new Swiper('.sales__swiper', {
  slidesPerView: 1,
  breakpoints: {
    540: {
      slidesPerView: 2
    },
    992: {
      slidesPerView: 3
    },
    1200: {
      slidesPerView: 4
    },
  },
});

let blog = new Swiper('.main-blog__swiper', {
  slidesPerView: 1,
  breakpoints: {
    540: {
      slidesPerView: 2
    },
    992: {
      slidesPerView: 3
    },
    1200: {
      slidesPerView: 4
    },
  },
});

let galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});

let galleryTop = new Swiper('.gallery-top', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: galleryThumbs
  }
});