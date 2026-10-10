export interface ProcedureDetail {
  title: string;
  description: string;
  badge?: string;
}

export interface CareerMilestone {
  year: string;
  role: string;
  organization: string;
  details: string;
}

export interface DoctorFAQ {
  question: string;
  answer: string;
}

export interface DoctorDetail {
  id: string;
  name: string;
  title: string;
  academicTitle: string;
  specialty: string;
  image: string;
  experience: string;
  birthAndOrigin?: string;
  licenseId: string;
  registrationNumber: string;
  languages: string[];
  department: string;
  clinicLocation: string;
  quote: string;
  bio: string;
  extendedBio: string[];
  education: Array<{ degree: string; institution: string; year: string; details?: string }>;
  careerTimeline: CareerMilestone[];
  clinicalApproach: string[];
  specializedProcedures: ProcedureDetail[];
  specializations: string[]; // Geriye dönük uyumluluk için
  certifications: string[];
  scientificMemberships: string[];
  treatedCases: string;
  consultationMsg: string;
  faq: DoctorFAQ[];
}

export const DOCTORS_DATA: Record<string, DoctorDetail> = {
  'abdullah-omur': {
    id: 'abdullah-omur',
    name: 'Dt. Abdullah Ömür',
    title: 'Dentaktif Kurucusu & Klinik Direktörü | Ağız Cerrahisi & İmplantoloji',
    academicTitle: 'Diş Hekimi • İmplantoloji ve Ağız Cerrahisi Direktörü',
    specialty: 'İleri Cerrahi İmplantoloji, Dijital Rehberli Cerrahi & Tam Çene Rekonstrüksiyonu',
    image: '/images/doctors/dt-abdullah-omur.png',
    experience: '10+ Yıl Cerrahi ve Klinik Direktörlük Deneyimi',
    birthAndOrigin: '1988, İstanbul',
    licenseId: 'T.C. Sağlık Bakanlığı Ruhsatlı Diş Hekimi',
    registrationNumber: 'İDO / TDB Sicil Kayıtlı Hekim',
    languages: ['Türkçe', 'İngilizce'],
    department: 'Ağız, Diş ve Çene Cerrahisi & İleri İmplantoloji Departmanı',
    clinicLocation: 'Dentaktif Ağız ve Diş Sağlığı Polikliniği (Bayrampaşa, İstanbul)',
    quote: 'Hassas cerrahi implantoloji yalnızca osseointegrasyon sağlamak değil; hastanın çiğneme fonksiyonunu, yüz estetiğini ve ömür boyu sürecek özgüvenini mikron düzeyinde dijital navigasyon ile yeniden inşa etmektir.',
    bio: '2014 yılında Yeditepe Üniversitesi Diş Hekimliği Fakültesi’nden mezun olan Dt. Abdullah Ömür, 2017 yılının sonlarında Dentaktif Ağız ve Diş Sağlığı Polikliniği’ni kurmuştur. Bilgisayar destekli dikişsiz rehberli implant cerrahisi, All-on-4/6 tam çene rekonstrüksiyonları ve ileri kemik ogmentasyonu alanlarında 10 yılı aşkın süredir lider cerrah olarak görev yapmaktadır.',
    extendedBio: [
      '1988 İstanbul doğumlu olan Dt. Abdullah Ömür, lisans eğitimini Türkiye’nin öncü diş hekimliği fakültelerinden Yeditepe Üniversitesi Diş Hekimliği Fakültesi’nde 2014 yılında başarıyla tamamlamıştır. Mezuniyetinin ardından İstanbul’un saygın özel kliniklerinde estetik diş hekimliği, ileri ağız cerrahisi ve restoratif tedaviler alanlarında yoğun klinik vaka tecrübesi edinmiştir.',
      '2017 yılının sonlarına doğru, en yeni dijital diş hekimliği teknolojilerini ve uluslararası hasta bakım standartlarını tek çatı altında toplama vizyonuyla Dentaktif Ağız ve Diş Sağlığı Polikliniği’ni (Dent Aktif Clinic Global) kurmuştur. Bayrampaşa’daki modern poliklinik binasında ve Levent cerrahi merkezinde hem yerli hem de yurt dışından (İngiltere, Almanya, ABD, İsviçre vb.) gelen binlerce hastaya yüksek standartlı cerrahi çözümler sunmaktadır.',
      'Klinik uygulamalarında 3D Morita CBCT düşük radyasyonlu hacimsel tomografi ve CAD/CAM cerrahi rehber plakalarını (surgical guide) entegre eden Dt. Ömür, "flapless" (dikişsiz / neştersiz) anahtar deliği implant cerrahisi uygulamaktadır. Bu yöntem hastaların operasyon sonrası ödem, ağrı ve kanama yaşamadan aynı gün içinde normal hayatlarına ve geçici sabit protezlerine kavuşmalarını sağlamaktadır.',
      'Özellikle Megagen AnyRidge ve Swiss Straumann® SLA/SLActive implant sistemleri üzerine ileri cerrahi uzmanlığı bulunan Dt. Abdullah Ömür, ciddi kemik erimesi bulunan hastalarda sinüs tabanı yükseltme (sinus lift), otojen kemik greftleme ve All-on-4 / All-on-6 anında yükleme protokollerini bizzat yönetmektedir.'
    ],
    education: [
      {
        degree: 'Diş Hekimliği Lisans Eğitimi (D.D.S. / B.D.S.)',
        institution: 'Yeditepe Üniversitesi Diş Hekimliği Fakültesi',
        year: '2009 – 2014',
        details: 'İngilizce eğitim müfredatı, ileri cerrahi stajları ve protetik vaka uygulamaları'
      },
      {
        degree: 'İleri Cerrahi İmplantoloji & Kemik Ogmentasyonu Master Eğitimi',
        institution: 'Straumann Clinical Training & ITI Education Programs',
        year: '2016 – 2018',
        details: 'Kemik greftleme teknikleri, lateral & krestal sinüs lift ve yumuşak doku yönetimi'
      },
      {
        degree: 'Dijital Kılavuzlu Cerrahi (Computer-Guided Flapless Surgery) Sertifikasyonu',
        institution: 'Megagen International Academy & 3D Guided Implantology',
        year: '2019',
        details: 'Surgical guide tasarımı, mikron düzeyinde 3D implant navigasyonu'
      },
      {
        degree: 'All-on-4 & All-on-6 Anında Yüklemeli Tam Çene Cerrahi Protokolleri',
        institution: 'European Association for Osseointegration (EAO) İleri Kursları',
        year: '2021 – 2023',
        details: 'Açılı implant yerleşimi, biyomekanik yük dağılımı ve 48 saatte sabit geçici protez teslimi'
      }
    ],
    careerTimeline: [
      {
        year: '2014 – 2017',
        role: 'Ağız Cerrahisi ve İmplantoloji Hekimi',
        organization: 'Özel Diş Hastaneleri ve Klinik Grupları (İstanbul)',
        details: 'Kompleks gömülü diş çekimleri, implant cerrahisi ve restoratif tedaviler'
      },
      {
        year: '2017 – Günümüz',
        role: 'Kurucu Hekim & Başhekim (Klinik Direktörü)',
        organization: 'Dentaktif Ağız ve Diş Sağlığı Polikliniği (Dent Aktif Global)',
        details: 'Merkezin kuruluşu, uluslararası sağlık turizmi cerrahi departmanı yönetimi ve in-house dijital laboratuvar liderliği'
      },
      {
        year: '2018 – Günümüz',
        role: 'Uluslararası Cerrahi Vaka Konsültanı',
        organization: 'Dent Aktif Global International Patient Services',
        details: 'İngiltere, Avrupa ve Orta Doğu’dan gelen 6.500+ cerrahi vakanın dijital tomografi planlaması ve uygulanması'
      }
    ],
    clinicalApproach: [
      'Minimal İnvaziv & Dikişsiz Yaklaşım: Neşter ve kesi yerine bilgisayar destekli rehber şablonlarla doğrudan implant yuvası açılarak doku hasarı en aza indirilir.',
      '3 Boyutlu Dijital Planlama: Tedaviye başlamadan önce hastanın çene kemiği 3D tomografi ile taranır, sinir hatları ve kemik yoğunluğu sanal ortamda simüle edilir.',
      'Ağrısız Cerrahi & Hasta Konforu: Lokal anestezi ve gerektiğinde sedasyon destekli konforlu cerrahi protokoller uygulanır.',
      'Aynı Gün Sabit Diş (Immediate Loading): Tam dişsiz çenelerde kemik kalitesi uygun olan vakalarda implant yapıldığı gün sabit geçici dişler takılır.'
    ],
    specializedProcedures: [
      {
        title: 'Bilgisayar Destekli Rehberli İmplant Cerrahisi (Guided Surgery)',
        description: '3D Morita tomografi verileri ile hastaya özel üretilen cerrahi kılavuz plakalar sayesinde implantlar milimetrenin onda biri hassasiyetle yerleştirilir. Kesi ve dikiş ihtiyacı ortadan kaldırılır.',
        badge: 'En Çok Tercih Edilen'
      },
      {
        title: 'All-on-4 ve All-on-6 Tam Çene Sabit Protez Cerrahisi',
        description: 'Hiç dişi olmayan veya mevcut dişleri çekilmek zorunda olan hastalarda 4 veya 6 adet titanyum implant üzerine vidalı hibrit sabit porselen köprülerin 48-72 saatte uygulanması.',
        badge: 'Cerrahi Uzmanlık'
      },
      {
        title: 'Sinüs Tabanı Yükseltme (Sinus Lift - Açık & Kapalı)',
        description: 'Üst çene arka bölgede eriyen kemik hacmini geri kazanmak amacıyla sinüs zarının hassas şekilde yükseltilerek biyolojik kemik tozu (greft) ile doldurulması işlemi.',
        badge: 'İleri Cerrahi'
      },
      {
        title: 'Otojen & Sentetik Kemik Ogmentasyonu (GBR)',
        description: 'İmplant için yetersiz kalan kret genişliklerinde membran ve kemik greftleri kullanılarak yeni kemik dokusu oluşumunun sağlanması.',
        badge: 'Doku Rejenerasyonu'
      },
      {
        title: 'Piezoelektrik Ultrasonik Cerrahi ile Atravmatik Çekim',
        description: 'Ultrasonik ses dalgalarıyla çalışan piezo cerrahi cihazı kullanılarak çevre kemik ve diş etine zarar vermeden gömülü 20 yaş dişlerinin ve köklerin çıkarılması.',
        badge: 'Düşük Travma'
      },
      {
        title: 'Megagen AnyRidge & Straumann Swiss İmplant Entegrasyonu',
        description: 'Dünyanın en yüksek başarı oranına sahip tescilli implant markalarıyla ömür boyu uluslararası pasaport garantili implant uygulamaları.',
        badge: 'Ömür Boyu Garanti'
      }
    ],
    specializations: [
      'Bilgisayar Destekli 3D Rehberli İmplant Cerrahisi',
      'All-on-4 ve All-on-6 Tam Çene Sabit Hibrit Köprüler',
      'Açık ve Kapalı Sinüs Tabanı Yükseltme (Sinus Lift)',
      'İleri Kemik Greftleme & Yönlendirilmiş Doku Rejenerasyonu',
      'Piezoelektrik Cerrahi ile Ağrısız 20 Yaş Dişi Operasyonları',
      'Megagen AnyRidge & Swiss Straumann SLA/SLActive İmplantları'
    ],
    certifications: [
      'T.C. Sağlık Bakanlığı Ruhsatlı Diş Hekimi Diploması & Uzmanlık İzni',
      'International Team for Implantology (ITI) Aktif Üyesi',
      'European Association for Osseointegration (EAO) Klinik Katılımcısı',
      'Straumann® Platinum Clinical Excellence Sağlayıcısı',
      'Megagen International Guided Surgery Sertifikalı Klinisyeni',
      'İleri Yaşam Desteği ve Sedasyon Güvenliği Sertifikasyonu'
    ],
    scientificMemberships: [
      'Türk Dişhekimleri Birliği (TDB)',
      'İstanbul Dişhekimleri Odası (İDO)',
      'International Team for Implantology (ITI - Basel / İsviçre)',
      'European Association for Osseointegration (EAO)',
      'Ağız ve Çene Yüz Cerrahisi Birliği Derneği (AÇBİD)'
    ],
    treatedCases: '6.500+ Başarılı İmplant Vakası',
    consultationMsg: 'Merhaba Dentaktif! Klinik Direktörü Dt. Abdullah Ömür ile implant ve cerrahi konsültasyonu planlamak istiyorum.',
    faq: [
      {
        question: 'İmplant operasyonu sırasında ağrı hisseder miyim?',
        answer: 'Hayır. Gelişmiş lokal anestezi teknikleri ve bilgisayar destekli cerrahi kılavuzlar sayesinde operasyon tamamen ağrısız geçer. Hastalarımız sadece operasyon esnasında hafif bir dokunma hissi olduğunu belirtmektedir.'
      },
      {
        question: 'Kemik erimem çok fazlaysa yine de implant yaptırabilir miyim?',
        answer: 'Evet. Dt. Abdullah Ömür’ün uzmanlık alanı olan sinüs lifting (sinüs tabanı yükseltme) ve yönlendirilmiş kemik rejenerasyonu (greftleme) sayesinde ileri derecede kemik kaybı olan çenelerde dahi implant için sağlam kemik altyapısı oluşturulmaktadır.'
      },
      {
        question: 'Yurt dışından geliyorum, All-on-4 tedavisi kaç gün sürer?',
        answer: 'All-on-4 / All-on-6 tedavilerinde operasyon günü implantlar yerleştirilir ve 48-72 saat içerisinde in-house laboratuvarımızda üretilen sabit geçici dişler vidalanır. Toplamda 5-7 günlük bir İstanbul seyahati ilk aşama için yeterlidir.'
      }
    ]
  },

  'berru-savur': {
    id: 'berru-savur',
    name: 'Dt. Berru Savur',
    title: 'Estetik ve Protetik Diş Hekimi | Biyomimetik Restorasyon Uzmanı',
    academicTitle: 'Diş Hekimi • Estetik ve Protetik Restorasyonlar',
    specialty: 'Kapsamlı Gülüş Dönüşümleri, Katana™ Zirkonyum & Biyomimetik Diş Hekimliği',
    image: '/images/doctors/dt-berru-savur.webp',
    experience: '5+ Yıl Estetik, Protetik ve Klinik Restorasyon Deneyimi',
    birthAndOrigin: '1996, Kayseri',
    licenseId: 'T.C. Sağlık Bakanlığı Ruhsatlı Diş Hekimi',
    registrationNumber: 'İDO / TDB Sicil Kayıtlı Hekim',
    languages: ['Türkçe', 'İngilizce'],
    department: 'Estetik, Protetik ve Restoratif Diş Hekimliği Departmanı',
    clinicLocation: 'Dentaktif Ağız ve Diş Sağlığı Polikliniği (Bayrampaşa, İstanbul)',
    quote: 'Her gülüş dönüşümü biyolojik doku dengesine saygı duymalıdır. Gerçek estetik diş hekimliği, doğal diş minesinin canlılığını korurken en yüksek ışık geçirgenliği ve yüz harmonisini yakalamaktır.',
    bio: '1996 doğumlu olan Dt. Berru Savur, lise eğitimini TED Kayseri Koleji’nde burslu tamamladıktan sonra 2020 yılında Biruni Üniversitesi Diş Hekimliği Fakültesi’nden mezun olmuştur. Sarıyer ADSM deneyiminin ardından Dentaktif ekibine katılmış; biyomimetik restorasyonlar, Katana™ zirkonyum kaplamalar ve porselen inley/onley uygulamalarında uzmanlaşmıştır.',
    extendedBio: [
      'Dt. Berru Savur, 1996 yılında doğmuş ve lise öğrenimini üstün akademik başarı bursuyla TED Kayseri Koleji’nde tamamlamıştır. Diş hekimliği lisans eğitimini 2020 yılında Biruni Üniversitesi Diş Hekimliği Fakültesi’nde başarı derecesiyle bitirmiştir.',
      'Mezuniyetinin ilk yıllarında Sarıyer Ağız ve Diş Sağlığı Merkezi bünyesinde görev yaparak geniş hasta kitlelerinde protetik rehabilitasyonlar, kanal tedavisi görmüş dişlerin post-kor restorasyonları ve estetik kaplamalar üzerine kapsamlı klinik tecrübe edinmiştir.',
      'Genç diş hekimliği kariyerinde Straumann Young Professionals platformu ve Medentika DTalks gibi prestijli bilimsel söyleşi ve vaka tartışma panellerine davet edilmiş, protetik diş hekimliğinde kanıta dayalı ve etik tedavi yaklaşımlarını savunmuştur.',
      'Dentaktif bünyesinde özellikle biyomimetik diş hekimliği prensiplerini uygulamaktadır. Diş dokusunu gereksiz aşındırmadan koruyan, Japon Kuraray Noritake Katana™ çok katmanlı monolitik zirkonyum kronlar, porselen onleyler ve lazer destekli diş eti simetrisi (pembe estetik) alanlarında klinik çalışmalarını sürdürmektedir.'
    ],
    education: [
      {
        degree: 'Lise Öğrenimi (Üstün Akademik Başarı Bursu)',
        institution: 'TED Kayseri Koleji',
        year: '2010 – 2014',
        details: 'Analitik bilimler ve İngilizce ağırlıklı akademik eğitim'
      },
      {
        degree: 'Diş Hekimliği Lisans Eğitimi (B.D.S.)',
        institution: 'Biruni Üniversitesi Diş Hekimliği Fakültesi',
        year: '2015 – 2020',
        details: 'Protez, restoratif ve estetik klinik stajları, onur derecesi'
      },
      {
        degree: 'Klinik Protetik ve Restoratif Hizmet Deneyimi',
        institution: 'Sarıyer Ağız ve Diş Sağlığı Merkezi',
        year: '2020 – 2022',
        details: 'Yüksek vaka yoğunluğunda protetik ve restoratif tedavi yönetimi'
      },
      {
        degree: 'Biyomimetik Restoratif Diş Hekimliği & CAD/CAM Zirkonyum Masterclass',
        institution: 'Straumann Young Professionals & Katana Dental Academy',
        year: '2022 – 2023',
        details: 'Adezyon protokolleri, monolitik zirkonyum ışık geçirgenliği ve mikro tabakalama'
      }
    ],
    careerTimeline: [
      {
        year: '2020 – 2022',
        role: 'Klinik Diş Hekimi',
        organization: 'Sarıyer Ağız ve Diş Sağlığı Merkezi (İstanbul)',
        details: 'Geniş spektrumlu protetik, estetik ve konservatif diş tedavileri'
      },
      {
        year: '2022',
        role: 'Konuk Klinisyen & Panelist',
        organization: 'Medentika DTalks & Straumann Genç Hekimler Sempozyumu',
        details: 'Protetik diş hekimliğinde yeni nesil materyaller ve estetik vaka sunumları'
      },
      {
        year: '2022 – Günümüz',
        role: 'Estetik ve Protetik Diş Hekimi',
        organization: 'Dentaktif Ağız ve Diş Sağlığı Polikliniği',
        details: 'Çok üyeli gülüş tasarımları, monolitik zirkonyum kaplamalar ve biyomimetik tedaviler'
      }
    ],
    clinicalApproach: [
      'Biyomimetik Bütünlük: Doğal diş minesinin elastikiyet modülünü ve optik özelliklerini taklit eden yüksek dayanımlı seramikler kullanılır.',
      'Konservatif Mine Koruması: Diş dokusu maksimum düzeyde korunur; geleneksel aşırı kesimler yerine mikro preparasyon tercih edilir.',
      'Yüz ve Dudak Morfolojisi Uyumu: Gülüş hattı tasarlanırken ten rengi, göz çizgisi, dudak kavisi ve cinsiyet karakteristikleri dikkate alınır.',
      'In-House Master Seramist İletişimi: Laboratuvar teknisyenleriyle koltuk başında doğrudan renk ve form analizi yapılır.'
    ],
    specializedProcedures: [
      {
        title: 'Kuraray Katana™ Çok Katmanlı Zirkonyum Restorasyonlar',
        description: 'Doğal diş minesindeki renk geçişini (kole bölgesinden kesici kenara kadar) 4 farklı translasenslik katmanıyla sağlayan biyouyumlu, metal desteksiz zirkonyum kronlar.',
        badge: 'Yüksek Estetik'
      },
      {
        title: 'Biyomimetik İndirekt Porselen İnley / Onley / Tabletops',
        description: 'Büyük dolgulu veya kırık arka dişlerde dişi küçültüp kaplamak yerine, sadece eksik kısmı mikron hassasiyetinde porselenle doldurarak dişi koruyan adeziv restorasyonlar.',
        badge: 'Diş Koruyucu'
      },
      {
        title: 'Lazer Destekli Gingivektomi & Pembe Estetik Simetrisi',
        description: 'Diş eti gülüşü (gummy smile) veya asimetrik diş eti seviyelerinde diş etini diyot lazer ile kanamasız ve dikişsiz olarak milimetrik şekillendirme işlemi.',
        badge: 'Kanamasız'
      },
      {
        title: 'Kapsamlı Çok Üyeli Estetik Gülüş Dönüşümleri',
        description: 'Ön bölge çapraşıklıkları, aralıklar (diastema) ve aşınmış dişlerin 10-20 üyeli zirkonyum veya porselen kombinasyonları ile yeniden fonksiyonel ve estetik inşası.',
        badge: 'Tam Dönüşüm'
      },
      {
        title: 'Adeziv Estetik Kompozit Bonding & Kırık Diş Restorasyonu',
        description: 'Tek seansta doğal diş renginde mikro-hibrit estetik kompozitler katmanlanarak ön diş aralıklarının ve kırıklarının giderilmesi.',
        badge: 'Hızlı Sonuç'
      }
    ],
    specializations: [
      'Katana™ Çok Katmanlı Monolitik Zirkonyum Kaplamalar',
      'Biyomimetik Porselen İnley, Onley ve Overlay Restorasyonları',
      'Lazerle Diş Eti Şekillendirme (Gingivektomi - Pembe Estetik)',
      'Konservatif Adeziv Diş Hekimliği & Kompozit Bonding',
      'Kapsamlı Tam Çene Estetik ve Fonksiyonel Rehabilitasyon',
      'Şeffaf Plak Sonrası Estetik Protetik Tamamlamalar'
    ],
    certifications: [
      'T.C. Sağlık Bakanlığı Ruhsatlı Diş Hekimi Diploması',
      'İstanbul Dişhekimleri Odası (İDO) Tescilli Üyesi',
      'Straumann Young Professionals Forum Aktif Katılımcısı',
      'Biyomimetik Estetik Restorasyonlar İleri Düzey Sertifikası',
      'Lazer Güvenliği ve Yumuşak Doku Mikro-Cerrahisi Sertifikası',
      'CAD/CAM Monolitik Seramikler Klinik Uzmanlık Belgesi'
    ],
    scientificMemberships: [
      'Türk Dişhekimleri Birliği (TDB)',
      'İstanbul Dişhekimleri Odası (İDO)',
      'Estetik Diş Hekimliği Akademisi Derneği (EDAD)',
      'Straumann Genç Klinisyenler İletişim Ağı'
    ],
    treatedCases: '3.500+ Başarılı Estetik & Protetik Vaka',
    consultationMsg: 'Merhaba Dentaktif! Dt. Berru Savur ile zirkonyum ve kapsamlı gülüş dönüşümü konsültasyonu almak istiyorum.',
    faq: [
      {
        question: 'Zirkonyum kaplama ile metal destekli kaplama arasındaki fark nedir?',
        answer: 'Zirkonyum kaplamalar tamamen metal içermez, biyouyumludur ve diş etinde morarma ya da alerji yapmaz. Işık geçirgenliği doğal dişe çok yakın olduğundan mat değil, canlı ve derinlikli bir görünüm sunar.'
      },
      {
        question: 'Biyomimetik diş hekimliği ne anlama gelir?',
        answer: 'Biyomimetik yaklaşım, dişi gereksiz yere küçülterek kaplamak yerine yalnızca hasarlı dokuyu temizleyip dişe doğal mine ve dentin esnekliğinde seramik parçalar yapıştırmaktır. Dişin canlılığı ve sağlamlığı maksimum düzeyde korunur.'
      },
      {
        question: 'Tedavi sürecinde dişsiz kalır mıyım?',
        answer: 'Kesinlikle hayır. Dişleriniz hazırlandığı aynı seans içerisinde in-house laboratuvarımızda geçici dişleriniz üretilerek takılır; sosyal hayatınıza kesintisiz devam edersiniz.'
      }
    ]
  },

  'berfin-savur': {
    id: 'berfin-savur',
    name: 'Dt. Berfin Savur',
    title: 'Estetik Diş Hekimi | Dijital Gülüş Tasarımı & Porselen Lamina Uzmanı',
    academicTitle: 'Diş Hekimi • Estetik Gülüş Tasarımı ve Laminate Veneer',
    specialty: 'Digital Smile Design (DSD), 0.3mm IPS e.max® Lamineler & Koltuk Başı 3D Mock-Up',
    image: '/images/doctors/dt-berfin-savur.webp',
    experience: 'Estetik Diş Hekimliği & Dijital Gülüş Mimarisi Uzmanı',
    birthAndOrigin: 'İstanbul',
    licenseId: 'T.C. Sağlık Bakanlığı Ruhsatlı Diş Hekimi',
    registrationNumber: 'İDO / TDB Sicil Kayıtlı Hekim',
    languages: ['Türkçe', 'İngilizce'],
    department: 'Estetik Gülüş Tasarımı, Veneer ve Dijital Diş Hekimliği Departmanı',
    clinicLocation: 'Dentaktif Ağız ve Diş Sağlığı Polikliniği (Bayrampaşa, İstanbul)',
    quote: 'Mükemmel bir gülüş tasarımı tek tip ya da yapay olamaz. Hastanın dudak hareketlerini, yüzün altın oranını ve mimiklerini analiz ederek doğal diş minesinin organik ışıltısını yansıtan kişiye özel laminalar üretiyoruz.',
    bio: 'İstanbul Dişhekimleri Odası (İDO) tescilli üyesi olan Dt. Berfin Savur, Doğu Akdeniz Üniversitesi Diş Hekimliği Fakültesi mezunudur. Digital Smile Design (DSD) protokolleri, 0.3 mm ultra-ince Ivoclar IPS e.max® porselen laminalar ve tedavi öncesi ağız içi 3D mock-up simülasyonları konusunda uzmanlaşmıştır.',
    extendedBio: [
      'Dt. Berfin Savur, Doğu Akdeniz Üniversitesi Diş Hekimliği Fakültesi’nden mezun olduktan sonra mesleki pratiğini bütünüyle estetik diş hekimliği, gülüş tasarımı ve minimal invaziv seramik uygulamalarına odaklamıştır.',
      'İstanbul Dişhekimleri Odası (İDO) ve Türk Dişhekimleri Birliği (TDB) resmi kayıtlarında yer alan Dt. Berfin Savur, uluslararası sağlık turizmi kapsamında İngiltere, İrlanda, Almanya ve Amerika başta olmak üzere dünyanın dört bir yanından gelen yüzlerce hastanın gülüş tasarımını başarıyla gerçekleştirmiştir.',
      'Klinik protokolünün temel taşı "Digital Smile Design (DSD)" sistemidir. Diş minesine herhangi bir müdahale yapılmadan önce hastanın yüksek çözünürlüklü yüz videoları ve 3D ağız içi taramaları alınır. Özel yazılımlarla tasarlanan gülüş, 3D reçine prova (mock-up) yöntemiyle hastanın ağzına birebir aktarılır. Hasta, tedavisinin nihai sonucunu henüz tedaviye başlamadan kendi ağzında görür, konuşur ve onaylar.',
      'Dentaktif’in bünyesindeki 5 eksenli Alman CAD/CAM cihazları ve usta seramistleriyle birlikte çalışan Dt. Berfin Savur, dişi kesmeden yalnızca 0.3 mm mikro aşındırma gerektiren Ivoclar Vivadent IPS e.max® porselen laminelerde kişiye özel incisal şeffaflık ve floresans efektleri tasarlamaktadır.'
    ],
    education: [
      {
        degree: 'Diş Hekimliği Lisans Eğitimi (B.D.S.)',
        institution: 'Doğu Akdeniz Üniversitesi Diş Hekimliği Fakültesi',
        year: '2019 – 2024',
        details: 'Estetik diş hekimliği, protetik tedaviler ve dijital tarama sistemleri'
      },
      {
        degree: 'Digital Smile Design (DSD) Uluslararası Master Kursu',
        institution: 'DSD Academy & Estetik Diş Hekimliği Programları',
        year: '2024',
        details: 'Yüz altın oran analizi, dinamik video kaydı ve dijital gülüş planlama'
      },
      {
        degree: 'Ultra-İnce Porselen Laminate Veneer Master Sertifikasyonu',
        institution: 'Ivoclar Vivadent International Education Center',
        year: '2024 – 2025',
        details: '0.3mm mikro preparasyon, adeziv simantasyon ve mikro tabakalama teknikleri'
      },
      {
        degree: 'Dijital Dental Fotoğrafçılık & Spektrofotometrik Renk Seçimi',
        institution: 'Estetik Diş Hekimliği Akademisi Derneği (EDAD)',
        year: '2025',
        details: 'Polarize filtreli makro fotoğrafçılık ve diş minesi ışık kırılma analizi'
      }
    ],
    careerTimeline: [
      {
        year: '2024',
        role: 'Estetik Diş Hekimliği Asistanlığı & Klinik Vaka Yönetimi',
        organization: 'İleri Estetik Diş Klinikleri (İstanbul)',
        details: 'Dijital ölçü, intraoral 3D tarama ve minimal invaziv kompozit restorasyonlar'
      },
      {
        year: '2024 – Günümüz',
        role: 'Estetik Diş Hekimi & Dijital Gülüş Mimarı',
        organization: 'Dentaktif Ağız ve Diş Sağlığı Polikliniği',
        details: 'Yurt içi ve uluslararası hastalar için DSD analizleri, IPS e.max® lamina ve Hollywood Smile tasarımları'
      }
    ],
    clinicalApproach: [
      'Görmeden Başlama Prensibi (3D Mock-Up): Hasta tedavisinin bitmiş halini henüz dişlerine dokunulmadan kendi ağzında fiziksel olarak dener ve onaylar.',
      'Minimal İnvaziv (0.3mm Mine Koruma): Diş kesilmez, küçültülmez. Yalnızca yaprak porselenin oturması için 0.3-0.5 mm mikro yüzey düzeltmesi yapılır.',
      'Kişiselleştirilmiş BL Renk Harmonisi: Hollywood beyazlığı talep eden hastalarda dahi yapay opaklık yerine canlı, doğal ışıltılı BL1/BL2 tonları üretilir.',
      'Dijital Konfor: Hastadan bulantı hissi yaratan geleneksel silikon ölçü kaşıkları alınmaz; 3D intraoral dijital optik tarayıcılar kullanılır.'
    ],
    specializedProcedures: [
      {
        title: 'Ivoclar Vivadent IPS e.max® Porselen Lamina Veneerler',
        description: 'Lityum disilikattan üretilen, 0.3mm kalınlığında yaprak porselenler. Doğal mineye kimyasal olarak bağlanır ve ömür boyu renk değiştirmez, leke tutmaz.',
        badge: 'Hollywood Smile'
      },
      {
        title: 'Digital Smile Design (DSD) & Koltuk Başı Canlı Prova',
        description: 'Fotoğraf, video ve 3D ağız içi taramanın birleştirilerek hastanın yüz hatlarına en uygun diş boyu, genişliği ve açısının sanal ortamda tasarlanıp ağza uygulanması.',
        badge: 'Kişiye Özel'
      },
      {
        title: 'Prepless (Sıfır Aşındırma) Kontak Lens Veneerler',
        description: 'Uygun vaka endikasyonlarında diş minesine hiçbir aşındırma yapılmadan doğrudan diş yüzeyine uygulanan ultra ince seramik laminalar.',
        badge: 'Sıfır Kesim'
      },
      {
        title: 'Philips Zoom® WhiteSpeed Profesyonel Klinik Beyazlatma',
        description: 'LED ışık teknolojisiyle 45 dakikalık tek seansta diş rengini 6 ila 8 tona kadar güvenle açan, mineye zarar vermeyen klinik tipi beyazlatma.',
        badge: 'Tek Seans'
      },
      {
        title: 'Dudak ve Yüz Estetiği ile Uyumlu Gülüş Hattı Kalibrasyonu',
        description: 'Gülümseme sırasında üst dişlerin alt dudak kavisini takip ettiği, diş eti simetrisinin altın oranla dengelendiği estetik mimari planlama.',
        badge: 'Altın Oran'
      }
    ],
    specializations: [
      'Digital Smile Design (DSD) 3D Canlı Ağız İçi Prova Protokolü',
      'Ivoclar Vivadent IPS e.max® Ultra-İnce Porselen Laminalar',
      '0.3mm Mikro Preparasyonlu & Prepless Seramik Veneerler',
      'Hollywood Smile & Doğal Beyazlık Gülüş Dönüşümleri',
      'İntraoral 3D Dijital Optik Tarayıcı ile Ölçüsüz İş Akışı',
      'Philips Zoom® WhiteSpeed Klinik Tipi Lazerli Beyazlatma'
    ],
    certifications: [
      'T.C. Sağlık Bakanlığı Ruhsatlı Diş Hekimi Diploması',
      'İstanbul Dişhekimleri Odası (İDO) Kayıtlı Üyesi',
      'Türk Dişhekimleri Birliği (TDB) Tescilli Hekimi',
      'Digital Smile Design (DSD) Resmi Klinisyeni',
      'Ivoclar IPS e.max® Sertifikalı Estetik Porselen Hekimi',
      'İleri Dental Fotoğrafçılık ve Renk Spektrometrisi Sertifikası'
    ],
    scientificMemberships: [
      'Türk Dişhekimleri Birliği (TDB)',
      'İstanbul Dişhekimleri Odası (İDO)',
      'Estetik Diş Hekimliği Akademisi Derneği (EDAD)'
    ],
    treatedCases: '3.800+ Başarılı Veneer & Gülüş Tasarımı',
    consultationMsg: 'Merhaba Dentaktif! Dt. Berfin Savur ile Digital Smile Design ve porselen lamina veneer konsültasyonu planlamak istiyorum.',
    faq: [
      {
        question: 'Porselen lamina için dişlerimin çok kesilmesi gerekir mi?',
        answer: 'Hayır. Geleneksel kaplamaların aksine laminalarda diş kesilmez veya küçültülmez. Yalnızca yaprak porselenin kalınlığı kadar (ortalama 0.3 - 0.5 mm) mine yüzeyinde mikron düzeyinde düzeltme yapılır. Uygun vakalarda hiç aşındırma yapmadan (prepless) uygulama mümkündür.'
      },
      {
        question: 'Tedaviye başlamadan önce yeni gülüşümü görebilir miyim?',
        answer: 'Kesinlikle evet. Dt. Berfin Savur’un uyguladığı DSD (Digital Smile Design) ve 3D Mock-Up teknolojisi sayesinde, dişlerinize hiçbir müdahale yapılmadan önce yeni gülüşünüzün reçine modeli ağzınıza takılır; aynada görerek karar verirsiniz.'
      },
      {
        question: 'Laminalar zamanla sararır mı veya kahve/çaydan lekelenir mi?',
        answer: 'Hayır. Ivoclar IPS e.max® cam seramik porselen gözeneksiz ve pürüzsüz bir yapıya sahiptir. Kahve, çay veya sigara kaynaklı lekelere karşı tamamen dirençlidir ve rengini ömür boyu korur.'
      }
    ]
  },

  'busra-tomo': {
    id: 'busra-tomo',
    name: 'Dt. Büşra Tomo',
    title: 'Estetik ve Restoratif Diş Hekimi | Doğal Diş Koruma Uzmanı',
    academicTitle: 'Diş Hekimi • Estetik Restorasyonlar ve Koruyucu Diş Hekimliği',
    specialty: 'Estetik Kompozit Laminalar, Zirkonyum Restorasyonlar & CAD/CAM Dijital İş Akışı',
    image: '/images/doctors/dt-busra-tomo.png',
    experience: '6+ Yıl Estetik, Protetik ve Restoratif Klinik Deneyimi',
    birthAndOrigin: '1994, Malatya',
    licenseId: 'T.C. Sağlık Bakanlığı Ruhsatlı Diş Hekimi',
    registrationNumber: 'İDO / TDB Sicil Kayıtlı Hekim',
    languages: ['Türkçe', 'İngilizce'],
    department: 'Estetik, Protetik ve Koruyucu Restoratif Diş Hekimliği Departmanı',
    clinicLocation: 'Dentaktif Ağız ve Diş Sağlığı Polikliniği (Bayrampaşa, İstanbul)',
    quote: 'Bir hastanın kendi doğal diş dokusunu koruyarak estetik bir gülüşe kavuşturmak diş hekimliğinin en değerli başarısıdır. Modern dijital tarama ve biyomateryaller sayesinde en karmaşık vakaları bile doku dostu yöntemlerle çözüyoruz.',
    bio: '1994 Malatya doğumlu olan Dt. Büşra Tomo, 2019 yılında Dicle Üniversitesi Diş Hekimliği Fakültesi’nden mezun olmuştur. 2019–2024 yılları arasında İstanbul’un önde gelen özel cerrahi ve diş kliniklerinde 5 yıl boyunca aralıksız protetik, estetik ve restoratif tedaviler uygulamıştır. 2024 yılından bu yana Dentaktif bünyesinde görev yapmaktadır.',
    extendedBio: [
      '1994 yılında Malatya’da doğan Dt. Büşra Tomo, diş hekimliği eğitimini Dicle Üniversitesi Diş Hekimliği Fakültesi’nde tamamlayarak 2019 yılında başarıyla mezun olmuştur.',
      'Mezuniyetinin hemen ardından İstanbul’a yerleşen Dt. Tomo, 2019–2024 yılları arasında (5 yıl boyunca) İstanbul’daki seçkin özel kliniklerde estetik diş hekimliği, porselen ve kompozit laminalar, zirkonyum kuronlar ve protetik diş tedavileri alanlarında yoğun bir klinik pratik yürütmüştür.',
      '2024 yılı itibarıyla Dentaktif Ağız ve Diş Sağlığı Polikliniği (Dent Aktif Clinic Global) hekim kadrosuna katılan Dt. Büşra Tomo, estetik kompozit laminalar, porselen laminalar, zirkonyum restorasyonlar ve dijital tarama (CAD/CAM) protokolleri üzerine odaklanmaktadır.',
      'Klinik yaklaşımında her zaman doğal diş yapısını korumayı ön planda tutan Dt. Tomo, çürük veya travma nedeniyle madde kaybına uğramış dişleri fiber takviyeli kompozit yapılar ve konservatif estetik kaplamalarla fonksiyonel ve görsel olarak restore etmektedir.'
    ],
    education: [
      {
        degree: 'Diş Hekimliği Lisans Eğitimi (B.D.S.)',
        institution: 'Dicle Üniversitesi Diş Hekimliği Fakültesi',
        year: '2014 – 2019',
        details: 'Protetik diş tedavisi, restoratif ve estetik klinik uygulamaları'
      },
      {
        degree: 'Klinik Estetik & Protetik Diş Hekimliği Deneyimi',
        institution: 'İstanbul Özel Diş Poliklinikleri',
        year: '2019 – 2024',
        details: '5 yıl boyunca kesintisiz protetik, zirkonyum ve lamina vaka yönetimi'
      },
      {
        degree: 'Estetik Kompozit Katmanlama & Anterior Bonding Master Eğitimi',
        institution: 'Restoratif Diş Hekimliği Derneği Eğitim Programı',
        year: '2021 – 2022',
        details: 'Doğal mine-dentin tabakalama teknikleri, optik kırılma indisi eşleme'
      },
      {
        degree: 'İntraoral Dijital Tarama ve CAD/CAM Zirkonyum Sertifikasyonu',
        institution: 'Dijital Diş Hekimliği Akademisi',
        year: '2023 – 2024',
        details: 'Optik tarama sistemleri, monolitik zirkonyum ve seramik frezeleme entegrasyonu'
      }
    ],
    careerTimeline: [
      {
        year: '2019 – 2024',
        role: 'Protetik ve Restoratif Diş Hekimi',
        organization: 'Özel Klinik ve Cerrahi Merkezleri (İstanbul)',
        details: '5 yıl boyunca binlerce hastada zirkonyum kuron, estetik kompozit ve porselen lamina tedavileri'
      },
      {
        year: '2024 – Günümüz',
        role: 'Estetik ve Restoratif Diş Hekimi',
        organization: 'Dentaktif Ağız ve Diş Sağlığı Polikliniği',
        details: 'Estetik laminalar, monolitik zirkonyum, CAD/CAM dijital gülüş restorasyonları ve koruyucu diş hekimliği'
      }
    ],
    clinicalApproach: [
      'Doku Dostu Restorasyon: Sağlıklı diş yapısı maksimum düzeyde korunur; aşırı kesim gerektirmeyen konservatif çözümler üretilir.',
      'CAD/CAM Dijital Hassasiyeti: Dijital tarayıcılar sayesinde sıfır hata toleranslı, diş etiyle kusursuz kenar uyumuna sahip kuronlar üretilir.',
      'Ağrısız & Stresten Uzak Deneyim: Hastanın tedavi sürecini konforlu ve güvenli geçirmesi için empati odaklı yaklaşım benimsenir.',
      'Bütüncül Ağız Sağlığı: Yalnızca dişlerin görünümü değil, çiğneme oklüzyonu ve diş eti biyolojisi birlikte değerlendirilir.'
    ],
    specializedProcedures: [
      {
        title: 'Estetik Kompozit Laminalar & Serbest El Katmanlama',
        description: 'Tek seansta dişlerin ön yüzeyine uygulanan, renk bozukluklarını, aralıkları ve kırıkları anında gideren, dişi kesmeden yapılan adeziv restorasyonlar.',
        badge: 'Tek Seansta Gülüş'
      },
      {
        title: 'Monolitik Zirkonyum ve Porselen Restorasyonlar',
        description: 'Çiğneme kuvvetlerine yüksek direnç gösteren, aynı zamanda ışığı doğal diş gibi geçiren biyouyumlu CAD/CAM zirkonyum kuron ve köprüler.',
        badge: 'Yüksek Dayanıklılık'
      },
      {
        title: 'Dijital İntraoral Tarama & CAD/CAM Ölçü Sistemi',
        description: 'Geleneksel macun ölçülerin yerine ağız içini saniyeler içinde 3 boyutlu tarayan dijital kameralarla mikron hassasiyetinde ölçü alımı.',
        badge: 'Dijital Konfor'
      },
      {
        title: 'Fiber Post & Kor Takviyeli Restoratif Yapılandırma',
        description: 'Ciddi madde kaybına uğramış dişlerin kök kanalından güç alan biyouyumlu fiber postlar ve nano-hibrit kompozitlerle güçlendirilmesi.',
        badge: 'Diş Kurtarma'
      },
      {
        title: 'Konservatif İnley ve Onley Dolgu Tedavileri',
        description: 'Geleneksel dolguların yetersiz kaldığı geniş çürüklerde, laboratuvarda preslenen seramik dolgularla diş anatomisinin orijinal haline döndürülmesi.',
        badge: 'Hassas Anatomi'
      }
    ],
    specializations: [
      'Estetik Kompozit Lamina & Diastema Kapatma (Bonding)',
      'CAD/CAM Destekli Monolitik Zirkonyum Kuron Restorasyonları',
      'Porselen Lamina Veneerler ve Estetik Gülüş Çözümleri',
      '3D İntraoral Dijital Tarayıcı ile Hassas Ölçü Alımı',
      'Fiber Post Destekli Derin Doku ve Diş Kurtarma Restorasyonları',
      'Konservatif Estetik Porselen İnley ve Onley Dolgular'
    ],
    certifications: [
      'T.C. Sağlık Bakanlığı Ruhsatlı Diş Hekimi Diploması',
      'İstanbul Dişhekimleri Odası (İDO) Kayıtlı Üyesi',
      'Türk Dişhekimleri Birliği (TDB) Tescilli Hekimi',
      'Restoratif Diş Hekimliği Estetik Bonding Sertifikası',
      'CAD/CAM Dijital İntraoral Ölçüm Sistemleri Uzmanlığı',
      'Endo-Restoratif Diş Kurtarma Protokolleri Sertifikası'
    ],
    scientificMemberships: [
      'Türk Dişhekimleri Birliği (TDB)',
      'İstanbul Dişhekimleri Odası (İDO)',
      'Restoratif Diş Hekimliği Derneği (RDD)'
    ],
    treatedCases: '5.000+ Başarılı Restoratif & Protetik Tedavi',
    consultationMsg: 'Merhaba Dentaktif! Dt. Büşra Tomo ile estetik kompozit, zirkonyum ve restoratif tedavi konsültasyonu almak istiyorum.',
    faq: [
      {
        question: 'Kompozit lamina (bonding) ile porselen lamina arasındaki fark nedir?',
        answer: 'Kompozit lamina genellikle tek bir seansta, diş hekimi tarafından doğrudan koltuk başında uygulanır ve son derece ekonomiktir. Porselen lamina ise laboratuvarda üretilen cam seramik yapraklar olup renk dayanıklılığı, parlaklığı ve ömrü kompozite göre çok daha uzundur.'
      },
      {
        question: 'Kırık veya aşırı çürümüş bir diş çekilmeden kurtarılabilir mi?',
        answer: 'Evet. Dt. Büşra Tomo’nun uzmanlık alanı olan fiber post takviyeli restorasyonlar ve porselen onleyler sayesinde sadece kökü sağlam kalan dişler dahi çekilmeden uzun yıllar ağızda hizmet edecek şekilde kurtarılabilmektedir.'
      },
      {
        question: 'Ölçü alınırken mide bulantısı yaşar mıyım?',
        answer: 'Kliniğimizde geleneksel macunlu kaşıklar yerine 3D dijital ağız içi kameralar kullanılmaktadır. Tarayıcı dişlerin üzerinde hafifçe gezdirilerek ölçü dijital ekrana yansıtılır, bu sayede bulantı veya rahatsızlık hissi oluşmaz.'
      }
    ]
  }
};

export function getDoctorsList(): DoctorDetail[] {
  return Object.values(DOCTORS_DATA);
}

export function getDoctorDetail(id: string): DoctorDetail | undefined {
  return DOCTORS_DATA[id];
}
