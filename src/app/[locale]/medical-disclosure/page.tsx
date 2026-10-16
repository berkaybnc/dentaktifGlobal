import { ShieldCheck } from 'lucide-react';

export default function MedicalDisclosurePage({ params: { locale } }: { params: { locale: string } }) {
  const isAr = locale === 'ar';

  return (
    <div className="py-16 sm:py-24 bg-white text-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-slate-200 pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4 text-sky-600" />
            {isAr
              ? 'مرخص من وزارة الصحة التركية ومؤسسة USHAŞ • ترخيص رقم: 2026034015610080000425805'
              : 'Republic of Turkey Ministry of Health & USHAŞ Licensed • Cert No: 2026034015610080000425805'}
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            {isAr ? 'الإفصاح الطبي وسياسة الموافقة المستنيرة' : 'Medical Disclosure & Informed Consent Policy'}
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            {isAr
              ? 'تحديث 2026 • متوافق مع لوائح السياحة الصحية الدولية في تركيا'
              : 'Last Updated: 2026 • Compliant with Turkish International Health Tourism Regulations'}
          </p>
        </div>

        <section className="space-y-4 text-sm text-slate-600 leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900">
            {isAr ? '1. الاستشارة قبل العلاج والتشخيص ثلاثي الأبعاد' : '1. Pre-Treatment Consultation & 3D Diagnostics'}
          </h2>
          <p>
            {isAr
              ? 'يعمل مستشفى دنت أكتيف بموجب اعتماد سريري كامل من وزارة الصحة بالجمهورية التركية. قبل إجراء أي علاج لا رجعة فيه (بما في ذلك قشور الأسنان، وجراحة الزراعة، وتبريد الأسنان للتيجان)، يخضع كل مريض دولي لفحص تصويري بانورامي شامل، وأشعة مقطعية رقمية 3D CBCT، وتقييم إطباق سريري دقيق.'
              : 'Dent Aktif Clinic operates under full clinical accreditation by the Republic of Türkiye Ministry of Health. Prior to any irreversible treatment (including dental veneers, implant surgery, and crown tooth preparations), each international patient undergoes comprehensive panoramic imaging, digital 3D CBCT tomography, and clinical bite evaluation.'}
          </p>
        </section>

        <section className="space-y-4 text-sm text-slate-600 leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900">
            {isAr ? '2. أصالة المواد المعتمدة وشهادات الضمان' : '2. Official Material Authenticity & Certificates'}
          </h2>
          <p>
            {isAr
              ? 'جميع زرعات الأسنان المستخدمة في مركزنا السريري في إسطنبول هي زرعات Straumann® السويسرية الأصلية SLA/SLActive مرفقة بجواز سفر المريض والباركود الرسمي القابل للتحقق. كما تُصنع قشور E-Max® المصنوعة من ثنائي سيليكات الليثيوم باستخدام قوالب Ivoclar Vivadent الأصلية عبر النحت الروبوتي CAD/CAM.'
              : 'All dental implants utilized at our Istanbul clinical hub are genuine Swiss Straumann® SLA/SLActive implants accompanied by verifiable serial-numbered patient passport certificates. E-Max® lithium disilicate veneers are manufactured using authentic Ivoclar Vivadent blocks via robotic CAD/CAM milling.'}
          </p>
        </section>

        <section className="space-y-4 text-sm text-slate-600 leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900">
            {isAr ? '3. الموافقة المستنيرة وتعديلات الخطة العلاجية' : '3. Informed Consent & Treatment Adaptations'}
          </h2>
          <p>
            {isAr
              ? 'تعتبر عروض الأسعار الأولية عبر الإنترنت تقديرات مبدئية تم وضعها بناءً على السجلات المرسلة عن بُعد. قد يكشف الفحص السريري المباشر عن حالات كامنة في اللثة أو تباين في كثافة العظام يتطلب تعديلات سريرية. تتم مراجعة وتوقيع موافقة خطية كاملة توضح تفاصيل البدائل العلاجية والإجراءات والضمانات بلغتك المفضلة قبل بدء أي تدخل.'
              : 'Initial online quotes are provisional estimations formulated through remote triage records. On-site physical examinations may reveal underlying periodontal conditions or bone density variations that require clinical adjustments. Full written consent detailing treatment alternatives, procedures, and guarantees will be reviewed and signed in your preferred language prior to intervention.'}
          </p>
        </section>

        <section className="space-y-4 text-sm text-slate-600 leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900">
            {isAr ? '4. الضمان الدولي وبروتوكول الرعاية اللاحقة' : '4. International Warranty & Post-Care Protocol'}
          </h2>
          <p>
            {isAr
              ? 'يحصل المرضى على شهادة ضمان هيكلي مدى الحياة لزرعات التيتانيوم وضمان لعدة سنوات للتركيبات الخزفية. كما يتم تقديم إرشادات الرعاية بعد العلاج، وأرقام الطوارئ، وقنوات اتصال مباشرة عبر واتساب عند انتهاء العلاج.'
              : 'Patients receive a lifetime structural warranty certificate for titanium implants and a multi-year warranty for ceramic prosthetics. Post-treatment guidelines, emergency contacts, and direct WhatsApp liaison channels are provided upon completion.'}
          </p>
        </section>
      </div>
    </div>
  );
}
