/**
 * Almighty Solar Energy - Indore, Madhya Pradesh
 * Core UI, Modals, Drawer & Hardware-Accelerated Animations
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle with Silky Slide Animation
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenuDrawer = document.getElementById('mobile-menu-drawer');
  const closeMobileMenuBtn = document.getElementById('close-mobile-menu');

  function openMobileMenu() {
    if (mobileMenuDrawer) {
      mobileMenuDrawer.classList.remove('hidden');
      void mobileMenuDrawer.offsetWidth;
      mobileMenuDrawer.classList.add('active-drawer');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeMobileMenu() {
    if (mobileMenuDrawer) {
      mobileMenuDrawer.classList.remove('active-drawer');
      document.body.style.overflow = '';
      setTimeout(() => {
        if (!mobileMenuDrawer.classList.contains('active-drawer')) {
          mobileMenuDrawer.classList.add('hidden');
        }
      }, 320);
    }
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      openMobileMenu();
    });
  }

  if (closeMobileMenuBtn) {
    closeMobileMenuBtn.addEventListener('click', closeMobileMenu);
  }

  if (mobileMenuDrawer) {
    // Close on clicking backdrop
    mobileMenuDrawer.addEventListener('click', (e) => {
      if (e.target === mobileMenuDrawer) {
        closeMobileMenu();
      }
    });

    // Close on clicking any navigation link inside mobile drawer
    const drawerLinks = mobileMenuDrawer.querySelectorAll('a, button');
    drawerLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMobileMenu();
      });
    });
  }

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMobileMenu();
      closeQuoteModal();
    }
  });

  // 2. FAQ Accordion Logic
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    const trigger = item.querySelector('.faq-trigger');
    if (trigger) {
      trigger.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // 3. Quick Quote Modal Trigger with Smooth Scale Transition
  const quoteModal = document.getElementById('quote-modal');
  const quoteModalTriggers = document.querySelectorAll('.trigger-quote-modal');
  const closeQuoteModalBtn = document.getElementById('close-quote-modal');

  function openQuoteModal() {
    if (quoteModal) {
      quoteModal.classList.remove('hidden');
      void quoteModal.offsetWidth;
      quoteModal.classList.add('active-modal');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeQuoteModal() {
    if (quoteModal) {
      quoteModal.classList.remove('active-modal');
      document.body.style.overflow = '';
      setTimeout(() => {
        if (!quoteModal.classList.contains('active-modal')) {
          quoteModal.classList.add('hidden');
        }
      }, 280);
    }
  }

  quoteModalTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openQuoteModal();
    });
  });

  if (closeQuoteModalBtn) {
    closeQuoteModalBtn.addEventListener('click', closeQuoteModal);
  }

  if (quoteModal) {
    quoteModal.addEventListener('click', (e) => {
      if (e.target === quoteModal) {
        closeQuoteModal();
      }
    });
  }

  // 4. IntersectionObserver for Silky Scroll Reveals
  const revealElements = document.querySelectorAll('.reveal-init, .reveal-left, .reveal-scale');
  if ('IntersectionObserver' in window && revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.12
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('reveal-active'));
  }

  // 5. Metric Roll-Up Counter Animation
  const countElements = document.querySelectorAll('[data-counter-target]');
  if ('IntersectionObserver' in window && countElements.length > 0) {
    const countObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseFloat(el.getAttribute('data-counter-target'));
          const duration = parseInt(el.getAttribute('data-counter-duration') || '1800');
          const prefix = el.getAttribute('data-counter-prefix') || '';
          const suffix = el.getAttribute('data-counter-suffix') || '';
          const decimals = parseInt(el.getAttribute('data-counter-decimals') || '0');

          let startTime = null;

          function step(timestamp) {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            // EaseOutQuad formula
            const current = target * (1 - (1 - progress) * (1 - progress));
            el.textContent = `${prefix}${current.toFixed(decimals)}${suffix}`;

            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              el.textContent = `${prefix}${target.toFixed(decimals)}${suffix}`;
            }
          }

          window.requestAnimationFrame(step);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.25 });

    countElements.forEach(el => countObserver.observe(el));
  }

  // 6. Sticky Navbar Elevation on Scroll
  const mainHeader = document.querySelector('header');
  if (mainHeader) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        mainHeader.classList.add('shadow-xl', 'bg-slate-950/95');
        mainHeader.classList.remove('glass-dark');
      } else {
        mainHeader.classList.remove('shadow-xl', 'bg-slate-950/95');
        mainHeader.classList.add('glass-dark');
      }
    }, { passive: true });
  }

  // 7. Lead Form Submission Handler (Direct WhatsApp Redirect)
  const leadForms = document.querySelectorAll('.solar-lead-form');
  leadForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.querySelector('[name="name"]')?.value || 'Client';
      const phone = form.querySelector('[name="phone"]')?.value || '';
      const location = form.querySelector('[name="location"]')?.value || 'Indore';
      const bill = form.querySelector('[name="bill"]')?.value || '';
      const category = form.querySelector('[name="category"]')?.value || 'Residential PM Surya Ghar';

      const whatsappText = encodeURIComponent(
        `*NEW SOLAR INQUIRY - ALMIGHTY SOLAR ENERGY (INDORE)*\n` +
        `----------------------------------------\n` +
        `• Name: ${name}\n` +
        `• Contact Phone: ${phone}\n` +
        `• Location / Colony: ${location}\n` +
        `• Monthly Electricity Bill: ₹${bill}\n` +
        `• Project Type: ${category}\n` +
        `----------------------------------------\n` +
        `Hello Almighty Solar team, please contact me for a site survey and quotation.`
      );

      // Open WhatsApp
      window.open(`https://wa.me/917773000775?text=${whatsappText}`, '_blank');

      // Visual confirmation feedback
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = `<span class="flex items-center justify-center text-emerald-400 font-bold"><svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></svg> Request Sent!</span>`;
        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          form.reset();
          if (quoteModal && !quoteModal.classList.contains('hidden')) {
            closeQuoteModal();
          }
        }, 2500);
      }
    });
  });

  // 8. Lucide Icons Initialize
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
});
