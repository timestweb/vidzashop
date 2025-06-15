import React, { ReactNode } from "react";

interface BannerProps {
  content: ReactNode;
}

export default function Banner({ content }: BannerProps) {
  return (
    <div className="relative bg-primary h-72 overflow-hidden">
      <div className="absolute inset-0 bg-logo opacity-2"></div>
      {content}
    </div>
  );
}
