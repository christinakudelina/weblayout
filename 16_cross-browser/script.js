// бургер
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click',

function () {

    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__nav--active');

    document.page.classList.toggle('stop-skroll');
})

menuLinks.forEach(function(el) {
    el.addEventListener('click', function() {

        burger.classList.remove('burger--active');

        menu.classList.remove('header__nav--active');

        document.page.classList.remove('stop-skroll');

    })
})

// поиск
document.querySelector(".form__btn-open").addEventListener("click", function() {
  document.querySelector(".header__form").classList.add("form--active");
  this.classList.add("active");
})
document.querySelector(".form__close").addEventListener("click", function() {
   let form = document.querySelector(".header__form");
  form.classList.remove("form--active");
    form.querySelector("input").value = "";
    document.querySelector(".form__btn-open").classList.remove("active")
});

document.addEventListener("click", function(e) {
  let target = e.target;
  let form = document.querySelector(".header__form");
  if (!target.closest(".form__container")) {
  form.classList.remove("form--active");
    form.querySelector("input").value = "";
    document.querySelector(".form__btn-open").classList.remove("active")
  }
})

document.getElementsByClassName('.form__btn-open')/addEventListener('submit', (e) => {
  e.preventDefault()
})

// свайпер
const swiper = new Swiper('.hero__swiper', {

  loop: true,

  pagination: {
    el: '.hero__pagination',
    clickable: true,
  },

  a11y: {
    paginationBulletMessage: 'переход на слайд {{index}}',
  },

});

// аккордион
let buttons = Array.from(document.querySelectorAll('.faq__btn'));

for (let button of buttons) {
  button.addEventListener('click', () => {
    button.nextElementSibling.classList.toggle('hidden')
  })
}

let btn = document.querySelectorAll('.faq__btn');

btn.forEach(function(elem) {
  elem.addEventListener('click', () => {
    elem.classList.toggle('btn--active')
  })
})

// табы
const tabs = document.querySelectorAll('.tab__btn');
const all_content = document.querySelectorAll('.work__items');
const tab_img = document.querySelectorAll('.tab__img');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', (e) => {
    tabs.forEach(tab => {
      tab.classList.remove('tabs--active')
    });
    tab.classList.add('tabs--active')

    all_content.forEach(content => {
      content.classList.remove('tabs--active')
    });
    all_content[index].classList.add('tabs--active');

    tab_img.forEach(content => {
      content.classList.remove('tabs--active')
    });
    tab_img[index].classList.add('tabs--active');
  })
})





