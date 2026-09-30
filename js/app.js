/* ==========================================================================
   DENT AKTIF CLINIC GLOBAL - MAIN ENTRY APPLICATION MODULE
   Imports & Orchestrates 3D Canvas, Marquee, Slider, Timeline & Form
   ========================================================================== */

import { initHero3D } from './components/hero3d.js';
import { initTrustMarquee } from './components/trustMarquee.js';
import { initBeforeAfter } from './components/beforeAfter.js';
import { initJourneyTimeline } from './components/journeyTimeline.js';
import { initMultiStepForm } from './components/multiStepForm.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log('Dent Aktif Clinic Global - Application Initializing...');

  // 1. Initialize Components
  try {
    initHero3D();
  } catch (e) {
    console.warn('Hero 3D setup skipped:', e);
  }

  initTrustMarquee();
  initBeforeAfter();
  initJourneyTimeline();
  initMultiStepForm();

  // 2. Navbar Scroll Behavior
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // 3. Smooth Scroll Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // 4. Global Reveal Animations on Scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
});
