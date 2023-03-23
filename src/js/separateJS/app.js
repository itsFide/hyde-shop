// menu 
window.onload = ( ) =>{
    let burger = document.querySelector('.burger');
    let menu = document.querySelector('.mobile__menu')
    // let menuDropdown = menu.querySelectorAll('.has-children')
    burger.addEventListener('click',()=>{
        burger.classList.toggle('active')
        menu.classList.toggle('active')
        if(menu.classList.contains('active')){
            menu.style.height = `${menu.scrollHeight}px`
        } else{
            menu.style.height = `0px`
        }
    })
}

let productCounter = document.querySelectorAll('.product-counter')
if(productCounter){
    productCounter.forEach(e=>{
        let plus = e.querySelector('.product-counter__plus')
        let minus = e.querySelector('.product-counter__minus')
        let value = e.querySelector('.product-counter__value')
        let valueNum = parseInt(value.innerText)
        plus.addEventListener('click',()=>{
            valueNum++
            value.innerText = valueNum;
        })
        minus.addEventListener('click',()=>{
            if(valueNum > 1){
                valueNum--
                value.innerText = valueNum;
                console.log(valueNum);
            }
        })
    })
}