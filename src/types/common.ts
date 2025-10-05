import { USER_ROLE } from "@/Constants/role";
import type { SvgIconTypeMap } from "@mui/material";
import type { OverridableComponent } from "@mui/material/OverridableComponent";

export type IMeta = {
  page: string;
  limit: string;
  total: string;
};

export type UserRole = keyof typeof USER_ROLE;

export interface DrawerItem {
  title: string;
  path: string;
  parentPath?: string;
  icon?: OverridableComponent<SvgIconTypeMap<Record<string, never>, "svg">> & {
    muiName: string;
  };
  child?: DrawerItem[];
}
