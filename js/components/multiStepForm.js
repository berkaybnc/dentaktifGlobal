/* ==========================================================================
   DENT AKTIF CLINIC GLOBAL - MULTI-STEP CONSULTATION FORM
   Interactive Step Wizard, File Drag & Drop, Validation & Submit Handler
   ========================================================================== */

import { submitConsultationApi } from '../api/consultationApi.js';

export function initMultiStepForm() {
  const form = document.getElementById('consultation-multistep-form');
  if (!form) return;

  let currentStep = 1;
  const totalSteps = 4;

  const stepIndicators = document.querySelectorAll('.step-indicator');
  const formPanels = document.querySelectorAll('.form-panel');
  const btnPrev = document.getElementById('btn-form-prev');
  const btnNext = document.getElementById('btn-form-next');
  const dropzone = document.getElementById('file-dropzone');
  const fileInput = document.getElementById('dental-photo-input');
  const filePreviewContainer = document.getElementById('file-preview-container');

  const uploadedFiles = [];

  // 1. Navigation Between Steps
  function updateStepUI() {
    formPanels.forEach((panel, index) => {
      panel.classList.toggle('active', index + 1 === currentStep);
    });

    stepIndicators.forEach((ind, index) => {
      const stepNum = index + 1;
      ind.classList.toggle('active', stepNum === currentStep);
      ind.classList.toggle('completed', stepNum < currentStep);
    });

    // Update Prev Button
    if (btnPrev) {
      btnPrev.style.visibility = currentStep === 1 ? 'hidden' : 'visible';
    }

    // Update Next / Submit Button Text
    if (btnNext) {
      if (currentStep === totalSteps) {
        btnNext.innerHTML = '🚀 Submit & Get 3D Quote Now';
        btnNext.classList.add('btn-gold');
      } else {
        btnNext.innerHTML = 'Continue to Next Step →';
        btnNext.classList.remove('btn-gold');
      }
    }
  }

  // 2. Validate Step Fields
  function validateCurrentStep() {
    const activePanel = document.querySelector(`.form-panel[data-step="${currentStep}"]`);
    if (!activePanel) return true;

    const requiredInputs = activePanel.querySelectorAll('[required]');
    let isValid = true;

    requiredInputs.forEach(input => {
      if (!input.value.trim()) {
        isValid = false;
        input.classList.add('input-error');
        input.style.borderColor = '#EF4444';
      } else {
        input.classList.remove('input-error');
        input.style.borderColor = '';
      }
    });

    if (!isValid) {
      alert('Lütfen bu adımdaki gerekli tüm alanları doldurunuz.');
    }

    return isValid;
  }

  // 3. Next / Prev Handlers
  if (btnNext) {
    btnNext.addEventListener('click', async () => {
      if (!validateCurrentStep()) return;

      if (currentStep < totalSteps) {
        currentStep++;
        updateStepUI();
      } else {
        // Final Submit Phase
        await handleFormSubmit();
      }
    });
  }

  if (btnPrev) {
    btnPrev.addEventListener('click', () => {
      if (currentStep > 1) {
        currentStep--;
        updateStepUI();
      }
    });
  }

  // 4. Drag and Drop File Upload
  if (dropzone && fileInput) {
    dropzone.addEventListener('click', () => fileInput.click());

    dropzone.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropzone.classList.add('dragover');
    });

    dropzone.addEventListener('dragleave', () => {
      dropzone.classList.remove('dragover');
    });

    dropzone.addEventListener('drop', (e) => {
      e.preventDefault();
      dropzone.classList.remove('dragover');
      if (e.dataTransfer.files.length) {
        handleFiles(e.dataTransfer.files);
      }
    });

    fileInput.addEventListener('change', () => {
      if (fileInput.files.length) {
        handleFiles(fileInput.files);
      }
    });
  }

  function handleFiles(files) {
    Array.from(files).forEach(file => {
      if (!file.type.startsWith('image/')) {
        alert('Lütfen geçerli bir görsel dosyası yükleyin (JPG, PNG).');
        return;
      }
      uploadedFiles.push(file);

      const reader = new FileReader();
      reader.onload = (e) => {
        const thumb = document.createElement('img');
        thumb.src = e.target.result;
        thumb.className = 'file-preview-thumb';
        filePreviewContainer.appendChild(thumb);
      };
      reader.readAsDataURL(file);
    });
  }

  // 5. Submit Handler
  async function handleFormSubmit() {
    btnNext.disabled = true;
    btnNext.innerHTML = '⏳ Processing Your VIP Consultation...';

    const formData = {
      fullName: document.getElementById('input-name')?.value || '',
      email: document.getElementById('input-email')?.value || '',
      phone: document.getElementById('input-phone')?.value || '',
      country: document.getElementById('input-country')?.value || 'United Kingdom',
      treatment: form.querySelector('input[name="treatment"]:checked')?.value || 'Hollywood Smile',
      preferredDate: document.getElementById('input-date')?.value || new Date().toISOString().split('T')[0],
      notes: document.getElementById('input-notes')?.value || '',
      filesCount: uploadedFiles.length
    };

    try {
      const response = await submitConsultationApi(formData);

      if (response.success) {
        // Show Success View inside form container
        form.innerHTML = `
          <div style="text-align: center; padding: 3rem 1rem;">
            <div style="width: 80px; height: 80px; background: rgba(16, 185, 129, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem auto; color: #10B981; font-size: 2.5rem;">
              ✓
            </div>
            <h2 style="font-size: 2.2rem; font-weight: 800; margin-bottom: 1rem;">Free VIP Consultation Request Received!</h2>
            <p style="font-size: 1.1rem; color: var(--text-muted); max-width: 600px; margin: 0 auto 2rem auto;">
              Thank you, <strong>${formData.fullName}</strong>. Our senior dental specialist team has received your application. A personal coordinator will contact you via WhatsApp (<strong>${formData.phone}</strong>) within 2 hours with your 3D Smile Design quotation.
            </p>
            <div style="background: rgba(2, 132, 199, 0.06); padding: 1.5rem; border-radius: 16px; border: 1px solid rgba(2, 132, 199, 0.2); display: inline-block; text-align: left; margin-bottom: 2rem;">
              <div><strong>Reference ID:</strong> <span style="color: var(--color-brand-primary); font-family: monospace;">#DAC-${Math.floor(100000 + Math.random() * 900000)}</span></div>
              <div><strong>Google Calendar Event:</strong> Tentative appointment logged for ${formData.preferredDate}</div>
              <div><strong>Doctor Confirmation:</strong> Emailed to clinic lead surgeon</div>
            </div>
            <div>
              <a href="https://wa.me/905000000000?text=Hello%20Dent%20Aktif!%20I%20just%20submitted%20consultation%20request%20for%20${encodeURIComponent(formData.fullName)}" target="_blank" class="btn-primary btn-gold" style="display: inline-flex; align-items: center; gap: 0.5rem;">
                💬 Speak Immediately on WhatsApp
              </a>
            </div>
          </div>
        `;
      } else {
        alert('Başvuru gönderilirken bir sorun oluştu. Lütfen tekrar deneyiniz.');
        btnNext.disabled = false;
        btnNext.innerHTML = '🚀 Submit & Get 3D Quote Now';
      }
    } catch (err) {
      console.error('Submit Error:', err);
      alert('Entegrasyon yanıt vermedi. Lütfen doğrudan WhatsApp üzerinden iletişime geçiniz.');
      btnNext.disabled = false;
      btnNext.innerHTML = '🚀 Submit & Get 3D Quote Now';
    }
  }

  // Initial UI Render
  updateStepUI();
}
