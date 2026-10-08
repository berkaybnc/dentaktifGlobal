# Dent Aktif Global - Tek Sayfalık Sağlık Turizmi Portalı Uygulama Planı
## HTML Prototipine %100 Birebir Uyum ve 5448 Sayılı Mevzuat Entegrasyonu

Bu plan, gönderilen tek sayfalık HTML prototipinin (`image_0.png`) Next.js App Router (TypeScript + Tailwind CSS) ve `next-intl` mimarisine birebir dönüştürülmesini kayıt altına alır.

---

### 1. Renk Paleti ve Tasarım Sistemi
* **Primary:** `#211164` (Derin Cerrahi Mor / Lacivert)
* **Primary Container:** `#372b7a`
* **Secondary:** `#006972` (Klinik Turkuaz)
* **Teal Cyan:** `#2BA598`
* **Mint Emerald:** `#7BC17E`
* **Canvas Clean:** `#FAFBFC`
* **Surface Surgical:** `#F0F4F7`
* **Footer Zemin:** `#110933`
* **Tipografi:** `Plus Jakarta Sans` (Başlıklar) & `Manrope` (Gövde metinleri)
* **İkonlar:** Google `Material Symbols Outlined`

---

### 2. Sayfa Bölümleri ve Bileşen Mimarisi

1. **Header & Regulatory Topbar (`Header.tsx`):**
   * T.C. Sağlık Bakanlığı Uluslararası Sağlık Turizmi Yetki Belgesi: `TR-34-DH-4892`
   * "Clinical Triage Active" canlı nabız animasyonu
   * 24/7 Acil çağrı (`+90 212 900 8080`) ve WhatsApp linki
   * Alt dizin dil seçicisi: `EN` (varsayılan), `DE`, `FR`, `RU` (kesinlikle Türkçe yok)
   * Açılır Tedavi Menüsü (Smile Makeover E-Max, All-on-4/6 Implants, Monolithic Zirconia)
   * "Itemized Cost Reference" & "Upload X-Ray / Get Diagnosis" butonları

2. **Hero & Clinical Hub (`Hero.tsx`):**
   * "18+ Years Chief Surgical Leadership • On-Site German CAD/CAM Lab • Levent, Istanbul"
   * Başlık: "Precision Surgical Implantology & Biocompatible Aesthetic Smile Restorations."
   * Levent Panoramic Surgical Suite & On-Site Master Ceramist Lab orijinal fotoğrafları
   * Bakanlık ve Straumann® Excellence akreditasyon rozetleri
   * **Quick Action Hub (Transparent Package Estimator):**
     * 3 Tedavi Seçici (Smile / Veneers, Full Arch Implants, Restoration)
     * Ülke Karşılaştırması (UK, DE, US, FR)
     * Dinamik fiyat benchmarkı ve %73 tasarruf progress bar'ı
     * WhatsApp Hızlı Ön Doktor Değerlendirme Formu

3. **Compliant Service Intent Cards (`ServiceIntentCards.tsx`):**
   * Transparent Itemized Estimates
   * Verified Clinical Cases Archive
   * 5-Day All-Inclusive Travel Guide
   * Live Video Doctor Teleconsultation

4. **Before & After Clinical Archive (`CaseSlider.tsx`):**
   * Hollywood Smile, All-on-4 Implants, Monolithic Zirconia sekmeleri
   * Sıfır gecikmeli mobil dokunmatik Before/After split-slider (kırpma katmanı ve tutamaç)
   * Sağ panel: `#DA-8841` Sarah M. (London, UK) vaka parametreleri, hazırlık derinliği, Vita renk değişimi ve fiyat avantajı

5. **International Treatment Cost & Inclusions Reference (`PriceTable.tsx`):**
   * UK ve Almanya özel klinik fiyatları ile Dent Aktif All-Inclusive (£4,250, £3,950, £4,400) karşılaştırma tablosu
   * 4 Paket Avantajı Kartı: 5-Yıldızlı Otel, VIP Mercedes Transferleri, Çok Dilli Tercüman, 3D CBCT Teşhisleri

6. **In-House German CAD/CAM Laboratory (`InHouseLab.tsx`):**
   * Aracıları ortadan kaldıran hastane içi robotik frezeleme ve Master Ceramist laboratuvarı
   * Chairside Shade Characterization, 5-Axis Precision Milling, Handcrafted Artisanal Glazing

7. **5-Day Patient Travel & Clinical Itinerary (`TravelSchedule.tsx`):**
   * Day 01 (Arrival), Day 02 (Design), Day 03 (Rest), Day 04 (Bonding), Day 05 (Departure) 5 günlük VIP süreç akışı

8. **International Patient Relations & Concierge Unit (`ConciergeSection.tsx`):**
   * 3359 Sayılı Kanun ve Sağlık Turizmi Genelgesi uyumlu Uluslararası Ofis Bilgileri
   * Koyu mor iletişim kartı: 24/7 Direkt hat, Levent hastane adresi, yetki numarası

9. **Online Clinical Triage Form (`TriageForm.tsx`):**
   * 3 Adımlı form (Tedavi -> Hasta & Ülke -> Röntgen/Fotoğraf Yükleme + 5-Yıldızlı Otel Seçimi)
   * İstemci taraflı anlık görsel sıkıştırma (`imageCompression.ts`)
   * 256-Bit SSL, GDPR ve KVKK No. 6698 uyarıları
   * Başarılı gönderimde isim ve referans kodlu onay penceresi (`compact-success-overlay`)

10. **Global Hospital Footer (`Footer.tsx`):**
    * Koyu mor (`#110933`) zemin, resmi bakanlık metni, cerrahi branşlar, hasta hakları ve mevzuat linkleri

11. **Floating Quick Actions Widget (`WhatsAppFloating.tsx`):**
    * Package Reference ve WhatsApp Medical Coordinator yüzen butonları

---

### 3. Terminal ve Dağıtım Süreci
* Kural gereği geliştirici ortamında terminal komutları çalıştırılmamakta, kullanıcıya sırasıyla sunulmaktadır.
