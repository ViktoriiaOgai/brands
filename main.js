document.addEventListener('DOMContentLoaded', () => {
  // --- Swiper для мобильной версии ---
  let swiper = new Swiper('.brands__slider', {
    slidesPerView: 1.2,
    spaceBetween: 16,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  // --- Кнопка "Показать все / Свернуть" ---
const toggleBtn = document.querySelector('.brands__toggle');
 const hiddenCards = document.querySelectorAll('.brands__listt .brand-cardt:nth-child(n+7)');
  const linkText = toggleBtn.querySelector('.link-text');

  toggleBtn.addEventListener('click', () => {
  hiddenCards.forEach(card => card.classList.toggle('show'));
  toggleBtn.classList.toggle('open');
  const linkText = toggleBtn.querySelector('.link-text');
  linkText.textContent = toggleBtn.classList.contains('open') ? 'Свернуть' : 'Показать все';
});
  // --- Адаптивный Swiper (по желанию) ---
  let swiperAdaptive;
  function initSwiper() {
    if (window.innerWidth < 768) {
      if (!swiperAdaptive) {
        swiperAdaptive = new Swiper('.brands__slider', {
          slidesPerView: 'auto',
          spaceBetween: 16,
        });
      }
    } else {
      if (swiperAdaptive) {
        swiperAdaptive.destroy(false, true);
        swiperAdaptive = null;
      }
    }
  }

  window.addEventListener('resize', initSwiper);
  window.addEventListener('load', initSwiper);
});