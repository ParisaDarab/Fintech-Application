"use client";

import { AuthProvider } from "@/contexts/AuthContext";
import QueryProvider from "./QueryProvider";
import { UIProvider } from "@/contexts/UIContext";
import { MSWProvider } from "./mswProvider";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <MSWProvider>
      <AuthProvider>
        <UIProvider>
          <QueryProvider>{children}</QueryProvider>
        </UIProvider>
      </AuthProvider>
    </MSWProvider>
  );
};
