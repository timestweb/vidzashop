"use client";

import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/react";
import { FiCheck, FiChevronDown } from "react-icons/fi";



type Option = string | number | { label: string; value: string | number };

interface ListboxFilterProps<T extends Option> {
  label?: string;
  options: T[];
  value: T;
  onChange: (value: T) => void;
  className?: string;
}

function getLabel(option: Option): string {
  if (typeof option === "object" && option !== null && "label" in option) {
    return option.label;
  }
  return String(option);
}

export default function Filter<T extends Option>({
  label,
  options,
  value,
  onChange,
  className = "",
}: ListboxFilterProps<T>) {
  return (
    <div className={`${className}`}>
      {label && <label className="mb-1 block text-sm text-gray-600">{label}</label>}

      <Listbox value={value} onChange={onChange}>
        <div className="relative">
          <ListboxButton className="relative cursor-pointer rounded-md pr-8 text-left text-primary focus:outline-none sm:text-sm">
            <span className="block truncate">{getLabel(value)}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <FiChevronDown className="h-4 w-4 text-primary" />
            </span>
          </ListboxButton>

          <ListboxOptions anchor="bottom" className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white shadow-lg border border-gray-200 focus:outline-none sm:text-sm">
            {options.map((option, index) => (
              <ListboxOption
                key={index}
                value={option}
                className="relative cursor-pointer select-none py-2 pl-10 pr-4 data-[focus]:bg-blue-100 data-[selected]:text-blue-600"
              >
                <>
                  <span className="block truncate">{getLabel(option)}</span>
                  {option === value ||
                  (typeof option === "object" &&
                    typeof value === "object" &&
                    "value" in option &&
                    "value" in value &&
                    option.value === value.value) ? (
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <FiCheck className="h-5 w-5 text-blue-600" />
                    </span>
                  ) : null}
                </>
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>
    </div>
  );
}
