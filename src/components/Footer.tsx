'use client';

import React from 'react';
import { Link } from '@/navigation';

export default function Footer() {
  return (
    <footer className="w-full bg-[#110933] text-slate-400 text-xs border-t border-slate-900 pt-16 pb-20 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-slate-800">
          {/* Column 1: Hospital Identity & Ministry Licensure */}
          <div className="lg:col-span-2 space-y-4">
            <img
              alt="Dent Aktif Oral & Dental Hospital"
              className="h-9 w-auto object-contain brightness-0 invert opacity-95"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAg2HtnJiD5Dh50-Saff80Ad9XubIpYuGBJGp7E5Z7sEdBZXJLj1vZo2LqMHJ97jqJeSg4IBcFac-58zXYYNUJElZJAXE_SkPT2MBL9Dr7RLtWi3klbaGg-4MNZzl3UhpMbJrj9Ab1LM4a3lvDxtXjS5rufwppFvHnTeYzSpG7-npw_ekMVRkFmPIhpXKNQAdw6NSfcs9LYT0rXcUCU9BgJu9QZB7CNcnQe0-iFI5XMIKYqoSdZrkNJbA"
            />
            <p className="text-xs leading-relaxed text-slate-400 max-w-sm">
              Dent Aktif is an accredited specialized surgical oral and dental hospital operating under the Republic
              of Turkey Ministry of Health International Health Tourism Authorization Certificate (#TR-34-DH-4892).
            </p>
            <div className="space-y-1 font-mono text-[11px] text-slate-400">
              <div>Licence Number: TR-34-DH-4892</div>
              <div>Address: Buyukdere Caddesi No: 173, Levent, Besiktas / Istanbul, Turkey</div>
              <div>International Patient Desk: +90 (212) 900 8080</div>
              <div>Official Email: intl@dentaktifglobal.com</div>
            </div>
          </div>

          {/* Column 2: Clinical Services */}
          <div className="space-y-3">
            <h4 className="font-headline text-xs font-bold uppercase tracking-widest text-white">
              12 Clinical Departments
            </h4>
            <ul className="space-y-1.5 text-slate-400 text-xs">
              <li>
                <Link className="hover:text-white transition-colors" href="/treatments/dental-implants">
                  Swiss Straumann® Implants
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" href="/treatments/hollywood-smile">
                  Hollywood Smile (E-Max®)
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" href="/treatments/oral-surgery">
                  Oral & Maxillofacial Surgery
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" href="/treatments/dental-veneers">
                  Monolithic Zirconia Bridges
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" href="/treatments/dental-crowns">
                  Dental Crowns & Caps
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" href="/treatments/root-canal">
                  Microscopic Root Canal
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" href="/treatments/sedation-anesthesia">
                  General Anesthesia & Sedation
                </Link>
              </li>
              <li>
                <Link className="hover:text-teal-300 font-bold transition-colors pt-1 block" href="/treatments">
                  View All 12 Departments Directory →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: International Patient Concierge */}
          <div className="space-y-3">
            <h4 className="font-headline text-xs font-bold uppercase tracking-widest text-white">
              Patient Concierge
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a className="hover:text-white transition-colors" href="#patient-journey">
                  VIP Chauffeur Airport Protocol
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#patient-journey">
                  5-Star Levent Partner Hotels
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#concierge-section">
                  Multilingual Medical Interpreters
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#patient-journey">
                  Manufacturer Warranty Passport
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#concierge-section">
                  Cross-Border Telemedicine Follow-up
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Regulatory Standards */}
          <div className="space-y-3">
            <h4 className="font-headline text-xs font-bold uppercase tracking-widest text-white">
              Accreditations & Quality
            </h4>
            <div className="space-y-2 text-[11px] text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm text-emerald-400">verified</span>
                <span>Ministry of Health Licensed (#4892)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm text-emerald-400">verified</span>
                <span>ISO 9001:2015 Certified Operatories</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm text-emerald-400">verified</span>
                <span>GDPR (EU 2016/679) Compliant</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm text-emerald-400">verified</span>
                <span>Straumann® Center of Excellence</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom & Regulatory Legal Links */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © 2026 Dent Aktif International Oral & Dental Hospital Istanbul. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <Link className="hover:text-slate-300 transition-colors" href="/patient-rights">
              International Patient Rights
            </Link>
            <Link className="hover:text-slate-300 transition-colors" href="/gdpr-policy">
              GDPR & Privacy Policy
            </Link>
            <span className="text-slate-500 font-mono">Health Tourism Authorization #4892</span>
            <Link className="hover:text-slate-300 transition-colors" href="/medical-disclosure">
              Medical Disclosure & Consent
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
