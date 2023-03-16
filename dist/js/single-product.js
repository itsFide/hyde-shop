let productDropdownTrigger = document.querySelectorAll('.product-info__dropdown-trigger')
productDropdownTrigger.forEach(e=>{
    e.addEventListener('click',()=>{
        let productDropdownItem = e.closest('.product-info__dropdown-item');
        let productDropdownContent = productDropdownItem.querySelector('.product-info__dropdown-content')
        productDropdownItem.classList.toggle('active');
        if(productDropdownItem.classList.contains('active')){
            productDropdownContent.style.height = `${productDropdownContent.scrollHeight}px`
        } else{
            productDropdownContent.style.height = `0px`
        }
    })
})

// Смена фото
let thumbnails = document.querySelectorAll('.single-product__images-thumb-item');
let mainPhoto = document.querySelector('.single-product__images-main img');
thumbnails.forEach(e=>{
    e.addEventListener('click',()=>{
        let thumbImg = e.querySelector('img').getAttribute('src');
        mainPhoto.setAttribute('src', thumbImg)
    })
})

// Добавление товара
let addBtn = document.querySelector('.single-product__content-btn-add');
let notification = document.querySelector('.notification-success')
let closeNotification = document.querySelector('.close-notification');
addBtn.addEventListener('click',()=>{
    notification.classList.add('active')
})
closeNotification.addEventListener('click',()=>{
    if(notification.classList.contains('active')){
        notification.classList.remove('active')
    }
})