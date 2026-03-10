import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import PartnersSection from "@/components/PartnersSection";
import WhoWeAreSection from "@/components/WhoWeAreSection";
import DashboardPreviewSection from "@/components/DashboardPreviewSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import SmartBraceletSection from "@/components/SmartBraceletSection";
import CaregiverSection from "@/components/CaregiverSection";
import ProgramsSection from "@/components/ProgramsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NumbersStatsSection from "@/components/NumbersStatsSection";
import CalculatorSection from "@/components/CalculatorSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import OnboardingSection from "@/components/OnboardingSection";
import ReviewsSection from "@/components/ReviewsSection";
import FaqSection from "@/components/FaqSection";

export default function Home() {
  return (
    <div
      className="min-h-screen w-full"
      // style={{
      //   backgroundImage: "linear-gradient(rgba(255,255,255,0.55), rgba(255,255,255,0.55)), url('/doodle-pattern.png')",
      //   backgroundRepeat: "repeat",
      //   backgroundAttachment: "fixed",
      //   backgroundPosition: "center",
      // }}
    >
      <HeroSection />
      <StatsSection />
      <PartnersSection />
      
      <ProblemSolutionSection />
      <DashboardPreviewSection />
      <FeaturesSection />
      
      <SmartBraceletSection />
      <CaregiverSection />
      <HowItWorksSection />
      
      <ProgramsSection />
      <ActivitiesSection />
      <WhoWeAreSection />
      <TestimonialsSection />
      <NumbersStatsSection />
      <CalculatorSection />
      
      <OnboardingSection />
      <ReviewsSection />
      <FaqSection />
    </div>
  );
}

