import Header from '@/components/Header';
import HeroSection from '@/components/sections/HeroSection';
import VisionSection from '@/components/sections/VisionSection';
import OneUserSection from '@/components/sections/OneUserSection';
import SecuritySection from '@/components/sections/SecuritySection';
import AISection from '@/components/sections/AISection';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="relative">
      {/* Header */}
      <Header />

      {/* Hero Section - Full Screen with Parallax */}
      <HeroSection />

      {/* Vision & Philosophy */}
      <VisionSection />

      {/* One User Principle - Role Cards */}
      <OneUserSection />

      {/* Extreme Security */}
      <SecuritySection />

      {/* Behavioral AI */}
      <AISection />

      {/* Final CTA */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
