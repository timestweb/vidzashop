"use client";

import React, { ReactNode, useState } from "react";
import Logo from "../logo";
import Link from "next/link";
import HomeIcon from "../icons/home_icon";
import Filter from "../filter/filter";
import { PiGlobeLight } from "react-icons/pi";
import { LuCirclePlus } from "react-icons/lu";
import { CiUser } from "react-icons/ci";

export default function Navbar() {
  const categories = ["All Categories", "Cars", "House"];
  const currencies = ["$ Currency", "USD", "Naira", "GBP"];
  const [selected, setSelected] = useState(categories[0]);
  const [currencySelected, setCurrencySelected] = useState(currencies[0]);

  return (
    <nav
      className="bg-white flex px-8 py-4 justify-between font-gendra"
      role="navigation"
    >
      <Logo />
      <div className="flex gap-12 pr-8 items-center">
        <LinkText iconPrefix={true} icon={<HomeIcon />} href="/" text="Home" />
        <Filter
          className="pt-2"
          options={categories}
          value={selected}
          onChange={setSelected}
        />
        <LinkText iconPrefix={false} href="/" text="Leasing" />
        <LinkText iconPrefix={false} href="/" text="Sales" />
      </div>
      <div className="flex gap-4 items-center">
        <Filter
          className="pt-2"
          options={currencies}
          value={currencySelected}
          onChange={setCurrencySelected}
        />
        <LinkText
          className="text-success"
          iconPrefix={true}
          icon={<LuCirclePlus className="text-success w-5 h-5" />}
          href="/"
          text="Post an Ad"
        />
        <PiGlobeLight className="w-5 h-5 text-primary" />
        <div className="border border-surface-divider flex justify-center items-center p-1 rounded-full w-6 h-6 shadow-2xl">
          <CiUser className="text-black text-lg" />
        </div>
      </div>
    </nav>
  );
}

interface LinkTextProps {
  href: string;
  text: string;
  icon?: ReactNode;
  iconPrefix: boolean;
  className?: string;
}

function LinkText(props: LinkTextProps) {
  return (
    <div className="flex space-x-1 hover:opacity-70 transition-colors">
      {props.iconPrefix && props.icon}
      <Link
        className={`text-primary text-sm ${props.className}`}
        href={props.href}
      >
        {props.text}
      </Link>
    </div>
  );
}
