"use client";

import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  CircleDollarSign,
  CreditCard,
  Menu,
  ShieldCheck,
  Sparkles,
  WalletCards,
  X,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const goToLogin = () => {
    router.push("/login");
  };

  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-1/2 top-0 h-150 w-150 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute -left-40 top-1/3 h-100 w-100 rounded-full bg-violet-500/10 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Navbar */}
      <header className="relative z-20 border-b border-white/5">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* Logo */}
          <button
            type="button"
            onClick={() => router.push("/")}
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-cyan-400 to-emerald-400 shadow-lg shadow-cyan-500/20">
              <CircleDollarSign className="h-5 w-5 text-slate-950" />
            </div>

            <span className="text-xl font-bold tracking-tight">Fintech</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#features"
              className="text-sm text-slate-400 transition-colors duration-200 hover:text-white"
            >
              Features
            </a>

            <a
              href="#security"
              className="text-sm text-slate-400 transition-colors duration-200 hover:text-white"
            >
              Security
            </a>

            <a
              href="#about"
              className="text-sm text-slate-400 transition-colors duration-200 hover:text-white"
            >
              About
            </a>
          </nav>

          {/* Desktop CTA */}
          <button
            type="button"
            onClick={goToLogin}
            className="hidden rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-100 hover:shadow-lg md:block"
          >
            Sign in
          </button>

          {/* Mobile menu */}
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="rounded-xl border border-white/10 bg-white/5 p-2 md:hidden"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile navigation */}
        <div
          className={`
            overflow-hidden border-t border-white/5 transition-all duration-300 md:hidden
            ${isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <div className="flex flex-col gap-4 px-6 py-6">
            <a
              href="#features"
              onClick={() => setIsMenuOpen(false)}
              className="text-slate-300"
            >
              Features
            </a>

            <a
              href="#security"
              onClick={() => setIsMenuOpen(false)}
              className="text-slate-300"
            >
              Security
            </a>

            <a
              href="#about"
              onClick={() => setIsMenuOpen(false)}
              className="text-slate-300"
            >
              About
            </a>

            <button
              type="button"
              onClick={goToLogin}
              className="w-full rounded-xl bg-white px-5 py-3 font-semibold text-slate-950"
            >
              Sign in
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10">
        <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
          {/* Left */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">
              <Sparkles className="h-4 w-4" />
              Modern banking, built for you
            </div>

            <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Your money.
              <br />
              <span className="bg-linear-to-br from-cyan-300 via-emerald-300 to-teal-200 bg-clip-text text-transparent">
                Your control.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400">
              Manage your accounts, track transactions, and stay in control of
              your finances from one beautifully designed dashboard.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                onClick={goToLogin}
                className="
                  group flex items-center justify-center gap-2
                  rounded-2xl
                  bg-linear-to-br from-cyan-400 to-emerald-400
                  px-6 py-3.5
                  font-semibold text-slate-950
                  shadow-xl shadow-cyan-500/10
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-2xl hover:shadow-cyan-500/20
                "
              >
                Get started
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <a
                href="#features"
                className="
                  flex items-center justify-center
                  rounded-2xl border border-white/10
                  bg-white/5 px-6 py-3.5
                  font-medium text-slate-200
                  backdrop-blur-sm
                  transition-all duration-300
                  hover:border-white/20
                  hover:bg-white/10
                "
              >
                Explore features
              </a>
            </div>

            {/* Trust */}
            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                Secure authentication
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                Real-time tracking
              </div>
            </div>
          </div>

          {/* Right — Dashboard Preview */}
          <div className="relative">
            <div className="absolute -inset-10 rounded-full bg-cyan-400/10 blur-3xl" />

            <div
              className="
                relative
                overflow-hidden rounded-4xl
                border border-white/10
                bg-white/4
                p-4
                shadow-2xl shadow-black/40
                backdrop-blur-xl
              "
            >
              {/* Window header */}
              <div className="flex items-center justify-between border-b border-white/5 px-3 pb-4">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                </div>

                <span className="text-xs text-slate-500">Dashboard</span>

                <div className="h-6 w-6 rounded-full bg-linear-to-br from-cyan-400 to-violet-400" />
              </div>

              {/* Dashboard content */}
              <div className="p-4 sm:p-6">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-500">Good morning</p>

                    <h3 className="mt-1 text-lg font-semibold">
                      Welcome back, Parisa
                    </h3>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-2">
                    <CreditCard className="h-5 w-5 text-cyan-300" />
                  </div>
                </div>

                {/* Balance Card */}
                <div className="rounded-3xl bg-linear-to-br from-slate-800 via-slate-900 to-slate-950 p-6 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <WalletCards className="h-4 w-4" />
                      Available balance
                    </div>

                    <span className="rounded-full bg-emerald-400/10 px-2.5 py-1 text-xs text-emerald-300">
                      +8.4%
                    </span>
                  </div>

                  <div className="mt-6 text-3xl font-bold tracking-tight">
                    £24,680.50
                  </div>

                  <div className="mt-8 flex items-end justify-between">
                    <div>
                      <p className="text-xs text-slate-500">Main account</p>
                      <p className="mt-1 text-sm tracking-widest text-slate-300">
                        •••• •••• 4821
                      </p>
                    </div>

                    <ArrowUpRight className="h-5 w-5 text-cyan-300" />
                  </div>
                </div>

                {/* Stats */}
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-white/5 bg-white/3 p-4">
                    <p className="text-xs text-slate-500">Income</p>

                    <p className="mt-2 text-lg font-semibold">£8,420</p>

                    <p className="mt-1 text-xs text-emerald-300">+12.6%</p>
                  </div>

                  <div className="rounded-2xl border border-white/5 bg-white/3 p-4">
                    <p className="text-xs text-slate-500">Expenses</p>

                    <p className="mt-2 text-lg font-semibold">£3,280</p>

                    <p className="mt-1 text-xs text-slate-400">This month</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative z-10 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Built for modern finance
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight">
              Everything you need.
              <br />
              Nothing you don't.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: WalletCards,
                title: "One clear dashboard",
                description:
                  "See your balance, accounts, and financial activity in one place.",
              },
              {
                icon: ShieldCheck,
                title: "Security first",
                description:
                  "Designed with authentication and secure session management at its core.",
              },
              {
                icon: CreditCard,
                title: "Transaction control",
                description:
                  "Track your financial activity with a clean and intuitive experience.",
              },
            ].map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="
                    group rounded-3xl
                    border border-white/5
                    bg-white/3
                    p-7
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-cyan-400/20
                    hover:bg-white/5
                  "
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-6 text-lg font-semibold">
                    {feature.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-500">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Security */}
      <section id="security" className="relative z-10 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="rounded-4xl border border-emerald-400/10 bg-linear-to-br from-emerald-400/6 to-cyan-400/3 p-8 sm:p-12">
            <div className="max-w-2xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300">
                <ShieldCheck className="h-6 w-6" />
              </div>

              <h2 className="mt-6 text-3xl font-bold">
                Your financial data deserves serious protection.
              </h2>

              <p className="mt-4 leading-7 text-slate-400">
                Authentication, authorization, secure sessions, and carefully
                designed APIs work together to create a safer financial
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="about" className="relative z-10 border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© 2026 Fintech. All rights reserved.</p>

          <button
            type="button"
            onClick={goToLogin}
            className="text-slate-300 transition-colors hover:text-white"
          >
            Sign in →
          </button>
        </div>
      </footer>
    </main>
  );
}
