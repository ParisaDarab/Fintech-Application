import { sidebarItem } from "@/mock/data/dashboard";
import { User } from "./User";


export type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

export type ThemeContextType = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

export type UIContextType = {
  selectedSidebarItem: (typeof sidebarItem)[number] | undefined;
};
