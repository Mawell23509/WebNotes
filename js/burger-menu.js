const burger = document.querySelector('.burger')
const openedMenu = document.querySelector('.opened__burger')
const advContainer = document.querySelector('.adv__container')

const faqItemBtn = document.querySelector('.faq__btn')
const faqContainer = document.querySelector('.faq__container')
const faqItem = document.querySelector('.faq__item')

faqContainer.onclick = function(event) {
    let btnIndex = event.target.dataset.index
    // const chapter = document.querySelector(`#faq__item${btnIndex}`)
    const innerContent = document.querySelector(`#faq__item__content${btnIndex}`)
    // chapter.classList.toggle('active')
    innerContent.classList.toggle('active')
}

burger.onclick = function(){
    burger.classList.toggle('open')
    openedMenu.classList.toggle('active')
    advContainer.classList.toggle('active')
}