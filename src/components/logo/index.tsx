import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../public/images/shared/vidza_logo.png";

export default function Logo() {
  return (
    <Link href={"/"}>
      <Image src={logo} alt="vidza_logo" />
    </Link>
  );
}
