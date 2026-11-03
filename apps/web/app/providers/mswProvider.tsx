"use client";

import { useEffect, useState } from "react";

let mswStart: Promise<unknown> | null = null;

const startMSW = () => {
  if (!mswStart) {
    mswStart = import("@/mock/browser").then(({ worker }) =>
      worker.start({ onUnhandledRequest: "bypass" }),
    );
  }
  return mswStart;
};

export const MSWProvider = ({ children }: { children: React.ReactNode }) => {
  const [ready, setReady] = useState(process.env.NODE_ENV !== "development");

  useEffect(() => {
    if (process.env.NODE_ENV !== "development") return;
    startMSW().then(() => setReady(true));
  }, []);

  if (!ready) return null;

  return children;
};
