import HeroSection from "@/components/hero";
import SubHeroSection from "@/components/hero/sub_hero";
import React from "react";
import ProductList from "@/components/card/product_list";
import { products } from "./sample";
import { promotedProducts } from "./promoted";
import PopularCategories from "./popular_categories";

export default function LandingPageView() {
  return (
    <div>
      <HeroSection />
      <SubHeroSection />
      <div className="bg-primary-background pb-12">
        <ProductList products={products} isRecommended={true} />
      </div>
      <div className="bg-white pb-20 mt-8">
        <ProductList products={promotedProducts} isRecommended={false} />
      </div>
      <PopularCategories />
    </div>
  );
}
