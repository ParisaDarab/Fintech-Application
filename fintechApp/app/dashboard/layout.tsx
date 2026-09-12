import { ACL } from "@/components/ACL";
import { Sidebar } from "@/components/Sidebar";

const DashboardLayout = ({ children }: LayoutProps<"/">) => {
  return (
    <div className="grid h-screen min-h-0 grid-cols-1 overflow-hidden lg:grid-cols-[240px_1fr]">
      <ACL requiredRole="user">
        <Sidebar />
      </ACL>

      <main className="min-h-0 min-w-0 overflow-auto p-10">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
