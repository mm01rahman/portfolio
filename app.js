'use strict';

(function () {
  const run = () => {
    const menuBtn = document.getElementById('menuBtn');
    const mobileNav = document.getElementById('mobileNav');
    if (menuBtn && mobileNav) {
      menuBtn.addEventListener('click', () => {
        const isHidden = mobileNav.classList.toggle('hidden');
        menuBtn.setAttribute('aria-expanded', String(!isHidden));
      });
    }

    const y = document.getElementById('y');
    if (y) y.textContent = new Date().getFullYear();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run, { once: true });
  } else {
    run();
  }
})();
