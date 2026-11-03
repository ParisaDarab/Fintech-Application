import { ACL } from "@/components/ACL";
import { Sidebar } from "@/components/Sidebar";

const DashboardLayout = ({ children }: LayoutProps<"/">) => {
  return (
    <ACL requiredRole="user">
      <div className="grid h-screen min-h-0 grid-cols-1 overflow-hidden lg:grid-cols-[240px_1fr]">
        <Sidebar />
        <main className="min-h-0 min-w-0 overflow-auto p-10">{children}</main>
      </div>
    </ACL>
  );
};

export default DashboardLayout;
