const catalog = new Swiper('.catalog-slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView:3,
    spaceBetween: 17,
    navigation: {
        nextEl: '.catalog-slider-next',
        prevEl: '.catalog-slider-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        650: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        // when window width is >= 640px
        1150: {
          slidesPerView: 3,
          spaceBetween: 40
        }
    }
});

const discount = new Swiper('.discount-slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView:2,
    spaceBetween: 17,
    navigation: {
        nextEl: '.discount-slider-next',
        prevEl: '.discount-slider-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        700: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        // when window width is >= 480px
        991: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        // when window width is >= 640px
        1153: {
            slidesPerView: 2,
            spaceBetween: 40
        }
    }
});

const hit = new Swiper('.hit-slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView:2,
    spaceBetween: 17,
    navigation: {
        nextEl: '.hit-slider-next',
        prevEl: '.hit-slider-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        700: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        // when window width is >= 480px
        991: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        // when window width is >= 640px
        1153: {
            slidesPerView: 2,
            spaceBetween: 40
        }
    }
});