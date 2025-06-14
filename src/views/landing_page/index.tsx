import HeroSection from "@/components/hero";
import SubHeroSection from "@/components/hero/sub_hero";
import React from "react";
import ProductList from "@/components/card/product_list";

export default function LandingPageView() {
  return (
    <div>
      <HeroSection />
      <SubHeroSection />
      <ProductList/>
    </div>
  );
}
