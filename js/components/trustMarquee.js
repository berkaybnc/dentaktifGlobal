/* ==========================================================================
   DENT AKTIF CLINIC GLOBAL - TRUST SIGNALS MARQUEE
   Dynamic Infinite Loop Certificates & Rating Ribbon
   ========================================================================== */

export function initTrustMarquee() {
  const container = document.getElementById('trust-marquee-track');
  if (!container) return;

  const trustBadges = [
    { title: "JCI Accredited Clinic", icon: "💎", detail: "Global Healthcare Standard" },
    { title: "Republic of Turkey Ministry of Health", icon: "🏛️", detail: "Licensed Medical Tourism Clinic" },
    { title: "ISO 9001:2015 Certified", icon: "🛡️", detail: "Quality Management System" },
    { title: "Straumann® Official Center", icon: "🦷", detail: "Swiss Implant Platinum Partner" },
    { title: "Trustpilot ★ 4.9 / 5.0", icon: "⭐", detail: "Over 2,400+ Verified Patient Reviews" },
    { title: "TEMOS International", icon: "🌍", detail: "Excellence in Medical Tourism" },
    { title: "Lifetime Implant Warranty", icon: "📜", detail: "Official Certificate Provided" }
  ];

  // Render original items + duplicate items to achieve seamless infinite loop
  const buildItemsHTML = (items) => {
    return items.map(item => `
      <div class="marquee-item">
        <div class="marquee-icon">${item.icon}</div>
        <div>
          <strong style="display:block; font-size: 0.95rem; color: var(--text-main);">${item.title}</strong>
          <span style="font-size: 0.8rem; color: var(--text-muted);">${item.detail}</span>
        </div>
      </div>
    `).join('');
  };

  // Render twice for continuous infinite CSS animation keyframe track
  container.innerHTML = buildItemsHTML(trustBadges) + buildItemsHTML(trustBadges);
}
