import React from "react";
import PopularCategories from "./popular_categories";
import FooterNav from "./footer_nav";
import { PiGlobe } from "react-icons/pi";

export default function Footer() {
  return (
    <section>
      <div className="bg-primary-background">
        <PopularCategories />
        <FooterNav />
      </div>
      <FootNote />
    </section>
  );
}

function FootNote() {
  return (
    <div className="bg-white px-8 py-4 text-primary font-manrope flex justify-between">
      <p className="font-semibold text-xs">© 2025 VidzaShop, Inc.</p>
      <div className="flex space-x-2">
        <PiGlobe className="w-5 h-5" />
        <p className="text-xs pt-[0.05rem]">Lagos, Nigeria</p>
      </div>
    </div>
  );
}
