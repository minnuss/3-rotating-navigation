const btnOpen = document.querySelector('.open')
const btnClose = document.querySelector('.close')
const page = document.querySelector('.hero__content');
const circle = document.querySelector('.hero__content__circle__box');
const links = document.querySelectorAll('.hero__nav__ul--li');


btnOpen.addEventListener('click', () => {
    page.classList.add('show-nav');
    circle.classList.add('show-nav');

    links.forEach(link => {
        link.classList.add('show-nav');
    })
});

btnClose.addEventListener('click', () => {
    page.classList.remove('show-nav');
    circle.classList.remove('show-nav');

    links.forEach(link => {
        link.classList.remove('show-nav');
    })
});

