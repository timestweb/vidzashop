import React from "react";
import automobile from "../../../../../public/images/hero/hero_car.jpg";
import construction from "../../../../../public/images/hero/hero_grinder.jpg";
import oil from "../../../../../public/images/hero/oil_and_gas.jpg";
import marine from "../../../../../public/images/hero/maritime.jpg";
import telecomm from "../../../../../public/images/hero/telecommunication.jpg";
import industrial from "../../../../../public/images/hero/industrial.jpg";
import others from "../../../../../public/images/hero/others.jpg";
import Image, { StaticImageData } from "next/image";
import Banner from "@/components/banner";

export default function SubHeroSection() {
  const imageDetails = [
    { img: automobile, imgAlt: "automobile", desc: "Auto Mobiles" },
    { img: construction, imgAlt: "construction", desc: "Construction" },
    { img: oil, imgAlt: "oil and gas", desc: "Oil & Gas" },
    { img: marine, imgAlt: "marine", desc: "Marine" },
    { img: telecomm, imgAlt: "telecommunication", desc: "Telecommunication" },
    { img: industrial, imgAlt: "industrial", desc: "Industrial" },
    { img: others, imgAlt: "others", desc: "Others" },
  ];

  return (
    <Banner
      content={
        <div className="relative z-10 h-full flex justify-between items-center px-6">
          {imageDetails.map((imgDetail, index) => (
            <div key={index}>
              <IndustryDescription
                img={imgDetail.img}
                imgAlt={imgDetail.imgAlt}
                desc={imgDetail.desc}
              />
            </div>
          ))}
        </div>
      }
    />
  );
}

interface IndustryDescriptionProps {
  img: StaticImageData;
  imgAlt: string;
  desc: string;
}

function IndustryDescription(props: IndustryDescriptionProps) {
  return (
    <div>
      <Image
        className="rounded-full w-24 h-24"
        src={props.img}
        alt={props.imgAlt}
      />
      <p className="text-white font-manrope text-sm mt-5">{props.desc}</p>
    </div>
  );
}
