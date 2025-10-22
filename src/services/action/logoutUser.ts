import { authKey } from "@/Constants/Constants";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { deleteCookies } from "./deleteCookies";

export const logoutUser = (router: AppRouterInstance) => {
  console.log("user is hitting!!");
  deleteCookies();
  localStorage.removeItem(authKey);
  router.push("/");
  router.refresh();
};
