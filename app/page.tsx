import Navbar       from "@/components/layout/Navbar";
import Footer       from "@/components/layout/Footer";
import Hero         from "@/components/sections/Hero";
import Services     from "@/components/sections/Services";
import HowWeWork    from "@/components/sections/HowWeWork";
import WhyHiveTech  from "@/components/sections/WhyHiveTech";
import FeaturedWork from "@/components/sections/FeaturedWork";
import StatsSection from "@/components/sections/StatsSection";
import TechStack    from "@/components/sections/TechStack";
import Testimonials from "@/components/sections/Testimonials";
import Team        from "@/components/sections/Team";
import Pricing      from "@/components/sections/Pricing";
import CTABanner    from "@/components/sections/CTABanner";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <HowWeWork />
        <WhyHiveTech />
        <FeaturedWork />
        <StatsSection />
        <TechStack />
        <Testimonials />
        <Team />
        <Pricing />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
