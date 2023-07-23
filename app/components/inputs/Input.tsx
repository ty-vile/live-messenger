"use client";

import clsx from "clsx";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

type Props = {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disabled?: boolean;
};

const Input: React.FC<Props> = ({
  label,
  id,
  type,
  required,
  register,
  errors,
  disabled,
}) => {
  return (
    <div className="mt-6">
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          id={id}
          type={type}
          autoComplete={id}
          {...register(id, { required })}
          className={clsx(
            "form-input block w-full rounded-md  py-3 shadow-sm placeholder:text-gray-400 text-gray-900",
            errors[id] && "focus:ring-red-500",
            disabled && "opacity-50 bg-gray-100 cursor-default"
          )}
        />
      </div>
    </div>
  );
};

export default Input;
