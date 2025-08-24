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

  // --- Кнопка Показать все для планшета ---
  const toggleTab = document.querySelector('.brands__toggle');
  toggleTab.addEventListener('click', () => {
    const hiddenCards = document.querySelectorAll('.brands__listt .brand-cardt:nth-child(n+7)');
    hiddenCards.forEach(card => card.classList.toggle('show'));
    toggleTab.classList.toggle('open');
    const linkText = toggleTab.querySelector('.link-text');
    linkText.textContent = toggleTab.classList.contains('open') ? 'Свернуть' : 'Показать все';
  });

  // --- Кнопка Показать все для десктопа ---
  const toggleTabl = document.querySelector('.brands__tabl__toggle');
  toggleTabl.addEventListener('click', () => {
    const hiddenCards = document.querySelectorAll('.brands__listtabl .brand-cardttabl:nth-child(n+9)');
    hiddenCards.forEach(card => card.classList.toggle('show'));
    toggleTabl.classList.toggle('open');
    const linkText = toggleTabl.querySelector('.link-text');
    linkText.textContent = toggleTabl.classList.contains('open') ? 'Свернуть' : 'Показать все';
  });
});