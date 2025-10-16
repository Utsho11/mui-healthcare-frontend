"use client";
import DashboardDrawer from "@/components/dashboard/DashboardDrawer/DashboardDrawer";
import { isLoggedIn } from "@/services/auth.service";
import { useRouter } from "next/navigation";

const DasboardLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  if (!isLoggedIn()) {
    return router.push("/login");
  }

  return <DashboardDrawer>{children}</DashboardDrawer>;
};

export default DasboardLayout;
