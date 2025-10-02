"use client";
import { Box, Container, Stack, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import Link from "next/link";

const Navbar = () => {
  const AuthButton = dynamic(
    () => import("@/components/UI/AuthButton/AuthButton"),
    { ssr: false }
  );

  return (
    <Container>
      <Stack
        py={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h4" component="h1" fontWeight={600}>
            M
            <Box component="span" color="primary.main">
              UI
            </Box>{" "}
            HealthCare
          </Typography>
        </Stack>
        <Stack justifyContent="space-between" direction="row" spacing={4}>
          <Typography
            color="secondary.main"
            component={Link}
            href="/consultation"
          >
            Consultation
          </Typography>
          <Typography
            color="secondary.main"
            component={Link}
            href="/healthPlans"
          >
            Health Plans
          </Typography>
          <Typography color="secondary.main" component={Link} href="/medicine">
            Medicine
          </Typography>
          <Typography
            color="secondary.main"
            component={Link}
            href="/diagnostics"
          >
            Diagnostics
          </Typography>
          <Typography color="secondary.main" component={Link} href="/ngos">
            NGOs
          </Typography>
        </Stack>
        <AuthButton />
      </Stack>
    </Container>
  );
};

export default Navbar;
