import { Checkbox as HeadlessCheckbox } from '@headlessui/react';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type CustomCheckboxProps = {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  name?: string;
  id?: string;
  label?: string;
  disabled?: boolean;
  className?: string;
};

export const CustomCheckbox = forwardRef<HTMLInputElement, CustomCheckboxProps>(
  ({ checked, onChange, name, id, label, disabled, className }, ref) => {
    return (
      <label className="inline-flex items-center gap-4 cursor-pointer text-primary">
        <HeadlessCheckbox
          checked={checked}
          onChange={onChange}
          name={name}
          id={id}
          disabled={disabled}
          className={twMerge(
            'group size-4 rounded bg-surface-gray border border-surface-muted flex items-center justify-center bg-white data-checked:bg-success data-checked:border-none transition-colors',
            className
          )}
          ref={ref}
        >
          <svg
            className="stroke-black w-3 h-3 items-center text-center opacity-0 group-data-checked:opacity-100"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M3 8L6 11L11 3.5"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </HeadlessCheckbox>
        {label && <span className="text-[0.56rem] w-[90%] font-medium leading-3">{label}</span>}
      </label>
    );
  }
);

CustomCheckbox.displayName = 'CustomCheckbox';
