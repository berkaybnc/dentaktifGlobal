import React from 'react';
import Hero from '@/components/Hero';
import ServiceIntentCards from '@/components/ServiceIntentCards';
import CaseSlider from '@/components/CaseSlider';
import PriceTable from '@/components/PriceTable';
import InHouseLab from '@/components/InHouseLab';
import TravelSchedule from '@/components/TravelSchedule';
import ConciergeSection from '@/components/ConciergeSection';
import TriageForm from '@/components/TriageForm';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceIntentCards />
      <CaseSlider />
      <PriceTable />
      <InHouseLab />
      <TravelSchedule />
      <ConciergeSection />
      <TriageForm />
    </>
  );
}
