"use client";
import { useAuth } from "@/contexts/AuthContext";

export const UserInfo = ({ isShortList = true }) => {
  const { user } = useAuth();
  return (
    <div>
      {" "}
      {isShortList ? <h2 className="mb-5">Welcome, {user?.name} </h2> : ""}
    </div>
  );
};
