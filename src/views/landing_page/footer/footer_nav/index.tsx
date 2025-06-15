import Link from "next/link";
import React from "react";

const footerNavData: FooterNavList[] = [
  {
    sectionTitle: "About Us",
    links: [
      { title: "About Vidza Shop", href: "/" },
      { title: "Media & Press", href: "/" },
    ],
  },
  {
    sectionTitle: "Help & Connect",
    links: [
      { title: "FAQ’s", href: "/faqs" },
      { title: "Policy", href: "/policy" },
      { title: "Contact Us", href: "/contact" },
    ],
  },
  {
    sectionTitle: "More from Us",
    links: [
      { title: "Terms & Condition", href: "/terms" },
      { title: "How it works", href: "/how-it-works" },
    ],
  },
  {
    sectionTitle: "Top Categories",
    links: [
      { title: "FAQ’s", href: "/faqs" },
      { title: "Policy", href: "/policy" },
      { title: "Contact Us", href: "/contact" },
    ],
  },
  {
    sectionTitle: "Community",
    links: [
      { title: "Terms & Condition", href: "/terms" },
      { title: "How it works", href: "/how-it-works" },
    ],
  },
];

export default function FooterNav() {
  return <FooterNavItem items={footerNavData} />;
}

interface FooterLink {
  title: string;
  href: string;
}

interface FooterNavList {
  sectionTitle: string;
  links: FooterLink[];
}

interface FooterNavItemProps {
  items: FooterNavList[];
}

function FooterNavItem({ items }: FooterNavItemProps) {
  return (
    <div className="text-primary w-[85%] grid grid-cols-5 gap-3 px-8">
      {items.map((section, index) => (
        <section key={index} className="flex flex-col  space-y-3 mb-6">
          <h3 className="font-gendra">{section.sectionTitle}</h3>
          <div className="flex flex-col space-y-2">
            {section.links.map((link, linkIndex) => (
              <Link
                key={linkIndex}
                href={link.href}
                className="font-manrope text-xs"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
