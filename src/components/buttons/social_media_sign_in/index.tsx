import { Button } from "@headlessui/react";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface SocialSignInProps {
  socialName: string;
  imageName: StaticImageData
  imageAlt: string;
}

export default function SocialSignIn(props: SocialSignInProps) {
  return (
    <Button
      className={
        "border border-primary rounded-md w-[22rem] py-3 cursor-pointer flex space-x-4 justify-center items-center font-semibold text-primary hover:bg-primary hover:text-white duration-300 ease-in"
      }
    >
      <Image
        width={20}
        height={20}
        src={props.imageName}
        alt={props.imageAlt}
      />
      <h3 className="font-manrope text-xs">
        Sign up with your {props.socialName} Account
      </h3>
    </Button>
  );
}
