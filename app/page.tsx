import Navbar       from "@/components/layout/Navbar";
import Footer       from "@/components/layout/Footer";
import Hero         from "@/components/sections/Hero";
import BannerDivider  from "@/components/sections/BannerDivider";
import HowWeWork      from "@/components/sections/HowWeWork";
import WhyHiveTech  from "@/components/sections/WhyHiveTech";
import FeaturedWork from "@/components/sections/FeaturedWork";
import WorkProof   from "@/components/sections/WorkProof";
import TechStack    from "@/components/sections/TechStack";
import Team        from "@/components/sections/Team";
import Pricing      from "@/components/sections/Pricing";
import CTABanner    from "@/components/sections/CTABanner";
import WhatWeBuild  from "@/components/sections/WhatWeBuild";


export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhatWeBuild />
        <BannerDivider src="/images/v33.png" />
        <FeaturedWork />
        <Pricing />
        <WorkProof />
        <WhyHiveTech />
        <HowWeWork />
        <TechStack />
        <Team />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
