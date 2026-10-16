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
    doctor: 'Dt. Abdullah Ömür',
    doctorRole: {
      en: 'Chief Aesthetic Dental Surgeon',
      de: 'Leitender Zahnarzt für Ästhetik',
      ru: 'Главный стоматолог-эстетист',
      fr: 'Chirurgien Dentiste Esthétique en Chef',
      ar: 'كبير جراحي تجميل وزراعة الأسنان',
    },
    title: {
      en: 'Smile Makeover Clinical Transformation • Dent Aktif Global',
      de: 'Smile Makeover Klinische Transformation • Dent Aktif Global',
      ru: 'Клиническое преображение улыбки • Dent Aktif Global',
      fr: 'Transformation Clinique du Sourire • Dent Aktif Global',
      ar: 'تحول الابتسامة السريري في مستشفى دنت أكتيف جلوبال',
    },
    caption: {
      en: 'Watch our international patient smile journey at Dent Aktif Global Istanbul. High precision aesthetic dentistry.',
      de: 'Erleben Sie die Patientenreise bei Dent Aktif Global Istanbul. Präzise ästhetische Zahnmedizin.',
      ru: 'Путь преображения улыбки нашего зарубежного пациента в клинике Dent Aktif Global в Стамбуле.',
      fr: 'Découvrez le parcours de soins esthétiques de notre patient chez Dent Aktif Global à Istanbul.',
      ar: 'رحلة علاج وتجميل الأسنان لمريضنا الدولي في مستشفى دنت أكتيف جلوبال إسطنبول.',
    },
  },
  {
    id: 'reel-decimbcjyxw',
    shortcode: 'DecImBCjYXW',
    category: 'implants',
    postUrl: 'https://www.instagram.com/p/DecImBCjYXW/',
    embedUrl: 'https://www.instagram.com/p/DecImBCjYXW/embed/',
    viewsCount: '118.6K',
    duration: '0:52',
    doctor: 'Dt. Büşra Tomo',
    doctorRole: {
      en: 'Specialist Prosthodontist & Implantologist',
      de: 'Fachzahnärztin für Prothetik & Implantologie',
      ru: 'Специалист-ортопед и имплантолог',
      fr: 'Spécialiste en Prothèse Dentaire & Implantologie',
      ar: 'أخصائية الاستعاضة السنية وزراعة الأسنان',
    },
    title: {
      en: 'Digital Implantology & Precision Surgical Protocol • Dent Aktif Global',
      de: 'Digitale Implantologie & Chirurgisches Protokoll • Dent Aktif Global',
      ru: 'Цифровая имплантология и хирургический протокол • Dent Aktif Global',
      fr: 'Implantologie Digitale & Protocole Chirurgical • Dent Aktif Global',
      ar: 'زراعة الأسنان الرقمية والبروتوكول الجراحي الدقيق • دنت أكتيف',
    },
    caption: {
      en: 'State-of-the-art computer-guided surgical technology and same-day dental restoration protocol.',
      de: 'Modernste computernavigierte Implantation und Sofortversorgungsprotokoll.',
      ru: 'Современная компьютерная навигация и протоколы немедленной нагрузки при имплантации.',
      fr: 'Chirurgie implantaire guidée par ordinateur de pointe et réhabilitation immédiate.',
      ar: 'أحدث تقنيات الزراعة الموجهة حاسوبياً وبروتوكول التعويض السني الفوري.',
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
    doctor: 'Dent Aktif In-House Laboratory',
    doctorRole: {
      en: 'Master Dental Technicians & 5-Axis Milling Team',
      de: 'Zahntechnikermeister & 5-Achs CAD/CAM Team',
      ru: 'Мастера зубные техники и команда 5-осевого CAD/CAM фрезерования',
      fr: 'Maîtres Prothésistes & Équipe d\'Usinage 5 Axes CAD/CAM',
      ar: 'كادر خبراء مختبر الخزف ووحدات النحت الرقمي خماسي المحاور',
    },
    title: {
      en: 'In-House CAD/CAM Robotics & German Zirconia Crafting',
      de: 'In-House CAD/CAM Robotik & Deutsche Zirkon-Manufaktur',
      ru: 'Собственная роботизированная лаборатория CAD/CAM и немецкий цирконий',
      fr: 'Robotique CAD/CAM Interne & Façonnage de la Zircone Allemande',
      ar: 'الروبوتات الرقمية CAD/CAM وتصنيع تيجان الزيركون الألمانية داخل المستشفى',
    },
    caption: {
      en: 'Exclusive look inside our digital dental laboratory. Individual milling with sub-millimeter anatomical perfection.',
      de: 'Exklusiver Einblick in unser digitales Meisterlabor: Fräsen mit mikrometrischer Präzision.',
      ru: 'Эксклюзивный взгляд на работу собственной цифровой лаборатории с микроскопической точностью.',
      fr: 'Découvrez la précision extrême de notre laboratoire dentaire robotisé interne.',
      ar: 'نظرة حصرية على مختبرنا الرقمي الخاص ونحت الأسنان بدقة ميكرونية متناهية.',
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
    doctor: 'VIP Patient Hospitality Team',
    doctorRole: {
      en: 'International Concierge & Patient Coordinators',
      de: 'Internationaler Concierge & Betreuungsservice',
      ru: 'Международная служба заботы и трансфера',
      fr: 'Service Conciergerie Internationale & Accueil',
      ar: 'فريق الاستقبال الفندقي والمرافقة الدولية VIP',
    },
    title: {
      en: 'VIP Patient Journey: Airport to 5-Star Hotel in Istanbul',
      de: 'VIP-Patientenreise: Vom Flughafen ins 5-Sterne-Hotel in Istanbul',
      ru: 'Премиальный путь пациента: из аэропорта в пятизвездочный отель в Стамбуле',
      fr: 'Séjour VIP pour Patient : De l\'Aéroport à l\'Hôtel 5 Étoiles à Istanbul',
      ar: 'رحلة المريض الفاخرة: من مطار إسطنبول إلى الفندق 5 نجوم',
    },
    caption: {
      en: 'Private chauffeured Mercedes transfer, beachfront hotel accommodation, and multilingual care.',
      de: 'Privater Mercedes-Fahrdienst, Hotelunterkunft und muttersprachliche Rundumbetreuung.',
      ru: 'Персональный трансфер на Mercedes, проживание в отеле и заботливое сопровождение.',
      fr: 'Transfert privé en Mercedes, hébergement en hôtel de luxe et accompagnement dédié.',
      ar: 'نقل خاص بسيارات مرسيدس الفارهة وإقامة فندقية راقية ومرافقة ترجمة متكاملة.',
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
