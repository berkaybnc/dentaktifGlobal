import { ShieldCheck } from 'lucide-react';

export default function MedicalDisclosurePage() {
  return (
    <div className="py-16 sm:py-24 bg-white text-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-slate-200 pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4 text-sky-600" />
            Republic of Turkey Ministry of Health &amp; USHAŞ Licensed • Cert No: 2026034015610080000425805
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            Medical Disclosure & Informed Consent Policy
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Last Updated: 2026 • Compliant with Turkish International Health Tourism Regulations
          </p>
        </div>

        <section className="space-y-4 text-sm text-slate-600 leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900">1. Pre-Treatment Consultation & 3D Diagnostics</h2>
          <p>
            Dent Aktif Clinic operates under full clinical accreditation by the Republic of Türkiye Ministry of Health. Prior to any irreversible treatment (including dental veneers, implant surgery, and crown tooth preparations), each international patient undergoes comprehensive panoramic imaging, digital 3D CBCT tomography, and clinical bite evaluation.
          </p>
        </section>

        <section className="space-y-4 text-sm text-slate-600 leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900">2. Official Material Authenticity & Certificates</h2>
          <p>
            All dental implants utilized at our Istanbul clinical hub are genuine Swiss Straumann® SLA/SLActive implants accompanied by verifiable serial-numbered patient passport certificates. E-Max® lithium disilicate veneers are manufactured using authentic Ivoclar Vivadent blocks via robotic CAD/CAM milling.
          </p>
        </section>

        <section className="space-y-4 text-sm text-slate-600 leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900">3. Informed Consent & Treatment Adaptations</h2>
          <p>
            Initial online quotes are provisional estimations formulated through remote triage records. On-site physical examinations may reveal underlying periodontal conditions or bone density variations that require clinical adjustments. Full written consent detailing treatment alternatives, procedures, and guarantees will be reviewed and signed in your preferred language prior to intervention.
          </p>
        </section>

        <section className="space-y-4 text-sm text-slate-600 leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900">4. International Warranty & Post-Care Protocol</h2>
          <p>
            Patients receive a lifetime structural warranty certificate for titanium implants and a multi-year warranty for ceramic prosthetics. Post-treatment guidelines, emergency contacts, and direct WhatsApp liaison channels are provided upon completion.
          </p>
        </section>
      </div>
    </div>
  );
}
