import type { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  onChangeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({
  onChangeHandler,
  className = "",
  required = false,
  disabled = false,
  type = "text",
  placeholder,
  ...props
}: InputProps) => {
  const inputClasses = twMerge(
    `
      h-12
      w-full
      rounded-xl
      border
      border-white/10
      bg-white/5
      px-4
      text-sm
      text-white
      outline-none
      backdrop-blur-sm

      placeholder:text-slate-500

      transition-all
      duration-200

      hover:border-white/20

      focus:border-emerald-400
      focus:bg-white/[0.07]
      focus:ring-4
      focus:ring-emerald-400/10

      disabled:cursor-not-allowed
      disabled:opacity-50
    `,
    className,
  );

  return (
    <input
      {...props}
      type={type}
      required={required}
      disabled={disabled}
      placeholder={placeholder}
      onChange={onChangeHandler}
      className={inputClasses}
    />
  );
};
