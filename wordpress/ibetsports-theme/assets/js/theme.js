(function () {
  'use strict';

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  // Modal helpers
  const body = document.body;
  let lastFocused = null;

  function openModal(type) {
    const modal = getModal(type);
    if (!modal) return;

    lastFocused = document.activeElement;
    modal.classList.add('active');
    body.style.overflow = 'hidden';

    // Focus management
    const focusTarget = modal.querySelector('button.modal-close') || modal;
    focusTarget && focusTarget.focus();
  }

  function closeModal(type) {
    const modal = getModal(type);
    if (!modal) return;

    modal.classList.remove('active');
    body.style.overflow = '';
    if (lastFocused && document.contains(lastFocused)) {
      lastFocused.focus();
    }
  }

  function getModal(type) {
    if (type === 'signup') return $('#signup-modal');
    if (type === 'login') return $('#login-modal');
    return null;
  }

  function handleBackdropClick(e) {
    // Close when clicking the backdrop itself
    if (e.target.classList.contains('modal-backdrop')) {
      const id = e.target.id || '';
      if (id.includes('signup')) closeModal('signup');
      if (id.includes('login')) closeModal('login');
    }
  }

  function handleEscape(e) {
    if (e.key === 'Escape') {
      // Close whichever is open
      const signupOpen = $('#signup-modal')?.classList.contains('active');
      const loginOpen = $('#login-modal')?.classList.contains('active');
      if (signupOpen) closeModal('signup');
      if (loginOpen) closeModal('login');
    }
  }

  function bindModalControls() {
    // Openers
    const loginBtn = $('#btn-login');
    const signupBtn = $('#btn-signup');
    const ctaSignup = $('#cta-signup');

    loginBtn && loginBtn.addEventListener('click', () => openModal('login'));
    signupBtn && signupBtn.addEventListener('click', () => openModal('signup'));
    ctaSignup && ctaSignup.addEventListener('click', () => openModal('signup'));

    // Closers
    $$('#signup-modal, #login-modal').forEach((backdrop) => {
      backdrop.addEventListener('click', handleBackdropClick);
    });

    $$('button.modal-close').forEach((btn) => {
      const t = btn.getAttribute('data-close');
      btn.addEventListener('click', () => {
        if (t) closeModal(t);
      });
    });

    document.addEventListener('keydown', handleEscape);
  }

  // Performance: preconnect and dns-prefetch for remote iframes
  function addPerfLinks() {
    const head = document.head;
    const links = [
      { rel: 'preconnect', href: 'https://signup.isppro.net', crossorigin: 'anonymous' },
      { rel: 'dns-prefetch', href: 'https://signup.isppro.net' },
      { rel: 'preconnect', href: 'https://betslip.ibetsports.com', crossorigin: 'anonymous' },
      { rel: 'dns-prefetch', href: 'https://betslip.ibetsports.com' }
    ];

    links.forEach((cfg) => {
      const el = document.createElement('link');
      el.rel = cfg.rel;
      el.href = cfg.href;
      if (cfg.crossorigin) el.crossOrigin = cfg.crossorigin;
      head.appendChild(el);
    });
  }

  // Init
  document.addEventListener('DOMContentLoaded', () => {
    addPerfLinks();
    bindModalControls();
  });
})();
