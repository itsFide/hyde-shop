// Модальное окно
function bindModal(trigger, modal, close) {
    trigger = document.querySelector(trigger),
    modal = document.querySelector(modal),
    close = document.querySelector(close)
    trigger.addEventListener('click', e => {
      e.preventDefault()
      modal.style.display = 'flex'
    });
    close.addEventListener('click', () => {
      modal.style.display = 'none'
    });
    modal.addEventListener('click', e => {
      if (e.target === modal) {
        modal.style.display = 'none'
      }
    })
}

// Оплата
let paymentTrigger = document.querySelector('.payment-trigger'),
    paymentOption = document.querySelector('.payment-option'),
    paymentOptionItems = document.querySelectorAll('.payment-option__label')
    paymentFormData = document.querySelector('.payment-form-data')

paymentTrigger.addEventListener('click',()=>{
  paymentTrigger.classList.toggle('active')
  if(paymentTrigger.classList.contains('active')){
    openDropDown()
  } else{
    closeDropDown()
  }
})
paymentOptionItems.forEach(item=>{
  item.addEventListener('click',()=>{
    let paymentTriggerContent = paymentTrigger.querySelector('p');
    paymentTriggerContent.innerText = item.innerText
    if(item.getAttribute('data-payment') == 'cash-on-delivery'){
      paymentFormData.style.display = 'none'
    } else{
      paymentFormData.style.display = 'block'
    }
    closeDropDown()
  })
})
function openDropDown(){
  paymentOption.style.border = `1px solid #C4C4C4`
  paymentOption.style.height = `${paymentOption.scrollHeight}px`
}
function closeDropDown(){
  paymentOption.style.border = `none`
  paymentOption.style.height = `0px`
  paymentTrigger.classList.remove('active')
}