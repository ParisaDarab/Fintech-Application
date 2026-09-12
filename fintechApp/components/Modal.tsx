"use client";

import { X } from "lucide-react";
import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export type ModalProps = {
  title?: string;
  position?: "center" | "top" | "bottom";
  className?: string;
  children?: ReactNode;
  showCloseButton?: boolean;
  onClose?: () => void | ReactNode;
};

const positionClasses = {
  center: "items-center justify-center",
  top: "items-start justify-center pt-10",
  bottom: "items-end justify-center pb-10",
};

export const Modal = ({
  title = "",
  position = "center",
  className = "",
  children,
  showCloseButton = true,
  onClose,
}: ModalProps) => {
  return (
    <div
      className={twMerge(
        `
          fixed inset-0 z-100
          flex
          bg-black/40
          p-4
          backdrop-blur-sm
          transition-opacity
          duration-300
        `,
        positionClasses[position],
      )}
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close modal"
        onClick={onClose}
        className="absolute inset-0 cursor-pointer"
      />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? "modal-title" : undefined}
        className={twMerge(
          `
            relative z-10
            w-full
            max-w-lg
            overflow-hidden
            rounded-2xl
            bg-white
            shadow-2xl
          `,
          className,
        )}
      >
        {/* Header */}
        {(title || showCloseButton) && (
          <header className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
            {title && (
              <h2
                id="modal-title"
                className="text-lg font-semibold text-slate-900"
              >
                {title}
              </h2>
            )}

            {showCloseButton && (
              <button
                type="button"
                onClick={onClose}
                aria-label="Close modal"
                className="
                  ml-auto rounded-lg p-2
                  text-slate-400
                  transition-colors duration-200
                  hover:bg-slate-100
                  hover:text-slate-700
                "
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </header>
        )}

        {/* Content */}
        <section className="p-6">{children}</section>
      </div>
    </div>
  );
};
