import * as flsFunctions from './modules/functions.js';

flsFunctions.isWebp();
flsFunctions.sliders();

const header = document.querySelector('.header');
const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__nav');

if (burger && menu) {
    flsFunctions.burger(burger, menu, header);
}
if (header) {
    flsFunctions.fixedHeader(header);
}

if (document.querySelector('.slider-reasons-controls__dots')) {
    document.querySelector('.slider-reasons-controls__dots').style.top = `${header.offsetHeight -2}px`;
}

// let sliderTemplate = new Swiper('.slider', {
//     effect: 'fade',
//     autoplay:{
//         delay: 3000,
//         disableOnInteraction: false,
//     },
//     observer: true,
//     observeParents: true,
//     slidesPerView: 1,
//     spaceBetween: 0,
//     autoHeight: true,
//     speed: 800,
//     touchRatio: 0,
//     simulateTouch: false,
//     loop: true,
//     preloadImages: false,
//     lazy: true,
//     pagination: {
//         el: '.slider-pagging',
//         clickable: true,
//     },
//     navigation:{
//         nextEl: '.swiper-next',
//         prevEl: '.swiper-prev',
//     },
//     breakpoints: {
//         320: {
//             slidesPerView: 1,
//             spaceBetween: 0,
//             autoHeight: true,
//         },
//         768: {
//             slidesPerView: 2,
//             spaceBetween: 20,
//         },
//         992: {
//             slidesPerView: 3,
//             spaceBetween: 20,
//         },
//         1268: {
//             slidesPerView: 4,
//             spaceBetween: 30,
//         },
//     },
//     on: {
//         lazyImageReady: function () {
//             ibg();
//         },
//     },
//     scrollbar: {
//         el: '.swiper-scrollbar',
//     }
// })

if (document.querySelector('.slider-hero__body')) {
    new Swiper('.slider-hero__body', {
        effect: 'fade',
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 0,
        autoHeight: true,
        speed: 800,
        touchRatio: 0,
        simulateTouch: false,
        loop: true,
        preloadImages: false,
        lazy: true,
        pagination: {
            el: '.slider-hero-controls__dots',
            clickable: true,
        },
    });
}

if (document.querySelector('.slider-locations__body')) {
    new Swiper('.slider-locations__body', {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        observer: true,
        observeParents: true,
        slidesPerView: 3,
        spaceBetween: 20,
        autoHeight: true,
        speed: 800,
        touchRatio: 0,
        simulateTouch: false,
        loop: true,
        preloadImages: false,
        lazy: true,
        navigation: {
            nextEl: '.slider-locations-controls__arrows .slider-arrow__next',
            prevEl: '.slider-locations-controls__arrows .slider-arrow__prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0,
                autoHeight: true,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1100: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });
}

if (document.querySelector('.slider-film__body')) {
    new Swiper('.slider-film__body', {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        observer: true,
        observeParents: true,
        slidesPerView: 4,
        spaceBetween: 20,
        autoHeight: true,
        speed: 800,
        touchRatio: 0,
        simulateTouch: false,
        loop: true,
        preloadImages: false,
        grabCursor: true,
        lazy: true,
        navigation: {
            nextEl: '.slider-film-controls__arrows .slider-arrow__next',
            prevEl: '.slider-film-controls__arrows .slider-arrow__prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0,
                autoHeight: true,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1100: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
    });
}

if (document.querySelector('.slider-reasons__body')) {
    const slideTitles = ['Geografia','Istoria','Clima','Economia','Călătorii']

    new Swiper('.slider-reasons__body', {
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 0,
        autoHeight: true,
        speed: 800,
        touchRatio: 0,
        simulateTouch: false,
        preloadImages: false,
        lazy: true,
        grabCursor: true,
        effect: "creative",
        creativeEffect: {
            prev: {
                translate: [0, 0, -400],
            },
            next: {
                translate: ["100%", 0, 0],
            },
        },
        pagination: {
            el: '.slider-reasons-controls__dots',
            clickable: true,
            renderBullet: function (index, className) {
                return '<h2 class="' + className + ' big">' + (slideTitles[index]) + "</h2>";
              },
        },
    });
}
