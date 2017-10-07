document.addEventListener('DOMContentLoaded', () => {
  (function () {
    const mainNav = document.querySelector('.main-navigation');
    const list = mainNav.querySelector('ul');
    const hamburgerBtn = mainNav.querySelector('.hamburger-btn');

    hamburgerBtn.addEventListener('click', () => {
      hamburgerBtn.firstElementChild.classList.toggle('hidden');
      hamburgerBtn.lastElementChild.classList.toggle('hidden');
      list.classList.toggle('hidden');
      mainNav.classList.toggle('fade-in');
    })
  })();
});
