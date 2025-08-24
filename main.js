document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1.2, // мобильная версия
    spaceBetween: 16,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  console.log('Bullets:', document.querySelectorAll('.swiper-pagination-bullet'));
});
let swiper;

function initSwiper() {
  if (window.innerWidth < 768) {
    if (!swiper) {
      swiper = new Swiper('.brands__slider', {
        slidesPerView: 'auto',
        spaceBetween: 16,
      });
    }
  } else {
    if (swiper) {
      swiper.destroy(false, true);
      swiper = null;
    }
  }
}

window.addEventListener('resize', initSwiper);
window.addEventListener('load', initSwiper);
console.log('Ширина:', window.innerWidth, 'Swiper:', swiper);