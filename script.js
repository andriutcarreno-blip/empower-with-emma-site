// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
    toggle.textContent = open ? 'Close' : 'Menu';
    document.body.style.overflow = open ? 'hidden' : '';
  });

  // On mobile, tapping "Work With Me" toggles its dropdown instead of navigating away
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

// Pre-select the topic dropdown when arriving via an "Enquire" link, e.g. contact.html?topic=1:1%20Coaching
const topicSelect = document.getElementById('topic');
if (topicSelect) {
  const params = new URLSearchParams(window.location.search);
  const topic = params.get('topic');
  if (topic) {
    for (const opt of topicSelect.options) {
      if (opt.value.toLowerCase() === topic.toLowerCase()) {
        topicSelect.value = opt.value;
        break;
      }
    }
  }
}
