import React from "react";
import Logo from "../logo";
import Link from "next/link";
import HomeIcon from "../icons/home_icon";
import { Field, Select } from "@headlessui/react";

export default function Navbar() {
  return (
    <section className="bg-white py-4 flex justify-between px-8">
      <Logo />
      <div className="flex space-x-4 m-auto text-sm ">
        <LinkText iconPrefix={true} href="/" text="Home" />
        <LinkText iconPrefix={false} href="/" text="All Categories" />
        <LinkText iconPrefix={false} href="/" text="Leasing" />
      </div>
      <div className="flex space-x-4 m-auto">
        <LinkText iconPrefix={false} href="/" text="Home" />
        <LinkText iconPrefix={false} href="/" text="Home" />
        <LinkText iconPrefix={false} href="/" text="Home" />
      </div>
      <Field>
        <Select name="status">
          <option value="active">Active</option>
          <option value="paused">Paused</option>
          <option value="delayed">Delayed</option>
          <option value="canceled">Canceled</option>
        </Select>
      </Field>
    </section>
  );
}

interface LinkTextProps {
  href: string;
  text: string;
  iconPrefix: boolean;
}

function LinkText(props: LinkTextProps) {
  return (
    <div className="flex space-x-1 hover:opacity-70 transition-colors">
      {props.iconPrefix && <HomeIcon />}
      <Link className="text-primary" href={props.href}>
        {props.text}
      </Link>
    </div>
  );
}
