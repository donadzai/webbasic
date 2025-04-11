const swipper = new Swiper(".sliderrr", {
    loop: true,

    autoplay: {
        delay: 3000,
    },

    slidesPerView: 3,

    spaceBetween: 50,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    initialSlide: 2,
});

const swipperHeader = new Swiper(".header-slide-content", {
    loop: true,

    autoplay: {
        delay: 3000,
    },

    slidesPerView: 1,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },
});

const swipperComment = new Swiper(".comment__container-slide", {
    loop: true,

    slidesPerView: 3,

    spaceBetween: 90,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
