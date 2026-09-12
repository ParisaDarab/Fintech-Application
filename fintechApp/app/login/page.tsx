"use client";

import Link from "next/link";
import type { FormEvent } from "react";
import { useState } from "react";
import I18n from "@/lib/I18n/error.json";
import clientApi from "@/api/clientApi";
import { apiList } from "@/api/apiList";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Logo } from "@/components/Logo";
import { ErrorText } from "@/components/Components";
import { ApiError } from "@/models/error";

import {
  getPasswordRuleStatus,
  PASSWORD_RULE_LABELS,
  validateEmail,
  validatePassword,
} from "@/utilities/validate";
import { useRouter } from "next/navigation";

type FieldErrors = {
  email?: string;
  password?: string;
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Clear previous errors
    setFieldErrors({});
    setFormError(null);

    // Client-side validation
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    if (emailError || passwordError) {
      setFieldErrors({
        email: emailError ?? undefined,
        password: passwordError ?? undefined,
      });

      return;
    }

    try {
      setIsLoading(true);

      const response = await clientApi({
        ...apiList.authentication.login,
        body: {
          email,
          password,
          rememberMe,
        },
      });

      console.log("Login successful:", response);

      router.replace("/dashboard");
    } catch (error) {
      if (error instanceof ApiError) {
        // Backend validation errors
        if (error.error.type === "VALIDATION_ERROR" && error.detail) {
          const errors: FieldErrors = {};

          for (const detail of error.detail) {
            if (detail.field === "email") {
              errors.email = detail.message;
            }

            if (detail.field === "password") {
              errors.password = detail.message;
            }
          }

          setFieldErrors(errors);

          // If backend gave only a general validation error
          // and no field-specific errors:
          if (!errors.email && !errors.password) {
            setFormError(error.message);
          }

          return;
        }

        // Authentication error
        if (error.error.type === "INVALID_CREDENTIALS") {
          setFormError(I18n.errors.INVALID_CREDENTIALS);
          return;
        }

        // Other known API errors
        setFormError(error.message);

        return;
      }

      // Unexpected error
      setFormError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-20% from-slate-950 via-slate-700 to-emerald-950 px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Logo />

        {/* Login Card */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl">
          {/* Form-level error */}
          {formError && (
            <div
              role="alert"
              className="mb-5 rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3"
            >
              <ErrorText className="mt-0">{formError}</ErrorText>
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
            noValidate
          >
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
                aria-invalid={Boolean(fieldErrors.email)}
                aria-describedby={fieldErrors.email ? "email-error" : undefined}
                className="h-12 w-full"
                onChange={(event) => {
                  setEmail(event.target.value);

                  if (fieldErrors.email) {
                    setFieldErrors((prev) => ({
                      ...prev,
                      email: undefined,
                    }));
                  }
                }}
              />

              {fieldErrors.email && (
                <ErrorText id="email-error">{fieldErrors.email}</ErrorText>
              )}
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
                aria-invalid={Boolean(fieldErrors.password)}
                aria-describedby={
                  fieldErrors.password ? "password-error" : undefined
                }
                onChange={(event) => {
                  setPassword(event.target.value);

                  if (fieldErrors.password) {
                    setFieldErrors((prev) => ({
                      ...prev,
                      password: undefined,
                    }));
                  }
                }}
                className="h-12 w-full"
                validationPatternList={PASSWORD_RULE_LABELS}
                validationFunction={getPasswordRuleStatus}
              />

              {fieldErrors.password && (
                <ErrorText id="password-error">
                  {fieldErrors.password}
                </ErrorText>
              )}
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
            <Button
              type="submit"
              text={isLoading ? "Signing in..." : "Sign in"}
              disabled={isLoading}
              className="mt-1"
            />

            {/* Divider */}
            <div className="flex items-center gap-4 py-0.5">
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
