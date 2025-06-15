import MessageIcon from "@/components/icons/message";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { CiLocationOn, CiPercent } from "react-icons/ci";

type ProductCardProps = {
  image: StaticImageData;
  title: string;
  category: string;
  price?: string | number;
  isNegotiable?: boolean;
  location: string;
  priceOnChat?: boolean;
  isRecommended: boolean;
};

export default function ProductCard({
  image,
  title,
  category,
  price,
  isNegotiable = false,
  location,
  priceOnChat,
  isRecommended,
}: ProductCardProps) {
  return (
    <div className="flex justify-center">
      <div
        className={`bg-white w-[15.375rem] h-[24rem] ${
          isRecommended ? "border-none" : "border border-surface-muted"
        }`}
      >
        <Image src={image} alt={title} />
        <section className="px-2 py-6 space-y-3">
          <h3 className="font-gendra text-lg text-primary">{title}</h3>
          <p className="font-manrope text-primary text-xs">{category}</p>

          <div className="flex space-x-2 items-center">
            {isNegotiable && (
              <p className="text-primary font-gendra text-lg">${price}</p>
            )}
            {isNegotiable && (
              <>
                <CiPercent className="text-surface-icons w-4 h-4" />
                <p className="text-success pt-[0.1rem] font-manrope text-xs">
                  Negotiable
                </p>
              </>
            )}
            {priceOnChat && (
              <>
                <MessageIcon />
                <p className="text-success pt-1 font-manrope text-xs">
                  Price on chat
                </p>
              </>
            )}
          </div>

          <div className="flex space-x-2 items-center">
            <CiLocationOn className="w-5 h-5 text-surface-icons" />
            <p className="text-primary text-xs">{location}</p>
          </div>
        </section>
      </div>
    </div>
  );
}
