import { HeartHandshake } from 'lucide-react';

export default function PatientRightsPage() {
  return (
    <div className="py-16 sm:py-24 bg-white text-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-slate-200 pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <HeartHandshake className="w-4 h-4 text-emerald-600" />
            International Patient Charter • Cert No: 2026034015610080000425805
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            Charter of International Patient Rights
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Dent Aktif Clinic Global • Ministry of Health Supervised Practice
          </p>
        </div>

        <section className="space-y-4 text-sm text-slate-600 leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900">1. Right to High-Quality & Safe Care</h2>
          <p>
            Every patient has the right to receive medical services of the highest standard regardless of nationality, race, or language, in certified sterile facilities complying with ISO 9001 and international infection control standards.
          </p>
        </section>

        <section className="space-y-4 text-sm text-slate-600 leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900">2. Right to Comprehensive Information in Native Tongue</h2>
          <p>
            You have the right to receive complete, transparent information regarding diagnosis, treatment steps, risks, recovery times, and itemized financial statements in English, German, French, or Russian through our certified patient coordinators.
          </p>
        </section>

        <section className="space-y-4 text-sm text-slate-600 leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900">3. Right to Privacy & Health Data Confidentiality</h2>
          <p>
            All clinical photographs, tomographies, and medical history documents are held under strict doctor-patient confidentiality and processed exclusively under the EU General Data Protection Regulation (GDPR) and Turkish Health Law.
          </p>
        </section>

        <section className="space-y-4 text-sm text-slate-600 leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900">4. Right to Second Opinion and Refusal</h2>
          <p>
            Patients retain full autonomy to request a second opinion from other specialists, ask questions regarding alternative materials, or refuse elective procedures at any stage.
          </p>
        </section>
      </div>
    </div>
  );
}
