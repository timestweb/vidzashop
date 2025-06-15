"use client";

import { Breadcrumbs, Breadcrumb, Link } from "react-aria-components";
import React from "react";

export type BreadcrumbItem = {
  name: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
  className?: string
};

export default function CustomBreadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <Breadcrumbs className={`flex items-center text-sm text-primary font-gendra space-x-2 ${className}`}>
      {items.map((item, index) => (
        <Breadcrumb key={index} className="flex items-center">
          {item.href ? (
            <Link href={item.href} className="hover:underline">
              {item.name}
            </Link>
          ) : (
            <span aria-current="page" className="font-semibold text-black">
              {item.name}
            </span>
          )}
          {/* Add separator except for the last item */}
          {index < items.length - 1 && (
            <span className="mx-2 text-gray-400">&lt;</span>
          )}
        </Breadcrumb>
      ))}
    </Breadcrumbs>
  );
}
