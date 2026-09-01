"use client";

import { sidebarItem } from "@/mock/data/dashboard";
import Link from "next/link";

import { DashboardItem } from "./DashboardItem";

export const Sidebar = () => {
  return (
    <section className="bg-white py-4 rounded-md text-left h-full shrink-0">
      <div className="w-[60%]">
        <h2 className="px-4">Fintech</h2>
        <ul className="flex flex-col gap-2 my-10">
          {sidebarItem.map((item) => {
            const { title, url, id, icon } = item;
            return (
              <li key={id}>
                <Link href={url}>
                  <DashboardItem title={title} icon={icon} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
