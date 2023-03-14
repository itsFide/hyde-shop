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
});