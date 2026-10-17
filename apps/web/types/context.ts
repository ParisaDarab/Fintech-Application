import { sidebarItem } from "@/mock/data/dashboard";
import { User } from "./User";

export type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  fetchCurrentUser: () => Promise<void>;
};

export type ThemeContextType = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

export type SidebarItem = (typeof sidebarItem)[number];

export type ModalPosition = "center" | "top" | "bottom";

export type ModalOptions = {
  title?: string;
  position?: ModalPosition;
  className?: string;
  children?: React.ReactNode;
  showCloseButton?: boolean;
  onClose?: () => void | React.ReactNode;
};

export type UIContextType = {
  selectedSidebarItem: SidebarItem | undefined;

  openModal: (options?: ModalOptions) => React.ReactNode;

  closeModal: () => React.ReactNode;
};
