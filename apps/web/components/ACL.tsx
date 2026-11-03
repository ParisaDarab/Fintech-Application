"use client";

import { Button, CenteralizerInColumn } from "@/app/style/styledComponents";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, type ReactNode } from "react";

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
  const { user, isLoading, fetchCurrentUser } = useAuth();
  // Don't make an authorization decision before
  // authentication state has been restored.

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  if (isLoading) {
    return null;
  }
  // Routes in pathException don't require this ACL.
  if (pathException.includes(pathname)) {
    return <>{children}</>;
  }

  // User is not authenticated.
  if (!user) {
    return (
      <CenteralizerInColumn>
        <p>The current user does not have access for further action ! </p>
        <Button>
          <Link href={"/login"}>Back to login</Link>
        </Button>
      </CenteralizerInColumn>
    );
  }

  // User doesn't have the required role.
  if (user.role !== requiredRole) {
    return null;
  }

  return <>{children}</>;
};
