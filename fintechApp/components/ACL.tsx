"use client";

import { useAuth } from "@/contexts/AuthContext";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

type RequiredRole = "admin" | "user" | "guest" | "superAdmin";

type ACLProps = {
  children: ReactNode;
  requiredRole?: RequiredRole;
  pathException?: string[];
};

export const ACL = ({
  children,
  requiredRole = "guest",
  pathException = [],
}: ACLProps) => {
  const pathname = usePathname();
  const { user, isLoading } = useAuth();
  // Don't make an authorization decision before
  // authentication state has been restored.
  if (isLoading) {
    return null;
  }

  // Routes in pathException don't require this ACL.
  if (pathException.includes(pathname)) {
    return <>{children}</>;
  }

  // User is not authenticated.
  if (!user) {
    return null;
  }

  // User doesn't have the required role.
  if (user.role !== requiredRole) {
    return null;
  }

  return <>{children}</>;
};
