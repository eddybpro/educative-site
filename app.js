const menuBtn = document.querySelector('#menu-btn')
const navBar = document.querySelector('.navbar')
const list = navBar.querySelectorAll('a');

menuBtn.addEventListener('click',()=>{
    menuBtn.classList.toggle('fa-times');
    navBar.classList.toggle('active')
})

list.forEach(
    el=>{el.addEventListener('click',()=>{
    menuBtn.classList.toggle('fa-times');
    navBar.classList.toggle('active')
})
})

//*swiper
var swiper = new Swiper(".course-slider", {
    grabCursor:true,
    loop:true,
    pagination: {
        el: ".swiper-pagination",
        clickable:true,
    },
    breakpoints: {
        540: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
});
var swiper = new Swiper(".teachers-slider", {
    grabCursor:true,
    loop:true,
    pagination: {
        el: ".swiper-pagination",
        clickable:true,
    },
    breakpoints: {
        540: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
});
var swiper = new Swiper(".reviews-slider", {
    grabCursor:true,
    loop:true,
    pagination: {
        el: ".swiper-pagination",
        clickable:true,
    },
    breakpoints: {
        540: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
});