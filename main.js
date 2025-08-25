document.addEventListener('DOMContentLoaded', () => {
  // --- Swiper для мобильной версии ---
  let swiper;
  function initSwiper() {
    if (window.innerWidth < 768) {
      if (!swiper) {
        swiper = new Swiper('.swiper', {
          slidesPerView: 1.2,
          spaceBetween: 16,
          loop: true,
          pagination: { el: '.swiper-pagination', clickable: true },
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
const linkText = toggleBtn.querySelector('.link-text');

toggleBtn.addEventListener('click', () => {
  let hiddenCards;

  if (window.innerWidth >= 1120) {
    hiddenCards = document.querySelectorAll('.brands__list .brand-card:nth-child(n+9)');
  } else {
    // Планшет — показываем начиная с 7-й
    hiddenCards = document.querySelectorAll('.brands__list .brand-card:nth-child(n+7)');
  }

  hiddenCards.forEach(card => card.classList.toggle('show'));
  toggleBtn.classList.toggle('open');
  linkText.textContent = toggleBtn.classList.contains('open') ? 'Свернуть' : 'Показать все';
  });
});