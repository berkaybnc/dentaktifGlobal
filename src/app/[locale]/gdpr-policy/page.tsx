
export default function GDPRPolicyPage({ params: { locale } }: { params: { locale: string } }) {
  const isAr = locale === 'ar';

  return (
    <div className="py-16 sm:py-24 bg-white text-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-slate-200 pb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            {isAr ? 'سياسة حماية البيانات الصحية والامتثال للائحة GDPR' : 'GDPR & Health Data Protection Policy'}
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            {isAr ? 'اللائحة العامة لحماية البيانات (EU) 2016/679 وقانون حماية البيانات التركي KVKK في السياحة العلاجية' : 'Regulation (EU) 2016/679 & Turkish KVKK Medical Tourism Data Compliance'}
          </p>
        </div>

        <section className="space-y-4 text-sm text-slate-600 leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900">
            {isAr ? '1. معلومات مسؤول معالجة البيانات' : '1. Data Controller Information'}
          </h2>
          <p>
            {isAr
              ? 'يعمل مستشفى دنت أكتيف الدولي كمسؤول معالجة للبيانات الشخصية والطبية التي يتم جمعها عبر بوابة المرضى هذه. نحن نلتزم بالاحترام التام لحقوق الخصوصية ونطبق المعايير الدولية الصارمة المتعلقة بحماية البيانات الطبية الحساسة.'
              : 'Dent Aktif Clinic Global operates as the data controller for personal and health data gathered through this patient portal. We strictly respect privacy rights and uphold international standards regarding the protection of sensitive medical data.'}
          </p>
        </section>

        <section className="space-y-4 text-sm text-slate-600 leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900">
            {isAr ? '2. أنواع البيانات التي يتم جمعها' : '2. Types of Data Collected'}
          </h2>
          <p>
            {isAr
              ? 'عند استخدام نموذج الفرز الرقمي والاستشارة أونلاين، نقوم بجمع: معلومات الاتصال (الاسم الكامل، عنوان البريد الإلكتروني، رقم الواتساب، الدولة) والسجلات التشخيصية الطبية (صور الفم، الأشعة البانورامية الرقمية، والأشعة المقطعية ثلاثية الأبعاد CBCT).'
              : 'When utilizing our digital triage form, we collect: contact information (full name, email address, WhatsApp number, country) and diagnostic health records (intraoral photographs, panoramic dental X-rays, CBCT tomography scans).'}
          </p>
        </section>

        <section className="space-y-4 text-sm text-slate-600 leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900">
            {isAr ? '3. الغرض من المعالجة والأمان' : '3. Purpose of Processing & Security'}
          </h2>
          <p>
            {isAr
              ? 'تتم معالجة معلوماتك حصرياً لإعداد مقترحات وخطط علاج الأسنان الرقمية ثلاثية الأبعاد، وتنسيق اللوجستيات والاستقبال الفندقي، والامتثال للمتطلبات القانونية الصادرة عن وزارة الصحة بالجمهورية التركية. تستخدم جميع عمليات نقل البيانات تشفيراً آمناً من طرف إلى طرف بتقنية TLS 256-bit.'
              : 'Your information is processed solely to formulate personalized 3D dental treatment proposals, coordinate VIP airport concierge logistics, and comply with legal requirements set forth by the Republic of Türkiye Ministry of Health. Data transmissions utilize end-to-end 256-bit TLS encryption.'}
          </p>
        </section>

        <section className="space-y-4 text-sm text-slate-600 leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900">
            {isAr ? '4. حقوقك المتعلقة ببياناتك' : '4. Your Data Rights'}
          </h2>
          <p>
            {isAr
              ? 'بموجب اللائحة العامة لحماية البيانات (GDPR)، يحق لك الوصول إلى بياناتك الطبية أو تصحيحها أو طلب حذفها الفوري في أي وقت من خلال التواصل مع مسؤول حماية البيانات لدينا عبر:'
              : 'Under the GDPR, you have the right to access, rectify, or request immediate erasure of your medical data at any time by contacting our Data Protection Officer at:'}
            <span className="block font-semibold text-slate-900 mt-1">
              privacy@dentaktifglobal.com
            </span>
          </p>
        </section>
      </div>
    </div>
  );
}
