'use client';

import { Input, Select } from '@headlessui/react';
import React from 'react';
import { Controller, Control } from 'react-hook-form';

interface PhoneInputProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  name: string;
  codeName: string;
}

const countryCodes = [
  { code: '+234', label: '🇳🇬 NG' },
  { code: '+1', label: '🇺🇸 US' },
  { code: '+44', label: '🇬🇧 UK' },
];

export default function PhoneInput({ control, name, codeName }: PhoneInputProps) {
  return (
    <div className="flex items-center gap-2">
      <Controller
        name={codeName}
        control={control}
        defaultValue="+234"
        render={({ field }) => (
          <Select
            {...field}
            className="w-[5rem] border border-surface-muted font-manrope placeholder:font-manrope text-primary text-xs font-semibold placeholder:text-xs placeholder:font-semibold rounded-md p-2 focus:outline-none focus:border-primary"
          >
            {countryCodes.map((c) => (
              <option key={c.code} value={c.code}>
                {c.code}
              </option>
            ))}
          </Select>
        )}
      />
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Input
            {...field}
            type="tel"
            placeholder="Phone number"
            className="flex-1 rounded-md border border-surface-muted p-2 font-manrope placeholder:font-manrope text-xs font-semibold placeholder:text-xs placeholder:font-semibold placeholder:text-primary focus:outline-none focus:border-primary"
          />
        )}
      />
    </div>
  );
}
