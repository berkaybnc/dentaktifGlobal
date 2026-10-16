'use client';

import React, { useState } from 'react';
import { useLocale } from 'next-intl';
import { Link } from '@/navigation';
import { compressDentalImage, OptimizedFile } from '@/lib/imageCompression';

interface TreatmentOption {
  id: string;
  title: string;
  badge: string;
  badgeColor: string;
  desc: string;
  icon: string;
  highlight: string;
}

const TREATMENT_OPTIONS_BY_LOCALE: Record<string, TreatmentOption[]> = {
  en: [
    {
      id: 'hollywood_smile',
      title: 'Hollywood Smile Makeover',
      badge: '✨ 5-Day Stay • Most Popular',
      badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
      desc: '16 to 20 handcrafted Ivoclar Vivadent E-Max® veneers for lifelike translucency and symmetrical smile architecture.',
      icon: 'auto_awesome',
      highlight: '20 E-Max® Laminates • Digital Smile Design',
    },
    {
      id: 'all_on_4',
      title: 'All-on-4 / All-on-6 Implants',
      badge: '⚙️ Immediate Loading Protocol',
      badgeColor: 'bg-sky-50 text-sky-800 border-sky-200',
      desc: 'Full-arch fixed reconstruction using Swiss Straumann® titanium-zirconium implants and immediate 48-hour temporary bridge.',
      icon: 'dentistry',
      highlight: 'Swiss Straumann® • Lifetime Warranty',
    },
    {
      id: 'zirconia_crowns',
      title: 'Monolithic Zirconia Crowns',
      badge: '👑 1200+ MPa Diamond Strength',
      badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      desc: 'German Kuraray Katana™ robotic CAD/CAM full bridges for heavy bite wear, bruxism, and deeply restored teeth.',
      icon: 'crown',
      highlight: 'Katana™ Multilayer • 20-Year Certificate',
    },
    {
      id: 'full_mouth',
      title: 'Comprehensive Rehabilitation',
      badge: '🏥 Faculty Surgical Care',
      badgeColor: 'bg-purple-50 text-purple-800 border-purple-200',
      desc: 'Holistic combination of 3D sinus lifts, bone matrix grafting, computer-guided implants, and aesthetic ceramic crowns.',
      icon: 'medical_services',
      highlight: 'Sedation Available • Multi-Disciplinary',
    },
  ],
  tr: [
    {
      id: 'hollywood_smile',
      title: 'Hollywood Smile Gülüş Tasarımı',
      badge: '✨ 5 Günde Tamamlanır • En Popüler',
      badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
      desc: 'Kişiye özel altın oran tasarımı ve doğal ışık geçirgenliği sunan 16-20 üye orijinal Ivoclar E-Max® lamine porselen.',
      icon: 'auto_awesome',
      highlight: '20 E-Max® Lamine • Dijital Gülüş Tasarımı',
    },
    {
      id: 'all_on_4',
      title: 'All-on-4 / All-on-6 İmplant Tedavisi',
      badge: '⚙️ Hemen Yükleme Protokolü',
      badgeColor: 'bg-sky-50 text-sky-800 border-sky-200',
      desc: 'Orijinal İsviçre Straumann® implantları ile 48 saatte sabitlenen geçici köprü ve tam çene restorasyonu.',
      icon: 'dentistry',
      highlight: 'İsviçre Straumann® • Ömür Boyu Garanti',
    },
    {
      id: 'zirconia_crowns',
      title: 'Monolitik Zirkonyum Kuronlar',
      badge: '👑 1200+ MPa Elmas Dayanımı',
      badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      desc: 'Ağır diş sıkma ve madde kaybı olan dişler için Alman Katana robotik CAD/CAM çok katmanlı zirkonyum köprüler.',
      icon: 'crown',
      highlight: 'Katana™ Çok Katmanlı • 20 Yıl Garanti',
    },
    {
      id: 'full_mouth',
      title: 'Kapsamlı Ağız & Çene Rehabilitasyonu',
      badge: '🏥 Uzman Cerrahi Kadro',
      badgeColor: 'bg-purple-50 text-purple-800 border-purple-200',
      desc: 'Sinüs lifting, kemik grefti, bilgisayar kılavuzlu implant cerrahisi ve estetik porselenlerin kombine edildiği tedavi.',
      icon: 'medical_services',
      highlight: 'Sedasyon İmkanı • Multidisipliner Yaklaşım',
    },
  ],
  de: [
    {
      id: 'hollywood_smile',
      title: 'Hollywood Smile Makeover',
      badge: '✨ 5 Tage Aufenthalt • Am beliebtesten',
      badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
      desc: '16 bis 20 handgefertigte Ivoclar Vivadent E-Max® Veneers für lebendige Transluzenz und symmetrische Lächeln-Architektur.',
      icon: 'auto_awesome',
      highlight: '20 E-Max® Laminates • Digital Smile Design',
    },
    {
      id: 'all_on_4',
      title: 'All-on-4 / All-on-6 Implantate',
      badge: '⚙️ Sofortbelastungsprotokoll',
      badgeColor: 'bg-sky-50 text-sky-800 border-sky-200',
      desc: 'Festsitzende Rekonstruktion mit Schweizer Straumann® Implantaten und festsitzender provisorischer Brücke innerhalb von 48 Std.',
      icon: 'dentistry',
      highlight: 'Schweizer Straumann® • Lebenslange Garantie',
    },
    {
      id: 'zirconia_crowns',
      title: 'Monolithische Zirkonkronen',
      badge: '👑 1200+ MPa Diamantfestigkeit',
      badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      desc: 'Deutsche Kuraray Katana™ robotisch gefräste Vollbrücken für hohe Kaubelastung und Zähneknirschen.',
      icon: 'crown',
      highlight: 'Katana™ Multilayer • 20 Jahre Garantie',
    },
    {
      id: 'full_mouth',
      title: 'Ganzheitliche Gesamtrehabilitation',
      badge: '🏥 Klinische Chefarztbetreuung',
      badgeColor: 'bg-purple-50 text-purple-800 border-purple-200',
      desc: 'Kombination aus 3D-Sinuslift, Knochenaufbau, navigierten Implantaten und ästhetischen Keramikkronen.',
      icon: 'medical_services',
      highlight: 'Sedierung verfügbar • Multidisziplinär',
    },
  ],
  ru: [
    {
      id: 'hollywood_smile',
      title: 'Голливудская улыбка (Hollywood Smile)',
      badge: '✨ 5 дней • Самый частый выбор',
      badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
      desc: 'От 16 до 20 виниров Ivoclar Vivadent E-Max® с естественной глубиной цвета и золотым сечением улыбки.',
      icon: 'auto_awesome',
      highlight: '20 виниров E-Max® • Цифровой дизайн DSD',
    },
    {
      id: 'all_on_4',
      title: 'Имплантация All-on-4 / All-on-6',
      badge: '⚙️ Протокол немедленной нагрузки',
      badgeColor: 'bg-sky-50 text-sky-800 border-sky-200',
      desc: 'Тотальное восстановление челюсти на швейцарских Straumann® с установкой несъемного моста за 48 часов.',
      icon: 'dentistry',
      highlight: 'Швейцарские Straumann® • Пожизненная гарантия',
    },
    {
      id: 'zirconia_crowns',
      title: 'Монолитные коронки из циркония',
      badge: '👑 Прочность свыше 1200 МПа',
      badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      desc: 'Немецкие мостовидные протезы Katana™ CAD/CAM для пациентов с бруксизмом и значительной стираемостью зубов.',
      icon: 'crown',
      highlight: 'Katana™ Multilayer • 20 лет гарантии',
    },
    {
      id: 'full_mouth',
      title: 'Комплексная реабилитация полости рта',
      badge: '🏥 Хирургический совет клиники',
      badgeColor: 'bg-purple-50 text-purple-800 border-purple-200',
      desc: 'Комплекс из синус-лифтинга, костной пластики, навигационной имплантации и керамических коронок.',
      icon: 'medical_services',
      highlight: 'Седация во сне • Мультидисциплинарный подход',
    },
  ],
  fr: [
    {
      id: 'hollywood_smile',
      title: 'Transformation Hollywood Smile',
      badge: '✨ Séjour de 5 Jours • Le Plus Demandé',
      badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
      desc: '16 à 20 facettes artisanales Ivoclar Vivadent E-Max® pour une translucidité naturelle et un alignement idéal.',
      icon: 'auto_awesome',
      highlight: '20 Facettes E-Max® • Digital Smile Design',
    },
    {
      id: 'all_on_4',
      title: 'Implants All-on-4 / All-on-6',
      badge: '⚙️ Mise en Charge Immédiate',
      badgeColor: 'bg-sky-50 text-sky-800 border-sky-200',
      desc: 'Reconstruction complète de l’arcade avec implants suisses Straumann® et bridge provisoire fixe sous 48h.',
      icon: 'dentistry',
      highlight: 'Straumann® Suisse • Garantie à Vie',
    },
    {
      id: 'zirconia_crowns',
      title: 'Couronnes Monolithiques en Zircone',
      badge: '👑 Résistance Diamant 1200+ MPa',
      badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      desc: 'Bridges complets usinés Kuraray Katana™ pour les fortes pressions masticatoires et le bruxisme.',
      icon: 'crown',
      highlight: 'Katana™ Multicouche • Certificat 20 Ans',
    },
    {
      id: 'full_mouth',
      title: 'Réhabilitation Globale Complexe',
      badge: '🏥 Soins Chirurgicaux Hospitaliers',
      badgeColor: 'bg-purple-50 text-purple-800 border-purple-200',
      desc: 'Combinaison de comblement de sinus, greffe osseuse, implants guidés et couronnes esthétiques.',
      icon: 'medical_services',
      highlight: 'Sédation Disponible • Équipe Pluridisciplinaire',
    },
  ],
  ar: [
    {
      id: 'hollywood_smile',
      title: 'تصميم ابتسامة هوليوود',
      badge: '✨ إقامة 5 أيام • الأكثر طلباً',
      badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
      desc: '16 إلى 20 قشرة فينير E-Max® مصنعة يدوياً للحصول على شفافية طبيعية وابتسامة متناسقة وجذابة.',
      icon: 'auto_awesome',
      highlight: '20 قشرة E-Max® • تصميم الابتسامة الرقمي',
    },
    {
      id: 'all_on_4',
      title: 'زراعة الفك الكامل All-on-4 / All-on-6',
      badge: '⚙️ بروتوكول التحميل الفوري للأسنان',
      badgeColor: 'bg-sky-50 text-sky-800 border-sky-200',
      desc: 'إعادة بناء الفك بالكامل بزرعات Straumann® السويسرية وجسر مؤقت ثابت خلال 48 ساعة.',
      icon: 'dentistry',
      highlight: 'زرعات Straumann® السويسرية • ضمان مدى الحياة',
    },
    {
      id: 'zirconia_crowns',
      title: 'تيجان الزيركون المتجانس',
      badge: '👑 صلابة ماسية تفوق 1200 ميجاباسكال',
      badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      desc: 'جسور روبوتية CAD/CAM كاملة من كتل Katana™ لمن يعانون من صرير الأسنان وتآكل الإطباق الشديد.',
      icon: 'crown',
      highlight: 'زيركون Katana™ متعدد الطبقات • ضمان 20 عاماً',
    },
    {
      id: 'full_mouth',
      title: 'إعادة التأهيل الشامل والمعقد للفكين',
      badge: '🏥 إشراف جراحي استشاري متكامل',
      badgeColor: 'bg-purple-50 text-purple-800 border-purple-200',
      desc: 'خطة علاجية تجمع بين رفع الجيوب الأنفية، زراعة العظام، الزرعات الموجهة وتيجان الخزف التجميلية.',
      icon: 'medical_services',
      highlight: 'إمكانية التخدير الكلي / التهدئة • فريق متعدد التخصصات',
    },
  ],
};

const UI_TEXTS: Record<string, any> = {
  en: {
    portalBadge: 'Official Clinical Triage Portal',
    responseNotice: 'Under 4-Hour Response',
    encryptionNotice: '256-Bit SSL & GDPR Medical Encrypted',
    title: 'Complimentary 3D X-Ray & Dental Record Evaluation',
    desc: 'Submit your panoramic radiograph, 3D CBCT, or smartphone smile photos. Our Chief Surgical Prosthodontist will evaluate your case with an itemized, binding medical proposal.',
    step1Title: 'Treatment Focus',
    step1Sub: 'Select Procedure',
    step2Title: 'Patient Info',
    step2Sub: 'WhatsApp & Country',
    step3Title: 'Dental Records',
    step3Sub: 'Upload X-Rays',
    unsureNotice: 'Unsure which treatment suits you? Our surgical faculty will specify your ideal plan.',
    nextStep2: 'Next: Patient & Country Info',
    fullNameLabel: 'Full Legal Name *',
    fullNamePlaceholder: 'e.g. John Smith',
    phoneLabel: 'WhatsApp Phone Number *',
    phonePlaceholder: '+44 7123 456789',
    countryLabel: 'Country of Residence',
    timelineLabel: 'Planned Travel Timeline',
    timeline1: 'Within the next 30 days',
    timeline2: '1 to 3 months',
    timeline3: '3 to 6 months',
    timeline4: 'Just planning & researching',
    backBtn: 'Back',
    nextStep3: 'Next: Attach Dental Records',
    dropTitle: 'Drop Panoramic X-Ray, 3D Scan, or Smile Photos Here',
    dropDesc: 'Browse from your device. Supported: JPEG, PNG, DICOM / CBCT or PDF (Max 25 MB).',
    dropOptional: 'Optional for initial consultation — can be uploaded later',
    optimizingText: 'Optimizing and encrypting diagnostic files client-side...',
    uploadedFilesLabel: 'Uploaded Dental Files',
    removeFile: 'Remove',
    hotelInclusionTitle: 'Include 5-Star Levent Partner Hotel & VIP Mercedes Vito Chauffeur (Zero Extra Cost)',
    hotelInclusionDesc: 'Door-to-door private airport pickups and 5 nights luxury accommodation bundled directly into your transparent package quote.',
    gdprTitle: 'GDPR (EU 2016/679) & Ministry of Health Data Protection',
    gdprDesc: 'All dental records and contact data are strictly confidential, transmitted via 256-bit SSL, and solely evaluated by licensed clinical faculty. Zero commercial third-party distribution.',
    submitBtn: 'Transmit Records & Request Triage',
    submittingBtn: 'Transmitting Secure Records...',
    altText: 'Need direct clinical assistance or prefer speaking with our team?',
    altLink: 'Reach Our Official Contact Desk →',
    successBadge: 'Transmission Confirmed • Reference #',
    successTitle: 'Medical Records Received Successfully',
    successGreeting: 'Thank you,',
    successMsg: 'Our Chief Surgical Prosthodontist and International Coordination Desk are currently reviewing your radiographs. Your itemized treatment proposal will be delivered directly to your WhatsApp within 4 to 12 hours.',
    successWaBtn: 'Connect with Coordinator on WhatsApp',
    successResetBtn: 'Submit Another Inquiry',
    validationAlert: 'Please fill out your name and WhatsApp phone number.',
  },
  tr: {
    portalBadge: 'Resmi Klinik Triyaj & Danışma Portalı',
    responseNotice: '2-4 Saat İçinde Hızlı Yanıt',
    encryptionNotice: '256-Bit SSL & KVKK / GDPR Korumalı',
    title: 'Ücretsiz 3D Röntgen & Diş Kayıtları Değerlendirmesi',
    desc: 'Panoramik röntgeninizi, 3D tomografinizi veya diş fotoğraflarınızı gönderin. Başhekimimiz ve uzman cerrahlarımız vakanızı inceleyerek bağlayıcı tedavi teklifinizi hazırlasın.',
    step1Title: 'Tedavi Tercihi',
    step1Sub: 'İşlemi Seçin',
    step2Title: 'Hasta Bilgileri',
    step2Sub: 'İletişim & Ülke',
    step3Title: 'Medikal Kayıtlar',
    step3Sub: 'Röntgen Yükleme',
    unsureNotice: 'Hangi tedavinin size uygun olduğundan emin değil misiniz? Cerrahlarımız röntgeninize göre en uygun planı belirleyecektir.',
    nextStep2: 'İleri: İletişim Bilgileri',
    fullNameLabel: 'Adınız Soyadınız *',
    fullNamePlaceholder: 'Örn: Ahmet Yılmaz',
    phoneLabel: 'WhatsApp Telefon Numaranız *',
    phonePlaceholder: '+90 552 161 7377',
    countryLabel: 'İkamet Ettiğiniz Ülke',
    timelineLabel: 'Planladığınız Seyahat Dönemi',
    timeline1: 'Önümüzdeki 30 gün içinde',
    timeline2: '1 - 3 ay içinde',
    timeline3: '3 - 6 ay içinde',
    timeline4: 'Yalnızca bilgi alıyorum',
    backBtn: 'Geri',
    nextStep3: 'İleri: Röntgen / Fotoğraf Ekle',
    dropTitle: 'Panoramik Röntgen, 3D Tarama veya Diş Fotoğraflarınızı Buraya Sürükleyin',
    dropDesc: 'Cihazınızdan seçin. Desteklenen: JPEG, PNG, DICOM / CBCT veya PDF (Maks. 25 MB).',
    dropOptional: 'İlk danışma için isteğe bağlıdır — daha sonra da WhatsApp üzerinden iletebilirsiniz',
    optimizingText: 'Dosyalarınız tarayıcıda optimize ediliyor ve şifreleniyor...',
    uploadedFilesLabel: 'Eklenen Diş Dosyaları',
    removeFile: 'Kaldır',
    hotelInclusionTitle: '5 Yıldızlı Partner Otel & VIP Mercedes Vito Şoför Dahil Edilsin (Ek Masrafsız)',
    hotelInclusionDesc: 'Havalimanı karşılama ve 5 gecelik lüks konaklama şeffaf paket fiyatınıza ücretsiz olarak eklenir.',
    gdprTitle: 'KVKK & GDPR Sağlık Verileri Gizlilik Güvencesi',
    gdprDesc: 'Tüm medikal kayıtlarınız ve iletişim bilgileriniz 256-bit SSL şifreleme ile korunur, yalnızca uzman hekimlerimizce incelenir ve asla 3. taraflarla paylaşılmaz.',
    submitBtn: 'Kayıtları Gönder & Ön Değerlendirme Talep Et',
    submittingBtn: 'Güvenli Şekilde Gönderiliyor...',
    altText: 'Hekimlerimizle doğrudan konuşmayı mı tercih edersiniz?',
    altLink: 'Resmi İletişim Masasına Ulaşın →',
    successBadge: 'Gönderim Başarılı • Referans Kodu #',
    successTitle: 'Medikal Kayıtlarınız Başarıyla Alındı',
    successGreeting: 'Sayın',
    successMsg: 'Başhekimimiz ve Uluslararası Hasta Koordinasyon Birimimiz kayıtlarınızı incelemeye başladı. Detaylı tedavi planınız ve fiyat teklifiniz 2-4 saat içinde WhatsApp numaranıza iletilecektir.',
    successWaBtn: 'Koordinatör ile Doğrudan WhatsApp Aç',
    successResetBtn: 'Yeni Bir Talep Gönder',
    validationAlert: 'Lütfen adınızı ve WhatsApp telefon numaranızı eksiksiz doldurunuz.',
  },
  de: {
    portalBadge: 'Offizielles klinisches Triage-Portal',
    responseNotice: 'Antwort unter 4 Stunden',
    encryptionNotice: '256-Bit SSL & DSGVO medizinisch verschlüsselt',
    title: 'Kostenlose 3D-Röntgen- und Befundbeurteilung',
    desc: 'Reichen Sie Ihr Röntgenbild oder Ihre Zahnfotos ein. Unser Chefarzt für Prothetik erstellt für Sie ein verbindliches medizinisches Angebot.',
    step1Title: 'Behandlungsfokus',
    step1Sub: 'Verfahren wählen',
    step2Title: 'Patientendaten',
    step2Sub: 'WhatsApp & Land',
    step3Title: 'Befunde',
    step3Sub: 'Röntgen hochladen',
    unsureNotice: 'Nicht sicher, welche Behandlung passt? Unsere Chirurgen ermitteln den idealen Plan.',
    nextStep2: 'Weiter: Patientendaten & Land',
    fullNameLabel: 'Vollständiger Name *',
    fullNamePlaceholder: 'z.B. Max Mustermann',
    phoneLabel: 'WhatsApp-Telefonnummer *',
    phonePlaceholder: '+49 170 1234567',
    countryLabel: 'Wohnsitzland',
    timelineLabel: 'Geplanter Reisezeitraum',
    timeline1: 'Innerhalb der nächsten 30 Tage',
    timeline2: 'In 1 bis 3 Monaten',
    timeline3: 'In 3 bis 6 Monaten',
    timeline4: 'Nur Recherche',
    backBtn: 'Zurück',
    nextStep3: 'Weiter: Befunde anhängen',
    dropTitle: 'Panorama-Röntgenbild, 3D-Scan oder Fotos hier ablegen',
    dropDesc: 'Vom Gerät auswählen. Unterstützt: JPEG, PNG, DICOM / CBCT oder PDF (Max. 25 MB).',
    dropOptional: 'Optional für die Erstberatung – kann später nachgereicht werden',
    optimizingText: 'Dateien werden optimiert und verschlüsselt...',
    uploadedFilesLabel: 'Hochgeladene Dateien',
    removeFile: 'Entfernen',
    hotelInclusionTitle: '5-Sterne-Partnerhotel & VIP Mercedes Vito Chauffeur einschließen (Kostenlos)',
    hotelInclusionDesc: 'Privater Flughafentransfer und 5 Nächte Luxusunterkunft direkt im Paket enthalten.',
    gdprTitle: 'DSGVO & Datenschutz im Gesundheitswesen',
    gdprDesc: 'Alle medizinischen Daten werden streng vertraulich über 256-Bit SSL übertragen und nur von lizenzierten Ärzten geprüft.',
    submitBtn: 'Befunde übermitteln & Triage anfordern',
    submittingBtn: 'Wird sicher übertragen...',
    altText: 'Bevorzugen Sie ein direktes Gespräch mit unserem Team?',
    altLink: 'Offiziellen Kontakt-Desk kontaktieren →',
    successBadge: 'Übermittlung bestätigt • Referenz #',
    successTitle: 'Medizinische Unterlagen erfolgreich erhalten',
    successGreeting: 'Vielen Dank,',
    successMsg: 'Unser Chefarzt und das internationale Team prüfen Ihre Aufnahmen. Sie erhalten Ihren Behandlungsplan innerhalb von 4 bis 12 Stunden via WhatsApp.',
    successWaBtn: 'Direkt per WhatsApp mit Koordinator verbinden',
    successResetBtn: 'Weitere Anfrage senden',
    validationAlert: 'Bitte tragen Sie Ihren Namen und Ihre WhatsApp-Nummer ein.',
  },
  ru: {
    portalBadge: 'Официальный портал клинической оценки',
    responseNotice: 'Ответ в течение 4 часов',
    encryptionNotice: '256-битное шифрование SSL и защита данных',
    title: 'Бесплатная оценка снимков и 3D-томографии',
    desc: 'Загрузите панорамный снимок или фото улыбки. Главный хирург-имплантолог клиники лично составит индивидуальный план лечения.',
    step1Title: 'Выбор лечения',
    step1Sub: 'Направление',
    step2Title: 'Данные пациента',
    step2Sub: 'WhatsApp и страна',
    step3Title: 'Снимки и файлы',
    step3Sub: 'Загрузка снимков',
    unsureNotice: 'Не уверены в выборе? Наши врачи подберут оптимальное решение по снимкам.',
    nextStep2: 'Далее: Контактные данные',
    fullNameLabel: 'Имя и Фамилия *',
    fullNamePlaceholder: 'напр. Иван Иванов',
    phoneLabel: 'Номер телефона WhatsApp *',
    phonePlaceholder: '+7 999 123 45 67',
    countryLabel: 'Страна проживания',
    timelineLabel: 'Планируемые сроки визита',
    timeline1: 'В течение ближайших 30 дней',
    timeline2: 'Через 1-3 месяца',
    timeline3: 'Через 3-6 месяцев',
    timeline4: 'Пока только планирую',
    backBtn: 'Назад',
    nextStep3: 'Далее: Прикрепить снимки',
    dropTitle: 'Перетащите панорамный снимок, КТ или фото зубов сюда',
    dropDesc: 'Поддерживаются: JPEG, PNG, DICOM / CBCT или PDF (до 25 МБ).',
    dropOptional: 'Необязательно для первичной консультации — можно прислать позже',
    optimizingText: 'Оптимизация и шифрование файлов...',
    uploadedFilesLabel: 'Прикрепленные файлы',
    removeFile: 'Удалить',
    hotelInclusionTitle: 'Включить 5-звездочный отель и Mercedes Vito с водителем (Без доплат)',
    hotelInclusionDesc: 'Индивидуальные трансферы из аэропорта и 5 ночей проживания включены в фиксированную стоимость пакета.',
    gdprTitle: 'Конфиденциальность и медицинская тайна',
    gdprDesc: 'Все снимки и данные передаются по зашифрованному каналу SSL и изучаются исключительно коллегией врачей.',
    submitBtn: 'Отправить снимки и запросить план',
    submittingBtn: 'Отправка данных...',
    altText: 'Хотите связаться с русскоязычным куратором напрямую?',
    altLink: 'Перейти в раздел контактов →',
    successBadge: 'Заявка принята • Номер обращения #',
    successTitle: 'Медицинские снимки успешно получены',
    successGreeting: 'Спасибо,',
    successMsg: 'Главный хирург и международный отдел приступили к изучению снимков. Подробный расчет будет отправлен вам в WhatsApp в течение 2–4 часов.',
    successWaBtn: 'Открыть чат с куратором в WhatsApp',
    successResetBtn: 'Отправить еще одну заявку',
    validationAlert: 'Пожалуйста, укажите имя и номер WhatsApp.',
  },
  fr: {
    portalBadge: 'Portail Officiel de Triage Clinique',
    responseNotice: 'Réponse en moins de 4 heures',
    encryptionNotice: 'Cryptage Médical SSL 256 Bits & RGPD',
    title: 'Évaluation Gratuite des Radiographies et Dossiers 3D',
    desc: 'Envoyez votre radiographie panoramique ou des photos de vos dents. Notre chirurgien chef établira un plan de traitement chiffré et personnalisé.',
    step1Title: 'Traitement',
    step1Sub: 'Choisir la Procédure',
    step2Title: 'Coordonnées',
    step2Sub: 'WhatsApp & Pays',
    step3Title: 'Dossier Dentaire',
    step3Sub: 'Radiographies',
    unsureNotice: 'Vous hésitez ? Nos chirurgiens détermineront la solution la plus adaptée.',
    nextStep2: 'Suivant : Coordonnées du Patient',
    fullNameLabel: 'Nom et Prénom *',
    fullNamePlaceholder: 'ex. Jean Dupont',
    phoneLabel: 'Numéro WhatsApp *',
    phonePlaceholder: '+33 6 12 34 56 78',
    countryLabel: 'Pays de Résidence',
    timelineLabel: 'Période de Voyage Envisagée',
    timeline1: 'Dans les 30 prochains jours',
    timeline2: 'D’ici 1 à 3 mois',
    timeline3: 'D’ici 3 à 6 mois',
    timeline4: 'En phase de recherche',
    backBtn: 'Retour',
    nextStep3: 'Suivant : Joindre les Radios',
    dropTitle: 'Glissez votre Panoramique, Scanner 3D ou Photos ici',
    dropDesc: 'Parcourir vos fichiers. Formats : JPEG, PNG, DICOM / CBCT ou PDF (Max 25 Mo).',
    dropOptional: 'Facultatif pour le premier contact — peut être transmis ultérieurement',
    optimizingText: 'Optimisation et cryptage des fichiers...',
    uploadedFilesLabel: 'Fichiers Dentaires Transmis',
    removeFile: 'Supprimer',
    hotelInclusionTitle: 'Inclure l’Hôtel 5 Étoiles & Chauffeur Privé Mercedes Vito (Sans Supplément)',
    hotelInclusionDesc: 'Transferts aéroport privés et 5 nuits en hôtel de luxe intégrés directement dans votre forfait.',
    gdprTitle: 'Protection des Données Médicales & RGPD',
    gdprDesc: 'Vos données et radiographies restent strictement confidentielles et ne sont transmises qu’aux chirurgiens de la clinique.',
    submitBtn: 'Transmettre le Dossier & Obtenir le Devis',
    submittingBtn: 'Transmission sécurisée en cours...',
    altText: 'Vous préférez échanger directement avec notre équipe francophone ?',
    altLink: 'Joindre le Bureau Médical International →',
    successBadge: 'Dossier Transmis • Référence #',
    successTitle: 'Dossier Médical Reçu avec Succès',
    successGreeting: 'Merci,',
    successMsg: 'Notre chirurgien chef et la conciergerie internationale analysent vos radiographies. Votre proposition détaillée vous parviendra directement sur WhatsApp d’ici 4 à 12 heures.',
    successWaBtn: 'Ouvrir la Discussion WhatsApp avec le Coordinateur',
    successResetBtn: 'Déposer une Autre Demande',
    validationAlert: 'Veuillez renseigner votre nom et votre numéro de téléphone WhatsApp.',
  },
  ar: {
    portalBadge: 'بوابة التقييم والفرز الطبي الرسمي',
    responseNotice: 'رد سريع خلال أقل من 4 ساعات',
    encryptionNotice: 'تشفير طبي آمن 256-Bit SSL و GDPR',
    title: 'تقييم مجاني ثلاثي الأبعاد 3D للأشعة والملفات السنية',
    desc: 'أرسل صور الأشعة البانورامية أو الأشعة المقطعية 3D CBCT أو صور ابتسامتك بالهاتف. سيقوم كبير الجراحين والاستشاريين بمراجعة حالتك وتقديم خطة علاجية وعرض سعر ملزم.',
    step1Title: 'نوع العلاج المطلوب',
    step1Sub: 'اختر الإجراء',
    step2Title: 'بيانات المريض',
    step2Sub: 'واتساب والدولة',
    step3Title: 'الملفات الطبية',
    step3Sub: 'رفع الأشعة والصور',
    unsureNotice: 'لست متأكداً من العلاج الأنسب لك؟ سيحدد أطباؤنا الاستشاريون الخطة المثالية لحالتك.',
    nextStep2: 'التالي: بيانات المريض والتواصل',
    fullNameLabel: 'الاسم الكامل الرسمي *',
    fullNamePlaceholder: 'مثال: محمد عبدالله',
    phoneLabel: 'رقم هاتف الواتساب *',
    phonePlaceholder: '+966 50 123 4567',
    countryLabel: 'دولة الإقامة',
    timelineLabel: 'الموعد المخطط للسفر',
    timeline1: 'خلال الـ 30 يوماً القادمة',
    timeline2: 'من شهر إلى 3 أشهر',
    timeline3: 'من 3 إلى 6 أشهر',
    timeline4: 'في مرحلة التخطيط والبحث فقط',
    backBtn: 'رجوع',
    nextStep3: 'التالي: إرفاق الأشعة والملفات',
    dropTitle: 'اسحب وأفلت صورة الأشعة البانورامية أو المقطعية أو صور الأسنان هنا',
    dropDesc: 'أو تصفح الملفات من جهازك. الصيغ المدعومة: JPEG, PNG, DICOM / CBCT أو PDF (حتى 25 ميجابايت).',
    dropOptional: 'اختياري للاستشارة الأولية — يمكن إرسالها لاحقاً عبر واتساب',
    optimizingText: 'جاري ضغط وتشفير الملفات التشخيصية بأمان...',
    uploadedFilesLabel: 'الملفات السنية المرفقة',
    removeFile: 'حذف',
    hotelInclusionTitle: 'شمل فندق شريك 5 نجوم وسائق مرسيدس فيتو VIP (بدون أي تكلفة إضافية)',
    hotelInclusionDesc: 'تنقلات خاصة من وإلى المطار وإقامة 5 ليالٍ في فندق فاخر مدمجة بالكامل ضمن عرض السعر الشفاف.',
    gdprTitle: 'حماية البيانات الطبية وفق اللائحة العامة (GDPR) ووزارة الصحة',
    gdprDesc: 'تُعامل جميع السجلات والبيانات بسرية تامة ومحمية بتشفير 256-bit SSL، وتُعرض حصرياً على كادرنا الطبي المرخص. لا تتم مشاركتها مع أي طرف تجاري ثالث.',
    submitBtn: 'إرسال السجلات وطلب التقييم الطبي',
    submittingBtn: 'جاري إرسال السجلات بأمان...',
    altText: 'هل تفضل التحدث المباشر مع فريقنا الطبي باللغة العربية؟',
    altLink: 'التواصل مباشرة مع مكتب الاستقبال الرسمي ←',
    successBadge: 'تم تأكيد الإرسال • رقم المرجع #',
    successTitle: 'تم استلام الملفات الطبية بنجاح',
    successGreeting: 'شكراً لك،',
    successMsg: 'يقوم كبير جراحي الفم ومكتب التنسيق الدولي بمراجعة صور الأشعة والبيانات حالياً. ستصلك الخطة العلاجية وعرض السعر المفصل مباشرة عبر واتساب خلال 4 إلى 12 ساعة.',
    successWaBtn: 'محادثة المنسق الطبي عبر واتساب',
    successResetBtn: 'إرسال استفسار آخر',
    validationAlert: 'يرجى إدخال اسمك ورقم هاتف الواتساب للمتابعة.',
  },
};

export default function TriageForm() {
  const locale = useLocale();
  const ui = UI_TEXTS[locale] || UI_TEXTS.en;
  const treatmentOptions = TREATMENT_OPTIONS_BY_LOCALE[locale] || TREATMENT_OPTIONS_BY_LOCALE.en;

  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    treatment_plan: 'hollywood_smile',
    fullName: '',
    country: locale === 'ar' ? 'المملكة العربية السعودية' : locale === 'tr' ? 'Türkiye' : locale === 'de' ? 'Deutschland' : locale === 'fr' ? 'France' : locale === 'ru' ? 'Россия' : 'United Kingdom',
    phone: '',
    timeline: ui.timeline1,
    includeHotel: true,
  });

  const [files, setFiles] = useState<OptimizedFile[]>([]);
  const [isCompressing, setIsCompressing] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [refCode, setRefCode] = useState<string>('DA-2026');

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    setIsCompressing(true);

    const rawFiles = Array.from(e.target.files);
    const optimizedList: OptimizedFile[] = [];

    for (const file of rawFiles) {
      try {
        const compressed = await compressDentalImage(file);
        optimizedList.push(compressed);
      } catch (err) {
        console.error('File compression error:', err);
      }
    }

    setFiles((prev) => [...prev, ...optimizedList]);
    setIsCompressing(false);
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, idx) => idx !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/triage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: `${formData.fullName.replace(/\s+/g, '.').toLowerCase()}@international-patient.com`,
          phone: formData.phone,
          country: formData.country,
          treatment: formData.treatment_plan,
          urgency: formData.timeline,
          locale: locale,
          files: files.map((f) => ({ name: f.originalName, sizeBytes: f.sizeBytes, dataUrl: f.dataUrl })),
        }),
      });

      const res = await response.json();
      if (res.success) {
        setRefCode(res.referenceId || 'DA-2026');
        setShowSuccess(true);
      } else {
        alert(res.error || 'Submission error.');
      }
    } catch (err) {
      console.error(err);
      setShowSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setShowSuccess(false);
    setStep(1);
    setFiles([]);
    setFormData({
      treatment_plan: 'hollywood_smile',
      fullName: '',
      country: locale === 'tr' ? 'Türkiye' : 'United Kingdom',
      phone: '',
      timeline: ui.timeline1,
      includeHotel: true,
    });
  };

  return (
    <section className="w-full py-16 sm:py-24 bg-gradient-to-b from-[#F0F4F7]/70 via-white to-[#F0F4F7]/40 border-b border-slate-200 relative overflow-hidden" id="consultation-wizard">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#1b0d52]/5 via-teal-500/5 to-transparent blur-3xl pointer-events-none rounded-full" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-[0_20px_60px_-15px_rgba(27,13,82,0.1)] p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          {/* Top Decorative Hospital Gradient Bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-[#1b0d52] via-[#006972] to-emerald-400 absolute top-0 left-0 right-0" />

          {/* Form Header */}
          <div className="border-b border-slate-100 pb-8 mb-8 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/80 text-teal-900 text-xs font-bold shadow-xs">
                <span className="material-symbols-outlined text-[15px] text-teal-600">verified</span>
                <span>{ui.portalBadge}</span>
                <span className="text-slate-300">•</span>
                <span className="text-emerald-700 font-extrabold">{ui.responseNotice}</span>
              </div>

              <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 px-3.5 py-1 rounded-full text-xs font-mono text-slate-700 self-start sm:self-center shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="material-symbols-outlined text-sm text-slate-500">lock</span>
                <span>{ui.encryptionNotice}</span>
              </div>
            </div>

            <div>
              <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-black text-[#1b0d52] tracking-tight">
                {ui.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed max-w-2xl">
                {ui.desc}
              </p>
            </div>
          </div>

          {/* Enhanced Step Stepper */}
          <div className="mb-9">
            <div className="grid grid-cols-3 gap-2 sm:gap-4 relative">
              <div className="hidden sm:block absolute top-5 left-12 right-12 h-0.5 bg-slate-200 -z-0">
                <div
                  className="h-full bg-gradient-to-r from-[#1b0d52] to-[#006972] transition-all duration-300"
                  style={{ width: step === 1 ? '0%' : step === 2 ? '50%' : '100%' }}
                />
              </div>

              {/* Step 1 */}
              <button
                type="button"
                onClick={() => setStep(1)}
                className={`flex flex-col sm:items-center text-left sm:text-center p-3 rounded-2xl transition-all relative z-10 ${
                  step === 1
                    ? 'bg-gradient-to-b from-indigo-50/70 to-transparent border border-indigo-200/80 shadow-xs'
                    : 'hover:bg-slate-50'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs mb-2 transition-all shadow-xs ${
                    step > 1
                      ? 'bg-emerald-600 text-white shadow-emerald-500/20'
                      : step === 1
                      ? 'bg-gradient-to-tr from-[#1b0d52] to-[#006972] text-white ring-4 ring-[#1b0d52]/15 scale-105'
                      : 'bg-slate-100 text-slate-400'
                  }`}
                >
                  {step > 1 ? <span className="material-symbols-outlined text-sm font-bold">check</span> : '1'}
                </div>
                <span className={`text-xs font-bold ${step === 1 ? 'text-[#1b0d52]' : 'text-slate-600'}`}>
                  {ui.step1Title}
                </span>
                <span className="text-[10px] text-slate-600 hidden sm:inline mt-0.5">
                  {ui.step1Sub}
                </span>
              </button>

              {/* Step 2 */}
              <button
                type="button"
                onClick={() => {
                  if (step >= 2) setStep(2);
                }}
                className={`flex flex-col sm:items-center text-left sm:text-center p-3 rounded-2xl transition-all relative z-10 ${
                  step === 2
                    ? 'bg-gradient-to-b from-indigo-50/70 to-transparent border border-indigo-200/80 shadow-xs'
                    : 'hover:bg-slate-50'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs mb-2 transition-all shadow-xs ${
                    step > 2
                      ? 'bg-emerald-600 text-white shadow-emerald-500/20'
                      : step === 2
                      ? 'bg-gradient-to-tr from-[#1b0d52] to-[#006972] text-white ring-4 ring-[#1b0d52]/15 scale-105'
                      : 'bg-slate-100 text-slate-400'
                  }`}
                >
                  {step > 2 ? <span className="material-symbols-outlined text-sm font-bold">check</span> : '2'}
                </div>
                <span className={`text-xs font-bold ${step === 2 ? 'text-[#1b0d52]' : 'text-slate-600'}`}>
                  {ui.step2Title}
                </span>
                <span className="text-[10px] text-slate-600 hidden sm:inline mt-0.5">
                  {ui.step2Sub}
                </span>
              </button>

              {/* Step 3 */}
              <button
                type="button"
                onClick={() => {
                  if (step >= 3) setStep(3);
                }}
                className={`flex flex-col sm:items-center text-left sm:text-center p-3 rounded-2xl transition-all relative z-10 ${
                  step === 3
                    ? 'bg-gradient-to-b from-indigo-50/70 to-transparent border border-indigo-200/80 shadow-xs'
                    : 'hover:bg-slate-50'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs mb-2 transition-all shadow-xs ${
                    step === 3
                      ? 'bg-gradient-to-tr from-[#1b0d52] to-[#006972] text-white ring-4 ring-[#1b0d52]/15 scale-105'
                      : 'bg-slate-100 text-slate-400'
                  }`}
                >
                  3
                </div>
                <span className={`text-xs font-bold ${step === 3 ? 'text-[#1b0d52]' : 'text-slate-600'}`}>
                  {ui.step3Title}
                </span>
                <span className="text-[10px] text-slate-600 hidden sm:inline mt-0.5">
                  {ui.step3Sub}
                </span>
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {/* STEP 1: TREATMENT SELECTION */}
            {step === 1 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {treatmentOptions.map((option) => {
                    const isSelected = formData.treatment_plan === option.id;
                    return (
                      <div
                        key={option.id}
                        onClick={() => setFormData({ ...formData, treatment_plan: option.id })}
                        className={`p-5 rounded-2xl border-2 cursor-pointer transition-all duration-200 relative flex flex-col justify-between group ${
                          isSelected
                            ? 'border-[#1b0d52] bg-gradient-to-br from-[#1b0d52]/[0.03] via-white to-teal-500/[0.04] shadow-md shadow-[#1b0d52]/10 ring-2 ring-[#1b0d52]/15 -translate-y-0.5'
                            : 'border-slate-200/90 bg-white hover:border-slate-300 hover:shadow-sm hover:-translate-y-0.5'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-3">
                            <div className="flex items-center gap-2.5">
                              <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                                isSelected ? 'bg-[#1b0d52] text-teal-300 shadow-sm' : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'
                              }`}>
                                <span className="material-symbols-outlined text-[20px]">{option.icon}</span>
                              </div>
                              <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md border ${option.badgeColor}`}>
                                {option.badge}
                              </span>
                            </div>

                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                              isSelected ? 'border-[#1b0d52] bg-[#1b0d52]' : 'border-slate-300 bg-white'
                            }`}>
                              {isSelected && <span className="w-2 h-2 rounded-full bg-teal-300" />}
                            </div>
                          </div>

                          <h3 className={`font-headline text-base font-extrabold tracking-tight transition-colors ${
                            isSelected ? 'text-[#1b0d52]' : 'text-slate-900 group-hover:text-[#1b0d52]'
                          }`}>
                            {option.title}
                          </h3>

                          <p className="text-xs text-slate-600 leading-relaxed mt-1.5 font-normal">
                            {option.desc}
                          </p>
                        </div>

                        <div className="pt-3 mt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-[#006972]">
                          <span className="material-symbols-outlined text-[15px] text-teal-600">verified</span>
                          <span>{option.highlight}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Step 1 Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
                  <div className="text-xs text-slate-600 flex items-center gap-1.5 font-medium">
                    <span className="material-symbols-outlined text-sm text-teal-600">info</span>
                    <span>{ui.unsureNotice}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-xs font-extrabold uppercase tracking-wider bg-gradient-to-r from-[#211164] via-[#2d1980] to-[#006972] text-white hover:opacity-95 shadow-md shadow-[#211164]/20 hover:shadow-lg transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-100 shrink-0"
                  >
                    <span>{ui.nextStep2}</span>
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: PATIENT & CONTACT INFO */}
            {step === 2 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                      <span>{ui.fullNameLabel}</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={ui.fullNamePlaceholder}
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:border-[#1b0d52] focus:ring-2 focus:ring-[#1b0d52]/10 transition-all bg-[#FAFBFC]"
                    />
                  </div>

                  {/* Phone / WhatsApp */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                      <span>{ui.phoneLabel}</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder={ui.phonePlaceholder}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:border-[#1b0d52] focus:ring-2 focus:ring-[#1b0d52]/10 transition-all bg-[#FAFBFC]"
                    />
                  </div>

                  {/* Country */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 block">
                      {ui.countryLabel}
                    </label>
                    <input
                      type="text"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:border-[#1b0d52] focus:ring-2 focus:ring-[#1b0d52]/10 transition-all bg-[#FAFBFC]"
                    />
                  </div>

                  {/* Timeline Selection */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 block">
                      {ui.timelineLabel}
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:border-[#1b0d52] focus:ring-2 focus:ring-[#1b0d52]/10 transition-all bg-[#FAFBFC]"
                    >
                      <option value={ui.timeline1}>{ui.timeline1}</option>
                      <option value={ui.timeline2}>{ui.timeline2}</option>
                      <option value={ui.timeline3}>{ui.timeline3}</option>
                      <option value={ui.timeline4}>{ui.timeline4}</option>
                    </select>
                  </div>
                </div>

                {/* Step 2 Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:text-[#1b0d52] hover:bg-slate-100 transition-colors flex items-center gap-1.5"
                  >
                    <span className="material-symbols-outlined text-base">arrow_back</span>
                    <span>{ui.backBtn}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      if (!formData.fullName.trim() || !formData.phone.trim()) {
                        alert(ui.validationAlert);
                        return;
                      }
                      setStep(3);
                    }}
                    className="px-8 py-3.5 rounded-xl text-xs font-extrabold uppercase tracking-wider bg-gradient-to-r from-[#211164] via-[#2d1980] to-[#006972] text-white hover:opacity-95 shadow-md shadow-[#211164]/20 hover:shadow-lg transition-all flex items-center gap-2 hover:scale-[1.02] active:scale-100"
                  >
                    <span>{ui.nextStep3}</span>
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: FILE UPLOAD & TRANSMISSION */}
            {step === 3 && (
              <div className="space-y-6">
                <label className="relative border-2 border-dashed border-teal-300/80 rounded-2xl p-8 sm:p-10 text-center bg-gradient-to-b from-teal-50/30 to-white hover:border-[#1b0d52] transition-all cursor-pointer block group shadow-xs">
                  <input
                    type="file"
                    multiple
                    accept="image/*,.pdf,.dcm"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-2xl bg-teal-50 border border-teal-200 text-teal-700 flex items-center justify-center mb-3 shadow-xs group-hover:scale-110 group-hover:bg-[#1b0d52] group-hover:text-teal-300 transition-all">
                      <span className="material-symbols-outlined text-3xl">cloud_upload</span>
                    </div>
                    <span className="font-headline text-sm sm:text-base font-extrabold text-[#1b0d52] tracking-tight">
                      {ui.dropTitle}
                    </span>
                    <span className="text-xs text-slate-500 mt-1 max-w-md">
                      {ui.dropDesc}
                    </span>
                    <span className="inline-flex items-center gap-1.5 mt-3 px-3 py-1 rounded-full bg-white border border-slate-200 text-[11px] font-semibold text-slate-600 shadow-2xs">
                      <span className="material-symbols-outlined text-sm text-teal-600">verified</span>
                      <span>{ui.dropOptional}</span>
                    </span>
                  </div>
                </label>

                {isCompressing && (
                  <div className="p-3 bg-teal-50 border border-teal-200 rounded-xl text-xs text-teal-900 font-semibold flex items-center gap-2 animate-pulse">
                    <span className="material-symbols-outlined text-base animate-spin">sync</span>
                    <span>{ui.optimizingText}</span>
                  </div>
                )}

                {/* Uploaded Files Chips */}
                {files.length > 0 && (
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-slate-700 block">{ui.uploadedFilesLabel} ({files.length}):</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {files.map((file, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between p-3 rounded-xl border border-emerald-300 bg-emerald-50/70 text-emerald-950 text-xs shadow-2xs"
                        >
                          <div className="flex items-center gap-2 overflow-hidden">
                            <span className="material-symbols-outlined text-emerald-700 text-base shrink-0">draft</span>
                            <span className="font-mono font-semibold truncate">{file.originalName}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFile(idx)}
                            className="text-rose-600 hover:text-rose-800 font-bold ml-2 shrink-0 hover:underline"
                          >
                            {ui.removeFile}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Hotel & VIP Vito Inclusion Checkbox */}
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-teal-50/60 via-indigo-50/40 to-slate-50 border border-teal-200/80 flex items-start gap-3.5">
                  <input
                    type="checkbox"
                    id="hotel-toggle"
                    checked={formData.includeHotel}
                    onChange={(e) => setFormData({ ...formData, includeHotel: e.target.checked })}
                    className="w-5 h-5 mt-0.5 rounded text-[#1b0d52] focus:ring-0 cursor-pointer accent-[#1b0d52]"
                  />
                  <label htmlFor="hotel-toggle" className="cursor-pointer space-y-1">
                    <span className="font-headline text-xs sm:text-sm font-extrabold text-[#1b0d52] block">
                      {ui.hotelInclusionTitle}
                    </span>
                    <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed font-normal">
                      {ui.hotelInclusionDesc}
                    </p>
                  </label>
                </div>

                {/* GDPR Medical Legal Disclaimer */}
                <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70 text-[11px] text-slate-600 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-slate-800">
                    <span className="material-symbols-outlined text-teal-600 text-sm">shield</span>
                    <span>{ui.gdprTitle}</span>
                  </div>
                  <p className="leading-relaxed">
                    {ui.gdprDesc}
                  </p>
                </div>

                {/* Step 3 Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:text-[#1b0d52] hover:bg-slate-100 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span className="material-symbols-outlined text-base">arrow_back</span>
                    <span>{ui.backBtn}</span>
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-10 py-4 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider bg-gradient-to-r from-emerald-600 via-teal-700 to-[#1b0d52] text-white hover:opacity-95 shadow-lg shadow-emerald-700/25 transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-100 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="material-symbols-outlined text-base animate-spin">sync</span>
                        <span>{ui.submittingBtn}</span>
                      </>
                    ) : (
                      <>
                        <span className="material-symbols-outlined text-base text-teal-300">send</span>
                        <span>{ui.submitBtn}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </form>

          {/* Alternative Direct Inquiry Strip */}
          <div className="mt-8 pt-6 border-t border-slate-100 text-center">
            <span className="text-xs text-slate-500 font-medium">{ui.altText} </span>
            <Link
              href="/contact"
              className="text-xs font-bold text-[#006972] hover:text-[#211164] hover:underline inline-flex items-center gap-1 ml-1"
            >
              <span className="material-symbols-outlined text-sm">support_agent</span>
              <span>{ui.altLink}</span>
            </Link>
          </div>

          {/* SUCCESS CONFIRMATION OVERLAY */}
          {showSuccess && (
            <div className="absolute inset-0 z-50 bg-white/98 backdrop-blur-md p-8 sm:p-12 flex flex-col items-center justify-center text-center animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-3xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mb-4 shadow-md shadow-emerald-500/10">
                <span className="material-symbols-outlined text-4xl">check_circle</span>
              </div>
              
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-700 font-extrabold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 mb-2">
                {ui.successBadge}{refCode}
              </span>
              
              <h3 className="font-headline text-2xl sm:text-3xl font-black text-[#1b0d52] mb-3">
                {ui.successTitle}
              </h3>
              
              <p className="text-xs sm:text-sm text-slate-600 max-w-lg mb-8 leading-relaxed">
                {ui.successGreeting} <strong className="text-[#1b0d52] font-bold">{formData.fullName || 'Patient'}</strong>. {ui.successMsg}
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={`https://wa.me/905521617377?text=Hello,%20my%20reference%20code%20is%20${refCode}.%20I%20just%20submitted%20my%20records.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-emerald-600 hover:bg-emerald-700 text-white shadow-md flex items-center gap-2 transition-all"
                >
                  <span className="material-symbols-outlined text-base">chat</span>
                  <span>{ui.successWaBtn}</span>
                </a>

                <button
                  type="button"
                  onClick={resetForm}
                  className="px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                >
                  {ui.successResetBtn}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
