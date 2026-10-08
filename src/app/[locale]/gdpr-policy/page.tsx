import { Lock } from 'lucide-react';

export default function GDPRPolicyPage() {
  return (
    <div className="py-16 sm:py-24 bg-white text-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-slate-200 pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Lock className="w-4 h-4 text-sky-600" />
            GDPR Compliance • European Health Data Standard
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            GDPR & Health Data Protection Policy
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Regulation (EU) 2016/679 & Turkish KVKK Medical Tourism Data Compliance
          </p>
        </div>

        <section className="space-y-4 text-sm text-slate-600 leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900">1. Data Controller Information</h2>
          <p>
            Dent Aktif Clinic Global operates as the data controller for personal and health data gathered through this patient portal. We strictly respect privacy rights and uphold international standards regarding the protection of sensitive medical data.
          </p>
        </section>

        <section className="space-y-4 text-sm text-slate-600 leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900">2. Types of Data Collected</h2>
          <p>
            When utilizing our digital triage form, we collect: contact information (full name, email address, WhatsApp number, country) and diagnostic health records (intraoral photographs, panoramic dental X-rays, CBCT tomography scans).
          </p>
        </section>

        <section className="space-y-4 text-sm text-slate-600 leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900">3. Purpose of Processing & Security</h2>
          <p>
            Your information is processed solely to formulate personalized 3D dental treatment proposals, coordinate VIP airport concierge logistics, and comply with legal requirements set forth by the Republic of Türkiye Ministry of Health. Data transmissions utilize end-to-end 256-bit TLS encryption.
          </p>
        </section>

        <section className="space-y-4 text-sm text-slate-600 leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900">4. Your Data Rights</h2>
          <p>
            Under the GDPR, you have the right to access, rectify, or request immediate erasure of your medical data at any time by contacting our Data Protection Officer at:
            <span className="block font-semibold text-slate-900 mt-1">
              privacy@dentaktifglobal.com
            </span>
          </p>
        </section>
      </div>
    </div>
  );
}
