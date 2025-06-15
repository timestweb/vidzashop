import React from "react";
import ProductList from "@/components/card/product_list";
import { products } from "./sample";
import { promotedProducts } from "./promoted";
import LandingPageLayout from "./layout";
import HeroSection from "./hero";
import SubHeroSection from "./hero/sub_hero";

export default function LandingPageView() {
  return (
    <LandingPageLayout>
      <HeroSection />
      <SubHeroSection />
      <div className="bg-primary-background pb-12">
        <ProductList products={products} isRecommended={true} />
      </div>
      <div className="bg-white pb-20 mt-8">
        <ProductList products={promotedProducts} isRecommended={false} />
      </div>
    </LandingPageLayout>
  );
}
