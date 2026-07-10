/* ==========================================================================
   ABYNS STUDIO - Swiper Slider Configurations
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Testimonial Carousels Slider
    let testimonialSwiper;
    try {
        testimonialSwiper = new Swiper('.testimonials-swiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            speed: 800,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                }
            }
        });
    } catch (e) {
        console.warn('Swiper slider library not loaded or failed for testimonials slider.', e);
    }

    // 2. Ready-Made Products Slider (Desktop horizontal gallery, Mobile swipe)
    let productsSwiper;
    try {
        productsSwiper = new Swiper('.products-swiper', {
            slidesPerView: 1,
            spaceBetween: 24,
            grabCursor: true,
            speed: 600,
            pagination: {
                el: '.products-pagination',
                clickable: true,
            },
            breakpoints: {
                576: {
                    slidesPerView: 1.5,
                    spaceBetween: 24,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                }
            }
        });
    } catch (e) {
        console.warn('Swiper slider library not loaded or failed for products slider.', e);
    }
});
