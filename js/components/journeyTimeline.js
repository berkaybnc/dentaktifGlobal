/* ==========================================================================
   DENT AKTIF CLINIC GLOBAL - DENTAL JOURNEY TIMELINE
   Scroll-Triggered Interactive 5-Step Medical Tourism Process
   ========================================================================== */

export const JOURNEY_STEPS = [
  {
    step: 1,
    title: "1. Online Free Consultation & 3D Plan",
    subtitle: "Step 1 - From Home",
    icon: "📱",
    description: "Send your teeth photos or X-Ray via our secure form. Our head dental surgeon evaluates your case and provides a detailed 3D digital smile design treatment plan & transparent quote within 2 hours.",
    badge: "100% Free & No Obligation"
  },
  {
    step: 2,
    title: "2. VIP Airport Arrival & Luxury Transfer",
    subtitle: "Step 2 - Welcome to Istanbul",
    icon: "✈️",
    description: "Arrive at Istanbul Airport (IST / SAW). Our private VIP chauffeur greets you at the gate and escorts you in a Mercedes V-Class to your 5-star ocean-view hotel partner.",
    badge: "VIP Transfer Included"
  },
  {
    step: 3,
    title: "3. In-Person Consultation & 3D Scanning",
    subtitle: "Step 3 - Day 1 at Clinic",
    icon: "🦷",
    description: "Visit Dent Aktif Clinic Global for high-resolution 3D Tomography (CBCT) and intraoral scanning. Review your mock-up smile in real-time with our specialist team.",
    badge: "State-of-the-Art Technology"
  },
  {
    step: 4,
    title: "4. Painless Treatment & Micro-Aesthetics",
    subtitle: "Step 4 - Days 2 to 4",
    icon: "✨",
    description: "Under pain-free local computer-controlled anesthesia or sedation, your veneers/implants are crafted using CAD/CAM milling in our in-house dental laboratory.",
    badge: "Pain-Free Computerized Delivery"
  },
  {
    step: 5,
    title: "5. Final Fit, Warranty Certificate & Celebration",
    subtitle: "Step 5 - Day 5 & Beyond",
    icon: "👑",
    description: "Walk out with your picture-perfect Hollywood Smile! Receive your international lifetime warranty certificate, aftercare kit, and VIP transfer back to the airport.",
    badge: "Lifetime International Guarantee"
  }
];

export function initJourneyTimeline() {
  const container = document.getElementById('journey-steps-container');
  const progressLine = document.getElementById('timeline-line-progress');
  const section = document.getElementById('journey-section');

  if (!container) return;

  // Render Timeline Step Cards
  container.innerHTML = JOURNEY_STEPS.map((step, index) => `
    <div class="timeline-step reveal-on-scroll" data-step="${step.step}">
      <div class="timeline-dot">${step.step}</div>
      <div class="timeline-card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.8rem;">
          <span style="font-size: 0.8rem; font-weight: 700; color: var(--color-brand-primary); text-transform: uppercase;">
            ${step.subtitle}
          </span>
          <span style="background: rgba(2, 132, 199, 0.08); color: var(--color-brand-primary); font-size: 0.75rem; font-weight: 600; padding: 0.2rem 0.6rem; border-radius: 99px;">
            ${step.badge}
          </span>
        </div>
        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 0.8rem;">
          <div class="step-icon-badge">${step.icon}</div>
          <h3 style="font-size: 1.3rem; font-weight: 700;">${step.title}</h3>
        </div>
        <p>${step.description}</p>
      </div>
    </div>
  `).join('');

  // Scroll Progress Line Calculation & Intersection Observer
  if (section && progressLine) {
    window.addEventListener('scroll', () => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        const totalHeight = rect.height;
        const progress = Math.min(100, Math.max(0, ((windowHeight - rect.top) / totalHeight) * 100));
        progressLine.style.height = `${progress}%`;
      }
    });
  }

  // Observe active step elements
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.timeline-step').forEach(el => observer.observe(el));
}
