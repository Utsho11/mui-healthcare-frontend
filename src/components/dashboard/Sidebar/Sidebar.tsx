"use client";
import List from "@mui/material/List";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import logo from "@/assets/svgs/logo.svg";
import Link from "next/link";
import { drawerItems } from "@/utils/drawerItem";
import type { UserRole } from "@/types";
import SideBarItem from "./SideBarItem";
import { getUserInfo } from "@/services/auth.service";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const [userRole, setUserRole] = useState<UserRole | null>(null);

  useEffect(() => {
    const info = getUserInfo();
    setUserRole((info?.role as UserRole) ?? null);
  }, []);

  const drawer = (
    <div>
      <Stack
        component={Link}
        href="/"
        direction="row"
        alignItems="center"
        justifyContent="center"
        gap={2}
        sx={{
          mt: 1,
          my: 1,
        }}
      >
        <Image src={logo} width={40} height={40} alt="logo" />
        <Typography
          sx={{
            cursor: "pointer",
          }}
        >
          MUI Healthcare
        </Typography>
      </Stack>
      <List>
        {userRole &&
          drawerItems(userRole).map((item, index) => (
            <SideBarItem key={index} item={item} />
          ))}
      </List>
    </div>
  );
  return <Box>{drawer}</Box>;
};

export default Sidebar;
