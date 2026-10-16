export interface DoctorsOverviewUi {
  badge: string;
  title: string;
  description: string;
  credentialSurgeons: string;
  credentialTech: string;
  credentialSmiles: string;
  clinicalFocus: string;
  fullBioBtn: string;
  bannerBadge: string;
  bannerTitle: string;
  bannerDesc: string;
  bannerBtnPlan: string;
  bannerBtnContact: string;
}

export interface DoctorDetailUi {
  breadcrumbHome: string;
  breadcrumbDoctors: string;
  experienceLabel: string;
  primaryCampus: string;
  languages: string;
  licensure: string;
  boardId: string;
  scheduleBtn: string;
  uploadScanBtn: string;
  proceduresBadge: string;
  proceduresTitle: string;
  proceduresDesc: string;
  timelineBadge: string;
  timelineTitle: string;
  certificationsBadge: string;
  certificationsTitle: string;
  membershipsBadge: string;
  membershipsTitle: string;
  philosophyBadge: string;
  philosophyTitle: string;
  faqBadge: string;
  faqTitle: string;
  otherDoctorsBadge: string;
  otherDoctorsTitle: string;
  viewProfile: string;
  customProtocol: string;
  professionalChronology: string;
  careerTimelineTitle: string;
  patientCareStandards: string;
  philosophyPrinciplesTitle: string;
  intlWarrantyTitle: string;
  intlWarrantyDesc: string;
  academicEducationTitle: string;
  certificationsAssocTitle: string;
  scientificMembershipsLabel: string;
  officialCertificationsLabel: string;
  faqSectionBadge: string;
  viewFullBioBtn: string;
}

export const DOCTORS_OVERVIEW_I18N: Record<string, DoctorsOverviewUi> = {
  en: {
    badge: 'Ministry of Health Licensed Medical Faculty • Bayrampaşa & Levent Hospital Campuses',
    title: 'Our Specialist Medical Faculty',
    description: 'Dent Aktif\'s permanent medical faculty combines international surgical excellence, advanced 3D digital precision, and compassionate patient care standards.',
    credentialSurgeons: 'Licensed Dental Surgeons & Specialists',
    credentialTech: 'In-House CAD/CAM & Morita 3D CBCT',
    credentialSmiles: '18,000+ Completed Smiles',
    clinicalFocus: 'Key Clinical Focus:',
    fullBioBtn: 'Full Biography & Protocols →',
    bannerBadge: 'Personalized Treatment & Free Digital Triage',
    bannerTitle: 'Unsure Which Specialist Is Right for Your Case?',
    bannerDesc: 'Share your existing dental X-ray or smile photos. Our clinical board will review your case within 24 hours and deliver a complimentary 3D digital treatment plan.',
    bannerBtnPlan: 'Upload X-Ray & Get Plan',
    bannerBtnContact: 'Contact Clinical Concierge',
  },
  tr: {
    badge: 'Sağlık Bakanlığı Lisanslı Uzman Hekim Kadrosu • Bayrampaşa & Levent Hastane Kampüsleri',
    title: 'Uzman Hekim Kadromuz',
    description: 'Dent Aktif\'in daimi medikal kadrosu; uluslararası cerrahi tecrübeyi, 3D dijital hassasiyeti ve hasta odaklı etik tedavi standartlarını bir araya getirir.',
    credentialSurgeons: 'Ruhsatlı Çene Cerrahları & Uzman Hekimler',
    credentialTech: 'Bünyemizde CAD/CAM & Morita 3D CBCT',
    credentialSmiles: '18.000+ Mutlu Gülüş',
    clinicalFocus: 'Temel Klinik Uzmanlıklar:',
    fullBioBtn: 'Özgeçmiş & Protokoller →',
    bannerBadge: 'Kişiye Özel Tedavi & Ücretsiz Dijital Triyaj',
    bannerTitle: 'Vakanız İçin Hangi Uzmanın Uygun Olduğundan Emin Değil misiniz?',
    bannerDesc: 'Mevcut diş röntgeninizi veya fotoğraflarınızı paylaşın. Hekim kurulumuz dosyanızı 24 saat içinde inceleyerek ücretsiz 3D tedavi planınızı hazırlasın.',
    bannerBtnPlan: 'Röntgen Yükle & Plan Al',
    bannerBtnContact: 'Hasta Danışmanıyla Görüşün',
  },
  de: {
    badge: 'Vom Gesundheitsministerium lizenzierte Fachärzte • Campus Levent & Bayrampaşa',
    title: 'Unser Fachärztliches Ärzteteam',
    description: 'Das permanente Ärzteteam von Dent Aktif vereint internationale chirurgische Exzellenz, hochpräzise 3D-Digitaltechnik und einfühlsame Patientenbetreuung.',
    credentialSurgeons: 'Zertifizierte Zahnchirurgen & Fachzahnärzte',
    credentialTech: 'Eigenes CAD/CAM & Morita 3D DVT',
    credentialSmiles: '18.000+ Vollendete Lächeln',
    clinicalFocus: 'Klinische Schwerpunkte:',
    fullBioBtn: 'Vollständige Biografie & Details →',
    bannerBadge: 'Individuelle Beratung & Kostenlose Fallprüfung',
    bannerTitle: 'Unsicher, welcher Spezialist für Sie der Richtige ist?',
    bannerDesc: 'Senden Sie uns Ihr Panoramaröntgenbild oder Fotos. Unser Ärzteteam prüft Ihren Fall innerhalb von 24 Stunden und erstellt einen kostenlosen 3D-Behandlungsplan.',
    bannerBtnPlan: 'Röntgenbild senden & Plan erhalten',
    bannerBtnContact: 'Klinik-Concierge kontaktieren',
  },
  ru: {
    badge: 'Лицензированный медицинский состав Минздрава • Кампусы Байрампаша и Левент',
    title: 'Наши Врачи-Специалисты',
    description: 'Постоянная врачебная коллегия Dent Aktif сочетает международный хирургический опыт, передовые 3D цифровые технологии и внимательное отношение к каждому пациенту.',
    credentialSurgeons: 'Дипломированные хирурги и стоматологи',
    credentialTech: 'Собственная CAD/CAM и КТ Morita 3D',
    credentialSmiles: '18 000+ Успешных улыбок',
    clinicalFocus: 'Ключевые направления:',
    fullBioBtn: 'Биография и протоколы →',
    bannerBadge: 'Персональный подход и бесплатная диагностика',
    bannerTitle: 'Не уверены, какой специалист нужен именно вам?',
    bannerDesc: 'Отправьте ваш снимок КТ или фото зубов. Наш консилиум врачей изучит случай в течение 24 часов и предоставит бесплатный 3D-план лечения.',
    bannerBtnPlan: 'Загрузить снимок и получить план',
    bannerBtnContact: 'Связаться с куратором клиники',
  },
  fr: {
    badge: 'Corps Médical Agréé par le Ministère de la Santé • Campus Levent & Bayrampaşa',
    title: 'Notre Équipe Médicale Spécialisée',
    description: 'Le corps médical permanent de Dent Aktif associe excellence chirurgicale internationale, précision numérique 3D et dévouement au confort des patients.',
    credentialSurgeons: 'Chirurgiens Dentistes Diplômés & Spécialistes',
    credentialTech: 'Laboratoire CAD/CAM & Scanner 3D Morita',
    credentialSmiles: '18 000+ Sourires Réalisés',
    clinicalFocus: 'Domaines d\'Expertise Clés :',
    fullBioBtn: 'Biographie Complète & Protocoles →',
    bannerBadge: 'Traitement Personnalisé & Diagnostic Gratuit',
    bannerTitle: 'Vous hésitez sur le spécialiste adapté à votre situation ?',
    bannerDesc: 'Partagez votre radiographie ou vos photos dentaires. Notre comité médical analysera votre dossier sous 24h et vous remettra un plan 3D offert.',
    bannerBtnPlan: 'Envoyer Radio & Obtenir Mon Devis',
    bannerBtnContact: 'Contacter Notre Conciergerie Médicale',
  },
  ar: {
    badge: 'طاقم طبي استشاري مرخص من وزارة الصحة • مجمع مستشفيات ليفنت وبيرم باشا',
    title: 'نخبة الأطباء والجراحين الاستشاريين',
    description: 'يجمع الطاقم الطبي الدائم في مستشفى دنت أكتيف بين التميز الجراحي الدولي، والدقة الرقمية ثلاثية الأبعاد، وأعلى معايير الرعاية والاهتمام بالمرضى.',
    credentialSurgeons: 'استشاريو جراحة الوجه والفكين والأسنان المرخصون',
    credentialTech: 'مختبر CAD/CAM داخلي وأشعة Morita 3D CBCT',
    credentialSmiles: '+18,000 ابتسامة ناجحة',
    clinicalFocus: 'مجالات التركيز السريري:',
    fullBioBtn: 'السيرة الذاتية والبروتوكولات ←',
    bannerBadge: 'علاج مخصص وتشخيص رقمي مجاني',
    bannerTitle: 'لست متأكداً أي طبيب استشاري هو الأنسب لحالتك؟',
    bannerDesc: 'شارك صور أسنانك أو الأشعة البانورامية. سيراجع مجلسنا الطبي ملفك خلال 24 ساعة ويقدم لك خطة علاجية رقمية 3D مجانية.',
    bannerBtnPlan: 'إرسال الأشعة والحصول على الخطة',
    bannerBtnContact: 'التواصل مع مستشار المرضى',
  },
};

export const DOCTOR_DETAIL_I18N: Record<string, DoctorDetailUi> = {
  en: {
    breadcrumbHome: 'Home',
    breadcrumbDoctors: 'Medical Faculty',
    experienceLabel: 'Clinical Experience',
    primaryCampus: 'Primary Campus:',
    languages: 'Consultation Languages:',
    licensure: 'Medical Licensure:',
    boardId: 'Medical Board ID:',
    scheduleBtn: 'Schedule Consultation with {name}',
    uploadScanBtn: 'Upload X-Ray / CT Scan',
    proceduresBadge: 'Clinical Expertise & Advanced Protocols',
    proceduresTitle: 'Advanced Treatment Procedures Administered by {name}',
    proceduresDesc: 'Each procedure within the doctor\'s clinical purview is directly executed according to international hospital protocols, state-of-the-art dental technology, and certified biocompatible materials.',
    timelineBadge: 'Academic & Hospital Excellence',
    timelineTitle: 'Clinical Timeline & Academic Milestones',
    certificationsBadge: 'Verified Credentials',
    certificationsTitle: 'Certifications & Professional Licensures',
    membershipsBadge: 'Global Clinical Network',
    membershipsTitle: 'Verified Scientific Memberships',
    philosophyBadge: 'Clinical Standard',
    philosophyTitle: 'Doctor\'s Clinical Philosophy & Protocols',
    faqBadge: 'Patient Q&A',
    faqTitle: 'Frequently Asked Questions About Treatments with {name}',
    otherDoctorsBadge: 'Multi-Disciplinary Team',
    otherDoctorsTitle: 'Meet Other Specialist Doctors',
    viewProfile: 'View Profile & Cases →',
    customProtocol: 'Custom Clinical Protocol',
    professionalChronology: 'Professional Chronology',
    careerTimelineTitle: 'Career & Clinical Experience Timeline',
    patientCareStandards: 'Patient Care Standards',
    philosophyPrinciplesTitle: 'Clinical Philosophy & Treatment Principles',
    intlWarrantyTitle: 'International Patient Warranty',
    intlWarrantyDesc: 'All surgical and prosthetic restorations utilize certified, barcoded materials backed by international guarantee passports.',
    academicEducationTitle: 'Academic Education & Medical Training',
    certificationsAssocTitle: 'Certifications & Professional Associations',
    scientificMembershipsLabel: 'Scientific & Professional Memberships:',
    officialCertificationsLabel: 'Official Certifications:',
    faqSectionBadge: 'Frequently Asked Questions',
    viewFullBioBtn: 'View Full Biography',
  },
  tr: {
    breadcrumbHome: 'Ana Sayfa',
    breadcrumbDoctors: 'Hekim Kadromuz',
    experienceLabel: 'Klinik Deneyim',
    primaryCampus: 'Ana Kampüs:',
    languages: 'Konsültasyon Dilleri:',
    licensure: 'Uzmanlık Ruhsatı:',
    boardId: 'Tabip Odası Sicil No:',
    scheduleBtn: '{name} ile Konsültasyon Planla',
    uploadScanBtn: 'Röntgen / Tomografi Yükle',
    proceduresBadge: 'Klinik Uzmanlık & İleri Protokoller',
    proceduresTitle: '{name} Tarafından Uygulanan İleri Tedaviler',
    proceduresDesc: 'Hekimimizin uzmanlık alanındaki tüm işlemler uluslararası hastane protokolleri, en son teknoloji ve biyo-uyumlu sertifikalı malzemelerle gerçekleştirilmektedir.',
    timelineBadge: 'Akademik & Klinik Başarılar',
    timelineTitle: 'Klinik Kariyer & Akademik Dönüm Noktaları',
    certificationsBadge: 'Onaylı Yetkinlikler',
    certificationsTitle: 'Sertifikalar & Mesleki Ruhsatlar',
    membershipsBadge: 'Bilimsel Ağ',
    membershipsTitle: 'Üye Olunan Bilimsel Kuruluşlar',
    philosophyBadge: 'Klinik Standart',
    philosophyTitle: 'Hekimin Klinik Felsefesi & Tedavi İlkeleri',
    faqBadge: 'Hasta Soruları',
    faqTitle: '{name} ile Tedaviler Hakkında Sıkça Sorulan Sorular',
    otherDoctorsBadge: 'Multidisipliner Kadro',
    otherDoctorsTitle: 'Diğer Uzman Hekimlerimizle Tanışın',
    viewProfile: 'Profili & Vakaları İncele →',
    customProtocol: 'Özel Klinik Protokolü',
    professionalChronology: 'Mesleki Kronoloji',
    careerTimelineTitle: 'Kariyer & Klinik Deneyim Zaman Çizelgesi',
    patientCareStandards: 'Hasta Bakım Standartları',
    philosophyPrinciplesTitle: 'Klinik Felsefe & Tedavi İlkeleri',
    intlWarrantyTitle: 'Uluslararası Hasta Garantisi',
    intlWarrantyDesc: 'Tüm cerrahi ve protetik restorasyonlar, uluslararası garanti pasaportu ile desteklenen sertifikalı ve barkodlu malzemelerle uygulanır.',
    academicEducationTitle: 'Akademik Eğitim & Uzmanlık',
    certificationsAssocTitle: 'Sertifikalar & Mesleki Kuruluşlar',
    scientificMembershipsLabel: 'Bilimsel ve Mesleki Üyelikler:',
    officialCertificationsLabel: 'Resmi Sertifikalar:',
    faqSectionBadge: 'Sıkça Sorulan Sorular',
    viewFullBioBtn: 'Özgeçmişi İncele',
  },
  de: {
    breadcrumbHome: 'Startseite',
    breadcrumbDoctors: 'Ärzteteam',
    experienceLabel: 'Klinische Erfahrung',
    primaryCampus: 'Hauptstandort:',
    languages: 'Beratungssprachen:',
    licensure: 'Fachärztliche Approbation:',
    boardId: 'Ärztekammer-Registernummer:',
    scheduleBtn: 'Beratung mit {name} vereinbaren',
    uploadScanBtn: 'Röntgen / DVT hochladen',
    proceduresBadge: 'Klinische Expertise & Moderne Protokolle',
    proceduresTitle: 'Spezialisierte Behandlungen durch {name}',
    proceduresDesc: 'Alle Eingriffe werden nach strengen europäischen Krankenhausstandards mit modernsten CAD/CAM- und 3D-Verfahren durchgeführt.',
    timelineBadge: 'Akademische & Klinische Meilensteine',
    timelineTitle: 'Beruflicher Werdegang & Qualifikationen',
    certificationsBadge: 'Geprüfte Qualifikationen',
    certificationsTitle: 'Zertifikate & Fortbildungen',
    membershipsBadge: 'Wissenschaftliches Netzwerk',
    membershipsTitle: 'Wissenschaftliche Fachgesellschaften',
    philosophyBadge: 'Behandlungsphilosophie',
    philosophyTitle: 'Klinische Philosophie & Qualitätsstandards',
    faqBadge: 'Fragen & Antworten',
    faqTitle: 'Häufig gestellte Fragen zu Behandlungen mit {name}',
    otherDoctorsBadge: 'Interdisziplinäres Team',
    otherDoctorsTitle: 'Weitere Fachärzte unseres Klinikteams',
    viewProfile: 'Profil ansehen →',
    customProtocol: 'Individuelles klinisches Protokoll',
    professionalChronology: 'Berufliche Chronologie',
    careerTimelineTitle: 'Karriere- & Erfahrungszeitstrahl',
    patientCareStandards: 'Patientenversorgungs-Standards',
    philosophyPrinciplesTitle: 'Klinische Philosophie & Behandlungsprinzipien',
    intlWarrantyTitle: 'Internationale Patientengarantie',
    intlWarrantyDesc: 'Alle chirurgischen und prothetischen Versorgungen erfolgen mit zertifizierten Materialien und internationalem Garantiepass.',
    academicEducationTitle: 'Akademische Ausbildung & Qualifikation',
    certificationsAssocTitle: 'Zertifikate & Berufsverbände',
    scientificMembershipsLabel: 'Wissenschaftliche Mitgliedschaften:',
    officialCertificationsLabel: 'Offizielle Zertifikate:',
    faqSectionBadge: 'Häufig Gestellte Fragen',
    viewFullBioBtn: 'Vollständige Biografie ansehen',
  },
  ru: {
    breadcrumbHome: 'Главная',
    breadcrumbDoctors: 'Врачи',
    experienceLabel: 'Клинический стаж',
    primaryCampus: 'Основной кампус:',
    languages: 'Языки приема:',
    licensure: 'Лицензия врача:',
    boardId: 'Номер в реестре:',
    scheduleBtn: 'Записаться на консультацию к {name}',
    uploadScanBtn: 'Загрузить снимок КТ',
    proceduresBadge: 'Клиническая экспертиза и протоколы',
    proceduresTitle: 'Специализированные процедуры врача {name}',
    proceduresDesc: 'Все процедуры проводятся строго по международным больничным стандартам с использованием биосовместимых сертифицированных материалов.',
    timelineBadge: 'Академические достижения',
    timelineTitle: 'Клиническая карьера и образование',
    certificationsBadge: 'Сертификация',
    certificationsTitle: 'Сертификаты и дипломы',
    membershipsBadge: 'Научные ассоциации',
    membershipsTitle: 'Членство в научных сообществах',
    philosophyBadge: 'Клинический подход',
    philosophyTitle: 'Философия лечения и протоколы врача',
    faqBadge: 'Вопросы пациентов',
    faqTitle: 'Часто задаваемые вопросы о лечении у врача {name}',
    otherDoctorsBadge: 'Коллегия специалистов',
    otherDoctorsTitle: 'Познакомьтесь с другими врачами клиники',
    viewProfile: 'Подробнее о враче →',
    customProtocol: 'Специализированный клинический протокол',
    professionalChronology: 'Профессиональная хронология',
    careerTimelineTitle: 'Хронология карьеры и клинического опыта',
    patientCareStandards: 'Стандарты обслуживания пациентов',
    philosophyPrinciplesTitle: 'Философия лечения и клинические принципы',
    intlWarrantyTitle: 'Международная гарантия пациента',
    intlWarrantyDesc: 'Все хирургические и ортопедические конструкции изготавливаются из сертифицированных материалов с международным паспортом гарантии.',
    academicEducationTitle: 'Образование и академическая подготовка',
    certificationsAssocTitle: 'Сертификаты и профессиональные ассоциации',
    scientificMembershipsLabel: 'Научные и профессиональные сообщества:',
    officialCertificationsLabel: 'Официальные сертификаты:',
    faqSectionBadge: 'Часто задаваемые вопросы',
    viewFullBioBtn: 'Подробнее о враче',
  },
  fr: {
    breadcrumbHome: 'Accueil',
    breadcrumbDoctors: 'Corps Médical',
    experienceLabel: 'Expérience Clinique',
    primaryCampus: 'Campus Principal :',
    languages: 'Langues de Consultation :',
    licensure: 'Agrément Médical :',
    boardId: 'Numéro d\'Ordre :',
    scheduleBtn: 'Prendre Rendez-vous avec {name}',
    uploadScanBtn: 'Envoyer Radio / Scanner 3D',
    proceduresBadge: 'Expertise Clinique & Protocoles Avancés',
    proceduresTitle: 'Actes Médicaux Spécialisés Réalisés par {name}',
    proceduresDesc: 'Chaque intervention respecte rigoureusement les normes hospitalières internationales et s\'appuie sur des matériaux certifiés de premier choix.',
    timelineBadge: 'Parcours Hospitalier & Universitaire',
    timelineTitle: 'Chronologie Clinique & Diplômes',
    certificationsBadge: 'Qualifications Certifiées',
    certificationsTitle: 'Certifications & Habilitations Médicales',
    membershipsBadge: 'Réseau Scientifique International',
    membershipsTitle: 'Sociétés Savantes & Affiliations',
    philosophyBadge: 'Philosophie Médicale',
    philosophyTitle: 'Philosophie de Prise en Charge du Praticien',
    faqBadge: 'Questions Fréquentes',
    faqTitle: 'Questions Posées sur les Soins avec {name}',
    otherDoctorsBadge: 'Équipe Multidisciplinaire',
    otherDoctorsTitle: 'Découvrez Nos Autres Médecins Spécialistes',
    viewProfile: 'Consulter le Profil →',
    customProtocol: 'Protocole Clinique Sur-Mesure',
    professionalChronology: 'Chronologie Professionnelle',
    careerTimelineTitle: 'Chronologie de Carrière & Expérience',
    patientCareStandards: 'Normes de Prise en Charge',
    philosophyPrinciplesTitle: 'Philosophie Clinique & Principes Thérapeutiques',
    intlWarrantyTitle: 'Garantie Internationale du Patient',
    intlWarrantyDesc: 'Toutes les restaurations chirurgicales et prothétiques s\'appuient sur des matériaux certifiés avec passeport de garantie international.',
    academicEducationTitle: 'Formation Académique & Médicale',
    certificationsAssocTitle: 'Certifications & Ordres Professionnels',
    scientificMembershipsLabel: 'Affiliations Scientifiques & Professionnelles :',
    officialCertificationsLabel: 'Certifications Officielles :',
    faqSectionBadge: 'Foire Aux Questions',
    viewFullBioBtn: 'Voir la Biographie Complète',
  },
  ar: {
    breadcrumbHome: 'الرئيسية',
    breadcrumbDoctors: 'الطاقم الطبي',
    experienceLabel: 'الخبرة السريرية',
    primaryCampus: 'المقر الرئيسي:',
    languages: 'لغات الاستشارة:',
    licensure: 'الترخيص الطبي:',
    boardId: 'رقم السجل الطبي:',
    scheduleBtn: 'حجز استشارة مع {name}',
    uploadScanBtn: 'إرسال صور الأشعة / CT Scan',
    proceduresBadge: 'الخبرة السريرية والبروتوكولات المتقدمة',
    proceduresTitle: 'الإجراءات العلاجية المتقدمة بإشراف {name}',
    proceduresDesc: 'يتم تنفيذ كل إجراء تحت إشراف الطبيب المباشر وفقاً للمعايير الاستشفائية الأوروبية وأحدث تقنيات طب الأسنان والمواد الحيوية المعتمدة.',
    timelineBadge: 'التميز الأكاديمي والاستشفائي',
    timelineTitle: 'المسيرة السريرية والمحطات الأكاديمية',
    certificationsBadge: 'المؤهلات المعتمدة',
    certificationsTitle: 'الشهادات والتراخيص المهنية الرسمية',
    membershipsBadge: 'الشبكة السريرية الدولية',
    membershipsTitle: 'العضويات العلمية الموثقة',
    philosophyBadge: 'المعايير السريرية',
    philosophyTitle: 'فلسفة الطبيب السريرية وبروتوكولات العلاج',
    faqBadge: 'أسئلة المرضى',
    faqTitle: 'الأسئلة الشائعة حول العلاج مع {name}',
    otherDoctorsBadge: 'فريق متعدد التخصصات',
    otherDoctorsTitle: 'تعرف على نخبة الأطباء الاستشاريين الآخرين',
    viewProfile: 'عرض الملف والحالات ←',
    customProtocol: 'بروتوكول سريري مخصص',
    professionalChronology: 'التسلسل المهني',
    careerTimelineTitle: 'التسلسل الزمني للخبرة السريرية',
    patientCareStandards: 'معايير رعاية المرضى',
    philosophyPrinciplesTitle: 'الفلسفة السريرية ومبادئ العلاج',
    intlWarrantyTitle: 'ضمان المريض الدولي',
    intlWarrantyDesc: 'تعتمد جميع الترميمات الجراحية والتركيبات على مواد معتمدة برمز تسلسلي مشمولة بجوازات ضمان دولية.',
    academicEducationTitle: 'التعليم الأكاديمي والتدريب الطبي',
    certificationsAssocTitle: 'الشهادات والجمعيات المهنية',
    scientificMembershipsLabel: 'العضويات العلمية والمهنية:',
    officialCertificationsLabel: 'الشهادات الرسمية:',
    faqSectionBadge: 'الأسئلة الشائعة',
    viewFullBioBtn: 'عرض السيرة الذاتية الكاملة',
  },
};

export function getDoctorsOverviewUi(lang = 'en'): DoctorsOverviewUi {
  return DOCTORS_OVERVIEW_I18N[lang] || DOCTORS_OVERVIEW_I18N['en'];
}

export function getDoctorDetailUi(lang = 'en'): DoctorDetailUi {
  return DOCTOR_DETAIL_I18N[lang] || DOCTOR_DETAIL_I18N['en'];
}
