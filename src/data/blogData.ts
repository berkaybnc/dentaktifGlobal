export interface InstagramReel {
  id: string;
  shortcode: string;
  title: Record<string, string>;
  caption: Record<string, string>;
  category: string;
  postUrl: string;
  embedUrl: string;
  viewsCount?: string;
  duration?: string;
  doctor: string;
  doctorRole: Record<string, string>;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: Record<string, string>;
  summary: Record<string, string>;
  category: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: Record<string, string>;
  heroImage: string;
  relatedInstagramReels?: string[];
  content: Record<string, string[]>;
}

export const INSTAGRAM_REELS: InstagramReel[] = [
  {
    id: 'reel-dehzo5og9or',
    shortcode: 'DehZO5oG9oR',
    category: 'smile-makeover',
    postUrl: 'https://www.instagram.com/p/DehZO5oG9oR/',
    embedUrl: 'https://www.instagram.com/p/DehZO5oG9oR/embed/',
    viewsCount: '154.2K',
    duration: '0:45',
    doctor: '',
    doctorRole: {
      en: 'Patient Experience',
      de: 'Patientenerfahrung',
      ru: 'Опыт пациента',
      fr: 'Expérience Patient',
      ar: 'تجربة مريض',
    },
    title: {
      en: 'Why Patients from Switzerland Choose Dentaktif • Patient Story',
      de: 'Warum Patienten aus der Schweiz Dentaktif wählen • Patientengeschichte',
      ru: 'Почему пациенты из Швейцарии выбирают Dentaktif • История пациента',
      fr: 'Pourquoi les patients de Suisse choisissent Dentaktif • Témoignage',
      ar: 'لماذا يختار المرضى من سويسرا مستشفى دنت أكتيف • تجربة مريض',
    },
    caption: {
      en: 'Meet Zainab, who traveled from Switzerland to Istanbul for personalized dental care. “I am very happy with my teeth, and I can only recommend the team at Dentaktif.”',
      de: 'Lernen Sie Zainab kennen, die aus der Schweiz nach Istanbul reiste: „Ich bin sehr zufrieden mit meinen Zähnen und kann das Team von Dentaktif nur weiterempfehlen.“',
      ru: 'Познакомьтесь с Зайнаб, приехавшей из Швейцарии в Стамбул: «Я очень довольна своими зубами и от всей души рекомендую команду Dentaktif».',
      fr: 'Découvrez Zainab, venue de Suisse à Istanbul : « Je suis très heureuse de mes nouvelles dents et je recommande vivement l\'équipe de Dentaktif. »',
      ar: 'تعرف على زينب القادمة من سويسرا إلى إسطنبول لتلقي رعاية أسنان مخصصة: «أنا سعيدة للغاية بأسناني، وأوصي بشدة بفريق دنت أكتيف».',
    },
  },
  {
    id: 'reel-decimbcjyxw',
    shortcode: 'DecImBCjYXW',
    category: 'smile-makeover',
    postUrl: 'https://www.instagram.com/p/DecImBCjYXW/',
    embedUrl: 'https://www.instagram.com/p/DecImBCjYXW/embed/',
    viewsCount: '118.6K',
    duration: '0:52',
    doctor: '',
    doctorRole: {
      en: 'Aesthetic Dentistry',
      de: 'Ästhetische Zahnmedizin',
      ru: 'Эстетическая стоматология',
      fr: 'Dentisterie Esthétique',
      ar: 'طب الأسنان التجميلي',
    },
    title: {
      en: 'Natural Smile Aesthetics: The Secret is in the Details',
      de: 'Natürliches Lächeln: Das Geheimnis liegt im Detail',
      ru: 'Естественная улыбка: секрет кроется в деталях',
      fr: 'Sourire Naturel : Le Secret Réside dans les Détails',
      ar: 'الابتسامة الطبيعية: السر يكمن في أدق التفاصيل',
    },
    caption: {
      en: 'Many patients worry about artificial-looking teeth. The secret to natural aesthetics: handcrafted translucent edges, delicate mamelon effects, and bespoke tooth characterization.',
      de: 'Sorge vor künstlich wirkenden Zähnen? Das Geheimnis eines natürlichen Lächelns: transluzente Kanten, feine Mamelon-Effekte und meisterhafte anatomische Handarbeit.',
      ru: 'Опасаетесь искусственного вида зубов? Секрет натуральной улыбки: полупрозрачные режущие края, микрорельеф и индивидуальная ручная проработка структуры зуба.',
      fr: 'Peur d\'un résultat artificiel ? Le secret d\'un résultat authentique : bords incisifs translucides, effets de mamelons subtils et caractérisation artisanale sur mesure.',
      ar: 'قلق من مظهر الأسنان الاصطناعي؟ سر الابتسامة الطبيعية: الحواف الشفافة والتدرجات اللونية الواقعية والنحت اليدوي الدقيق لكل سن.',
    },
  },
  {
    id: 'reel-demvleekz5h',
    shortcode: 'DeMvlEekZ5H',
    category: 'technology',
    postUrl: 'https://www.instagram.com/p/DeMvlEekZ5H/',
    embedUrl: 'https://www.instagram.com/p/DeMvlEekZ5H/embed/',
    viewsCount: '182.4K',
    duration: '0:48',
    doctor: '',
    doctorRole: {
      en: 'International Care Protocol',
      de: 'Internationales Behandlungsprotokoll',
      ru: 'Международный протокол лечения',
      fr: 'Protocole de Soins International',
      ar: 'بروتوكول العلاج الدولي',
    },
    title: {
      en: 'Dental Treatment in Istanbul: 3-Step Process for International Patients',
      de: 'Zahnbehandlung in Istanbul: Wie läuft der Prozess für Auslandspatienten ab?',
      ru: 'Лечение зубов в Стамбуле: 3 шага для зарубежных пациентов',
      fr: 'Soins Dentaires à Istanbul : Le Déroulement en 3 Étapes pour Patients Internationaux',
      ar: 'علاج الأسنان في إسطنبول: خطوات الرحلة للمرضى القادمين من الخارج',
    },
    caption: {
      en: '1) Initial Contact & X-Ray Review, 2) Tailored Treatment Plan designed for you, 3) Seamless Travel & VIP transfers between airport, hotel, and Dentaktif clinic.',
      de: '1) Erste Kontaktaufnahme & Röntgenanalyse, 2) Individueller Behandlungsplan, 3) Reiseorganisation & VIP-Transfers zwischen Flughafen, Hotel und Dentaktif-Klinik.',
      ru: '1) Первичный контакт и анализ снимков, 2) Персональный план лечения, 3) Полная организация поездки и VIP-трансферы аэропорт-отель-клиника.',
      fr: '1) Premier contact et analyse de vos radiographies, 2) Plan de traitement personnalisé, 3) Prise en charge complète et transferts VIP aéroport, hôtel et clinique.',
      ar: '1) التواصل الأولي ومراجعة الأشعة والصور، 2) خطة علاجية مخصصة لاحتياجاتك، 3) تنظيم كامل للرحلة واستقبال VIP بسيارات خاصة بين المطار والفندق والعيادة.',
    },
  },
  {
    id: 'reel-dyp-tqwntcl',
    shortcode: 'DYp-tqwNtCl',
    category: 'concierge',
    postUrl: 'https://www.instagram.com/p/DYp-tqwNtCl/',
    embedUrl: 'https://www.instagram.com/p/DYp-tqwNtCl/embed/',
    viewsCount: '95.3K',
    duration: '0:38',
    doctor: '',
    doctorRole: {
      en: 'Patient Hospitality',
      de: 'Gästebetreuung & VIP-Service',
      ru: 'Сервис и гостеприимство',
      fr: 'Accueil & Conciergerie VIP',
      ar: 'الضيافة والاستقبال VIP',
    },
    title: {
      en: 'Patient Experience & Hospital Journey • DentAktif Global',
      de: 'Patientenerfahrung & Behandlungsablauf • DentAktif Global',
      ru: 'Опыт пациента и история лечения • DentAktif Global',
      fr: 'Expérience Patient & Parcours de Soins • DentAktif Global',
      ar: 'تجربة المريض والرحلة العلاجية الكاملة • دنت أكتيف جلوبال',
    },
    caption: {
      en: 'Transparent communication, detailed evaluation, and comfort-first dental care. Watch our international patient share their authentic treatment journey at DentAktif Istanbul.',
      de: 'Transparente Kommunikation, sorgfältige Diagnostik und maximaler Komfort. Einblicke in die authentische Behandlungserfahrung unserer Patienten bei DentAktif Istanbul.',
      ru: 'Прозрачная коммуникация, тщательная диагностика и забота о комфорте. Пациент делится своими впечатлениями от лечения в клинике DentAktif в Стамбуле.',
      fr: 'Communication transparente, évaluation approfondie et confort absolu. Témoignage authentique d\'un patient international chez DentAktif Istanbul.',
      ar: 'تواصل شفاف وتشخيص دقيق وراحة تامة. مريضنا يشارك تجربته الواقعية ورحلته العلاجية المريحة في مستشفى دنت أكتيف إسطنبول.',
    },
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    slug: 'why-international-patients-choose-istanbul-dentaktif',
    category: 'medical-tourism',
    date: '15 Oct 2026',
    readTime: '5 min read',
    author: 'Dt. Abdullah Ömür',
    authorRole: {
      en: 'Chief Aesthetic Dental Surgeon',
      de: 'Leitender Zahnarzt für Ästhetik',
      ru: 'Главный стоматолог-эстетист',
      fr: 'Chirurgien Dentiste Esthétique en Chef',
      ar: 'كبير جراحي تجميل وزراعة الأسنان',
    },
    heroImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
    relatedInstagramReels: ['reel-dehzo5og9or', 'reel-dyp-tqwntcl'],
    title: {
      en: 'Why Over 5,000 International Patients Choose Istanbul for VIP Cosmetic Dentistry',
      de: 'Warum über 5.000 internationale Patienten Istanbul für erstklassige Zahnästhetik wählen',
      ru: 'Почему более 5000 зарубежных пациентов выбирают Стамбул для премиальной стоматологии',
      fr: 'Pourquoi plus de 5 000 patients internationaux choisissent Istanbul pour leurs soins dentaires VIP',
      ar: 'لماذا يختار أكثر من 5,000 مريض دولي مستشفى دنت أكتيف في إسطنبول لتجميل وزراعة الأسنان',
    },
    summary: {
      en: 'A comprehensive medical tourism guide comparing Swiss Straumann® implants, in-house CAD/CAM crafting, and 5-star hotel concierge protocols with 70% cost advantages.',
      de: 'Ein detaillierter Leitfaden zu Schweizer Straumann® Implantaten, hauseigener CAD/CAM-Fertigung und VIP-Concierge-Paketen.',
      ru: 'Подробный путеводитель по медицинскому туризму: швейцарские импланты, собственная лаборатория и пятизвездочный сервис.',
      fr: 'Guide complet du tourisme dentaire : implants suisses, technologie CAD/CAM interne et conciergerie 5 étoiles.',
      ar: 'دليل طبي شامل يوضح مميزات زراعة الأسنان السويسرية والمختبر الرقمي الفوري وباقات الفنادق الفاخرة.',
    },
    content: {
      en: [
        'Istanbul has officially evolved into Europe and the Middle East’s leading surgical dentistry capital. At Dent Aktif Global, located in central Levent, patients experience clinical precision that rivals Harley Street and Zurich clinics at a fraction of the investment.',
        'Our hospital operates under rigorous Republic of Turkey Ministry of Health and USHAŞ International Health Tourism certification. With in-house CBCT volumetric 3D scanners and digital milling units, international patients receive fully custom restorations within 5 business days without third-party laboratory delays.',
        'Beyond dental engineering, our all-inclusive VIP packages eliminate travel friction: private Mercedes V-Class airport transfers, beachfront 5-star hotel accommodations, and dedicated multi-language patient coordinators throughout the journey.',
      ],
      de: [
        'Istanbul hat sich zum führenden Zentrum für chirurgische Zahnmedizin in Europa und dem Nahen Osten entwickelt. Bei Dent Aktif Global in Levent erleben Patienten höchste Behandlungsstandards wie in Zürich oder London.',
        'Unsere Klinik ist vom türkischen Gesundheitsministerium und USHAŞ offiziell zertifiziert. Dank hauseigener 3D-CBCT-Tomographie und 5-Achs-CAD/CAM-Fräsanlagen erhalten Sie maßgefertigte Kronen und Veneers in nur 5 Tagen.',
        'Unser VIP-All-Inclusive-Konzept beinhaltet persönliche Mercedes-Chauffeurtransfers, ein 5-Sterne-Partnerhotel und muttersprachliche Betreuung während Ihres gesamten Aufenthalts.',
      ],
      ru: [
        'Стамбул стал ведущим европейским центром дентальной хирургии и эстетической стоматологии. В госпитале Dent Aktif Global в районе Левент пациенты получают лечение премиум-уровня по швейцарским и немецким протоколам.',
        'Клиника имеет государственную лицензию Министерства здравоохранения Турции и сертификат USHAŞ. Собственная CAD/CAM лаборатория и 3D-томография позволяют завершить установку виниров или коронок за 5 дней.',
        'В пакет «Все включено» входят трансферы на автомобилях Mercedes представительского класса, проживание в 5-звездочном отеле и персональный русскоязычный координатор.',
      ],
      fr: [
        'Istanbul est devenue la destination de référence pour la dentisterie esthétique et implantaire. À l\'hôpital Dent Aktif Global, situé à Levent, nos patients bénéficient de soins de niveau international.',
        'Agréé par le Ministère de la Santé de Turquie et l\'USHAŞ, notre établissement dispose de scanners 3D CBCT et de sa propre unité de fabrication robotisée CAD/CAM permettant de finaliser votre traitement en 5 jours.',
        'Nos forfaits VIP tout compris intègrent les transferts privés en Mercedes, l\'hébergement en hôtel 5 étoiles et un coordinateur dédié qui vous accompagne dans votre langue.',
      ],
      ar: [
        'أصبحت إسطنبول العاصمة الأولى لسياحة طب الأسنان في المنطقة. في مستشفى دنت أكتيف جلوبال بمنطقة ليفنت، يحصل المرضى على معايير سريرية تضاهي أرقى عيادات زيورخ ولندن مع توفير يصل إلى 70%.',
        'يعمل المستشفى بموجب ترخيص رسمي من وزارة الصحة التركية ومؤسسة USHAŞ الدولية للسياحة العلاجية. يتيح لنا المختبر الرقمي ووحدات النحت CAD/CAM إنهاء كامل القشور الخزفية أو الزرعات خلال 5 أيام عمل فقط.',
        'تشمل باقتنا الفاخرة خدمة الاستقبال بسيارات مرسيدس فيتو، والإقامة في فندق 5 نجوم مطل على البحر، ومترجماً خاصاً يرافقك في كافة المواعيد السريرية.',
      ],
    },
  },
  {
    id: 'post-2',
    slug: 'hollywood-smile-vs-zirconia-crowns-material-guide',
    category: 'cosmetic-guide',
    date: '02 Oct 2026',
    readTime: '6 min read',
    author: 'Dt. Büşra Tomo',
    authorRole: {
      en: 'Specialist Prosthodontist & Implantologist',
      de: 'Fachzahnärztin für Prothetik & Implantologie',
      ru: 'Специалист-ортопед и имплантолог',
      fr: 'Spécialiste en Prothèse Dentaire & Implantologie',
      ar: 'أخصائية الاستعاضة السنية وزراعة الأسنان',
    },
    heroImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80',
    relatedInstagramReels: ['reel-dehzo5og9or', 'reel-demvleekz5h'],
    title: {
      en: 'E-Max® Porcelain Veneers vs. Zirconia Crowns: Which Solution Is Ideal for You?',
      de: 'E-Max® Keramik-Veneers vs. Zirkonkronen: Welche Lösung passt zu Ihnen?',
      ru: 'Керамические виниры E-Max® или коронки из циркония: что выбрать?',
      fr: 'Facettes Porcelaine E-Max® vs. Couronnes Zircone : Quel choix pour votre sourire ?',
      ar: 'قشور البورسلين E-Max® مقابل تيجان الزيركون: أيهما الأنسب لابتسامتك؟',
    },
    summary: {
      en: 'An expert comparison of light translucency, flexural strength (1200+ MPa), biological gum compatibility, and long-term durability for front vs posterior teeth.',
      de: 'Ein wissenschaftlicher Vergleich von Lichtdurchlässigkeit, Biegefestigkeit (1200+ MPa) und Gewebeverträglichkeit.',
      ru: 'Научное сравнение светопроницаемости, прочности на изгиб (1200+ МПа) и биосовместимости материалов.',
      fr: 'Comparaison experte sur la translucidité, la résistance mécanique (1200+ MPa) et la santé des gencives.',
      ar: 'مقارنة طبية متخصصة توضح الفروق بين نفاذية الضوء الطبيعية وقوة التحمل الميكانيكية وصحة اللثة.',
    },
    content: {
      en: [
        'One of the most frequent clinical questions from our international patients is whether to choose ultra-thin E-Max® lithium disilicate veneers or German high-translucency Zirconia crowns.',
        'E-Max® is celebrated for its unmatched optical mimicry of natural human tooth enamel. With an impressive light translucency profile and minimal prep requirement (0.3mm - 0.5mm), it is the gold standard for frontal cosmetic smile makeovers.',
        'German monolithic Zirconia, meanwhile, delivers an unmatched flexural strength exceeding 1200 MPa. For patients suffering from bruxism (teeth grinding), missing back teeth, or seeking full-arch reconstruction, multi-layered Zirconia ensures lifetime structural integrity.',
      ],
      de: [
        'Eine der häufigsten Fragen unserer internationalen Patienten betrifft den Unterschied zwischen E-Max® Lithium-Disilikat-Veneers und hochtransluzenten Zirkonkronen.',
        'E-Max® ist weltweit bekannt für seine natürliche Lichtbrechung, die dem echten Zahnschmelz am nächsten kommt. Mit minimaler Präparation ist es die erste Wahl für ästhetische Frontzähne.',
        'Zirkonoxid hingegen bietet mit über 1200 MPa eine enorme Bruchfestigkeit und eignet sich hervorragend bei Zähneknirschen oder für Kaubereiche.',
      ],
      ru: [
        'Один из самых частых вопросов пациентов: что лучше выбрать — ультратонкие виниры E-Max® или коронки из немецкого оксида циркония?',
        'E-Max® ценится за непревзойденную светопроницаемость и естественный вид, идентичный натуральной эмали. Требует минимальной обработки (0.3-0.5 мм) и идеален для зоны улыбки.',
        'Многослойный диоксид циркония с прочностью более 1200 МПа незаменим для жевательных зубов, при бруксизме и тотальных реконструкциях зубного ряда.',
      ],
      fr: [
        'L\'une des questions les plus fréquentes concerne le choix entre les facettes en vitrocéramique E-Max® et les couronnes en zircone allemande.',
        'L\'E-Max® offre une translucidité optique identique à celle de l\'émail naturel avec une préparation minimale (0,3 à 0,5 mm), ce qui en fait le choix privilégié pour les dents antérieures.',
        'La zircone multicouche offre une résistance exceptionnelle supérieure à 1200 MPa, particulièrement adaptée aux forces masticatoires importantes ou aux réhabilitations complètes.',
      ],
      ar: [
        'من أكثر الاستفسارات تكراراً هو المفاضلة بين قشور الليثيوم ديسيليكات E-Max® الرقيقة وتيجان الزيركون الألمانية متعددة الطبقات.',
        'تتميز قشور E-Max® بنفاذية ضوء استثنائية تحاكي المينا الطبيعية بدقة وببرد سطحي بسيط جداً، مما يجعلها الخيار الذهبي لابتسامة هوليوود الأمامية.',
        'بالمقابل، يوفر الزيركون قوة ميكانيكية فائقة تفوق 1200 ميغاباسكال، وهو الحل الأمثل لحالات صك الأسنان وترميم الأضراس الخلفية وإعادة بناء الفك بالكامل.',
      ],
    },
  },
  {
    id: 'post-3',
    slug: 'computer-guided-implants-straumann-protocol',
    category: 'dental-technology',
    date: '20 Sep 2026',
    readTime: '4 min read',
    author: 'Dt. Abdullah Ömür',
    authorRole: {
      en: 'Chief Aesthetic Dental Surgeon',
      de: 'Leitender Zahnarzt für Ästhetik',
      ru: 'Главный стоматолог-эстетист',
      fr: 'Chirurgien Dentiste Esthétique en Chef',
      ar: 'كبير جراحي تجميل وزراعة الأسنان',
    },
    heroImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
    relatedInstagramReels: ['reel-decimbcjyxw', 'reel-demvleekz5h'],
    title: {
      en: 'How 3D CBCT Surgical Stents Guarantee Pain-Free Swiss Straumann® Implants',
      de: 'Wie 3D-CBCT Bohrschablonen schmerzfreie Schweizer Straumann® Implantate garantieren',
      ru: 'Как хирургические 3D-шаблоны CBCT обеспечивают точную и безболезненную установку имплантов Straumann®',
      fr: 'Comment les guides chirurgicaux 3D garantissent des implants suisses sans douleur',
      ar: 'كيف تضمن الأدلة الجراحية ثلاثية الأبعاد زراعة أسنان سويسرية دقيقة وبدون أي ألم',
    },
    summary: {
      en: 'Discover how computer-assisted keyhole surgery maps nerve canals to the sub-millimeter, eliminating sutures, swelling, and surgical guesswork.',
      de: 'Erfahren Sie, wie computernavigierte Schablonen Nervenbahnen millimetergenau schonen und Schwellungen minimieren.',
      ru: 'Узнайте, как компьютерная навигация исключает разрезы и швы, точно позиционируя имплант с учетом анатомии.',
      fr: 'Découvrez comment la chirurgie guidée par ordinateur élimine les incisions et garantit une précision au dixième de millimètre.',
      ar: 'تعرف على تقنية الزراعة الموجهة حاسوبياً التي تحمي الأعصاب وتجنب المريض الشق الجراحي والانتفاخ.',
    },
    content: {
      en: [
        'Traditional dental implant surgery required open gum flap elevation and visual estimation. At Dent Aktif Clinic Global, every implant surgery utilizes 3D Cone Beam Computed Tomography (CBCT) coupled with digitally planned 3D-printed surgical stents.',
        'This guided protocol allows our oral surgeons to insert Swiss Straumann® Roxolid® implants through micro-punches. The implant is locked into the exact bone density corridor without cutting or stitching.',
        'For our patients, this means zero post-operative pain, drastically reduced healing times, and the capability to attach same-day fixed hybrid arches with full biting confidence.',
      ],
      de: [
        'Die traditionelle Implantation erforderte größere Schnitte im Zahnfleisch. Bei Dent Aktif Global wird jede Implantation über digitale Bohrschablonen auf Basis von 3D-CBCT-Aufnahmen durchgeführt.',
        'Dieses navigierte Verfahren ermöglicht das Einbringen der Schweizer Straumann® Implantate durch winzige Mikrostanzungen ohne Skalpell und Nähte.',
        'Für Patienten bedeutet dies maximale Schmerzfreiheit, deutlich schnellere Einheilzeiten und in vielen Fällen feste Zähne am selben Tag.',
      ],
      ru: [
        'Классическая имплантация требовала широкого разреза десны. В Dent Aktif каждая операция планируется на основе 3D-томографии CBCT с печатью индивидуального хирургического шаблона.',
        'Швейцарские импланты Straumann® Roxolid® устанавливаются через микропрокол без разрезов и наложения швов, точно в заданный костный массив.',
        'Благодаря этому послеоперационный отек и боль практически отсутствуют, а пациент может получить временные несъемные зубы в день процедуры.',
      ],
      fr: [
        'La chirurgie implantaire classique nécessitait de décoller la gencive. Chez Dent Aktif Global, chaque intervention est guidée par un stent chirurgical 3D personnalisé.',
        'Les implants suisses Straumann® Roxolid® sont positionnés par micro-accès sans incision ni suture, directement dans la zone osseuse idéale.',
        'Pour le patient, cela se traduit par l\'absence quasi totale de douleur, une guérison rapide et la possibilité d\'une mise en charge immédiate.',
      ],
      ar: [
        'كانت زراعة الأسنان التقليدية تتطلب شق اللثة جراحياً ووضع الغرز. في دنت أكتيف، تتم كل عملية باستخدام دليل جراحي مطبوع ثلاثي الأبعاد مبني على مسح CBCT حجمي دقيق.',
        'يتم إدخال زرعات سترومان Roxolid® السويسرية عبر ثقب مجهري دقيق دون الحاجة إلى جراحة مفتوحة أو خياطة.',
        'النتيجة للمريض هي انعدام الألم بعد العملية، وتعافي فوري وسريع، وإمكانية تثبيت الأسنان المؤقتة في نفس اليوم.',
      ],
    },
  },
];
