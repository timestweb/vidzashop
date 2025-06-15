import Image from "next/image";
import React from "react";
import hero_car from "../../../../public/images/hero/hero_car.jpg";
import hero_grinder from "../../../../public/images/hero/hero_grinder.jpg";
import hero_grinder_man from "../../../../public/images/hero/hero_man_grinder.jpg";
import SearchPanel from "@/components/search_panel";


export default function HeroSection() {
  const backgroundImages = [
    { image: hero_car, alt: "hero_car" },
    { image: hero_grinder, alt: "hero_grinder" },
    { image: hero_grinder_man, alt: "hero_grinder_man" },
  ];

  return (
    <div className="grid grid-cols-3 relative h-[26rem] overflow-hidden">
      {backgroundImages.map((img, index) => (
        <Image
          key={index}
          src={img.image}
          alt={img.alt}
          className="w-full h-full object-fill"
        />
      ))}
      <div className="absolute w-full inset-0 bg-black opacity-70"></div>
      <div className="absolute top-12 text-center font-gendra flex flex-col justify-center items-center px-40">
        <h2 className="text-white text-2xl md:text-4xl lg:text-6xl xl:text-7xl font-bold mb-8 max-w-6xl leading-tight">
          Buy construction machinery and industrial equipment
        </h2>
        <SearchPanel />
      </div>
    </div>
  );
}
