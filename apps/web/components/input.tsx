import { Eye, EyeClosed } from "lucide-react";
import { useState, type InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type ValidationPatternList = Record<string, string>;

type ValidationProps =
  | {
      validationPatternList: ValidationPatternList;
      validationFunction: (value: string) => Record<string, boolean>;
    }
  | {
      validationPatternList?: never;
      validationFunction?: never;
    };

type InputProps = InputHTMLAttributes<HTMLInputElement> & ValidationProps;

export const Input = ({
  onChange,
  className = "",
  required = false,
  disabled = false,
  value = "",
  type = "text",
  placeholder,
  validationPatternList,
  validationFunction,
  ...props
}: InputProps) => {
  const [visible, setVisible] = useState(false);

  const patternList = validationPatternList
    ? Object.entries(validationPatternList)
    : [];

  const inputClasses = twMerge(
    `
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

  const stringValue = String(value);

  const validationResult = validationFunction?.(stringValue) ?? {};

  const hasValue = stringValue.length > 0;

  return (
    <>
      <div className="relative">
        <input
          {...props}
          type={visible ? "text" : type}
          value={value}
          required={required}
          disabled={disabled}
          placeholder={placeholder}
          onChange={onChange}
          className={inputClasses}
        />
        {type == "password" && (
          <button
          type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2"
            onClick={() => {
              setVisible(!visible);
            }}
          >
            {!visible ? <EyeClosed color="white"/> : <Eye color="white"/>}
          </button>
        )}
      </div>
      {patternList.length > 0 && (
        <ul className="mt-2 space-y-1">
          {patternList.map(([key, message]) => {
            const isValid = validationResult[key];

            return (
              <li
                key={key}
                className={twMerge(
                  "text-xs transition-colors",
                  !hasValue && "text-gray-500",
                  hasValue && !isValid && "text-red-400",
                  hasValue && isValid && "text-emerald-400",
                )}
              >
                <span className="mr-1">
                  {!hasValue ? "○" : isValid ? "✓" : "✕"}
                </span>

                {message}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
