import { DashboardItem } from "@/components/DashboardItem";
import { Sidebar } from "@/components/Sidebar";
import { sidebarItem } from "@/mock/data/dashboard";
import Link from "next/link";

export default function DashboardLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="grid grid-cols-[1fr_4fr] h-screen  overflow-hidden">
      <Sidebar />
      <main className="h-full p-6">{children}</main>
    </div>
  );
}
