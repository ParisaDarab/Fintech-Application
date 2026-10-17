import I18N from "@/lib/I18n/en.json";
import {
  ArrowRightLeft,
  ClipboardClock,
  LayoutDashboard,
  Settings,
  SquareUserRound,
  UsersRound,
} from "lucide-react";
export const sidebarItem = [
  {
    id: "Dashboard",
    title: I18N.sideBar.dashboard,
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    id: "Accounts",
    title: I18N.sideBar.accounts,
    url: "/dashboard/accounts",
    icon: SquareUserRound,
  },
  {
    id: "transitions",
    title: I18N.sideBar.transactions,
    url: "/dashboard/transactions",
    icon: ArrowRightLeft,
  },
  {
    id: "Users",
    title: I18N.sideBar.users,
    url: "/dashboard/users",
    icon: UsersRound,
  },
  {
    id: "AuditLogs",
    title: I18N.sideBar.auditLogs,
    url: "/dashboard/AuditLogs",
    icon: ClipboardClock,
  },
  {
    id: "Settings",
    title: I18N.sideBar.settings,
    url: "/dashboard/settings",
    icon: Settings,
  },
];
