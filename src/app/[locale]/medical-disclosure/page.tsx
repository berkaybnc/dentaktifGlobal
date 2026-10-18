export default function MedicalDisclosurePage({ params: { locale } }: { params: { locale: string } }) {
  const isAr = locale === 'ar';
  const isTr = locale === 'tr';

  return (
    <div className="py-16 sm:py-24 bg-white text-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-slate-200 pb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            {isAr
              ? 'الإفصاح الطبي وسياسة الموافقة المستنيرة'
              : isTr
              ? 'Tıbbi Bilgilendirme ve Aydınlatılmış Onam Politikası'
              : 'Medical Disclosure & Informed Consent Policy'}
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            {isAr
              ? 'تحديث 2026 • متوافق مع لوائح السياحة الصحية الدولية في تركيا'
              : isTr
              ? 'Güncelleme: 2026 • T.C. Sağlık Bakanlığı Uluslararası Sağlık Turizmi Mevzuatına Uygun'
              : 'Last Updated: 2026 • Compliant with Turkish International Health Tourism Regulations'}
          </p>
        </div>

        <section className="space-y-4 text-sm text-slate-600 leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900">
            {isAr
              ? '1. الاستشارة قبل العلاج والتشخيص ثلاثي الأبعاد'
              : isTr
              ? '1. Tedavi Öncesi Konsültasyon & 3D Teşhis Protokolü'
              : '1. Pre-Treatment Consultation & 3D Diagnostics'}
          </h2>
          <p>
            {isAr
              ? 'يعمل مستشفى دنت أكتيف بموجب اعتماد سريري كامل من وزارة الصحة بالجمهورية التركية. قبل إجراء أي علاج لا رجعة فيه (بما في ذلك قشور الأسنان، وجراحة الزراعة، وتبريد الأسنان للتيجان)، يخضع كل مريض دولي لفحص تصويري بانورامي شامل، وأشعة مقطعية رقمية 3D CBCT، وتقييم إطباق سريري دقيق.'
              : isTr
              ? 'Dent Aktif Global, T.C. Sağlık Bakanlığı tam klinik yetkilendirmesiyle hizmet verir. Geri dönüşü olmayan herhangi bir işlem öncesinde (implant cerrahisi, lamine preparasyonu, kuron hazırlığı) her hastamız kapsamlı panoramik görüntüleme, 3D CBCT tomografi ve klinik kapanış analizinden geçer.'
              : 'Dent Aktif Clinic operates under full clinical accreditation by the Republic of Türkiye Ministry of Health. Prior to any irreversible treatment (including dental veneers, implant surgery, and crown tooth preparations), each international patient undergoes comprehensive panoramic imaging, digital 3D CBCT tomography, and clinical bite evaluation.'}
          </p>
        </section>

        <section className="space-y-4 text-sm text-slate-600 leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900">
            {isAr
              ? '2. أصالة المواد المعتمدة وشهادات الضمان'
              : isTr
              ? '2. Orijinal Malzeme Sertifikasyonu ve Garanti Pasaportu'
              : '2. Official Material Authenticity & Certificates'}
          </h2>
          <p>
            {isAr
              ? 'جميع زرعات الأسنان المستخدمة في مركزنا السريري في إسطنبول هي زرعات Straumann® السويسرية الأصلية SLA/SLActive مرفقة بجواز سفر المريض والباركود الرسمي القابل للتحقق. كما تُصنع قشور E-Max® المصنوعة من ثنائي سيليكات الليثيوم باستخدام قوالب Ivoclar Vivadent الأصلية عبر النحت الروبوتي CAD/CAM.'
              : isTr
              ? 'Hastanemizde kullanılan tüm implantlar, uluslararası sorgulanabilir seri numaralı pasaport sertifikasına sahip orijinal İsviçre Straumann® SLA/SLActive ürünleridir. E-Max® lamine porselenler ise orijinal Ivoclar Vivadent bloklarından robotik 5 eksenli CAD/CAM ünitelerinde üretilir.'
              : 'All dental implants utilized at our Istanbul clinical hub are genuine Swiss Straumann® SLA/SLActive implants accompanied by verifiable serial-numbered patient passport certificates. E-Max® lithium disilicate veneers are manufactured using authentic Ivoclar Vivadent blocks via robotic CAD/CAM milling.'}
          </p>
        </section>

        <section className="space-y-4 text-sm text-slate-600 leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900">
            {isAr
              ? '3. الموافقة المستنيرة وتعديلات الخطة العلاجية'
              : isTr
              ? '3. Aydınlatılmış Onam & Tedavi Planı Uyarlamaları'
              : '3. Informed Consent & Treatment Adaptations'}
          </h2>
          <p>
            {isAr
              ? 'تعتبر عروض الأسعار الأولية عبر الإنترنت تقديرات مبدئية تم وضعها بناءً على السجلات المرسلة عن بُعد. قد يكشف الفحص السريري المباشر عن حالات كامنة في اللثة أو تباين في كثافة العظام يتطلب تعديلات سريرية. تتم مراجعة وتوقيع موافقة خطية كاملة توضح تفاصيل البدائل العلاجية والإجراءات والضمانات بلغتك المفضلة قبل بدء أي تدخل.'
              : isTr
              ? 'Uzaktan iletilen röntgenler üzerinden verilen ön fiyat teklifleri tahmini niteliktedir. Klinik muayenede kemik yoğunluğu veya diş eti sağlığına bağlı olarak planda gereken güncellemeler hekiminizce detaylandırılır ve yazılı onayınız alınmadan hiçbir işleme başlanmaz.'
              : 'Initial online quotes are provisional estimations formulated through remote triage records. On-site physical examinations may reveal underlying periodontal conditions or bone density variations that require clinical adjustments. Full written consent detailing treatment alternatives, procedures, and guarantees will be reviewed and signed in your preferred language prior to intervention.'}
          </p>
        </section>

        <section className="space-y-4 text-sm text-slate-600 leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900">
            {isAr
              ? '4. الضمان الدولي وبروتوكول الرعاية اللاحقة'
              : isTr
              ? '4. Uluslararası Garanti ve Tedavi Sonrası Takip'
              : '4. International Warranty & Post-Care Protocol'}
          </h2>
          <p>
            {isAr
              ? 'يحصل المرضى على شهادة ضمان هيكلي مدى الحياة لزرعات التيتانيوم وضمان لعدة سنوات للتركيبات الخزفية. كما يتم تقديم إرشادات الرعاية بعد العلاج، وأرقام الطوارئ، وقنوات اتصال مباشرة عبر واتساب عند انتهاء العلاج.'
              : isTr
              ? 'Hastalarımıza titanyum implantlar için ömür boyu yapısal garanti, seramik restorasyonlar için ise çok yıllık resmi üretici garantisi teslim edilir. Tedavi sonrasında 7/24 uluslararası hasta koordinatörümüz ile takip desteği sağlanır.'
              : 'Patients receive a lifetime structural warranty certificate for titanium implants and a multi-year warranty for ceramic prosthetics. Post-treatment guidelines, emergency contacts, and direct WhatsApp liaison channels are provided upon completion.'}
          </p>
        </section>
      </div>
    </div>
  );
}
