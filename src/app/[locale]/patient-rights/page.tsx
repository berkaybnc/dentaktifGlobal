
export default function PatientRightsPage({ params: { locale } }: { params: { locale: string } }) {
  const isAr = locale === 'ar';

  return (
    <div className="py-16 sm:py-24 bg-white text-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-slate-200 pb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            {isAr ? 'ميثاق حقوق المرضى الدوليين' : 'Charter of International Patient Rights'}
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            {isAr
              ? 'مستشفى دنت أكتيف الدولي • ممارسة طبية تحت إشراف وزارة الصحة التركية'
              : 'Dent Aktif Clinic Global • Ministry of Health Supervised Practice'}
          </p>
        </div>

        <section className="space-y-4 text-sm text-slate-600 leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900">
            {isAr ? '1. الحق في رعاية صحية آمنة وعالية الجودة' : '1. Right to High-Quality & Safe Care'}
          </h2>
          <p>
            {isAr
              ? 'لكل مريض الحق في الحصول على خدمات طبية وفق أعلى المعايير الدولية بغض النظر عن الجنسية أو العرق أو اللغة، داخل منشآت معقمة ومعتمدة تطبق معايير ISO 9001 والضوابط الدولية لمكافحة العدوى.'
              : 'Every patient has the right to receive medical services of the highest standard regardless of nationality, race, or language, in certified sterile facilities complying with ISO 9001 and international infection control standards.'}
          </p>
        </section>

        <section className="space-y-4 text-sm text-slate-600 leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900">
            {isAr ? '2. الحق في معلومات شاملة بلغتك الأم' : '2. Right to Comprehensive Information in Native Tongue'}
          </h2>
          <p>
            {isAr
              ? 'يحق لك الحصول على معلومات كاملة وشفافة حول التشخيص وخطوات العلاج والمخاطر وفترة التعافي وكشف حساب مالي تفصيلي باللغة العربية، أو الإنجليزية، أو الألمانية، أو الفرنسية، أو الروسية من خلال منسقي المرضى المعتمدين لدينا.'
              : 'You have the right to receive complete, transparent information regarding diagnosis, treatment steps, risks, recovery times, and itemized financial statements in English, German, French, or Russian through our certified patient coordinators.'}
          </p>
        </section>

        <section className="space-y-4 text-sm text-slate-600 leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900">
            {isAr ? '3. الحق في الخصوصية وسرية البيانات الصحية' : '3. Right to Privacy & Health Data Confidentiality'}
          </h2>
          <p>
            {isAr
              ? 'تخضع جميع الصور السريرية والفحوصات وسجلات التاريخ الطبي للسرية الطبية الصارمة بين الطبيب والمريض، وتتم معالجتها حصرياً بموجب اللائحة العامة لحماية البيانات في الاتحاد الأوروبي (GDPR) وقانون الصحة التركي.'
              : 'All clinical photographs, tomographies, and medical history documents are held under strict doctor-patient confidentiality and processed exclusively under the EU General Data Protection Regulation (GDPR) and Turkish Health Law.'}
          </p>
        </section>

        <section className="space-y-4 text-sm text-slate-600 leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900">
            {isAr ? '4. الحق في رأي طبي ثانٍ ورفض العلاج' : '4. Right to Second Opinion and Refusal'}
          </h2>
          <p>
            {isAr
              ? 'يحتفظ المريض بكامل الاستقلالية لطلب رأي طبي ثانٍ من أخصائيين آخرين، أو الاستفسار عن مواد بديلة، أو رفض أي إجراء تجميلي أو اختياري في أي مرحلة من مراحل العلاج.'
              : 'Patients retain full autonomy to request a second opinion from other specialists, ask questions regarding alternative materials, or refuse elective procedures at any stage.'}
          </p>
        </section>
      </div>
    </div>
  );
}
