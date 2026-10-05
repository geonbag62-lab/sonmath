/* ==============================================
   소앤수학학원 — main.js
   ============================================== */

/* ── 1. PARTICLE CANVAS ── */
(function () {
  const canvas = document.getElementById('particles-canvas');
  const ctx = canvas.getContext('2d');
  let W, H, particles = [], mouse = { x: -999, y: -999 };

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const SYMBOLS = ['∑', 'π', '∫', '√', '∞', 'Δ', '×', '+', '÷', '=', '²', '³'];
  const COLORS  = ['rgba(14,165,233,.15)', 'rgba(99,102,241,.13)', 'rgba(20,184,166,.12)', 'rgba(251,146,60,.1)'];

  function makeParticle() {
    return {
      x:    Math.random() * W,
      y:    Math.random() * H,
      vx:   (Math.random() - .5) * .4,
      vy:   (Math.random() - .5) * .4,
      size: 12 + Math.random() * 18,
      sym:  SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
      col:  COLORS[Math.floor(Math.random() * COLORS.length)],
      alpha: .05 + Math.random() * .12,
      rot:  Math.random() * Math.PI * 2,
      rotV: (Math.random() - .5) * .005,
      life: Math.random(),
      lifeV: .001 + Math.random() * .002,
    };
  }

  for (let i = 0; i < 40; i++) particles.push(makeParticle());

  document.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach((p, i) => {
      // Mouse repel
      const dx = p.x - mouse.x, dy = p.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 150) {
        const force = (150 - dist) / 150 * .6;
        p.vx += (dx / dist) * force;
        p.vy += (dy / dist) * force;
      }
      // Speed limit
      const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
      if (speed > 1.5) { p.vx *= 1.5 / speed; p.vy *= 1.5 / speed; }
      // Friction
      p.vx *= .992; p.vy *= .992;

      p.x  += p.vx; p.y += p.vy;
      p.rot += p.rotV;
      p.life += p.lifeV;

      // Pulse alpha
      const a = p.alpha * (0.6 + 0.4 * Math.sin(p.life * Math.PI * 2));

      // Wrap
      if (p.x < -50) p.x = W + 50;
      if (p.x > W + 50) p.x = -50;
      if (p.y < -50) p.y = H + 50;
      if (p.y > H + 50) p.y = -50;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.globalAlpha = a;
      ctx.font = `bold ${p.size}px Georgia, serif`;
      ctx.fillStyle = p.col;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(p.sym, 0, 0);
      ctx.restore();
    });
    requestAnimationFrame(draw);
  }
  draw();
})();


/* ── 2. NAV SCROLL ── */
(function () {
  const nav = document.getElementById('nav');
  const check = () => nav.classList.toggle('scrolled', scrollY > 20);
  check();
  window.addEventListener('scroll', check, { passive: true });
})();


/* ── 3. SMOOTH ANCHOR SCROLL ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});


/* ── 4. SCROLL REVEAL ── */
(function () {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: .1, rootMargin: '0px 0px -30px 0px' });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
})();


/* ── 5. NUMBER COUNTER ── */
(function () {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el  = e.target;
      const val = el.closest('[data-target]');
      if (!val) return;
      const target = +val.dataset.target;
      const dur = 1800;
      let start = null;
      const ease = t => 1 - Math.pow(1 - t, 3);
      const step = ts => {
        if (!start) start = ts;
        const p = Math.min((ts - start) / dur, 1);
        el.textContent = Math.round(ease(p) * target);
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      io.unobserve(e.target);
    });
  }, { threshold: .5 });
  document.querySelectorAll('.num-val').forEach(el => {
    if (el.closest('[data-target]')) io.observe(el);
  });
})();


/* ── 6. BUTTON RIPPLE ── */
(function () {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes ripple { to { transform: scale(70); opacity: 0; } }
    .ripple-el {
      position: absolute; border-radius: 50%;
      width: 6px; height: 6px; margin: -3px;
      background: rgba(255,255,255,.4);
      transform: scale(0); animation: ripple .55s ease-out forwards;
      pointer-events: none;
    }
  `;
  document.head.appendChild(style);

  document.querySelectorAll('.btn, .loc-btn, .contact-link, .nav-cta').forEach(btn => {
    btn.style.position = 'relative';
    btn.style.overflow = 'hidden';
    btn.addEventListener('click', function (e) {
      const rect = this.getBoundingClientRect();
      const r = document.createElement('span');
      r.className = 'ripple-el';
      r.style.left = (e.clientX - rect.left) + 'px';
      r.style.top  = (e.clientY - rect.top)  + 'px';
      this.appendChild(r);
      setTimeout(() => r.remove(), 600);
    });
  });
})();


/* ── 7. PROG CARD TILT (subtle 3D) ── */
(function () {
  document.querySelectorAll('.prog-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width  / 2;
      const cy = rect.top  + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width  / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      card.style.transform = `translateY(-12px) rotateX(${-dy * 5}deg) rotateY(${dx * 5}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
})();


/* ── 8. HERO TYPEWRITER FOR SLOGAN ── */
(function () {
  const el = document.querySelector('.hero-main-phrase');
  if (!el) return;
  const text = el.textContent.trim();
  el.textContent = '';
  let i = 0;
  const cursor = document.createElement('span');
  cursor.style.cssText = 'display:inline-block;width:2px;height:1em;background:currentColor;vertical-align:middle;margin-left:2px;animation:blink 1s step-end infinite';
  const blinkStyle = document.createElement('style');
  blinkStyle.textContent = '@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }';
  document.head.appendChild(blinkStyle);
  el.appendChild(cursor);

  setTimeout(() => {
    const interval = setInterval(() => {
      if (i < text.length) {
        cursor.insertAdjacentText('beforebegin', text[i]);
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => cursor.remove(), 800);
      }
    }, 55);
  }, 1200);
})();
