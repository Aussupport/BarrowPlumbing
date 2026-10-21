/**
 * Barrow Plumbing & Heating - Modern Site Controller
 * Business: 2 Garnett St, Huntingdale VIC 3166 | Phone: 0449 081 921
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initHeaderScroll();
  initFaqAccordion();
  initQuoteModal();
  initEnquiryForms();
  highlightActiveNav();
});

/**
 * Mobile Navigation Toggle
 */
function initMobileNav() {
  const toggleBtn = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (!toggleBtn || !mainNav) return;

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', !isExpanded);
    mainNav.classList.toggle('active');
  });

  // Close when clicking nav links
  const navLinks = mainNav.querySelectorAll('.nav-link, .mobile-nav-cta .btn');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('active');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!mainNav.contains(e.target) && !toggleBtn.contains(e.target) && mainNav.classList.contains('active')) {
      mainNav.classList.remove('active');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  });
}

/**
 * Sticky Header Scroll Effect
 */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

/**
 * FAQ Accordion
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (!questionBtn) return;

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other items for clean accordion behavior
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherBtn = otherItem.querySelector('.faq-question');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle current
      if (isActive) {
        item.classList.remove('active');
        questionBtn.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('active');
        questionBtn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/**
 * Quick Quote Modal
 */
function initQuoteModal() {
  const modal = document.getElementById('quoteModal');
  const openButtons = document.querySelectorAll('[data-open-modal="quote"]');
  const closeButton = modal ? modal.querySelector('.modal-close') : null;

  if (!modal) return;

  function openModal() {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    const firstInput = modal.querySelector('input');
    if (firstInput) setTimeout(() => firstInput.focus(), 100);
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  if (closeButton) {
    closeButton.addEventListener('click', closeModal);
  }

  // Close on backdrop click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

/**
 * Enquiry Form Handling
 */
function initEnquiryForms() {
  const forms = document.querySelectorAll('.enquiry-form');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = form.querySelector('[name="customer_name"]');
      const phoneInput = form.querySelector('[name="customer_phone"]');
      const emailInput = form.querySelector('[name="customer_email"]');
      const serviceInput = form.querySelector('[name="service_type"]');
      const suburbInput = form.querySelector('[name="customer_suburb"]');
      const messageInput = form.querySelector('[name="customer_message"]');
      const statusDiv = form.querySelector('.form-status');

      const name = nameInput ? nameInput.value.trim() : '';
      const phone = phoneInput ? phoneInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      const service = serviceInput ? serviceInput.value : 'General Plumbing';
      const suburb = suburbInput ? suburbInput.value.trim() : 'Huntingdale Area';
      const message = messageInput ? messageInput.value.trim() : '';

      if (!name || !phone) {
        if (statusDiv) {
          statusDiv.className = 'form-status error';
          statusDiv.textContent = 'Please provide both your name and a valid contact phone number.';
        }
        return;
      }

      // Format submission data
      const subject = encodeURIComponent(`New Plumbing Enquiry - ${name} (${suburb})`);
      const bodyText = encodeURIComponent(
        `Customer Name: ${name}\n` +
        `Phone: ${phone}\n` +
        `Email: ${email || 'Not provided'}\n` +
        `Suburb / Area: ${suburb}\n` +
        `Service Needed: ${service}\n\n` +
        `Details / Message:\n${message || 'No additional details specified.'}`
      );

      // Show confirmation in UI
      if (statusDiv) {
        statusDiv.className = 'form-status success';
        statusDiv.innerHTML = `
          <strong>✓ Enquiry Sent Successfully!</strong><br>
          Thank you, <strong>${escapeHtml(name)}</strong>. Barrow Plumbing &amp; Heating has received your request and will call you back at <strong>${escapeHtml(phone)}</strong>.<br>
          <span style="display:inline-block; margin-top: 0.5rem; font-size: 0.9em;">
            Need immediate assistance? Call <a href="tel:0449081921" style="font-weight:700; text-decoration:underline;">0449 081 921</a>.
          </span>
        `;
      }

      // Reset form
      form.reset();

      // If user desires immediate email delivery fallback
      const mailtoLink = `mailto:?to=&subject=${subject}&body=${bodyText}`;
      console.log('Enquiry logged:', { name, phone, email, service, suburb, message });
    });
  });
}

/**
 * Navigation Active State Highlight
 */
function highlightActiveNav() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;

    if (currentPath.endsWith(href) || (currentPath.endsWith('/') && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/**
 * HTML Escaping Helper
 */
function escapeHtml(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}
