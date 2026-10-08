import React from 'react';
import Hero from '@/components/Hero';
import TrustMarquee from '@/components/TrustMarquee';
import ServiceIntentCards from '@/components/ServiceIntentCards';
import CaseSlider from '@/components/CaseSlider';
import PriceTable from '@/components/PriceTable';
import InHouseLab from '@/components/InHouseLab';
import TravelSchedule from '@/components/TravelSchedule';
import ConciergeSection from '@/components/ConciergeSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FaqSection from '@/components/FaqSection';
import TriageForm from '@/components/TriageForm';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustMarquee />
      <ServiceIntentCards />
      <CaseSlider />
      <PriceTable />
      <InHouseLab />
      <TravelSchedule />
      <ConciergeSection />
      <TestimonialsSection />
      <FaqSection />
      <TriageForm />
    </>
  );
}
