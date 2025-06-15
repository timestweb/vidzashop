"use client";

import { Field, Label, Input } from "@headlessui/react";
import React from "react";

interface TextInputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
  className: string;
}

export default function TextInput({
  label,
  name,
  type = "text",
  placeholder = "",
  value,
  onChange,
  error,
  required = false,
  className,
}: TextInputProps) {
  return (
    <Field className={`${className}`}>
      <Label className="block text-left text-primary mb-1">
        {label}
        {required && <span className="text-red-500">*</span>}
      </Label>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full text-left outline-none text-primary text-xs focus:ring-primary focus:border-b focus:border-primary placeholder:text-primary placeholder:text-xs ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </Field>
  );
}
