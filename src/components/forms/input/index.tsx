import { Controller, Control, FieldErrors } from "react-hook-form";
import { Input } from "@headlessui/react"; // Replace with your actual input

interface ControlledInputProps {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  placeholder: string;
  type?: string;
  errors?: FieldErrors;
}

export default function ControlledInput({
  name,
  control,
  placeholder,
  type = "text",
  errors,
}: ControlledInputProps) {
  const hasError = !!errors?.[name];

  return (
    <div className="space-y-1">
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            value={field.value ?? ""}
            type={type}
            placeholder={placeholder}
            className={`w-full border ${
              hasError ? "border-red-500" : "border-surface-muted"
            } rounded-md font-manrope placeholder:font-manrope text-primary text-xs font-semibold placeholder:text-primary placeholder:font-semibold placeholder:text-xs p-3 focus:outline-none focus:border-primary`}
          />
        )}
      />
      {hasError && (
        <p className="text-red-500 text-xs font-medium">
          {String(errors?.[name]?.message)}
        </p>
      )}
    </div>
  );
}
