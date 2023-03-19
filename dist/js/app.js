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