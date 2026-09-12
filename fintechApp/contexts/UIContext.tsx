"use client";

import { sidebarItem } from "@/mock/data/dashboard";
import type {
  ModalOptions,
  UIContextType,
} from "@/types/context";
import { usePathname } from "next/navigation";
import {
  createContext,
  type ReactNode,
  useContext,
} from "react";

import { Modal } from "@/components/Modal";

type UIProviderProps = {
  children: ReactNode;
};

const UIContext = createContext<UIContextType | undefined>(
  undefined,
);

export const UIProvider = ({ children }: UIProviderProps) => {
  const pathname = usePathname();

  const selectedSidebarItem = sidebarItem.find(
    (item) => item.url === pathname,
  );

  const openModal = (options: ModalOptions = {}) => {
    return <Modal {...options} />;
  };

  const closeModal = () => {
    return <></>;
  };

  return (
    <UIContext.Provider
      value={{
        selectedSidebarItem,
        openModal,
        closeModal,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export const useUIContext = (): UIContextType => {
  const context = useContext(UIContext);

  if (!context) {
    throw new Error(
      "useUIContext must be used within UIProvider",
    );
  }

  return context;
};