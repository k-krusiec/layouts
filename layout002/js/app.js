const NavigationModule = (() => {
  let options = {};

  const menuController = () => {
    const navigationMenu = options.pageHeader.querySelector('.navigation-menu');
    options.pageHeader.classList.toggle('nav-opened');
    navigationMenu.classList.toggle('active');
  };

  const prepareMenu = () => {
    const menuBtn = options.pageHeader.querySelector('.hamburger-btn');
    menuBtn.addEventListener('click', menuController);
  };

  const init = (_options) => {
    options = {
      pageHeader: _options.pageHeader || null
    };

    if (_options.pageHeader === null || _options.pageHeader === undefined || _options.pageHeader === 0) {
      return false;
    }

    prepareMenu();
  };

  return {
    init: init
  };
})();

document.addEventListener('DOMContentLoaded', () => {
  const pageHeader = document.querySelector('.page-header');
  NavigationModule.init({pageHeader: pageHeader});
});
