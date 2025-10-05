import DashboardDrawer from "@/components/dashboard/DashboardDrawer/DashboardDrawer";

const DasboardLayout = ({ children }: { children: React.ReactNode }) => {
  return <DashboardDrawer>{children}</DashboardDrawer>;
};

export default DasboardLayout;
