'use client';

import React from 'react';
import { useLocale } from 'next-intl';
import { Link } from '@/navigation';

export default function AboutPage() {
  const locale = useLocale();

  const data = {
    en: {
      breadcrumbHome: 'Home',
      breadcrumbAbout: 'About Us & Medical Faculty',
      badge: 'Republic of Turkey Ministry of Health & USHAŞ Authorized Center',
      heroTitle: 'Where World-Class Surgery Meets Master Ceramist Artistry',
      heroDesc: 'Dent Aktif International Oral & Dental Hospital is a state-authorized surgical centre in Istanbul, dedicated to international patients seeking life-changing aesthetic and restorative smile rehabilitation.',
      licTitle: 'Authorized by the Republic of Turkey',
      licBadge: 'Official State Accreditations & Licensing',
      certNo: 'Health Tourism Certificate No: 2026034015610080000425805',
      acc1Title: 'Republic of Turkey Ministry of Health',
      acc1Sub: 'International Health Tourism Authorized Provider',
      acc1Cert: 'Licence No: 2026034015610080000425805',
      acc2Title: 'HealthTürkiye & USHAŞ',
      acc2Sub: 'State Agency for International Healthcare Services',
      acc2Cert: 'Accreditation Framework Decree #3359',
      gdprNotice: 'Statutory Medical Malpractice Insurance & EU GDPR Protected',
      reqFileBtn: 'Request Hospital Accreditation File',
      milestone1Label: 'Completed Smiles',
      milestone1Desc: 'Treated patients from 48+ countries with zero compromise on clinical safety.',
      milestone2Label: 'CAD/CAM Precision',
      milestone2Desc: 'In-house robotic milling laboratory with German and Swiss sintering furnaces.',
      milestone3Label: 'Express Protocol',
      milestone3Desc: 'From initial 3D optical scan to permanent cementation in just 5 calendar days.',
      milestone4Label: 'Original Materials',
      milestone4Desc: 'Certified Swiss Straumann® implants and authentic Ivoclar Vivadent® porcelain.',
      campusBadge: 'The Dental Campus Difference',
      campusTitle: 'Eliminating Intermediaries With Our Own Master Ceramists',
      campusP1: 'Most dental clinics outsource prosthetic fabrication to commercial third parties, causing color discrepancies and week-long delays. At Dent Aktif, our master ceramicists sit right next to our surgical operatories.',
      campusP2: 'Every smile is crafted under digital microscopes with individual shade layering, customized translucency gradients, and micro-occlusal balancing.',
      tech1: '✦ 5-Axis CAD/CAM Milling',
      tech2: '✦ 3D CBCT Volumetric Scanners',
      tech3: '✦ German Sintering Furnaces',
      conciergeTitle: 'Full Logistics & Concierge Hospitality',
      c1Title: 'Chauffeured Mercedes-Benz Transfers',
      c1Desc: 'Private VIP transport between Istanbul Airport (IST/SAW), your 5-star hotel, and our surgical suites.',
      c2Title: '5-Star Partner Hotel Accommodation',
      c2Desc: 'Luxury suite accommodation in Levent, Istanbul’s financial and diplomatic quarter.',
      c3Title: 'Multilingual Patient Coordinators',
      c3Desc: 'Dedicated coordinators fluent in English, German, French, and Russian assisting every clinical visit.',
      ctaBtn: 'Plan Your 5-Day Treatment in Istanbul',
    },
    tr: {
      breadcrumbHome: 'Ana Sayfa',
      breadcrumbAbout: 'Hakkımızda & Hekim Kadromuz',
      badge: 'T.C. Sağlık Bakanlığı & USHAŞ Yetkili Uluslararası Sağlık Turizmi Merkezi',
      heroTitle: 'Dünya Standartlarında Cerrahi ve Master Seramist Ustalığının Buluştuğu Yer',
      heroDesc: 'Dent Aktif Uluslararası Ağız ve Diş Sağlığı Merkezi, estetik ve cerrahi gülüş rehabilitasyonunda en yüksek standartları sunmak üzere yetkilendirilmiş modern bir sağlık kuruluşudur.',
      licTitle: 'Türkiye Cumhuriyeti Sağlık Bakanlığı Tarafından Yetkilendirilmiştir',
      licBadge: 'Resmi Devlet Ruhsatı & Uluslararası Akreditasyon',
      certNo: 'Sağlık Turizmi Yetki Belgesi No: 2026034015610080000425805',
      acc1Title: 'T.C. Sağlık Bakanlığı',
      acc1Sub: 'Uluslararası Sağlık Turizmi Yetkili Sağlık Tesisi',
      acc1Cert: 'Ruhsat No: 2026034015610080000425805',
      acc2Title: 'HealthTürkiye & USHAŞ',
      acc2Sub: 'Uluslararası Sağlık Hizmetleri Kamu Koordinasyonu',
      acc2Cert: '3359 Sayılı Kanun Çerçevesinde Akredite',
      gdprNotice: 'Zorunlu Mesleki Mali Sorumluluk Sigortası & KVKK Güvencesi',
      reqFileBtn: 'Hastane Akreditasyon Dosyasını İnceleyin',
      milestone1Label: 'Başarılı Gülüş',
      milestone1Desc: '48\'den fazla ülkeden gelen hastalarımıza tavizsiz klinik güvenlik ve konfor.',
      milestone2Label: 'CAD/CAM Hassasiyeti',
      milestone2Desc: 'Alman ve İsviçre fırınlarıyla donatılmış bünye içi robotik seramik laboratuvarı.',
      milestone3Label: 'Ekspres Protokol',
      milestone3Desc: 'İlk 3D ağız içi taramadan daimi yapıştırmaya kadar sadece 5 takvim günü.',
      milestone4Label: 'Orijinal Malzeme',
      milestone4Desc: 'Sertifikalı İsviçre Straumann® implantları ve orijinal Ivoclar Vivadent® porselenler.',
      campusBadge: 'Entegre Sağlık Kampüsü Farkı',
      campusTitle: 'Aracıları Ortadan Kaldıran Kendi Master Seramistlerimiz',
      campusP1: 'Çoğu diş kliniği protez üretimini fason laboratuvarlara yönlendirerek renk uyumsuzluklarına ve gecikmelere sebep olur. Dent Aktif\'te seramistlerimiz ameliyathanelerimizin hemen yanında çalışır.',
      campusP2: 'Her gülüş dijital mikroskoplar altında, kişiye özel renk katmanlaması ve doğal ışık geçirgenliği ile işlenir.',
      tech1: '✦ 5 Eksenli CAD/CAM Kazıma',
      tech2: '✦ 3D CBCT Hacimsel Tomografi',
      tech3: '✦ Alman Sinterleme Fırınları',
      conciergeTitle: 'Eksiksiz VIP Lojistik & Konsiyerj Hizmeti',
      c1Title: 'Özel Şoförlü Mercedes-Benz Transferleri',
      c1Desc: 'Havalimanı (IST/SAW), 5 yıldızlı oteliniz ve cerrahi merkezimiz arasında VIP araçlar.',
      c2Title: '5 Yıldızlı Partner Otel Konaklaması',
      c2Desc: 'İstanbul’un merkezi Levent hattında konforlu ve huzurlu lüks suit konaklama.',
      c3Title: 'Çok Dilli Hasta Koordinatörleri',
      c3Desc: 'İngilizce, Almanca, Fransızca, Rusça ve Arapça dillerinde 7/24 rehberlik eden profesyonel ekip.',
      ctaBtn: 'İstanbul\'daki 5 Günlük Tedavinizi Planlayın',
    },
    de: {
      breadcrumbHome: 'Startseite',
      breadcrumbAbout: 'Über uns & Ärzteteam',
      badge: 'Vom türkischen Gesundheitsministerium & USHAŞ autorisiertes Zentrum',
      heroTitle: 'Wo Weltklasse-Chirurgie auf Meister-Keramik trifft',
      heroDesc: 'Das Dent Aktif Hospital in Istanbul ist ein staatlich autorisiertes chirurgisches Zentrum für internationale Patienten auf der Suche nach nachhaltiger Lächeln-Rehabilitation.',
      licTitle: 'Autorisiert durch die Republik Türkei',
      licBadge: 'Offizielle staatliche Akkreditierung',
      certNo: 'Gesundheitstourismus-Zertifikat Nr.: 2026034015610080000425805',
      acc1Title: 'Gesundheitsministerium der Republik Türkei',
      acc1Sub: 'Autorisierter Anbieter für Gesundheitstourismus',
      acc1Cert: 'Lizenz-Nr.: 2026034015610080000425805',
      acc2Title: 'HealthTürkiye & USHAŞ',
      acc2Sub: 'Staatliche Agentur für internationale Gesundheitsdienste',
      acc2Cert: 'Akkreditierungsrahmen Erlass #3359',
      gdprNotice: 'Berufshaftpflichtversicherung & DSGVO geschützt',
      reqFileBtn: 'Akkreditierungsakte anfordern',
      milestone1Label: 'Vollendete Lächeln',
      milestone1Desc: 'Behandelte Patienten aus über 48 Ländern mit kompromissloser klinischer Sicherheit.',
      milestone2Label: 'CAD/CAM-Präzision',
      milestone2Desc: 'Hauseigenes Roboter-Fräslabor mit deutschen und Schweizer Sinteröfen.',
      milestone3Label: 'Express-Protokoll',
      milestone3Desc: 'Vom ersten 3D-Scan bis zum Einsetzen in nur 5 Kalendertagen.',
      milestone4Label: 'Originalmaterialien',
      milestone4Desc: 'Zertifizierte Schweizer Straumann® Implantate und originale Ivoclar Keramik.',
      campusBadge: 'Der Campus-Vorteil',
      campusTitle: 'Ohne Zwischenhändler dank eigener Keramikmeister',
      campusP1: 'Die meisten Kliniken lagern die Prothetik aus. Bei Dent Aktif arbeiten die Meisterkeramiker direkt neben den Behandlungsräumen.',
      campusP2: 'Jedes Lächeln wird unter dem Digitalmikroskop mit individueller Farbschichtung und natürlicher Transluzenz gefertigt.',
      tech1: '✦ 5-Achs CAD/CAM Fräsen',
      tech2: '✦ 3D DVT Volumentomographie',
      tech3: '✦ Deutsche Sinteröfen',
      conciergeTitle: 'Vollständige Logistik & Concierge-Service',
      c1Title: 'Mercedes-Benz Chauffeur-Transfers',
      c1Desc: 'Privater VIP-Transport zwischen Flughafen (IST/SAW), Hotel und Klinik.',
      c2Title: '5-Sterne-Partnerhotel-Unterkunft',
      c2Desc: 'Luxusunterkunft im Geschäfts- und Diplomatenviertel Levent.',
      c3Title: 'Mehrsprachige Patientenkoordinatoren',
      c3Desc: 'Fließend in Deutsch, Englisch, Französisch und Russisch.',
      ctaBtn: 'Ihre 5-Tage-Behandlung in Istanbul planen',
    },
    ru: {
      breadcrumbHome: 'Главная',
      breadcrumbAbout: 'О клинике и врачах',
      badge: 'Авторизованный центр Минздрава Турции и USHAŞ',
      heroTitle: 'Где хирургия мирового класса соединяется с искусством керамики',
      heroDesc: 'Dent Aktif International Hospital — это авторизованный хирургический центр в Стамбуле для пациентов, стремящихся к идеальной эстетике улыбки.',
      licTitle: 'Лицензировано Министерством здравоохранения Турции',
      licBadge: 'Официальная государственная аккредитация',
      certNo: 'Сертификат медтуризма №: 2026034015610080000425805',
      acc1Title: 'Министерство здравоохранения Турции',
      acc1Sub: 'Авторизованный провайдер медицинского туризма',
      acc1Cert: 'Лицензия №: 2026034015610080000425805',
      acc2Title: 'HealthTürkiye и USHAŞ',
      acc2Sub: 'Государственное агентство международных медуслуг',
      acc2Cert: 'Указ об аккредитации № 3359',
      gdprNotice: 'Медицинское страхование и защита персональных данных',
      reqFileBtn: 'Запросить документы аккредитации',
      milestone1Label: 'Идеальных улыбок',
      milestone1Desc: 'Пациенты из более чем 48 стран без компромиссов в вопросах безопасности.',
      milestone2Label: 'CAD/CAM точность',
      milestone2Desc: 'Собственная роботизированная лаборатория с немецкими печами.',
      milestone3Label: 'Экспресс-протокол',
      milestone3Desc: 'От 3D-сканирования до постоянной фиксации всего за 5 календарных дней.',
      milestone4Label: 'Оригинальные материалы',
      milestone4Desc: 'Сертифицированные швейцарские импланты Straumann® и керамика Ivoclar.',
      campusBadge: 'Преимущество собственного кампуса',
      campusTitle: 'Без посредников благодаря штатным мастерам-керамистам',
      campusP1: 'Большинство клиник передают коронки сторонним лабораториям. В Dent Aktif мастера работают рядом с операционными.',
      campusP2: 'Каждая улыбка создается под цифровым микроскопом с послойным нанесением цвета и живым блеском.',
      tech1: '✦ 5-осевое CAD/CAM фрезерование',
      tech2: '✦ 3D КЛКТ томографы',
      tech3: '✦ Немецкие печи синтеризации',
      conciergeTitle: 'Полная логистика и консьерж-сервис',
      c1Title: 'Трансферы на Mercedes-Benz с водителем',
      c1Desc: 'Индивидуальные поездки из аэропортов Стамбула в отель и клинику.',
      c2Title: 'Проживание в 5-звездочном отеле',
      c2Desc: 'Премиум-номера в престижном районе Левент.',
      c3Title: 'Персональные русскоязычные кураторы',
      c3Desc: 'Сопровождение на всех этапах лечения 24/7.',
      ctaBtn: 'Спланировать 5-дневную поездку в Стамбул',
    },
    fr: {
      breadcrumbHome: 'Accueil',
      breadcrumbAbout: 'À Propos & Corps Médical',
      badge: 'Centre Agréé par le Ministère de la Santé de Turquie & USHAŞ',
      heroTitle: 'Quand la Chirurgie d’Élite Rencontre l’Art du Maître Céramiste',
      heroDesc: 'Dent Aktif International Hospital est un centre chirurgical agréé à Istanbul, dédié aux patients internationaux souhaitant une réhabilitation esthétique de haut niveau.',
      licTitle: 'Agréé par la République de Turquie',
      licBadge: 'Accréditations & Licences d’État',
      certNo: 'Certificat de Tourisme Médical N° : 2026034015610080000425805',
      acc1Title: 'Ministère de la Santé de Turquie',
      acc1Sub: 'Fournisseur Agréé de Tourisme Médical International',
      acc1Cert: 'Licence N° : 2026034015610080000425805',
      acc2Title: 'HealthTürkiye & USHAŞ',
      acc2Sub: 'Agence d’État des Services Médicaux Internationaux',
      acc2Cert: 'Cadre d’Accréditation Décret #3359',
      gdprNotice: 'Assurance Responsabilité Médicale & Conformité RGPD',
      reqFileBtn: 'Demander le Dossier d’Accréditation',
      milestone1Label: 'Sourires Transformés',
      milestone1Desc: 'Des patients venus de plus de 48 pays avec une sécurité clinique absolue.',
      milestone2Label: 'Précision CAD/CAM',
      milestone2Desc: 'Laboratoire robotisé sur place avec fours de sintérisation suisses et allemands.',
      milestone3Label: 'Protocole Express',
      milestone3Desc: 'Du scanner optique 3D au collage final en seulement 5 jours calendaires.',
      milestone4Label: 'Matériaux d’Origine',
      milestone4Desc: 'Implants certifiés Straumann® et vitrocéramique Ivoclar Vivadent®.',
      campusBadge: 'La Différence d’un Campus Hospitalier',
      campusTitle: 'Zéro Intermédiaire Grâce à Nos Maîtres Céramistes Intégrés',
      campusP1: 'La majorité des cliniques sous-traitent les prothèses. Chez Dent Aktif, nos maîtres céramistes exercent aux côtés des blocs chirurgicaux.',
      campusP2: 'Chaque sourire est sculpté sous microscope numérique avec une stratification fine des nuances et de la translucidité.',
      tech1: '✦ Usinage CAD/CAM 5 Axes',
      tech2: '✦ Scanners Volumétriques CBCT 3D',
      tech3: '✦ Fours de Sintérisation Allemands',
      conciergeTitle: 'Logistique Complète & Service Conciergerie',
      c1Title: 'Chauffeur Privé Mercedes-Benz',
      c1Desc: 'Déplacements VIP entre l’aéroport d’Istanbul (IST/SAW), votre hôtel 5 étoiles et la clinique.',
      c2Title: 'Hébergement en Hôtel Partenaire 5 Étoiles',
      c2Desc: 'Chambre de luxe dans le quartier des affaires de Levent.',
      c3Title: 'Coordinateurs Francophones Dédiés',
      c3Desc: 'Accompagnement attentif lors de chaque consultation clinique.',
      ctaBtn: 'Organiser Votre Séjour de 5 Jours à Istanbul',
    },
    ar: {
      breadcrumbHome: 'الرئيسية',
      breadcrumbAbout: 'من نحن والطاقم الطبي',
      badge: 'مركز مرخص من وزارة الصحة التركية ومؤسسة USHAŞ للسياحة العلاجية',
      heroTitle: 'حيث تلتقي الجراحة العالمية ببراعة فنيي الخزف المعتمدين',
      heroDesc: 'مستشفى دنت أكتيف الدولي لجراحة وطب الأسنان في إسطنبول هو صرح طبي معتمد رسمياً لرعاية المرضى الدوليين الراغبين في تجديد ابتساماتهم بأعلى المعايير.',
      licTitle: 'مرخص رسميًا من الجمهورية التركية',
      licBadge: 'الاعتمادات والتراخيص الحكومية الرسمية',
      certNo: 'شهادة ترخيص السياحة الصحية رقم: 2026034015610080000425805',
      acc1Title: 'وزارة الصحة في الجمهورية التركية',
      acc1Sub: 'منشأة صحية معتمدة للسياحة الصحية الدولية',
      acc1Cert: 'رقم الترخيص: 2026034015610080000425805',
      acc2Title: 'HealthTürkiye ومؤسسة USHAŞ',
      acc2Sub: 'الهيئة الحكومية لتنسيق الخدمات الصحية الدولية',
      acc2Cert: 'معتمد بموجب المرسوم القانوني رقم 3359',
      gdprNotice: 'تأمين كامل ضد الأخطاء الطبية وحماية خصوصية البيانات الصحية',
      reqFileBtn: 'طلب ملف اعتمادات المستشفى الرسمي',
      milestone1Label: 'ابتسامة مكتملة',
      milestone1Desc: 'علاج مرضى من أكثر من 48 دولة مع التزام مطلق بالأمان السريري.',
      milestone2Label: 'دقة CAD/CAM الروبوتية',
      milestone2Desc: 'مختبر نحت سيراميك داخلي مجهز بأفران تلبيد ألمانية وسويسرية.',
      milestone3Label: 'بروتوكول سريع ومكثف',
      milestone3Desc: 'من أول مسح ضوئي 3D وحتى التثبيت الدائم خلال 5 أيام فقط.',
      milestone4Label: 'مواد أصلية معتمدة',
      milestone4Desc: 'زرعات Straumann® السويسرية وخزف Ivoclar Vivadent® الأصلي.',
      campusBadge: 'ميزة المستشفى والمجمع المتكامل',
      campusTitle: 'بدون وسطاء بفضل خبراء الخزف المتواجدين داخل المستشفى',
      campusP1: 'ترسل معظم العيادات التركيبات لمختبرات تجارية خارجية مما يسبب تأخيرات واختلافات لونية. في دنت أكتيف، يعمل خبراؤنا بجانب غرف العمليات مباشرة.',
      campusP2: 'تُصنع كل ابتسامة تحت المجهر الرقمي مع تدرج لوني يحاكي الطبيعة وانعكاس ضوئي متوازن.',
      tech1: '✦ نحت CAD/CAM خماسي المحاور',
      tech2: '✦ تصوير CBCT الحجمي ثلاثي الأبعاد',
      tech3: '✦ أفران تلبيد حرارية ألمانية متطورة',
      conciergeTitle: 'لوجستيات كاملة وخدمة كونسيرج فاخرة',
      c1Title: 'تنقلات خاصة بسيارات مرسيدس مع سائق',
      c1Desc: 'توصيل VIP خاص بين مطارات إسطنبول (IST/SAW) وفندق 5 نجوم والمستشفى.',
      c2Title: 'إقامة بفندق شريك فاخر 5 نجوم',
      c2Desc: 'أجنحة إقامة راقية في قلب حي ليفنت الدبلوماسي والتجاري بإسطنبول.',
      c3Title: 'منسقون يتحدثون اللغة العربية بطلاقة',
      c3Desc: 'مرافقة واهتمام شخصي مستمر طوال جميع جلسات العلاج والاستشارات.',
      ctaBtn: 'خطط لرحلتك العلاجية لـ 5 أيام في إسطنبول',
    },
  }[locale] || {
    breadcrumbHome: 'Home',
    breadcrumbAbout: 'About Us & Medical Faculty',
    badge: 'Republic of Turkey Ministry of Health & USHAŞ Authorized Center',
    heroTitle: 'Where World-Class Surgery Meets Master Ceramist Artistry',
    heroDesc: 'Dent Aktif International Oral & Dental Hospital is a state-authorized surgical centre in Istanbul, dedicated to international patients seeking life-changing aesthetic and restorative smile rehabilitation.',
    licTitle: 'Authorized by the Republic of Turkey',
    licBadge: 'Official State Accreditations & Licensing',
    certNo: 'Health Tourism Certificate No: 2026034015610080000425805',
    acc1Title: 'Republic of Turkey Ministry of Health',
    acc1Sub: 'International Health Tourism Authorized Provider',
    acc1Cert: 'Licence No: 2026034015610080000425805',
    acc2Title: 'HealthTürkiye & USHAŞ',
    acc2Sub: 'State Agency for International Healthcare Services',
    acc2Cert: 'Accreditation Framework Decree #3359',
    gdprNotice: 'Statutory Medical Malpractice Insurance & EU GDPR Protected',
    reqFileBtn: 'Request Hospital Accreditation File',
    milestone1Label: 'Completed Smiles',
    milestone1Desc: 'Treated patients from 48+ countries with zero compromise on clinical safety.',
    milestone2Label: 'CAD/CAM Precision',
    milestone2Desc: 'In-house robotic milling laboratory with German and Swiss sintering furnaces.',
    milestone3Label: 'Express Protocol',
    milestone3Desc: 'From initial 3D optical scan to permanent cementation in just 5 calendar days.',
    milestone4Label: 'Original Materials',
    milestone4Desc: 'Certified Swiss Straumann® implants and authentic Ivoclar Vivadent® porcelain.',
    campusBadge: 'The Dental Campus Difference',
    campusTitle: 'Eliminating Intermediaries With Our Own Master Ceramists',
    campusP1: 'Most dental clinics outsource prosthetic fabrication to commercial third parties, causing color discrepancies and week-long delays. At Dent Aktif, our master ceramicists sit right next to our surgical operatories.',
    campusP2: 'Every smile is crafted under digital microscopes with individual shade layering, customized translucency gradients, and micro-occlusal balancing.',
    tech1: '✦ 5-Axis CAD/CAM Milling',
    tech2: '✦ 3D CBCT Volumetric Scanners',
    tech3: '✦ German Sintering Furnaces',
    conciergeTitle: 'Full Logistics & Concierge Hospitality',
    c1Title: 'Chauffeured Mercedes-Benz Transfers',
    c1Desc: 'Private VIP transport between Istanbul Airport (IST/SAW), your 5-star hotel, and our surgical suites.',
    c2Title: '5-Star Partner Hotel Accommodation',
    c2Desc: 'Luxury suite accommodation in Levent, Istanbul’s financial and diplomatic quarter.',
    c3Title: 'Multilingual Patient Coordinators',
    c3Desc: 'Dedicated coordinators fluent in English, German, French, and Russian assisting every clinical visit.',
    ctaBtn: 'Plan Your 5-Day Treatment in Istanbul',
  };

  const accreditations = [
    {
      title: data.acc1Title,
      subtitle: data.acc1Sub,
      cert: data.acc1Cert,
      logo: '/images/saglikBakanligi.webp',
      alt: 'Ministry of Health Turkey Emblem',
    },
    {
      title: data.acc2Title,
      subtitle: data.acc2Sub,
      cert: data.acc2Cert,
      logo: '/images/heart-of-health1-1logo.svg',
      alt: 'HealthTürkiye Official Logo',
    },
  ];

  const milestones = [
    { stat: '15,000+', label: data.milestone1Label, desc: data.milestone1Desc },
    { stat: '15-Micron', label: data.milestone2Label, desc: data.milestone2Desc },
    { stat: '5 Days', label: data.milestone3Label, desc: data.milestone3Desc },
    { stat: '100%', label: data.milestone4Label, desc: data.milestone4Desc },
  ];

  return (
    <div className="w-full min-h-screen bg-[#FAFBFC] text-slate-800 pb-20">
      {/* 1. Header & Breadcrumb Hero */}
      <section className="relative w-full bg-gradient-to-b from-[#1b0d52] via-[#211164] to-[#120733] text-white py-12 sm:py-20 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#2BA598_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-[#006972]/20 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 space-y-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-teal-300">
            <Link href="/" className="hover:underline">{data.breadcrumbHome}</Link>
            <span>/</span>
            <span className="text-white">{data.breadcrumbAbout}</span>
          </nav>

          <h1 className="font-headline text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-4xl">
            {data.heroTitle}
          </h1>

          <p className="text-sm sm:text-base text-slate-200 max-w-3xl leading-relaxed font-normal">
            {data.heroDesc}
          </p>
        </div>
      </section>

      {/* 2. Official Ministry of Health & USHAŞ Licensing Showcase Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 -mt-8 relative z-20 mb-16">
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-5">
            <div>
              <h2 className="font-headline text-xl sm:text-2xl font-black text-[#1b0d52]">
                {data.licTitle}
              </h2>
            </div>
            <span className="text-xs font-mono text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200 w-fit">
              {data.certNo}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {accreditations.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/90 hover:border-teal-400/50 transition-all flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left group"
              >
                <div className="w-16 h-16 rounded-2xl bg-white p-2 flex items-center justify-center shrink-0 shadow-sm border border-slate-200 group-hover:scale-105 transition-transform">
                  <img
                    src={item.logo}
                    alt={item.alt}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold text-teal-700 uppercase tracking-wider bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                    {locale === 'ar' ? 'اعتماد واعتراف رسمي' : locale === 'tr' ? 'Resmi Tanınırlık' : 'Official Recognition'}
                  </span>
                  <h3 className="font-headline font-bold text-sm sm:text-base text-[#1b0d52]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-snug">
                    {item.subtitle}
                  </p>
                  <div className="text-[11px] font-mono text-emerald-700 font-bold pt-0.5">
                    {item.cert}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#006972] text-sm">shield</span>
              <span>{data.gdprNotice}</span>
            </div>
            <Link
              href="/contact"
              className="text-[#006972] hover:text-[#1b0d52] font-bold inline-flex items-center gap-1 transition-colors"
            >
              <span>{data.reqFileBtn}</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Clinical Architecture & Key Numbers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {milestones.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 text-center space-y-2 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="font-headline text-3xl sm:text-4xl font-black text-[#1b0d52]">
                {item.stat}
              </div>
              <div className="font-bold text-xs sm:text-sm text-[#006972]">
                {item.label}
              </div>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Campus & In-House Laboratory Advantage */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <h2 className="font-headline text-2xl sm:text-4xl font-black text-[#1b0d52] leading-tight">
              {data.campusTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {data.campusP1}
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {data.campusP2}
            </p>

            <div className="pt-2 flex flex-wrap gap-2.5">
              <span className="px-3 py-1.5 rounded-xl bg-slate-100 text-xs font-semibold text-slate-700 border border-slate-200">
                {data.tech1}
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-slate-100 text-xs font-semibold text-slate-700 border border-slate-200">
                {data.tech2}
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-slate-100 text-xs font-semibold text-slate-700 border border-slate-200">
                {data.tech3}
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-5 shadow-lg">
            <h3 className="font-headline font-black text-lg text-[#1b0d52]">
              {data.conciergeTitle}
            </h3>
            <div className="space-y-3.5 text-xs text-slate-600">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#006972] text-xl shrink-0 mt-0.5">airport_shuttle</span>
                <div>
                  <strong className="text-slate-800 block font-bold">{data.c1Title}</strong>
                  <span>{data.c1Desc}</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#006972] text-xl shrink-0 mt-0.5">hotel</span>
                <div>
                  <strong className="text-slate-800 block font-bold">{data.c2Title}</strong>
                  <span>{data.c2Desc}</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#006972] text-xl shrink-0 mt-0.5">translate</span>
                <div>
                  <strong className="text-slate-800 block font-bold">{data.c3Title}</strong>
                  <span>{data.c3Desc}</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl text-xs sm:text-sm font-black uppercase tracking-wider bg-gradient-to-r from-[#211164] to-[#006972] text-white shadow-lg shadow-[#211164]/20 hover:scale-[1.01] transition-all"
              >
                <span>{data.ctaBtn}</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
