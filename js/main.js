/* =====================================================================
   1ª Corrida da Ternura — interações da interface
   - Menu mobile (abre/fecha)
   - Estado do header ao rolar (fundo sólido)
   - Animação suave de entrada das seções (.reveal)
   As perguntas do FAQ usam <details> nativo — não precisam de JS.
   ===================================================================== */
(function () {
  'use strict';

  var header = document.getElementById('header');
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');

  /* ---- Menu mobile ---- */
  function closeMenu() {
    if (!links) return;
    links.classList.remove('open');
    header.classList.remove('menu-open');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
  }
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      header.classList.toggle('menu-open', open);
      toggle.setAttribute('aria-expanded', String(open));
    });
    // fecha ao clicar em um link
    links.addEventListener('click', function (e) {
      if (e.target.closest('a')) closeMenu();
    });
  }
  // fecha o menu ao voltar para desktop
  window.addEventListener('resize', function () {
    if (window.innerWidth > 860) closeMenu();
  });

  /* ---- Header sólido ao rolar ---- */
  function onScroll() {
    if (window.scrollY > 10) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Reveal on scroll ---- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }
})();
