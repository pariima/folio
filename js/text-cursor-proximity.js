// ─── TEXT CURSOR PROXIMITY ───────────────────────────────────────────────────
function initTextCursorProximity() {
  const lines = document.querySelectorAll('.hero-line');
  if (!lines.length) return;

  const mouse = { x: -9999, y: -9999 };

  window.addEventListener('mousemove', e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('touchmove', e => {
    mouse.x = e.touches[0].clientX;
    mouse.y = e.touches[0].clientY;
  }, { passive: true });

  // Wrap each character in a span
  const subPhrases = [
    'Hand-coding this.',
    'Finding the logic.',
    'Building in 3D.',
    "Asking 'Why?'",
    'Making time for courses.',
    'Debugging my own logic.',
    'Testing AI edge cases.',
    'Prompting, then pivoting.',
  ];
  let subIndex = 0;
  const heroSub = document.querySelector('.hero-sub');
  if (heroSub) {
    function showSubPhrase(text) {
      heroSub.style.opacity = '0';
      heroSub.style.transform = 'translateY(6px)';
      setTimeout(() => {
        heroSub.textContent = text;
        heroSub.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        heroSub.style.opacity = '1';
        heroSub.style.transform = 'translateY(0)';
      }, 300);
    }
    showSubPhrase(subPhrases[0]);
    setInterval(() => {
      subIndex = (subIndex + 1) % subPhrases.length;
      showSubPhrase(subPhrases[subIndex]);
    }, 4500);
  }

  lines.forEach(line => {
    const text = line.dataset.text || '';
    line.setAttribute('aria-label', text);
    line.innerHTML = text.split('').map(ch =>
      ch === ' '
        ? `<span class="hero-letter hero-letter--space" aria-hidden="true">&nbsp;</span>`
        : `<span class="hero-letter" aria-hidden="true">${ch}</span>`
    ).join('');
  });

  const RADIUS = 130;

  function calculateFalloff(distance) {
    return Math.exp(-Math.pow(distance / (RADIUS / 2), 2) / 2);
  }

  function lerpColor(hex1, hex2, t) {
    const parse = h => [
      parseInt(h.slice(1, 3), 16),
      parseInt(h.slice(3, 5), 16),
      parseInt(h.slice(5, 7), 16)
    ];
    const [r1, g1, b1] = parse(hex1);
    const [r2, g2, b2] = parse(hex2);
    return `rgb(${Math.round(r1 + (r2 - r1) * t)},${Math.round(g1 + (g2 - g1) * t)},${Math.round(b1 + (b2 - b1) * t)})`;
  }

  const cssVars = getComputedStyle(document.documentElement);
  const fromColor = cssVars.getPropertyValue('--ink').trim() || '#1A1714';
  const accentColor = cssVars.getPropertyValue('--blue').trim() || '#2B4EE6';

  function tick() {
    document.querySelectorAll('.hero-line .hero-letter:not(.hero-letter--space)').forEach(span => {
      const rect = span.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dist = Math.sqrt((mouse.x - cx) ** 2 + (mouse.y - cy) ** 2);
      const p = calculateFalloff(dist);
      span.style.transform = `scale(${1 + p * 0.4})`;
      // accent lines stay blue, normal lines lerp to blue on hover
      if (!span.closest('.hero-line--accent')) {
        span.style.color = lerpColor(fromColor, accentColor, p);
      }
    });
    requestAnimationFrame(tick);
  }

  tick();
}
