'use client';

import React, { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/navigation';

export default function ContactPage() {
  const t = useTranslations('contactPage');
  const locale = useLocale();

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showCertModal, setShowCertModal] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState('All-on-4 / Full Arch Implants');
  const [patientData, setPatientData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: locale === 'ar' ? 'المملكة العربية السعودية' : locale === 'de' ? 'Deutschland' : locale === 'fr' ? 'France' : locale === 'ru' ? 'Россия' : 'United Kingdom',
    arrivalMonth: 'Next 30 Days',
    message: '',
  });

  const localizedTreatments = {
    en: [
      { val: 'All-on-4 / Full Arch Implants', label: 'All-on-4 / All-on-6 Implants (Straumann®)' },
      { val: 'Hollywood Smile (E-Max Veneers)', label: 'Hollywood Smile (E-Max® Porcelain)' },
      { val: 'Full Mouth Monolithic Zirconia', label: 'Monolithic Katana™ Zirconia Bridges' },
      { val: 'Single / Multi Dental Implants', label: 'Single / Multi Dental Implants' },
      { val: 'General Smile Renovation', label: 'General Smile Renovation & Surgery' },
    ],
    de: [
      { val: 'All-on-4 / Full Arch Implants', label: 'All-on-4 / All-on-6 Implantate (Straumann®)' },
      { val: 'Hollywood Smile (E-Max Veneers)', label: 'Hollywood Smile (E-Max® Keramik)' },
      { val: 'Full Mouth Monolithic Zirconia', label: 'Monolithische Katana™ Zirkonbrücken' },
      { val: 'Single / Multi Dental Implants', label: 'Einzel- / Mehrfachimplantate' },
      { val: 'General Smile Renovation', label: 'Allgemeine Lächeln-Restauration' },
    ],
    ru: [
      { val: 'All-on-4 / Full Arch Implants', label: 'Имплантация All-on-4 / All-on-6 (Straumann®)' },
      { val: 'Hollywood Smile (E-Max Veneers)', label: 'Голливудская улыбка (Виниры E-Max®)' },
      { val: 'Full Mouth Monolithic Zirconia', label: 'Циркониевые мосты Katana™' },
      { val: 'Single / Multi Dental Implants', label: 'Одиночные / Множественные импланты' },
      { val: 'General Smile Renovation', label: 'Комплексное восстановление зубов' },
    ],
    fr: [
      { val: 'All-on-4 / Full Arch Implants', label: 'Implants All-on-4 / All-on-6 (Straumann®)' },
      { val: 'Hollywood Smile (E-Max Veneers)', label: 'Hollywood Smile (Facettes E-Max®)' },
      { val: 'Full Mouth Monolithic Zirconia', label: 'Bridges Monolithiques Zircone Katana™' },
      { val: 'Single / Multi Dental Implants', label: 'Implants Unitaires / Multiples' },
      { val: 'General Smile Renovation', label: 'Rénovation Esthétique Complète' },
    ],
    ar: [
      { val: 'All-on-4 / Full Arch Implants', label: 'زراعة كامل الفك All-on-4 / All-on-6 (Straumann®)' },
      { val: 'Hollywood Smile (E-Max Veneers)', label: 'ابتسامة هوليوود (قشور E-Max® الأصلية)' },
      { val: 'Full Mouth Monolithic Zirconia', label: 'جسور زيركون Katana™ المتجانسة' },
      { val: 'Single / Multi Dental Implants', label: 'زرعات الأسنان المفردة أو المتعددة' },
      { val: 'General Smile Renovation', label: 'تجديد شامل للابتسامة والجراحة' },
    ],
  }[locale] || [
    { val: 'All-on-4 / Full Arch Implants', label: 'All-on-4 / All-on-6 Implants (Straumann®)' },
    { val: 'Hollywood Smile (E-Max Veneers)', label: 'Hollywood Smile (E-Max® Porcelain)' },
    { val: 'Full Mouth Monolithic Zirconia', label: 'Monolithic Katana™ Zirconia Bridges' },
    { val: 'Single / Multi Dental Implants', label: 'Single / Multi Dental Implants' },
    { val: 'General Smile Renovation', label: 'General Smile Renovation & Surgery' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientData.fullName || !patientData.phone) return;

    const waText = encodeURIComponent(
      `Hello Dent Aktif International Patient Desk! I am submitting an inquiry via the official Contact page.\n\nName: ${patientData.fullName}\nCountry: ${patientData.country}\nTreatment: ${selectedTreatment}\nTravel Plan: ${patientData.arrivalMonth}\nPhone: ${patientData.phone}\nMessage: ${patientData.message || 'I would like to request a 3D preliminary treatment quote and consultation.'}`
    );
    window.open(`https://wa.me/905521617377?text=${waText}`, '_blank');
    setFormSubmitted(true);
  };

  return (
    <div className="w-full min-h-screen bg-[#FAFBFC] text-slate-800 pb-20">
      {/* 1. Header & Breadcrumb Hero */}
      <section className="relative w-full bg-gradient-to-b from-[#1b0d52] via-[#211164] to-[#120733] text-white py-12 sm:py-20 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#2BA598_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-[#006972]/20 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 space-y-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-teal-300">
            <Link href="/" className="hover:underline">{t('breadcrumbHome')}</Link>
            <span>/</span>
            <span className="text-white">{t('breadcrumbContact')}</span>
          </nav>

          <h1 className="font-headline text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-4xl">
            {t('title')}
          </h1>

          <p className="text-sm sm:text-base text-slate-200 max-w-3xl leading-relaxed font-normal">
            {t('desc')}
          </p>
        </div>
      </section>

      {/* 2. Official Health Tourism Authorization Certificate Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 -mt-8 relative z-20">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-4 flex flex-col items-center sm:items-start gap-3">
            <div
              onClick={() => setShowCertModal(true)}
              className="relative w-full max-w-[280px] rounded-2xl overflow-hidden border-2 border-teal-500/40 shadow-lg cursor-pointer group bg-slate-950 aspect-4/3 flex items-center justify-center"
            >
              <img
                src="/images/health-tourism-certificate.webp"
                alt="Health Tourism Authorization Certificate"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-3">
                <span className="text-xs font-bold text-white flex items-center gap-1.5 font-headline">
                  <span className="material-symbols-outlined text-teal-300 text-sm">zoom_in</span>
                  <span>{locale === 'ar' ? 'انقر لتكبير الشهادة الرسمية' : locale === 'tr' ? 'Belgeyi Büyütmek İçin Tıklayın' : 'Click to View Full Certificate'}</span>
                </span>
              </div>
            </div>
            <span className="text-[11px] font-mono text-slate-500">
              {locale === 'ar' ? 'الختم الرسمي للمديرية العامة للخدمات الصحية' : locale === 'tr' ? 'Sağlık Hizmetleri Genel Müdürlüğü Resmi Mührü' : 'Official Seal of General Directorate of Health Services'}
            </span>
          </div>

          <div className="lg:col-span-8 space-y-3.5">
            <h3 className="font-headline text-lg sm:text-xl font-black text-[#1b0d52]">
              {locale === 'ar' ? 'مستشفى دنت أكتيف الدولي لطب وجراحة الفم والأسنان' : 'Dent Aktif International Oral & Dental Hospital'}{' '}
              <span className="text-xs font-normal text-slate-500 block sm:inline">
                (Özel Dentaktif Ağız ve Diş Sağlığı Polikliniği)
              </span>
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {locale === 'ar'
                ? 'هذه المنشأة الطبية معتمدة ومرخصة رسمياً من وزارة الصحة بالجمهورية التركية - المديرية العامة للخدمات الصحية لممارسة أنشطة السياحة العلاجية الدولية وفق أعلى المعايير القانونية والطبية.'
                : locale === 'tr'
                ? 'Bu sağlık tesisi, T.C. Sağlık Bakanlığı Sağlık Hizmetleri Genel Müdürlüğü tarafından Uluslararası Sağlık Turizmi ve Turistin Sağlığı Hakkında Yönetmelik kapsamında yetkilendirilmiştir.'
                : 'This institution has been authorized by the Republic of Turkey Ministry of Health - General Directorate of Health Services to conduct international health tourism activities in full compliance with regulatory standards.'}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs font-mono border-t border-slate-100">
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/60">
                <span className="text-[10px] text-slate-400 block uppercase font-bold">{locale === 'ar' ? 'رقم الوثيقة' : locale === 'tr' ? 'Belge Numarası' : 'Certificate Number'}</span>
                <span className="font-bold text-slate-900 text-[11px] break-all">2026034015610080000425805</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/60">
                <span className="text-[10px] text-slate-400 block uppercase font-bold">{locale === 'ar' ? 'باركود الوثيقة' : locale === 'tr' ? 'Belge Barkodu' : 'Document Barcode'}</span>
                <span className="font-bold text-emerald-700 text-xs">305180775</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/60">
                <span className="text-[10px] text-slate-400 block uppercase font-bold">{locale === 'ar' ? 'تاريخ الإصدار' : locale === 'tr' ? 'Düzenleme Tarihi' : 'Issue Date'}</span>
                <span className="font-bold text-slate-900 text-xs">11.02.2026</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/60">
                <span className="text-[10px] text-slate-400 block uppercase font-bold">{locale === 'ar' ? 'المدير الطبي المسئول' : locale === 'tr' ? 'Mesul Müdür' : 'Medical Director'}</span>
                <span className="font-bold text-slate-900 text-xs">Dt. Abdullah Ömür</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Grid: Contact Form & Channels */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column (7 cols): Consultation Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#006972] font-extrabold">
                {locale === 'ar' ? 'مكتب استقبال المرضى المباشر' : locale === 'tr' ? 'Doğrudan Başvuru Masası' : 'Direct Patient Submission'}
              </span>
              <h2 className="font-headline text-2xl sm:text-3xl font-black text-[#1b0d52] tracking-tight">
                {t('formTitle')}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {locale === 'ar'
                  ? 'أرسل بياناتك وسجلات أسنانك الطبية. سيقوم فريقنا الجراحي ومنسق المرضى بتحليل حالتك وإعداد عرض سعر تفصيلي خلال ساعتين.'
                  : locale === 'tr'
                  ? 'Diş kayıtlarınızı ve iletişim bilgilerinizi iletin. Cerrahi ekibimiz vakanızı inceleyip 2 saat içinde detaylı teklifinizi hazırlasın.'
                  : 'Submit your details and dental history. Our surgical team and patient coordinator will analyze your case and provide an itemized quote within 2 hours.'}
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-3">
                <div className="flex items-center gap-2 font-bold font-headline text-lg text-emerald-800">
                  <span className="material-symbols-outlined text-2xl text-emerald-600">check_circle</span>
                  <span>{t('successTitle')}</span>
                </div>
                <p className="text-xs sm:text-sm text-emerald-700 leading-relaxed">
                  {t('successDesc')}
                </p>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors"
                >
                  {locale === 'ar' ? 'تقديم استفسار جديد' : locale === 'tr' ? 'Yeni Bir Başvuru Yap' : 'Submit Another Inquiry'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t('fullName')} *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Smith"
                      value={patientData.fullName}
                      onChange={(e) => setPatientData({ ...patientData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-hidden focus:ring-2 focus:ring-teal-500 bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t('email')} *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={patientData.email}
                      onChange={(e) => setPatientData({ ...patientData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-hidden focus:ring-2 focus:ring-teal-500 bg-slate-50/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t('phone')} *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+90 552 161 7377"
                      value={patientData.phone}
                      onChange={(e) => setPatientData({ ...patientData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-hidden focus:ring-2 focus:ring-teal-500 bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t('country')}
                    </label>
                    <input
                      type="text"
                      value={patientData.country}
                      onChange={(e) => setPatientData({ ...patientData, country: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-hidden focus:ring-2 focus:ring-teal-500 bg-slate-50/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t('treatment')}
                    </label>
                    <select
                      value={selectedTreatment}
                      onChange={(e) => setSelectedTreatment(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-hidden focus:ring-2 focus:ring-teal-500 bg-slate-50/50"
                    >
                      {localizedTreatments.map((trItem) => (
                        <option key={trItem.val} value={trItem.val}>
                          {trItem.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t('arrival')}
                    </label>
                    <select
                      value={patientData.arrivalMonth}
                      onChange={(e) => setPatientData({ ...patientData, arrivalMonth: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-hidden focus:ring-2 focus:ring-teal-500 bg-slate-50/50"
                    >
                      <option value="Next 14 Days">{locale === 'ar' ? 'خلال 14 يوماً (عاجل)' : locale === 'tr' ? 'Acil (14 Gün İçinde)' : 'Within 14 Days (Urgent)'}</option>
                      <option value="Next 30 Days">{locale === 'ar' ? 'خلال الـ 30 يوماً القادمة' : locale === 'tr' ? 'Önümüzdeki 30 Gün İçinde' : 'Within 30 Days'}</option>
                      <option value="1 to 3 Months">{locale === 'ar' ? 'خلال 1 إلى 3 أشهر' : locale === 'tr' ? '1 ile 3 Ay Arasında' : 'In 1 to 3 Months'}</option>
                      <option value="Planning Later">{locale === 'ar' ? 'أستكشف الخيارات فقط حالياً' : locale === 'tr' ? 'Yalnızca Bilgi Alıyorum' : 'Just Exploring Options'}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {t('message')}
                  </label>
                  <textarea
                    rows={3}
                    placeholder={locale === 'ar' ? 'اشرح حالة أسنانك الحالية، أو العلاجات السابقة، أو متطلباتك التجميلية الخاصة...' : locale === 'tr' ? 'Mevcut diş şikayetiniz veya istediğiniz estetik değişim...' : 'Describe your current tooth condition, previous dental work, or specific requests...'}
                    value={patientData.message}
                    onChange={(e) => setPatientData({ ...patientData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-hidden focus:ring-2 focus:ring-teal-500 bg-slate-50/50"
                  />
                </div>

                <div className="p-3 rounded-xl bg-teal-50/80 border border-teal-200/80 flex items-start gap-2.5 text-xs text-teal-900">
                  <span className="material-symbols-outlined text-teal-600 text-lg shrink-0 mt-0.5">verified_user</span>
                  <div className="text-[11px] leading-relaxed">
                    <strong>256-Bit TLS &amp; GDPR / KVKK:</strong> {locale === 'ar' ? 'تتم مراجعة سجلاتك التشخيصية حصرياً من قِبل جراحي الأسنان المرخصين تحت بند السرية الطبية التامة ولن يتم إرسال أي رسائل غير مرغوب فيها.' : locale === 'tr' ? 'Kayıtlarınız yalnızca lisanslı diş hekimlerimizce incelenir ve asla 3. taraflarla paylaşılmaz.' : 'Your diagnostic records are reviewed exclusively by registered dental surgeons under medical confidentiality. No spam.'}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#211164] via-[#2d1980] to-[#006972] text-white font-headline font-bold text-sm shadow-lg hover:shadow-xl hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-lg text-teal-300">send</span>
                  <span>{t('submitBtn')}</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column (5 cols): Official Communication Channels & Location */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-md space-y-4">
              <h3 className="font-headline text-lg font-black text-[#1b0d52] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>{locale === 'ar' ? 'قنوات الاتصال الدولية على مدار الساعة 24/7' : locale === 'tr' ? '7/24 Uluslararası İletişim Kanalları' : '24/7 International Contact Channels'}</span>
              </h3>

              <div className="space-y-3 text-xs">
                {/* 1. Phone */}
                <a
                  href="tel:+905521617377"
                  className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200/70 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-xl bg-teal-500/10 text-teal-700 flex items-center justify-center shrink-0 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-[20px]">phone</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">{t('phoneTitle')}</span>
                    <span className="font-bold text-sm text-[#1b0d52] font-mono">{t('phoneVal')}</span>
                    <span className="text-[10px] text-slate-500 block mt-0.5">{locale === 'ar' ? 'تنسيق المرضى بعدة لغات (العربية، EN, DE, FR, RU)' : locale === 'tr' ? 'Çok dilli koordinasyon (TR, EN, DE, FR, RU)' : 'Bilingual operators (EN, DE, FR, RU)'}</span>
                  </div>
                </a>

                {/* 2. WhatsApp */}
                <a
                  href="https://wa.me/905521617377"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-3.5 rounded-2xl bg-emerald-50/70 hover:bg-emerald-100/70 border border-emerald-200/80 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                    <span className="material-symbols-outlined text-[20px]">chat</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-emerald-800 font-bold uppercase block">{locale === 'ar' ? 'مكتب أطباء واتساب الفوري' : locale === 'tr' ? 'Hızlı WhatsApp Hekim Hattı' : 'Instant WhatsApp Doctor Desk'}</span>
                    <span className="font-bold text-sm text-emerald-900 font-mono">+90 552 161 73 77</span>
                    <span className="text-[10px] text-emerald-700 block mt-0.5">{locale === 'ar' ? 'استشارة مباشرة للأشعة البانورامية وصور الأسنان' : locale === 'tr' ? 'Doğrudan röntgen ve fotoğraf danışması' : 'Direct photo & panoramic X-ray chat'}</span>
                  </div>
                </a>

                {/* 3. Email */}
                <a
                  href="mailto:international@dentaktifglobal.com"
                  className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200/70 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-xl bg-sky-500/10 text-sky-700 flex items-center justify-center shrink-0 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-[20px]">mail</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">{t('emailTitle')}</span>
                    <span className="font-bold text-xs text-[#1b0d52] font-mono break-all">{t('emailVal')}</span>
                    <span className="text-[10px] text-slate-500 block mt-0.5">{locale === 'ar' ? 'الإدارة الرسمية للحالات الرقمية الدولية' : locale === 'tr' ? 'Resmi dijital vaka koordinasyonu' : 'Official digital case management'}</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Physical Address & Logistics */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-md space-y-4">
              <h3 className="font-headline text-lg font-black text-[#1b0d52] flex items-center gap-2">
                <span className="material-symbols-outlined text-teal-600">location_on</span>
                <span>{locale === 'ar' ? 'مجمع المستشفى ومعلومات الوصول' : locale === 'tr' ? 'Hastane Konumu & Ulaşım Bilgisi' : 'Hospital Campus & Arrival Logistics'}</span>
              </h3>

              <div className="space-y-3 text-xs text-slate-600">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1">
                  <span className="text-[10px] font-bold uppercase text-slate-400 block">{t('addressTitle')}</span>
                  <div className="font-bold text-slate-900">
                    {locale === 'ar' ? 'مستشفى دنت أكتيف الدولي' : 'Dent Aktif International Hospital'}
                  </div>
                  <div className="text-[11px] text-slate-600 leading-snug">
                    {t('addressVal')}
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1">
                  <span className="text-[10px] font-bold uppercase text-slate-400 block">{t('hoursTitle')}</span>
                  <div className="text-[11px] text-slate-600 leading-snug">
                    {t('hoursVal')}
                  </div>
                </div>

                {/* Airport Transit Times */}
                <div className="grid grid-cols-2 gap-2 text-center pt-1 font-mono">
                  <div className="p-2.5 rounded-xl bg-teal-50 border border-teal-200 text-teal-900">
                    <span className="text-[10px] text-teal-700 block font-bold">{locale === 'ar' ? 'مطار إسطنبول (IST)' : 'Istanbul Airport (IST)'}</span>
                    <span className="font-bold text-xs">{locale === 'ar' ? '~28 دقيقة مع سائق خاص' : '~28 Min Chauffeur'}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-teal-50 border border-teal-200 text-teal-900">
                    <span className="text-[10px] text-teal-700 block font-bold">{locale === 'ar' ? 'مطار صبيحة كوكجن (SAW)' : 'Sabiha Gökçen (SAW)'}</span>
                    <span className="font-bold text-xs">{locale === 'ar' ? '~45 دقيقة مع سائق خاص' : '~45 Min Chauffeur'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      {showCertModal && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setShowCertModal(false)}
        >
          <div
            className="relative max-w-3xl w-full bg-white rounded-3xl p-6 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-4">
              <h3 className="font-headline font-bold text-slate-900 text-sm sm:text-base">
                {locale === 'ar' ? 'شهادة ترخيص السياحة العلاجية الدولية من وزارة الصحة بالجمهورية التركية' : locale === 'tr' ? 'T.C. Sağlık Bakanlığı Uluslararası Sağlık Turizmi Yetki Belgesi' : 'Republic of Turkey Ministry of Health Authorization Certificate'}
              </h3>
              <button
                type="button"
                onClick={() => setShowCertModal(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 cursor-pointer"
              >
                ✕
              </button>
            </div>
            <div className="w-full max-h-[75vh] overflow-y-auto flex items-center justify-center bg-slate-950 rounded-2xl p-2">
              <img
                src="/images/health-tourism-certificate.webp"
                alt="Health Tourism Certificate"
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
