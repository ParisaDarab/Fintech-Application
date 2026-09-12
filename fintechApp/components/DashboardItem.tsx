import type { LucideIcon } from "lucide-react";
import { SidebarItem } from "./Components";

interface DashboardItemProps {
  title: string;
  icon: LucideIcon;
  selected?: boolean;
}

export const DashboardItem = ({
  title,
  icon: Icon,
  selected = false,
}: DashboardItemProps) => {
  return (
    <SidebarItem $selected={selected}>
      <span className="sidebar-icon">
        <Icon className="h-5 w-5" />
      </span>

      <span>{title}</span>
    </SidebarItem>
  );
};
