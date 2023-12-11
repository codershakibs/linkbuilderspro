let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 100) {
        nav.classList.add("header-scrolled");
    } else {
        nav.classList.remove("header-scrolled");
    }
}
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse");
navBar.forEach(function (a) {
    a.addEventListener("click", function () {
        navCollapse.classList.remove("show");
    })
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {

        1200: {
            slidesPerView: 3,
            spaceBetween: 20
        },

        991: {
            slidesPerView: 2,
            spaceBetween: 30
        },

        667: {
            slidesPerView: 2,
            spaceBetween: 40
        },

        575: {
            slidesPerView: 1,
            spaceBetween: 40
        },

        300: {
            slidesPerView: 2,
            spaceBetween: 40
        },
    }
});


var swiper = new Swiper(".updateSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {

        1200: {
            slidesPerView: 3,
            spaceBetween: 20
        },

        991: {
            slidesPerView: 3,
            spaceBetween: 30
        },

        767: {
            slidesPerView: 2,
            spaceBetween: 40
        },

        575: {
            slidesPerView: 1,
            spaceBetween: 40
        },

        300: {
            slidesPerView: 1,
            spaceBetween: 40
        },
    }



});