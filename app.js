const prompts = [
  {
    id: 1,
    title: 'Cartoon / Cute',
    tag: 'น่ารัก',
    image: 'assets/image1.webp',
    prompt:
      'ภาพประกอบ(หัวข้อ)แบบการ์ตูนน่ารัก สีสดใส เข้าใจง่าย มีป้ายกำกับ clear labels, educational diagram, for classroom use, simple and easy to understand, high resolution',
  },
  {
    id: 2,
    title: 'Infographic',
    tag: 'สรุปภาพ',
    image: 'assets/image2.webp',
    prompt:
      'อินโฟกราฟิกอธิบาย(หัวข้อ) มีลูกศรและลำดับขั้นตอน เลย์เอาต์สะอาด อ่านง่าย clear labels, educational diagram, for classroom use, simple and easy to understand, high resolution',
  },
  {
    id: 3,
    title: 'Semi-realistic',
    tag: 'กึ่งสมจริง',
    image: 'assets/image3.webp',
    prompt:
      'ภาพประกอบ(หัวข้อ)แบบกึ่งสมจริง รายละเอียดชัดแต่เข้าใจง่าย สไตล์หนังสือเรียน clear labels, educational diagram, for classroom use, simple and easy to understand, high resolution',
  },
  {
    id: 4,
    title: 'Textbook style',
    tag: 'วิชาการ',
    image: 'assets/image4.webp',
    prompt:
      'แผนภาพ(หัวข้อ)แบบหนังสือเรียน ถูกต้องตามหลักวิชาการ พื้นหลังขาว clear labels, educational diagram, for classroom use, simple and easy to understand, high resolution',
  },
  {
    id: 5,
    title: 'Gamified',
    tag: 'เกม',
    image: 'assets/image5.webp',
    prompt:
      'ภาพแนวเกมอธิบาย(หัวข้อ) สีสันสด สนุก ดึงดูดผู้เรียน clear labels, educational diagram, for classroom use, simple and easy to understand, high resolution',
  },
  {
    id: 6,
    title: 'Minimalist',
    tag: 'เรียบง่าย',
    image: 'assets/image6.webp',
    prompt:
      'ภาพ(หัวข้อ)แบบมินิมอล เส้นเรียบง่าย พื้นหลังสะอาด โทนสีนุ่ม clear labels, educational diagram, for classroom use, simple and easy to understand, high resolution',
  },
  {
    id: 7,
    title: 'Abstract / Conceptual',
    tag: 'แนวคิด',
    image: 'assets/image7.webp',
    prompt:
      'ภาพเชิงนามธรรมแสดง(หัวข้อ) สไตล์แนวคิด อนาคต/ลึกซึ้ง clear labels, educational diagram, for classroom use, simple and easy to understand, high resolution',
  },
  {
    id: 8,
    title: 'Classroom scene',
    tag: 'ห้องเรียน',
    image: 'assets/image8.webp',
    prompt:
      'ฉากห้องเรียน ครูสอนเรื่อง(หัวข้อ) นักเรียนตั้งใจเรียน บรรยากาศสมจริง clear labels, educational diagram, for classroom use, simple and easy to understand, high resolution',
  },
  {
    id: 9,
    title: 'Sketch / Hand-drawn',
    tag: 'วาดมือ',
    image: 'assets/image9.webp',
    prompt:
      'ภาพ(หัวข้อ)สไตล์วาดมือ เหมือนจดโน้ตในสมุด เรียบง่าย clear labels, educational diagram, for classroom use, simple and easy to understand, high resolution',
  },
  {
    id: 10,
    title: '3D Render',
    tag: 'สามมิติ',
    image: 'assets/image10.webp',
    prompt:
      'ภาพ(หัวข้อ)แบบสามมิติ รายละเอียดสูง ดูทันสมัย clear labels, educational diagram, for classroom use, simple and easy to understand, high resolution',
  },
  {
    id: 11,
    title: 'Isometric',
    tag: 'มุมเอียง',
    image: 'assets/image11.webp',
    prompt:
      'ภาพ isometric ของ(หัวข้อ) มุมมอง 3D เอียง ดูเป็นระบบ เข้าใจง่าย clear labels, educational diagram, for classroom use, simple and easy to understand, high resolution',
  },
  {
    id: 12,
    title: 'Map style',
    tag: 'แผนที่',
    image: 'assets/image12.webp',
    prompt:
      'แผนที่แสดง(หัวข้อ) แบ่งโซนสีชัด มีสัญลักษณ์ประกอบ clear labels, educational diagram, for classroom use, simple and easy to understand, high resolution',
  },
  {
    id: 13,
    title: 'Comic / Storytelling',
    tag: 'เล่าเรื่อง',
    image: 'assets/image13.webp',
    prompt:
      'การ์ตูนช่องเล่าเรื่อง(หัวข้อ) เป็นลำดับเหตุการณ์ สนุก เข้าใจง่าย clear labels, educational diagram, for classroom use, simple and easy to understand, high resolution',
  },
  {
    id: 14,
    title: 'Flat Design',
    tag: 'แบนเรียบ',
    image: 'assets/image14.webp',
    prompt:
      'ภาพ flat design ของ(หัวข้อ) สีเรียบ ไม่มีเงา ดูทันสมัย clear labels, educational diagram, for classroom use, simple and easy to understand, high resolution',
  },
  {
    id: 15,
    title: 'Watercolor',
    tag: 'สีน้ำ',
    image: 'assets/image15.webp',
    prompt:
      'ภาพสีน้ำของ(หัวข้อ) โทนนุ่ม ธรรมชาติ สบายตา clear labels, educational diagram, for classroom use, simple and easy to understand, high resolution',
  },
  {
    id: 16,
    title: 'Glassmorphism',
    tag: 'โปร่งใส',
    image: 'assets/image16.webp',
    prompt:
      'ภาพสไตล์ glassmorphism ของ(หัวข้อ) โปร่งใส เบลอ ดูล้ำสมัย clear labels, educational diagram, for classroom use, simple and easy to understand, high resolution',
  },
  {
    id: 17,
    title: 'Neon / Cyberpunk',
    tag: 'นีออน',
    image: 'assets/image17.webp',
    prompt:
      'ภาพ(หัวข้อ)สไตล์ cyberpunk นีออน เรืองแสง พื้นหลังมืด clear labels, educational diagram, for classroom use, simple and easy to understand, high resolution',
  },
  {
    id: 18,
    title: 'Vintage / Retro',
    tag: 'วินเทจ',
    image: 'assets/image18.webp',
    prompt:
      'ภาพวินเทจของ(หัวข้อ) โทนเก่า คลาสสิก เหมือนหนังสือโบราณ clear labels, educational diagram, for classroom use, simple and easy to understand, high resolution',
  },
  {
    id: 19,
    title: 'Mind Map',
    tag: 'ผังความคิด',
    image: 'assets/image19.webp',
    prompt:
      'mind map ของ(หัวข้อ) เชื่อมโยงความคิด แยกสีชัดเจน clear labels, educational diagram, for classroom use, simple and easy to understand, high resolution',
  },
  {
    id: 20,
    title: 'Blueprint',
    tag: 'เทคนิค',
    image: 'assets/image20.webp',
    prompt:
      'ภาพ blueprint ของ(หัวข้อ) เส้นเทคนิค สีขาวบนพื้นน้ำเงิน clear labels, educational diagram, for classroom use, simple and easy to understand, high resolution',
  },
  {
    id: 21,
    title: 'Sci-fi',
    tag: 'อนาคต',
    image: 'assets/image21.webp',
    prompt:
      'ภาพแนว sci-fi ของ(หัวข้อ) อนาคต ล้ำสมัย น่าตื่นเต้น clear labels, educational diagram, for classroom use, simple and easy to understand, high resolution',
  },
  {
    id: 22,
    title: 'Clay / Stop-motion',
    tag: 'งานปั้น',
    image: 'assets/image22.webp',
    prompt:
      'ภาพสไตล์ดินน้ำมันของ(หัวข้อ) น่ารัก เหมือนงานปั้น clear labels, educational diagram, for classroom use, simple and easy to understand, high resolution',
  },
  {
    id: 23,
    title: 'Chalkboard',
    tag: 'กระดานดำ',
    image: 'assets/image23.webp',
    prompt:
      'ภาพกระดานดำ เขียนชอล์ก อธิบาย(หัวข้อ) เหมือนในห้องเรียนจริง clear labels, educational diagram, for classroom use, simple and easy to understand, high resolution',
  },
  {
    id: 24,
    title: 'Collage / Mixed media',
    tag: 'คอลลาจ',
    image: 'assets/image24.webp',
    prompt:
      'ภาพ collage ของ(หัวข้อ) ผสมหลายองค์ประกอบ สร้างสรรค์ clear labels, educational diagram, for classroom use, simple and easy to understand, high resolution',
  },
];

const gallery = document.querySelector('[data-gallery]');
const searchInput = document.querySelector('[data-search-input]');
const resultCount = document.querySelector('[data-result-count]');
const emptyState = document.querySelector('[data-empty-state]');
const toast = document.querySelector('[data-toast]');
const themeToggle = document.querySelector('[data-theme-toggle]');
let toastTimer;
let currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

document.documentElement.setAttribute('data-theme', currentTheme);
updateThemeIcon();

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function highlightTopic(value) {
  return escapeHtml(value).replaceAll(
    '(หัวข้อ)',
    '<span class="topic-highlight">(หัวข้อ)</span>',
  );
}

function createCopyIcon() {
  return `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="9" y="9" width="11" height="11" rx="2" fill="none" stroke="currentColor" stroke-width="2"></rect>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
    </svg>
  `;
}

function renderCards(items) {
  gallery.innerHTML = items
    .map(
      (item) => `
        <article class="prompt-card" data-testid="card-prompt-${item.id}">
          <div class="card-image">
            <img
              src="${item.image}"
              alt="ภาพตัวอย่างสไตล์ ${escapeHtml(item.title)}"
              loading="lazy"
              decoding="async"
              width="900"
              height="675"
            />
            <span class="card-number">#${String(item.id).padStart(2, '0')}</span>
          </div>
          <div class="card-body">
            <div class="card-title-row">
              <h3>${escapeHtml(item.title)}</h3>
              <span class="badge">${escapeHtml(item.tag)}</span>
            </div>
            <p class="prompt-text">${highlightTopic(item.prompt)}</p>
            <div class="card-actions">
              <button
                class="copy-button"
                type="button"
                data-copy-id="${item.id}"
                data-testid="button-copy-${item.id}"
                aria-label="คัดลอก Prompt สไตล์ ${escapeHtml(item.title)}"
              >
                ${createCopyIcon()}
                Copy Prompt
              </button>
              <span class="prompt-note">เปลี่ยน <span class="topic-highlight">(หัวข้อ)</span> ก่อนใช้</span>
            </div>
          </div>
        </article>
      `,
    )
    .join('');

  resultCount.textContent = `แสดง ${items.length} จาก ${prompts.length} รายการ`;
  emptyState.hidden = items.length > 0;
}

function filterPrompts(query) {
  const normalized = query.trim().toLocaleLowerCase('th');
  if (!normalized) return prompts;

  return prompts.filter((item) => {
    const searchable = `${item.title} ${item.tag} ${item.prompt}`.toLocaleLowerCase('th');
    return searchable.includes(normalized);
  });
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('is-visible');
  clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    toast.classList.remove('is-visible');
  }, 2200);
}

async function copyPrompt(id, button) {
  const item = prompts.find((prompt) => prompt.id === Number(id));
  if (!item) return;

  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(item.prompt);
    } else {
      fallbackCopy(item.prompt);
    }

    const original = button.innerHTML;
    button.innerHTML = 'คัดลอกแล้ว';
    button.setAttribute('aria-live', 'polite');
    showToast(`คัดลอก ${item.title} แล้ว`);
    window.setTimeout(() => {
      button.innerHTML = original;
    }, 1400);
  } catch (error) {
    try {
      fallbackCopy(item.prompt);
      const original = button.innerHTML;
      button.innerHTML = 'คัดลอกแล้ว';
      button.setAttribute('aria-live', 'polite');
      showToast(`คัดลอก ${item.title} แล้ว`);
      window.setTimeout(() => {
        button.innerHTML = original;
      }, 1400);
    } catch (fallbackError) {
      showToast('คัดลอกไม่สำเร็จ ลองอีกครั้ง');
    }
  }
}

function fallbackCopy(text) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.setAttribute('readonly', '');
  textArea.style.position = 'fixed';
  textArea.style.inset = '0 auto auto 0';
  textArea.style.width = '1px';
  textArea.style.height = '1px';
  textArea.style.opacity = '0';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  const copied = document.execCommand('copy');
  textArea.remove();
  if (!copied) {
    throw new Error('Fallback copy failed');
  }
}

function resetSearch() {
  searchInput.value = '';
  renderCards(prompts);
  searchInput.focus();
}

function updateThemeIcon() {
  const isDark = currentTheme === 'dark';
  themeToggle.setAttribute('aria-label', isDark ? 'เปลี่ยนเป็นโหมดสว่าง' : 'เปลี่ยนเป็นโหมดมืด');
  themeToggle.innerHTML = isDark
    ? `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" stroke-width="2"></circle><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path></svg>`
    : `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;
}

searchInput.addEventListener('input', (event) => {
  renderCards(filterPrompts(event.target.value));
});

document.addEventListener('click', (event) => {
  const copyButton = event.target.closest('[data-copy-id]');
  if (copyButton) {
    copyPrompt(copyButton.dataset.copyId, copyButton);
    return;
  }

  if (event.target.closest('[data-reset-search]')) {
    resetSearch();
  }
});

themeToggle.addEventListener('click', () => {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon();
});

renderCards(prompts);
