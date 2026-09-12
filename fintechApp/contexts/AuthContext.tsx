"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import clientApi from "@/api/clientApi";
import { AuthContextType } from "@/types/context";
import { User } from "@/types/User";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  console.log(user);
  const isAuthenticated = user !== null;

  const fetchCurrentUser = async () => {
    try {
      const currentUser = await clientApi<User>({
        method: "GET",
        url: "/me",
      });

      setUser(currentUser);
    } catch {
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  const login = async (email: string, password: string): Promise<void> => {
    const response = await clientApi<User>({
      method: "POST",
      url: "/auth/login",
      body: {
        email,
        password,
      },
    });

    setUser(response);
  };

  const logout = async (): Promise<void> => {
    await clientApi<void>({
      method: "POST",
      url: "/auth/logout",
    });

    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return context;
};
