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

    // 3. Premium Interactive Founder Avatar Curtain Slider
    const sliderInput = document.querySelector('.founder-slider-input');
    const annisaAvatar = document.querySelector('.annisa-avatar');
    const sliderHandle = document.querySelector('.founder-slider-handle');
    const hisyamTexts = document.querySelectorAll('.hisyam-text');
    const annisaTexts = document.querySelectorAll('.annisa-text');
    
    if (sliderInput && annisaAvatar && sliderHandle) {
        function updateSlider() {
            const val = sliderInput.value;
            // Update clip path of overlay (Annisa)
            annisaAvatar.style.clipPath = `polygon(0 0, ${val}% 0, ${val}% 100%, 0 100%)`;
            // Move slider handle line
            sliderHandle.style.left = `${val}%`;
            
            // Toggle active texts based on slider position (threshold 50%)
            if (val > 50) {
                hisyamTexts.forEach(el => el.classList.remove('active'));
                annisaTexts.forEach(el => el.classList.add('active'));
            } else {
                annisaTexts.forEach(el => el.classList.remove('active'));
                hisyamTexts.forEach(el => el.classList.add('active'));
            }
        }
        
        sliderInput.addEventListener('input', updateSlider);
        sliderInput.addEventListener('change', updateSlider);
        
        // Initialize at 50% split reveal
        updateSlider();
    }

    // 4. Premium Interactive Workflow Curtain Slider
    const workflowSliderInput = document.querySelector('.workflow-slider-input');
    const workflowSlideCam = document.querySelector('.workflow-slide-cam');
    const workflowSlideDev = document.querySelector('.workflow-slide-dev');
    const workflowSliderHandle = document.querySelector('.workflow-slider-handle');
    const workflowTabs = document.querySelectorAll('.workflow-tab');

    if (workflowSliderInput && workflowSlideCam && workflowSliderHandle) {
        function updateWorkflowSlider() {
            const val = workflowSliderInput.value;
            // Map 0-100 to 2% - 98% of the viewport width to align with card border curves
            const pos = 2 + (val / 100) * 96;

            // Update clip path of overlay (Photographer/Videographer slide)
            workflowSlideCam.style.clipPath = `polygon(0 0, ${pos}% 0, ${pos}% 100%, 0 100%)`;
            // Move slider handle
            workflowSliderHandle.style.left = `${pos}%`;

            // Active Tab Class based on value
            if (val > 50) {
                workflowTabs.forEach(tab => {
                    if (tab.getAttribute('data-tab') === 'cam') tab.classList.add('active');
                    else tab.classList.remove('active');
                });
                // For mobile responsive toggle
                workflowSlideCam.classList.add('mobile-active');
                workflowSlideDev.classList.add('mobile-hidden');
            } else {
                workflowTabs.forEach(tab => {
                    if (tab.getAttribute('data-tab') === 'dev') tab.classList.add('active');
                    else tab.classList.remove('active');
                });
                // For mobile responsive toggle
                workflowSlideCam.classList.remove('mobile-active');
                workflowSlideDev.classList.remove('mobile-hidden');
            }
        }

        workflowSliderInput.addEventListener('input', updateWorkflowSlider);
        workflowSliderInput.addEventListener('change', updateWorkflowSlider);

        // Tab click behavior
        workflowTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const target = tab.getAttribute('data-tab');
                if (target === 'dev') {
                    workflowSliderInput.value = 0;
                } else {
                    workflowSliderInput.value = 100;
                }
                updateWorkflowSlider();
            });
        });

        // Initialize at 0% split reveal (Developer by default)
        workflowSliderInput.value = 0;
        updateWorkflowSlider();
    }
});
