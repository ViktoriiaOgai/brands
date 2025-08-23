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