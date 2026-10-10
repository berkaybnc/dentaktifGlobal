import React from 'react';
import fs from 'fs';
import path from 'path';
import Hero from '@/components/Hero';
import ServiceIntentCards from '@/components/ServiceIntentCards';
import TreatmentsSection from '@/components/TreatmentsSection';
import CaseSlider from '@/components/CaseSlider';
import PriceTable from '@/components/PriceTable';
import InHouseLab from '@/components/InHouseLab';
import TravelSchedule from '@/components/TravelSchedule';
import ConciergeSection from '@/components/ConciergeSection';
import DoctorsSection from '@/components/DoctorsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FaqSection from '@/components/FaqSection';
import TriageForm from '@/components/TriageForm';

function ensureLocalAssets() {
  try {
    const doctorsDir = path.join(process.cwd(), 'public', 'images', 'doctors');
    if (!fs.existsSync(doctorsDir)) {
      fs.mkdirSync(doctorsDir, { recursive: true });
    }
    const casesDir = path.join(process.cwd(), 'public', 'images', 'cases');
    if (!fs.existsSync(casesDir)) {
      fs.mkdirSync(casesDir, { recursive: true });
    }

    const assetMap = [
      {
        src: 'C:\\Users\\berkay\\.gemini\\antigravity-ide\\brain\\747071f5-b147-4cd3-b768-a3470867598a\\.user_uploaded\\media_1791499455400.png',
        dest: path.join(process.cwd(), 'public', 'images', 'logo.png'),
      },
      {
        src: 'C:\\Users\\berkay\\.gemini\\antigravity-ide\\brain\\747071f5-b147-4cd3-b768-a3470867598a\\.user_uploaded\\media_1791499468898.png',
        dest: path.join(process.cwd(), 'public', 'images', 'logo-white.png'),
      },
      {
        src: 'C:\\Users\\berkay\\.gemini\\antigravity-ide\\brain\\747071f5-b147-4cd3-b768-a3470867598a\\.user_uploaded\\media_1791499533565.jpg',
        dest: path.join(process.cwd(), 'public', 'images', 'doctors', 'dt-abdullah-omur.png'),
      },
      {
        src: 'C:\\Users\\berkay\\.gemini\\antigravity-ide\\brain\\747071f5-b147-4cd3-b768-a3470867598a\\.user_uploaded\\media_1791499540315.jpg',
        dest: path.join(process.cwd(), 'public', 'images', 'doctors', 'dt-busra-tomo.png'),
      },
      {
        src: 'C:\\Users\\berkay\\.gemini\\antigravity-ide\\brain\\747071f5-b147-4cd3-b768-a3470867598a\\.user_uploaded\\media_1791503078882.png',
        dest: path.join(process.cwd(), 'public', 'images', 'health-tourism-certificate.png'),
      },
      // Gerçek Klinik Vaka (Before / After) Diş Fotoğrafları (Açı ve Ölçek Kusursuz Eşleştirildi)
      {
        src: 'C:\\Users\\berkay\\.gemini\\antigravity-ide\\brain\\747071f5-b147-4cd3-b768-a3470867598a\\hollywood_before_v2_1791510160028.jpg',
        dest: path.join(process.cwd(), 'public', 'images', 'cases', 'hollywood-before.jpg'),
      },
      {
        src: 'C:\\Users\\berkay\\.gemini\\antigravity-ide\\brain\\747071f5-b147-4cd3-b768-a3470867598a\\hollywood_after_v2_1791510179704.jpg',
        dest: path.join(process.cwd(), 'public', 'images', 'cases', 'hollywood-after.jpg'),
      },
      {
        src: 'C:\\Users\\berkay\\.gemini\\antigravity-ide\\brain\\747071f5-b147-4cd3-b768-a3470867598a\\allon6_before_perfect_1791510139094.jpg',
        dest: path.join(process.cwd(), 'public', 'images', 'cases', 'allon6-before.jpg'),
      },
      {
        src: 'C:\\Users\\berkay\\.gemini\\antigravity-ide\\brain\\747071f5-b147-4cd3-b768-a3470867598a\\allon6_after_perfect_1791510122534.jpg',
        dest: path.join(process.cwd(), 'public', 'images', 'cases', 'allon6-after.jpg'),
      },
      {
        src: 'C:\\Users\\berkay\\.gemini\\antigravity-ide\\brain\\747071f5-b147-4cd3-b768-a3470867598a\\zirconia_before_1791509433789.jpg',
        dest: path.join(process.cwd(), 'public', 'images', 'cases', 'zirconia-before.jpg'),
      },
      {
        src: 'C:\\Users\\berkay\\.gemini\\antigravity-ide\\brain\\747071f5-b147-4cd3-b768-a3470867598a\\zirconia_after_1791509463389.jpg',
        dest: path.join(process.cwd(), 'public', 'images', 'cases', 'zirconia-after.jpg'),
      },
      // Lüks Hero Görseli & Video
      {
        src: 'C:\\Users\\berkay\\.gemini\\antigravity-ide\\brain\\747071f5-b147-4cd3-b768-a3470867598a\\hero_smile_luxury_1791512404927.jpg',
        dest: path.join(process.cwd(), 'public', 'images', 'hero-patient.jpg'),
      },
      {
        src: 'C:\\Users\\berkay\\.gemini\\antigravity-ide\\brain\\99e304e3-4aa5-4688-87b2-1ec43c0d2585\\in_house_dental_lab_1791666613880.jpg',
        dest: path.join(process.cwd(), 'public', 'images', 'in-house-lab.jpg'),
      },
    ];

    for (const item of assetMap) {
      if (fs.existsSync(item.src) && !fs.existsSync(item.dest)) {
        fs.copyFileSync(item.src, item.dest);
      }
    }

    const hilalImg = path.join(process.cwd(), 'public', 'images', 'doctors', 'dt-hilal-mutlu-er.png');
    if (fs.existsSync(hilalImg)) {
      try { fs.unlinkSync(hilalImg); } catch {}
    }
  } catch {}
}

export default function HomePage() {
  ensureLocalAssets();
  return (
    <>
      <Hero />
      <ServiceIntentCards />
      <CaseSlider />
      <PriceTable />
      <TreatmentsSection />
      <DoctorsSection />
      <InHouseLab />
      <TravelSchedule />
      <ConciergeSection />
      <TestimonialsSection />
      <FaqSection />
      <TriageForm />
    </>
  );
}
