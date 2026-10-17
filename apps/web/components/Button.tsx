import type { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text?: string;
  onClickHandler?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Button = ({
  text = "Submit",
  className = "",
  type = "button",
  disabled = false,
  onClickHandler,
  ...props
}: ButtonProps) => {
  const buttonClasses = twMerge(
    `
      group
      relative
      flex
      h-12
      w-full
      items-center
      justify-center
      overflow-hidden
      rounded-xl
      bg-gradient-to-r
      from-emerald-400
      to-teal-400
      px-6
      text-sm
      font-semibold
      text-slate-950
      shadow-lg
      shadow-emerald-500/20
      transition-all
      duration-200
      ease-out

      hover:-translate-y-0.5
      hover:shadow-xl
      hover:shadow-emerald-500/30

      active:translate-y-0
      active:scale-[0.98]

      focus:outline-none
      focus:ring-2
      focus:ring-emerald-400
      focus:ring-offset-2
      focus:ring-offset-slate-950

      disabled:cursor-not-allowed
      disabled:opacity-50
      disabled:hover:translate-y-0
      disabled:hover:shadow-lg
    `,
    className,
  );

  return (
    <button
      {...props}
      type={type}
      disabled={disabled}
      onClick={onClickHandler}
      className={buttonClasses}
    >
      {/* Shine effect */}
      <span
        className="
          absolute
          inset-0
          -translate-x-full
          bg-gradient-to-r
          from-transparent
          via-white/20
          to-transparent
          transition-transform
          duration-700
          group-hover:translate-x-full
        "
      />

      <span className="relative z-10">{text}</span>
    </button>
  );
};
