import React from 'react';
import fs from 'fs';
import path from 'path';
import Hero from '@/components/Hero';
import PartnerMarquee from '@/components/PartnerMarquee';
import TrustMarquee from '@/components/TrustMarquee';
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
    const publicDir = path.join(process.cwd(), 'public', 'images', 'doctors');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
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
        src: 'C:\\Users\\berkay\\.gemini\\antigravity-ide\\brain\\747071f5-b147-4cd3-b768-a3470867598a\\.user_uploaded\\media_1791499537098.jpg',
        dest: path.join(process.cwd(), 'public', 'images', 'doctors', 'dt-hilal-mutlu-er.png'),
      },
      {
        src: 'C:\\Users\\berkay\\.gemini\\antigravity-ide\\brain\\747071f5-b147-4cd3-b768-a3470867598a\\.user_uploaded\\media_1791499540315.jpg',
        dest: path.join(process.cwd(), 'public', 'images', 'doctors', 'dt-busra-tomo.png'),
      },
      {
        src: 'C:\\Users\\berkay\\.gemini\\antigravity-ide\\brain\\747071f5-b147-4cd3-b768-a3470867598a\\.user_uploaded\\media_1791503078882.png',
        dest: path.join(process.cwd(), 'public', 'images', 'health-tourism-certificate.png'),
      },
    ];

    for (const item of assetMap) {
      if (fs.existsSync(item.src) && !fs.existsSync(item.dest)) {
        fs.copyFileSync(item.src, item.dest);
      }
    }
  } catch {}
}

export default function HomePage() {
  ensureLocalAssets();
  return (
    <>
      <Hero />
      <PartnerMarquee />
      <ServiceIntentCards />
      <TreatmentsSection />
      <CaseSlider />
      <PriceTable />
      <InHouseLab />
      <TravelSchedule />
      <DoctorsSection />
      <ConciergeSection />
      <TestimonialsSection />
      <FaqSection />
      <TriageForm />
    </>
  );
}
