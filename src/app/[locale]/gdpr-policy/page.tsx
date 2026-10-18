export default function GDPRPolicyPage({ params: { locale } }: { params: { locale: string } }) {
  const isAr = locale === 'ar';
  const isTr = locale === 'tr';

  return (
    <div className="py-16 sm:py-24 bg-white text-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-slate-200 pb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            {isAr
              ? 'سياسة حماية البيانات الصحية والامتثال للائحة GDPR'
              : isTr
              ? 'KVKK & Sağlık Verilerinin Korunması Politikası'
              : 'GDPR & Health Data Protection Policy'}
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            {isAr
              ? 'اللائحة العامة لحماية البيانات (EU) 2016/679 وقانون حماية البيانات التركي KVKK في السياحة العلاجية'
              : isTr
              ? '6698 Sayılı KVKK ve AB Genel Veri Koruma Tüzüğü (GDPR) Kapsamında Sağlık Turizmi Veri Güvenliği'
              : 'Regulation (EU) 2016/679 & Turkish KVKK Medical Tourism Data Compliance'}
          </p>
        </div>

        <section className="space-y-4 text-sm text-slate-600 leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900">
            {isAr
              ? '1. معلومات مسؤول معالجة البيانات'
              : isTr
              ? '1. Veri Sorumlusu Bilgilendirmesi'
              : '1. Data Controller Information'}
          </h2>
          <p>
            {isAr
              ? 'يعمل مستشفى دنت أكتيف الدولي كمسؤول معالجة للبيانات الشخصية والطبية التي يتم جمعها عبر بوابة المرضى هذه. نحن نلتزم بالاحترام التام لحقوق الخصوصية ونطبق المعايير الدولية الصارمة المتعلقة بحماية البيانات الطبية الحساسة.'
              : isTr
              ? 'Dent Aktif Global, bu hasta portalı üzerinden toplanan kişisel ve sağlık verileriniz için veri sorumlusu sıfatıyla hareket etmektedir. Gizlilik haklarınıza tam saygı gösteriyor ve hassas tıbbi verilerin korunmasına ilişkin ulusal ve uluslararası standartları uyguluyoruz.'
              : 'Dent Aktif Clinic Global operates as the data controller for personal and health data gathered through this patient portal. We strictly respect privacy rights and uphold international standards regarding the protection of sensitive medical data.'}
          </p>
        </section>

        <section className="space-y-4 text-sm text-slate-600 leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900">
            {isAr
              ? '2. أنواع البيانات التي يتم جمعها'
              : isTr
              ? '2. İşlenen Kişisel ve Sağlık Verileri'
              : '2. Types of Data Collected'}
          </h2>
          <p>
            {isAr
              ? 'عند استخدام نموذج الفرز الرقمي والاستشارة أونلاين، نقوم بجمع: معلومات الاتصال (الاسم الكامل، عنوان البريد الإلكتروني، رقم الواتساب، الدولة) والسجلات التشخيصية الطبية (صور الفم، الأشعة البانورامية الرقمية، والأشعة المقطعية ثلاثية الأبعاد CBCT).'
              : isTr
              ? 'Dijital triyaj ve ön konsültasyon formumuzu kullandığınızda; iletişim bilgileri (ad-soyad, e-posta, WhatsApp numarası, ülke) ve tanısal sağlık kayıtları (ağız içi fotoğraflar, panoramik röntgen, 3D CBCT tomografi) toplanmaktadır.'
              : 'When utilizing our digital triage form, we collect: contact information (full name, email address, WhatsApp number, country) and diagnostic health records (intraoral photographs, panoramic dental X-rays, CBCT tomography scans).'}
          </p>
        </section>

        <section className="space-y-4 text-sm text-slate-600 leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900">
            {isAr
              ? '3. الغرض من المعالجة والأمان'
              : isTr
              ? '3. Veri İşleme Amacı ve Güvenlik Standartları'
              : '3. Purpose of Processing & Security'}
          </h2>
          <p>
            {isAr
              ? 'تتم معالجة معلوماتك حصرياً لإعداد مقترحات وخطط علاج الأسنان الرقمية ثلاثية الأبعاد، وتنسيق اللوجستيات والاستقبال الفندقي، والامتثال للمتطلبات القانونية الصادرة عن وزارة الصحة بالجمهورية التركية. تستخدم جميع عمليات نقل البيانات تشفيراً آمناً من طرف إلى طرف بتقنية TLS 256-bit.'
              : isTr
              ? 'Bilgileriniz yalnızca size özel 3D tedavi planı oluşturulması, VIP transfer ve konaklama koordinasyonu ile T.C. Sağlık Bakanlığı yasal mevzuatlarına uyum amacıyla işlenir. Tüm veri aktarımları 256-bit TLS uçtan uca şifreleme ile korunmaktadır.'
              : 'Your information is processed solely to formulate personalized 3D dental treatment proposals, coordinate VIP airport concierge logistics, and comply with legal requirements set forth by the Republic of Türkiye Ministry of Health. Data transmissions utilize end-to-end 256-bit TLS encryption.'}
          </p>
        </section>

        <section className="space-y-4 text-sm text-slate-600 leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900">
            {isAr
              ? '4. حقوقك المتعلقة ببياناتك'
              : isTr
              ? '4. Veri Sahibi Olarak Haklarınız'
              : '4. Your Data Rights'}
          </h2>
          <p>
            {isAr
              ? 'بموجب اللائحة العامة لحماية البيانات (GDPR) وقانون KVKK، يحق لك الوصول إلى بياناتك الطبية أو تصحيحها أو طلب حذفها الفوري في أي وقت من خلال التواصل مع مسؤول حماية البيانات لدينا عبر:'
              : isTr
              ? 'KVKK 11. maddesi ve GDPR kapsamında verilerinize erişme, düzeltilmesini isteme, işlenmesine itiraz etme veya silinmesini talep etme hakkına sahipsiniz. Başvurularınız için:'
              : 'Under the GDPR and KVKK, you have the right to access, rectify, or request immediate erasure of your medical data at any time by contacting our Data Protection Officer at:'}
            <span className="block font-semibold text-slate-900 mt-1">
              privacy@dentaktifglobal.com
            </span>
          </p>
        </section>
      </div>
    </div>
  );
}
