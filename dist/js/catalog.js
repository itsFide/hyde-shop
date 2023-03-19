const catalogPage = new Swiper('.products-content__category', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView:3.8,
    spaceBetween: 17,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1.2,
            spaceBetween: 20
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        700: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 480px
        1125: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        // when window width is >= 640px
        1400: {
            slidesPerView: 3.8,
            spaceBetween: 40
        }
    }
});

let productsSidebarTrigger = document.querySelectorAll('.products-sidebar__trigger')
productsSidebarTrigger.forEach(e=>{
    e.addEventListener('click',()=>{
        let triggerParent = e.closest('.products-sidebar__item')
        let productsSidebarContent = triggerParent.querySelector('.products-sidebar__content');
        triggerParent.classList.toggle('active')
        if(triggerParent.classList.contains('active')){
            productsSidebarContent.style.height = `${productsSidebarContent.scrollHeight}px`
            // productsSidebarContent.style.overflow = `visible`
        } else{
            productsSidebarContent.style.height = `0px`
        }
    })
})

let productsFilter = document.querySelector('.products-content__dropdown-trigger');
productsFilter.addEventListener('click',()=>{
    let productsFilterContent = document.querySelector('.products-content__dropdown-content');
    productsFilterContent.classList.toggle('active');
    if(productsFilterContent.classList.contains('active')){
        productsFilterContent.style.height = `${productsFilterContent.scrollHeight}px`;
    } else{
        productsFilterContent.style.height = `0px`;
    }
})