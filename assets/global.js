/**
 * p-nice — global.js
 * Minimal global JavaScript for the theme.
 */

'use strict';

// Mobile navigation toggle
(function () {
  const header = document.querySelector('.header');
  if (!header) return;

  const navList = header.querySelector('.header__nav-list');
  if (!navList) return;

  const toggle = document.createElement('button');
  toggle.className = 'header__nav-toggle';
  toggle.setAttribute('aria-label', 'Toggle navigation');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.textContent = '☰';

  toggle.addEventListener('click', function () {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    navList.classList.toggle('header__nav-list--open', !expanded);
  });
})();

// Quantity input buttons
(function () {
  document.querySelectorAll('.quantity__input').forEach(function (input) {
    const wrapper = input.parentElement;

    const decreaseBtn = document.createElement('button');
    decreaseBtn.type = 'button';
    decreaseBtn.textContent = '-';
    decreaseBtn.className = 'quantity__button quantity__button--decrease';
    decreaseBtn.setAttribute('aria-label', 'Decrease quantity');

    const increaseBtn = document.createElement('button');
    increaseBtn.type = 'button';
    increaseBtn.textContent = '+';
    increaseBtn.className = 'quantity__button quantity__button--increase';
    increaseBtn.setAttribute('aria-label', 'Increase quantity');

    decreaseBtn.addEventListener('click', function () {
      const val = parseInt(input.value, 10);
      if (val > 0) input.value = val - 1;
    });

    increaseBtn.addEventListener('click', function () {
      const val = parseInt(input.value, 10);
      input.value = val + 1;
    });

    wrapper.insertBefore(decreaseBtn, input);
    wrapper.appendChild(increaseBtn);
  });
})();

// Variant selection — update hidden ID input and price display
(function () {
  const productForms = document.querySelectorAll('form[id^="product-form-"]');

  productForms.forEach(function (form) {
    const selects = form.querySelectorAll('select[name^="options"]');
    if (!selects.length) return;

    selects.forEach(function (select) {
      select.addEventListener('change', function () {
        // Basic page-level variant selection (no AJAX).
        // Full variant switching requires adding variant data to the page via JSON.
        // This is a placeholder for future enhancement.
      });
    });
  });
})();
