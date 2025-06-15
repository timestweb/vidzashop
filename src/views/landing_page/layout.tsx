import React, { ReactNode } from "react";
import Footer from "./footer";

interface LandingPageLayout {
  children: ReactNode;
}

export default function LandingPageLayout({ children }: LandingPageLayout) {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
}
