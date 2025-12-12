'use client';

import { HeroSection } from '@/components/landing/HeroSection';
import { WhySection } from '@/components/landing/WhySection';
import { ReviewsSection } from '@/components/landing/ReviewsSection';
import { PricingSection } from '@/components/landing/PricingSection';
import { ValuesSection } from '@/components/landing/ValuesSection';
import { CasesSection } from '@/components/landing/CasesSection';
import { AboutSection } from '@/components/landing/AboutSection';
import { CtaSection } from '@/components/landing/CtaSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhySection />
      <ReviewsSection />
      <PricingSection />
      <ValuesSection />
      <CasesSection />
      <AboutSection />
      <CtaSection />
    </>
  );
}
