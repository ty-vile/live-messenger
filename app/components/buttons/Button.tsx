"use client";

import clsx from "clsx";

type Props = {
  type?: "button" | "submit" | "reset" | undefined;
  fullWidth?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  secondary?: boolean;
  danger?: boolean;
  disabled?: boolean;
};

const Button: React.FC<Props> = ({
  type,
  fullWidth,
  children,
  onClick,
  secondary,
  danger,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={clsx(
        "flex items-center justify-center rounded-md px-3 py-2 text-sm font-semibold mt-6",
        disabled && "opacity-50 cursor-default",
        fullWidth && "w-full",
        secondary ? "text-gray-900" : "text-white",
        danger && "bg-red-500 hover:bg-red-600",
        !secondary && !danger && "bg-sky-500 hover:bg-sky-600"
      )}
    >
      {children}
    </button>
  );
};

export default Button;
