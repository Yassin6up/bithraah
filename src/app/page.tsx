import Header from '@/components/Header';
import HeroSection from '@/components/sections/HeroSection';
import VisionSection from '@/components/sections/VisionSection';
import ChallengeSection from '@/components/sections/ChallengeSection';
import SecuritySection from '@/components/sections/SecuritySection';
import OneUserSection from '@/components/sections/OneUserSection';
import AISection from '@/components/sections/AISection';
import ProfileSection from '@/components/sections/ProfileSection';
import CampaignsSection from '@/components/sections/CampaignsSection';
import SupportSection from '@/components/sections/SupportSection';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="relative">
      {/* 1. Header */}
      <Header />

      {/* 1. Hero Section (الواجهة الرئيسية) */}
      <HeroSection />

      {/* 2. Executive Summary (الملخص التنفيذي) */}
      <VisionSection />

      {/* 3. The Challenge (التحدي) */}
      <ChallengeSection />

      {/* 4. The Solution (الحل) - formerly SecuritySection */}
      <SecuritySection />

      {/* 5. Core Principle (المبدأ الجوهري) */}
      <OneUserSection />

      {/* 6. Dynamic User Model (نموذج المستخدم الديناميكي) - formerly AISection */}
      <AISection />

      {/* 7. Profile & Community (البروفايل والمجتمع) */}
      <ProfileSection />

      {/* 8. Campaigns (نظام الحملات المرن) */}
      <CampaignsSection />

      {/* 9. Support (الدعم مقابل مكافأة) */}
      <SupportSection />

      {/* Final CTA */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
