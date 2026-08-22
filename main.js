// =============================================================================
// main.js — the whole site's JavaScript.
// =============================================================================

(function () {
  'use strict';

  // Copyright year, so the footer never goes stale.
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
