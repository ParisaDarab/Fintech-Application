"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Logo } from "@/components/Logo";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log({
      email,
      password,
      rememberMe,
    });
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-20% from-slate-950 via-slate-700 to-emerald-950 px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Logo />

        {/* Login Card */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-slate-200"
              >
                Email address
              </label>

              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            {/* Password */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-slate-200"
                >
                  Password
                </label>

                <Link
                  href="/forgot-password"
                  className="text-xs font-medium text-emerald-400 transition-colors hover:text-emerald-300"
                >
                  Forgot password?
                </Link>
              </div>

              <Input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                autoComplete="current-password"
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>

            {/* Remember Me */}
            <label
              htmlFor="remember"
              className="flex cursor-pointer items-center gap-3"
            >
              <Input
                id="remember"
                name="remember"
                type="checkbox"
                checked={rememberMe}
                onChange={(event) => setRememberMe(event.target.checked)}
                className="h-4 w-4"
              />

              <span className="text-sm text-slate-400">Remember me</span>
            </label>

            {/* Submit */}
            <Button type="submit" text="Sign in" className="mt-2" />

            {/* Divider */}
            <div className="flex items-center gap-4 py-2">
              <div className="h-px flex-1 bg-white/10" />

              <span className="text-xs text-slate-500">OR</span>

              <div className="h-px flex-1 bg-white/10" />
            </div>

            {/* Guest */}
            <Button
              type="button"
              text="Continue as guest"
              className="
                border
                border-white/10
                bg-white/5
                text-white
                shadow-none
                hover:bg-white/10
                hover:from-white/5
                hover:to-white/5
                hover:shadow-none
              "
            />
          </form>
        </div>

        {/* Register */}
        <p className="mt-6 text-center text-sm text-slate-500">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="font-medium text-emerald-400 transition-colors hover:text-emerald-300"
          >
            Create one
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
