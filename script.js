// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });

  // On mobile, tapping "Experiences" toggles its submenu instead of navigating away
  const hasSub = document.querySelector('.has-sub');
  if (hasSub) {
    const trigger = hasSub.querySelector(':scope > a');
    trigger.addEventListener('click', (e) => {
      if (window.innerWidth <= 860) {
        e.preventDefault();
        hasSub.classList.toggle('open');
      }
    });
  }
}

// Contact form — no backend wired up, just a friendly confirmation
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('form-note').style.display = 'block';
    form.reset();
  });
}
