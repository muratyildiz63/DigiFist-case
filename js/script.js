var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2.4,
    spaceBetween: 12,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        768: {
            spaceBetween: 25,
        },
        968: {
            spaceBetween: 35,
        },



    }
});