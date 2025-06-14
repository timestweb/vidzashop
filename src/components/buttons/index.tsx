"use client";

import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { LuLoader } from "react-icons/lu";

const buttonVariants = cva(
  "inline-flex items-center font-manrope justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white hover:bg-primary/90 cursor-pointer",
        outline: "border border-primary text-primary hover:bg-primary/10",
        ghost: "text-primary hover:underline",
      },
      size: {
        default: "px-4 py-2 text-sm",
        sm: "px-3 py-1 text-xs",
        lg: "px-6 py-3 text-base",
        block: "w-full px-4 py-3 text-xs font-medium",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

export default function Button({
  className,
  variant,
  size,
  isLoading = false,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading && <LuLoader className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </button>
  );
}
