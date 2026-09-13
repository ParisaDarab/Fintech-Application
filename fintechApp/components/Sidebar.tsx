"use client";

import { sidebarItem } from "@/mock/data/dashboard";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { DashboardItem } from "./DashboardItem";

export const Sidebar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <button
        type="button"
        aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed right-5 top-5 z-50 rounded-md bg-white p-2 shadow-md lg:hidden"
      >
        {isOpen ? (
          <X className="h-5 w-5 text-black" />
        ) : (
          <Menu className="h-5 w-5 text-black" />
        )}
      </button>

      {/* Mobile backdrop */}
      {isOpen && (
        <button
          type="button"
          aria-label="Close sidebar"
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-30 bg-black/30 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
    fixed inset-y-0 left-0 z-40 min-w-64 bg-slate-950
    transform transition-transform duration-300 ease-in-out
    lg:static lg:h-full lg:translate-x-0
    ${isOpen ? "translate-x-0" : "-translate-x-full"}
  `}
      >
        <div className="h-full py-4">
          <h2 id="logo" className="px-6 text-xl font-bold text-gray-900">
            Fintech
          </h2>

          <nav className="mt-10">
            <ul className="flex flex-col gap-2">
              {sidebarItem.map((item) => {
                const isSelected = pathname === item.url;

                return (
                  <li key={item.id}>
                    <Link href={item.url} onClick={() => setIsOpen(false)}>
                      <DashboardItem
                        title={item.title}
                        icon={item.icon}
                        selected={isSelected}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};
