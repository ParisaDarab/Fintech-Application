"use client";

import { useEffect } from "react";

export const MSWProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const startMSW = async () => {
      if (process.env.NODE_ENV !== "development") {
        return;
      }

      const { worker } = await import("@/mock/browser");

      await worker.start({
        onUnhandledRequest: "bypass",
      });
    };

    startMSW();
  }, []);

  return children;
};
