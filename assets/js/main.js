// Doctor'D Nutrição Esportiva e Clínica — interações da página

document.addEventListener('DOMContentLoaded', () => {
  // Header com sombra ao rolar
  const header = document.getElementById('site-header');
  const onScroll = () => {
    if (window.scrollY > 12) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Menu mobile
  const menuBtn = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIconOpen = document.getElementById('icon-open');
  const menuIconClose = document.getElementById('icon-close');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      const isOpen = mobileMenu.style.maxHeight && mobileMenu.style.maxHeight !== '0px';
      mobileMenu.style.maxHeight = isOpen ? '0px' : mobileMenu.scrollHeight + 'px';
      menuBtn.setAttribute('aria-expanded', String(!isOpen));
      menuIconOpen.classList.toggle('hidden', !isOpen);
      menuIconClose.classList.toggle('hidden', isOpen);
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.style.maxHeight = '0px';
        menuBtn.setAttribute('aria-expanded', 'false');
        menuIconOpen.classList.remove('hidden');
        menuIconClose.classList.add('hidden');
      });
    });
  }

  // Scroll reveal — uma única transição suave de entrada por seção/cartão
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  // Contador animado para números de destaque (ex: "100%"), dispara ao entrar em tela
  const counters = document.querySelectorAll('[data-count-to]');
  if ('IntersectionObserver' in window && counters.length) {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const animateCount = (el) => {
      const target = parseFloat(el.dataset.countTo);
      const suffix = el.dataset.countSuffix || '';
      if (reduceMotion) { el.textContent = target + suffix; return; }
      const duration = 1400;
      const start = performance.now();
      const step = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(target * eased) + suffix;
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    const countIo = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          countIo.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 });
    counters.forEach(el => countIo.observe(el));
  }

  // FAQ — accordion custom com animação suave de altura (abre e fecha)
  document.querySelectorAll('.faq-trigger').forEach(trigger => {
    const panel = document.getElementById(trigger.getAttribute('aria-controls'));
    if (!panel) return;
    trigger.addEventListener('click', () => {
      const isOpen = trigger.getAttribute('aria-expanded') === 'true';
      trigger.setAttribute('aria-expanded', String(!isOpen));
      panel.style.maxHeight = isOpen ? '0px' : panel.scrollHeight + 'px';
    });
  });
});
