"use client";

import { Eye, EyeOff, WalletCards, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import I18N from "@/lib/I18n/en.json";
export const BalanceCard = () => {
  const [showBalance, setShowBalance] = useState(true);

  return (
    <div
      className="
        group relative
        w-full max-w-md
        overflow-hidden rounded-3xl
        bg-linear-to-br from-slate-950 via-slate-900 to-slate-800
        p-6 text-white
        shadow-2xl shadow-slate-900/20
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-2xl hover:shadow-slate-900/30
      "
    >
      {/* Decorative glow */}
      <div
        className="
          pointer-events-none absolute
          -right-16 -top-16
          h-40 w-40
          rounded-full
          bg-cyan-400/20
          blur-3xl
          transition-transform duration-500
          group-hover:scale-200
        "
      />

      <div
        className="
          pointer-events-none absolute
          -bottom-20 -left-10
          h-40 w-40
          rounded-full
          bg-violet-500/30
          blur-3xl
           group-hover:scale-200
        "
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="
                flex h-11 w-11 items-center justify-center
                rounded-2xl
                bg-white/10
                backdrop-blur-sm
              "
            >
              <WalletCards className="h-5 w-5 text-cyan-300" />
            </div>

            <div>
              <p className="text-sm text-slate-400">
                {I18N.balanceCard.availableBalance}
              </p>
              <p className="text-xs text-slate-500">
                {I18N.balanceCard.mainAccount}
              </p>
            </div>
          </div>

          {/* Eye button */}
          <button
            type="button"
            onClick={() => setShowBalance((prev) => !prev)}
            aria-label={showBalance ? "Hide balance" : "Show balance"}
            className="
              rounded-xl p-2
              text-slate-400
              transition-colors duration-200
              hover:bg-white/10
              hover:text-white
            "
          >
            {showBalance ? (
              <Eye className="h-5 w-5" />
            ) : (
              <EyeOff className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Balance */}
        <div className="mt-8">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
            {I18N.balanceCard.currentBalance}
          </p>

          <div className="mt-2 flex items-end gap-3">
            <h2 className="text-4xl font-bold tracking-tight">
              {showBalance ? "£24,680.50" : "£••••••"}
            </h2>

            <span
              className="
                mb-1 rounded-full
                bg-emerald-400/10
                px-2.5 py-1
                text-xs font-medium
                text-emerald-300
              "
            >
              +8.4%
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 flex items-end justify-between">
          <div>
            <p className="text-xs text-slate-500">
              {" "}
              {I18N.balanceCard.accountNumber}
            </p>

            <p className="mt-1 text-sm font-medium tracking-[0.2em] text-slate-300">
              •••• •••• 4821
            </p>
          </div>

          <button
            type="button"
            className="
              group/button
              flex items-center gap-2
              rounded-xl
              bg-white/10
              px-3 py-2
              text-xs font-medium
              text-slate-200
              backdrop-blur-sm
              transition-all duration-200
              hover:bg-white/15
            "
          >
            {I18N.balanceCard.details}
            <ArrowUpRight
              className="
                h-3.5 w-3.5
                transition-transform duration-200
                group-hover/button:translate-x-0.5
                group-hover/button:-translate-y-0.5
              "
            />
          </button>
        </div>
      </div>
    </div>
  );
};
