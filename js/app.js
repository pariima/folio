// ─── TYPED TEXT ──────────────────────────────────────────────────────────────
(function initTyped() {
  const phrases = ['favourite food group.', 'superpower.', 'language.', 'obsession.', 'way of thinking.'];
  let pi = 0, ci = 0, deleting = false;
  const typedEl = document.getElementById('typed');
  if (!typedEl) return;
  function type() {
    const phrase = phrases[pi];
    if (!deleting) {
      typedEl.textContent = phrase.slice(0, ci + 1);
      ci++;
      if (ci === phrase.length) { deleting = true; setTimeout(type, 1800); return; }
      setTimeout(type, 60);
    } else {
      typedEl.textContent = phrase.slice(0, ci - 1);
      ci--;
      if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; setTimeout(type, 400); return; }
      setTimeout(type, 35);
    }
  }
  setTimeout(type, 1200);
})();

// ─── PAPER GRAIN TEXTURE ─────────────────────────────────────────────────────
(function generateGrain() {
  const size = 256;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext('2d');
  const imageData = ctx.createImageData(size, size);
  const data = imageData.data;

  for (let i = 0; i < data.length; i += 4) {
    // Dark grain on transparent: random dark speckles
    const rand = Math.random();
    const val = rand < 0.5 ? Math.floor(rand * 80) : 255; // mostly dark speckles
    // Line 15 is for noise effect
    const alpha = rand < 0.5 ? Math.floor((0.5 - rand) * 35) : 0;
    data[i] = 20;   // R — dark brownish
    data[i + 1] = 15;   // G
    data[i + 2] = 10;   // B
    data[i + 3] = alpha; // A — sparse dark dots
  }
  ctx.putImageData(imageData, 0, 0);

  const el = document.getElementById('paperTexture');
  el.style.backgroundImage = `url(${canvas.toDataURL('image/png')})`;
  el.style.opacity = '1'; // control per-pixel via alpha instead of element opacity
})();

// ─── STATE ───────────────────────────────────────────────────────────────────
let projects = [...PROJECTS];
let blogs = [...BLOGS];
let currentPage = 'home';
let cmsTab = 'projects';
let editingId = null;

// ─── CURSOR ──────────────────────────────────────────────────────────────────
const dot = document.getElementById('cursorDot');
const ring = document.getElementById('cursorRing');

document.body.style.cursor = 'none';
dot.style.display = 'block';
ring.style.display = 'block';

let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  dot.style.left = mx + 'px';
  dot.style.top = my + 'px';
});

(function animRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px';
  ring.style.top = ry + 'px';
  requestAnimationFrame(animRing);
})();

const hoverTargets = 'a, button, .hp-card, .blog-card, .pcard, .skill, .cms-fab, .back-btn, .nav-logo';
document.addEventListener('mouseover', e => {
  if (e.target.closest(hoverTargets)) ring.classList.add('hov');
});
document.addEventListener('mouseout', e => {
  if (e.target.closest(hoverTargets)) ring.classList.remove('hov');
});

// ─── NAVIGATION ──────────────────────────────────────────────────────────────
function navigate(page, id) {
  currentPage = page;
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));

  const pageEl = document.getElementById('page-' + page);
  if (pageEl) pageEl.classList.add('active');

  const navLink = document.querySelector('[data-page="' + page + '"]');
  if (navLink) navLink.classList.add('active');

  document.body.classList.toggle('projects-page', page === 'projects' || page === 'detail');

  if (page === 'detail') renderDetail(id);
  window.scrollTo(0, 0);
}

// ─── RENDER HOME ─────────────────────────────────────────────────────────────
function renderHome() {
  // Marquee
  const skills = ['UX Research', 'Interaction Design', 'Prototyping', 'Design Systems',
    'User Testing', 'Visual Design', 'Service Design', 'Figma',
    'Journey Mapping', 'Information Architecture'];
  const mqTrack = document.getElementById('mqTrack');
  const items = [...skills, ...skills]
    .map(s => `<span class="mq-item"><span class="mq-dot"></span>${s}</span>`)
    .join('');
  mqTrack.innerHTML = items + items;

  // home project grid
const homeGrid = document.getElementById('homeGrid');
homeGrid.innerHTML = projects.slice(0, 4).map((p, i) => {
  const imgEl = p.cover
    ? `<img src="${p.cover}" alt="${p.title}">`
    : `<div style="width:100%;height:100%;background:var(--ink)"></div>`;
  return `
    <div class="hp-card" onclick="pushProject(${p.id})">
      <div class="hp-info">
        <div class="hp-tag">${p.tag}</div>
        <div class="hp-title">${p.title}</div>
        <div class="hp-excerpt">${p.excerpt}</div>
        <div class="hp-arrow">
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
            <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" stroke-width="1.5"/>
          </svg>
        </div>
      </div>
      <div class="hp-bg">${imgEl}</div>
    </div>`;
}).join('');



  // Blog grid
  const homeBlogGrid = document.getElementById('homeBlogGrid');
  homeBlogGrid.innerHTML = blogs.slice(0, 3).map(b => `
    <div class="blog-card" onclick="navigate('detail', 'b${b.id}')">
      <div class="blog-date">${b.date}</div>
      <div class="blog-title">${b.title}</div>
      <div class="blog-excerpt">${b.excerpt}</div>
      <div class="blog-rt">${b.readTime}</div>
    </div>`).join('');

}

// ─── RENDER PROJECTS ─────────────────────────────────────────────────────────

function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  const pmCount = document.getElementById('pmCount');
  if (pmCount) pmCount.textContent = String(projects.length).padStart(2, '0');

  grid.innerHTML = projects.map((p, i) => {
    const imgEl = p.cover
      ? `<img src="${p.cover}" alt="${p.title}" loading="lazy">`
      : `<div style="width:100%;height:100%;background:#1A1714"></div>`;
    const tags = (p.tag || '').split('·').map(t =>
      `<span class="pcard-tag">${t.trim()}</span>`).join('');
    return `
      <div class="pcard" onclick="pushProject(${p.id})">
        <div class="pcard-num">0${i + 1}</div>
        <div class="pcard-info">
          <div class="pcard-title">${p.title}</div>
          <div class="pcard-meta">${p.year} · ${p.client || p.role}</div>
          <div class="pcard-exc">${p.excerpt}</div>
        </div>
        <div class="pcard-img">${imgEl}</div>
        <div class="pcard-side">
          <div class="pcard-tags">${tags}</div>
          <div class="pcard-arrow">
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" stroke-width="1.5"/>
            </svg>
          </div>
        </div>
      </div>`;
  }).join('');
}
// ─── RENDER SECTION ──────────────────────────────────────────────────────────
function renderSection(s) {
  switch(s.type) {
    case 'text': return `
      <div class="cs-section">
        <div class="cs-section-left">
          <div class="cs-section-title">${s.title}</div>
        </div>
        <div class="cs-section-right">
          <p>${s.body}</p>
        </div>
      </div>`;
    case 'image': return `
      <div class="cs-image">
        <img src="${s.src}" alt="${s.caption || ''}">
        ${s.caption ? `<div class="cs-caption">${s.caption}</div>` : ''}
      </div>`;
    case 'quote': return `
      <div class="cs-quote">
        <div class="cs-quote-mark">"</div>
        <blockquote>${s.text}</blockquote>
      </div>`;
    case 'outcomes': return `
      <div class="cs-outcomes">
        <div class="cs-section-left">
          <div class="cs-section-title">Outcomes</div>
        </div>
        <div class="cs-section-right">
          <ul class="cs-outcome-list">
            ${s.items.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
      </div>`;
    default: return '';
  }
}

// ─── RENDER BLOG ─────────────────────────────────────────────────────────────
function renderBlog() {
  const grid = document.getElementById('blogGrid');
  if (!grid) return;
  grid.innerHTML = blogs.map(b => `
    <div class="blog-card" onclick="navigate('detail', 'b${b.id}')">
      <div class="blog-date">${b.date}</div>
      <div class="blog-title">${b.title}</div>
      <div class="blog-excerpt">${b.excerpt}</div>
      <div class="blog-rt">${b.readTime}</div>
    </div>`).join('');
}

// ─── RENDER DETAIL ───────────────────────────────────────────────────────────
function renderDetail(id) {
  const el = document.getElementById('detailContent');
  const isBlog = String(id).startsWith('b');
  const numId = isBlog ? parseInt(String(id).slice(1)) : parseInt(id);
  const item = isBlog
    ? blogs.find(b => b.id === numId)
    : projects.find(p => p.id === numId);

  if (!item) { el.innerHTML = '<p style="padding:48px">Not found.</p>'; return; }

  const backPage = isBlog ? 'blog' : 'projects';

  if (isBlog) {
    el.innerHTML = `
      <button class="back-btn" onclick="navigate('${backPage}')">
        ← Back to ${backPage}
      </button>
      <div style="max-width:800px;margin:0 auto;padding:0 48px 96px">
        <div class="blog-date" style="margin-bottom:12px">${item.date} · ${item.readTime}</div>
        <h1 style="font-family:var(--fd);font-size:clamp(2rem,4vw,3rem);letter-spacing:-.03em;margin-bottom:32px;line-height:1.1">${item.title}</h1>
        <div class="detail-body">${marked.parse(item.content)}</div>
      </div>`;
  } else {
   
    const heroImg = item.cover
      ? `<img src="${item.cover}" alt="${item.title}">`
      : `<div style="width:100%;height:100%;background:linear-gradient(135deg,#1a2550,var(--blue))"></div>`;

    const body = item.sections
      ? item.sections.map(renderSection).join('')
      : `<div class="detail-body"><p class="detail-intro">${item.excerpt}</p>${marked.parse(item.content || '')}</div>`;

    el.innerHTML = `
      <button class="back-btn" onclick="navigate('${backPage}')">
        ← Back to projects
      </button>
      <div class="detail-hero">${heroImg}
        <div class="detail-hero-text">
          <div class="detail-tag">${item.tag}</div>
          <h1>${item.title}</h1>
        </div>
      </div>
      <div class="detail-meta">
        <div class="detail-meta-item"><label>Client</label><span>${item.client || '—'}</span></div>
        <div class="detail-meta-item"><label>Role</label><span>${item.role || '—'}</span></div>
        <div class="detail-meta-item"><label>Year</label><span>${item.year || '—'}</span></div>
        <div class="detail-meta-item"><label>Duration</label><span>${item.duration || '—'}</span></div>
      </div>
      <div class="cs-body">${body}</div>`;

    if (!item.sections) {
      el.querySelectorAll('.detail-body img').forEach(img => {
        img.addEventListener('click', () => openLightbox(img.src, img.alt));
      });
    } else {
      el.querySelectorAll('.cs-image img').forEach(img => {
        img.addEventListener('click', () => openLightbox(img.src, img.alt));
      });
    }
  }
  }

// Image zoom //

function openLightbox(src, alt) {
  const lb = document.getElementById('lightbox');
  document.getElementById('lightboxImg').src = src;
  document.getElementById('lightboxImg').alt = alt;
  lb.classList.add('open');
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLightbox();
});


// ─── CMS ─────────────────────────────────────────────────────────────────────
function openCMS() {
  document.getElementById('cmsOverlay').classList.add('open');
  renderCMSList();
}
function closeCMS() {
  document.getElementById('cmsOverlay').classList.remove('open');
  editingId = null;
}
function switchTab(tab) {
  cmsTab = tab;
  document.querySelectorAll('.cms-tab').forEach(t => t.classList.remove('active'));
  document.querySelector('[data-tab="' + tab + '"]').classList.add('active');
  renderCMSList();
}

function renderCMSList() {
  const body = document.getElementById('cmsBody');
  const items = cmsTab === 'projects' ? projects : blogs;
  const listHTML = `
    <div class="cms-list">
      ${items.map(item => `
        <div class="cms-item">
          <span>${item.title}</span>
          <div class="cms-item-actions">
            <button class="cms-btn" onclick="editItem(${cmsTab === 'projects' ? item.id : "'b" + item.id + "'"})">Edit</button>
            <button class="cms-btn danger" onclick="deleteItem(${cmsTab === 'projects' ? item.id : "'b" + item.id + "'"})">Delete</button>
          </div>
        </div>`).join('')}
    </div>
    <button class="cms-btn" onclick="newItem()" style="width:100%;padding:12px;margin-top:8px">
      + Add ${cmsTab === 'projects' ? 'Project' : 'Post'}
    </button>`;
  body.innerHTML = listHTML;
}

function editItem(id) {
  const isBlog = String(id).startsWith('b');
  const numId = isBlog ? parseInt(String(id).slice(1)) : parseInt(id);
  const item = isBlog ? blogs.find(b => b.id === numId) : projects.find(p => p.id === numId);
  editingId = id;
  renderCMSForm(item, isBlog);
}

function newItem() {
  editingId = null;
  renderCMSForm(null, cmsTab === 'blog');
}

function renderCMSForm(item, isBlog) {
  const body = document.getElementById('cmsBody');
  if (isBlog) {
    body.innerHTML = `
      <div class="cms-form">
        <div class="cms-fl"><label>Title</label>
          <input id="f-title" value="${item ? item.title : ''}"></div>
        <div class="cms-row">
          <div class="cms-fl"><label>Date</label>
            <input id="f-date" value="${item ? item.date : ''}"></div>
          <div class="cms-fl"><label>Read Time</label>
            <input id="f-rt" value="${item ? item.readTime : ''}"></div>
        </div>
        <div class="cms-fl"><label>Excerpt</label>
          <textarea id="f-exc" rows="2">${item ? item.excerpt : ''}</textarea></div>
        <div class="cms-fl"><label>Content (Markdown)</label>
          <textarea id="f-content" rows="10">${item ? item.content : ''}</textarea>
          <span class="cms-tip">## Heading · **bold** · > quote · - list</span>
        </div>
        <div class="cms-actions">
          <button class="cms-save" onclick="saveItem()">Save</button>
          <button class="cms-cancel" onclick="renderCMSList()">Cancel</button>
        </div>
      </div>`;
  } else {
    body.innerHTML = `
      <div class="cms-form">
        <div class="cms-fl"><label>Title</label>
          <input id="f-title" value="${item ? item.title : ''}"></div>
        <div class="cms-row">
          <div class="cms-fl"><label>Client</label>
            <input id="f-client" value="${item ? item.client : ''}"></div>
          <div class="cms-fl"><label>Role</label>
            <input id="f-role" value="${item ? item.role : ''}"></div>
        </div>
        <div class="cms-row">
          <div class="cms-fl"><label>Year</label>
            <input id="f-year" value="${item ? item.year : ''}"></div>
          <div class="cms-fl"><label>Duration</label>
            <input id="f-duration" value="${item ? item.duration : ''}"></div>
        </div>
        <div class="cms-fl"><label>Tags (use · as separator)</label>
          <input id="f-tag" value="${item ? item.tag : ''}"></div>
        <div class="cms-fl"><label>Cover Image URL</label>
          <input id="f-cover" value="${item ? (item.cover || '') : ''}"></div>
        <div class="cms-fl"><label>Excerpt</label>
          <textarea id="f-exc" rows="2">${item ? item.excerpt : ''}</textarea></div>
        <div class="cms-fl"><label>Content (Markdown)</label>
          <textarea id="f-content" rows="10">${item ? item.content : ''}</textarea>
          <span class="cms-tip">## Heading · **bold** · > quote · - list</span>
        </div>
        <div class="cms-actions">
          <button class="cms-save" onclick="saveItem()">Save</button>
          <button class="cms-cancel" onclick="renderCMSList()">Cancel</button>
        </div>
      </div>`;
  }
}

function saveItem() {
  const isBlog = cmsTab === 'blog';
  const title = document.getElementById('f-title').value.trim();
  const excerpt = document.getElementById('f-exc').value.trim();
  const content = document.getElementById('f-content').value.trim();
  if (!title) return;

  if (isBlog) {
    const obj = {
      title, excerpt, content,
      date: document.getElementById('f-date').value.trim(),
      readTime: document.getElementById('f-rt').value.trim()
    };
    if (editingId) {
      const numId = parseInt(String(editingId).slice(1));
      const idx = blogs.findIndex(b => b.id === numId);
      blogs[idx] = { ...blogs[idx], ...obj };
    } else {
      obj.id = Date.now();
      blogs.push(obj);
    }
  } else {
    const obj = {
      title, excerpt, content,
      client: document.getElementById('f-client').value.trim(),
      role: document.getElementById('f-role').value.trim(),
      year: document.getElementById('f-year').value.trim(),
      duration: document.getElementById('f-duration').value.trim(),
      tag: document.getElementById('f-tag').value.trim(),
      cover: document.getElementById('f-cover').value.trim()
    };
    if (editingId) {
      const idx = projects.findIndex(p => p.id === parseInt(editingId));
      projects[idx] = { ...projects[idx], ...obj };
    } else {
      obj.id = Date.now();
      projects.push(obj);
    }
  }

  renderAll();
  renderCMSList();
  editingId = null;
}

function deleteItem(id) {
  if (!confirm('Delete this item?')) return;
  const isBlog = String(id).startsWith('b');
  const numId = isBlog ? parseInt(String(id).slice(1)) : parseInt(id);
  if (isBlog) blogs = blogs.filter(b => b.id !== numId);
  else projects = projects.filter(p => p.id !== numId);
  renderAll();
  renderCMSList();
}

// ─── FOOTER WAVE ─────────────────────────────────────────────────────────────
function initFooterWave() {
  const container = document.getElementById('footerWave');
  if (!container) return;

  const barCount = 28;
  container.innerHTML = Array.from({ length: barCount }, (_, i) =>
    `<div class="footer-wave-bar" style="height:${i + 1}px" data-index="${i}"></div>`
  ).join('');

  const bars = container.querySelectorAll('.footer-wave-bar');
  let t = 0;
  let visible = false;

  const observer = new IntersectionObserver(entries => {
    visible = entries[0].isIntersecting;
  }, { threshold: 0.1 });
  observer.observe(container);

  function animate() {
    if (visible) {
      bars.forEach((bar, i) => {
        const offset = Math.max(0, 20 * Math.sin((t + i) * 0.3));
        bar.style.transform = `translateY(${i + offset}px)`;
      });
      t += 0.1;
    }
    requestAnimationFrame(animate);
  }
  animate();
}
// ─── WORD FLIP ──────────────────────────────────────────────────────────────────
function initWordFlip() {
  // Hero accent line flip
  const el = document.getElementById('flipWord');
  if (el) {
    const words = ['noticed.', 'felt.', 'remembered.', 'human.', 'invisible.'];
    let index = 0;
    function showWord(word) {
      el.innerHTML = '';
      word.split('').forEach((letter, i) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.cssText = `display:inline-block;opacity:0;filter:blur(8px);animation:flipLetterIn 0.4s ease forwards;animation-delay:${i * 0.04}s`;
        el.appendChild(span);
      });
    }
    showWord(words[index]);
    setInterval(() => { index = (index + 1) % words.length; showWord(words[index]); }, 3000);
  }

  // Eyebrow role flip
  const roleEl = document.getElementById('flipRole');
  if (roleEl) {
    const roles = ['UX Designer', 'Developer', 'Strategist'];
    let roleIndex = 0;
    function showRole(word) {
      roleEl.innerHTML = '';
      word.split('').forEach((letter, i) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.cssText = `display:inline-block;opacity:0;filter:blur(8px);animation:flipLetterIn 0.4s ease forwards;animation-delay:${i * 0.04}s`;
        roleEl.appendChild(span);
      });
    }
    showRole(roles[roleIndex]);
    setInterval(() => { roleIndex = (roleIndex + 1) % roles.length; showRole(roles[roleIndex]); }, 3000);
  }
}
// ─── ROUTER ──────────────────────────────────────────────────────────────────
function pushProject(id) {
  history.pushState({ projectId: id }, '', `/project/${id}`);
  renderProjectDetail(projects.find(p => p.id === id));
}

function goHome() {
  history.pushState({}, '', '/');
  handleRouting();
}

function renderProjectDetail(project) {
  if (!project) { navigate('home'); return; }
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  document.getElementById('page-detail').classList.add('active');
  document.body.classList.add('projects-page');
  window.scrollTo(0, 0);

  const el = document.getElementById('detailContent');
  const heroImg = project.cover
    ? `<img src="${project.cover}" alt="${project.title}">`
    : `<div style="width:100%;height:100%;background:linear-gradient(135deg,#1a2550,var(--blue))"></div>`;

  el.innerHTML = `
    <button class="back-btn" onclick="goHome()">← Back to projects</button>
    <div class="detail-hero">${heroImg}
      <div class="detail-hero-text">
        <div class="detail-tag">${project.tag}</div>
        <h1>${project.title}</h1>
      </div>
    </div>
    <div class="detail-meta">
      <div class="detail-meta-item"><label>Client</label><span>${project.client || '—'}</span></div>
      <div class="detail-meta-item"><label>Role</label><span>${project.role || '—'}</span></div>
      <div class="detail-meta-item"><label>Year</label><span>${project.year || '—'}</span></div>
      <div class="detail-meta-item"><label>Duration</label><span>${project.duration || '—'}</span></div>
    </div>
    <div class="cs-body">${project.sections ? project.sections.map(renderSection).join('') : ''}</div>`;

  el.querySelectorAll('.cs-image img').forEach(img => {
    img.addEventListener('click', () => openLightbox(img.src, img.alt));
  });
}

function handleRouting() {
  const path = window.location.pathname;
  if (path.startsWith('/project/')) {
    const id = parseInt(path.split('/project/')[1]);
    const project = projects.find(p => p.id === id);
    if (project) {
      renderAll();
      renderProjectDetail(project);
      return;
    }
  }
  renderAll();
  navigate('home');
  setTimeout(initFooterWave, 500);
}

window.addEventListener('popstate', handleRouting);

// ─── INIT ─────────────────────────────────────────────────────────────────────
function renderAll() {
  renderHome();
  renderProjects();
  renderBlog();
}

document.addEventListener('DOMContentLoaded', () => {
  handleRouting();
  initTextCursorProximity();
  initCardOpacity();
});

// ─── CARD SCROLL OPACITY ─────────────────────────────────────────────────────
function initCardOpacity() {
  window.addEventListener('scroll', () => {
    document.querySelectorAll('.hp-card').forEach(card => {
      const rect = card.getBoundingClientRect();
      const windowH = window.innerHeight;
      // how much the card is buried under the next card (0 = fully visible, 1 = fully covered)
      const overlap = Math.max(0, Math.min(1, (windowH - rect.top) / windowH - 0.5));
      const opacity = 0.15 + overlap * 0.15;
      card.querySelector('.hp-info').style.background = `rgba(255,255,255,${opacity})`;
    });
  }, { passive: true });
}

