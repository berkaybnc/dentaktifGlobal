/* ==========================================================================
   DENT AKTIF CLINIC GLOBAL - INTERACTIVE BEFORE/AFTER SLIDER
   Smooth Split-Screen Clip Path & Multi-Case Switcher
   ========================================================================== */

export const BEFORE_AFTER_CASES = [
  {
    id: "hollywood-smile",
    name: "Hollywood Smile Makeover",
    description: "20 E-Max Porcelain Veneers with custom shade matching and digital smile design.",
    beforeImg: "assets/images/smile-before.jpg",
    afterImg: "assets/images/smile-after.jpg",
    fallbackBefore: "smile_before_1790724550144.jpg",
    fallbackAfter: "smile_after_1790724570220.jpg",
    duration: "5 Days (2 Appointments)",
    patientOrigin: "London, United Kingdom"
  },
  {
    id: "full-arch-implants",
    name: "All-on-6 Dental Implants",
    description: "Full mouth restoration using Swiss Straumann implants and fixed Zirconia bridges.",
    beforeImg: "assets/images/smile-before.jpg",
    afterImg: "assets/images/smile-after.jpg",
    duration: "6 Days (1st Phase)",
    patientOrigin: "Munich, Germany"
  },
  {
    id: "zirconia-crowns",
    name: "Zirconia Porcelain Crowns",
    description: "Full makeover fixing severe wear, misalignment and discoloration.",
    beforeImg: "assets/images/smile-before.jpg",
    afterImg: "assets/images/smile-after.jpg",
    duration: "4 Days",
    patientOrigin: "Dublin, Ireland"
  }
];

export function initBeforeAfter() {
  const wrapper = document.getElementById('ba-slider-wrapper');
  const divider = document.getElementById('ba-divider');
  const afterImgContainer = document.getElementById('ba-img-after');
  const beforeImgContainer = document.getElementById('ba-img-before');
  const tabsContainer = document.getElementById('ba-cases-nav');
  const caseMetaEl = document.getElementById('ba-case-meta');

  if (!wrapper || !divider || !afterImgContainer) return;

  let isDragging = false;

  // Set Split Position (0% to 100%)
  function setSliderPosition(percentage) {
    const clamped = Math.max(0, Math.min(100, percentage));
    divider.style.left = `${clamped}%`;
    afterImgContainer.style.clipPath = `polygon(0 0, ${clamped}% 0, ${clamped}% 100%, 0 100%)`;
  }

  // Pointer position helper
  function getPointerX(e) {
    const rect = wrapper.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    return ((clientX - rect.left) / rect.width) * 100;
  }

  // Event Listeners for Mouse & Touch
  function startDrag(e) {
    isDragging = true;
    setSliderPosition(getPointerX(e));
  }

  function stopDrag() {
    isDragging = false;
  }

  function moveDrag(e) {
    if (!isDragging) return;
    setSliderPosition(getPointerX(e));
  }

  wrapper.addEventListener('mousedown', startDrag);
  window.addEventListener('mouseup', stopDrag);
  window.addEventListener('mousemove', moveDrag);

  wrapper.addEventListener('touchstart', startDrag, { passive: true });
  window.addEventListener('touchend', stopDrag);
  window.addEventListener('touchmove', moveDrag, { passive: true });

  // Initialize Case Selector Tabs
  if (tabsContainer) {
    tabsContainer.innerHTML = BEFORE_AFTER_CASES.map((item, index) => `
      <button class="ba-tab-btn ${index === 0 ? 'active' : ''}" data-case-id="${item.id}">
        ${item.name}
      </button>
    `).join('');

    tabsContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.ba-tab-btn');
      if (!btn) return;

      tabsContainer.querySelectorAll('.ba-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const targetId = btn.getAttribute('data-case-id');
      const selectedCase = BEFORE_AFTER_CASES.find(c => c.id === targetId);

      if (selectedCase) {
        // Reset slider to center position
        setSliderPosition(50);
        if (caseMetaEl) {
          caseMetaEl.innerHTML = `
            <strong>${selectedCase.name}</strong> — ${selectedCase.description} 
            <span style="color: var(--color-brand-primary); margin-left: 0.5rem;">📍 ${selectedCase.patientOrigin} (${selectedCase.duration})</span>
          `;
        }
      }
    });
  }

  // Default initial position
  setSliderPosition(50);
}
