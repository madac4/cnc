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
    const navigation = document.querySelector('.slider-reasons-controls__dots');
    const itemPos = navigation.offsetTop;
    document.addEventListener('scroll', () =>{
        const viewportWidth = window.innerWidth;
        const scrollPos = window.scrollY;
        if (viewportWidth < 767) {
            if (scrollPos >= itemPos - header.offsetHeight - 10) {
                navigation.style.top = `${header.offsetHeight -2}px`;
                navigation.style.position = `fixed`;
                document.querySelector('.slider-reasons__body').style.marginTop = `${header.offsetHeight}px`
            }else{
                navigation.style.top = `initial`;
                navigation.style.position = `relative`;
                document.querySelector('.slider-reasons__body').style.marginTop = `0px`
            }
        }
    })
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
if (document.querySelector('.slider-spot__body')) {
    new Swiper('.slider-spot__body', {
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
        preloadImages: false,
        lazy: true,
        navigation: {
            nextEl: '.slider-spot-controls__arrows .slider-arrow__next',
            prevEl: '.slider-spot-controls__arrows .slider-arrow__prev',
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

const overlay = document.querySelector('.overlay');

if (overlay) {
    overlay.addEventListener('click', () =>{
        if (locationModal && locationModal.classList.contains('open')) {
            locationModal.classList.remove('open')
            overlay.classList.remove('open')
        }
        if (talentModal && talentModal.classList.contains('open')) {
            talentModal.classList.remove('open')
            overlay.classList.remove('open')
        }
        if (filmModal && filmModal.classList.contains('open')) {
            filmModal.classList.remove('open')
            overlay.classList.remove('open')
        }
    })
}

const locations = document.querySelectorAll('.location');
const locationModal = document.querySelector('.location-modal');
const locationModalClose = locationModal && locationModal.querySelector('.icon-close');

if (locations.length > 0) {
    locations.forEach(location =>{
        location.addEventListener('click', () =>{
            locationModal.classList.add('open');
            overlay.classList.add('open')
            document.body.classList.add('lock')
            const postID = location.dataset.id;
        })
        locationModalClose.addEventListener('click', () =>{
            locationModal.classList.remove('open')
            overlay.classList.remove('open')
            document.body.classList.remove('lock')
        })
    })
}

const films = document.querySelectorAll('.film');
const filmModal = document.querySelector('.film-modal');
const filmModalClose = filmModal && filmModal.querySelector('.icon-close');

if (films.length > 0) {
    films.forEach(film =>{
        film.addEventListener('click', () =>{
            filmModal.classList.add('open');
            overlay.classList.add('open')
            const filmID = film.dataset.id;
            document.body.classList.add('lock')
        })
        filmModalClose.addEventListener('click', () =>{
            filmModal.classList.remove('open')
            overlay.classList.remove('open')
            document.body.classList.remove('lock')
        })
    })
}

const talents = document.querySelectorAll('.person');
const talentModal = document.querySelector('.talent-modal');
const talentModalClose = talentModal && talentModal.querySelector('.icon-close');

if (talents.length > 0) {
    talents.forEach(talent =>{
        talent.addEventListener('click', () =>{
            talentModal.classList.add('open');
            overlay.classList.add('open')
            const talentID = talent.dataset.id;
            document.body.classList.add('lock')
        })
        talentModalClose.addEventListener('click', () =>{
            talentModal.classList.remove('open')
            overlay.classList.remove('open')
            document.body.classList.remove('lock')
        })
    })
}

