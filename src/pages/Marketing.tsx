import React from "react";
import { MarketingNavigation } from "@/components/marketing/navigation";
import { MarketingHero } from "@/components/marketing/hero";
import { TrustedBySection } from "@/components/marketing/trusted-by";
import { PlatformSection } from "@/components/marketing/platform";
import { SolutionsSection } from "@/components/marketing/solutions";
import { ToolkitSection } from "@/components/marketing/toolkit";
import { AppLibrarySection } from "@/components/marketing/app-library";
import { MarketingFooter } from "@/components/marketing/footer";

const Marketing = () => {
  return (
    <div className="min-h-screen bg-white">
      <MarketingNavigation />
      <main>
        <MarketingHero />
        <TrustedBySection />
        <PlatformSection />
        <SolutionsSection />
        <ToolkitSection />
        <AppLibrarySection />
      </main>
      <MarketingFooter />
    </div>
  );
};

export default Marketing;
