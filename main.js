document.addEventListener('DOMContentLoaded', () => {
  // --- Swiper мобильный ---
  let swiper;
  function initSwiper() {
    if (window.innerWidth < 768) {
      if (!swiper) {
        swiper = new Swiper('.swiper', {
          slidesPerView: 1.2,
          spaceBetween: 16,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        });
      } else {
        swiper.update();
      }
    } else {
      if (swiper) {
        swiper.destroy(true, true);
        swiper = undefined;
      }
    }
  }
  initSwiper();
  window.addEventListener('resize', initSwiper);

  // --- Кнопка Показать все ---
  const toggleBtn = document.querySelector('.brands__toggle');
  const hiddenCards = document.querySelectorAll('.brands__listt .brand-cardt:nth-child(n+7)');
  const linkText = toggleBtn.querySelector('.link-text');

  toggleBtn.addEventListener('click', () => {
    hiddenCards.forEach(card => card.classList.toggle('show'));
    toggleBtn.classList.toggle('open');
    linkText.textContent = toggleBtn.classList.contains('open') ? 'Свернуть' : 'Показать все';
  });
});