import React from 'react'

export const Logo = () => {
  return (
    <div className="mb-8 text-center">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-400 shadow-lg shadow-emerald-500/20">
        <span className="text-xl font-bold text-slate-950">F</span>
      </div>

      <h1 className="text-3xl font-bold tracking-tight text-white">
        Welcome back
      </h1>

      <p className="mt-2 text-sm text-slate-400">
        Sign in to access your account
      </p>
    </div>
  );
}
