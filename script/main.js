let burger = document.querySelector('.burger')
let menu = document.querySelector('.main-produkt-wrap')
let menu2 = document.querySelector('.header-wrap')
let body = document.querySelector('body')

burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    menu.classList.toggle('active')
    menu2.classList.toggle('active')
    body.classList.toggle('hidden')
})