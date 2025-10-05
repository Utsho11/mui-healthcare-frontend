"use client";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import logo from "@/assets/svgs/logo.svg";
import Link from "next/link";
import { toast } from "sonner";
import { userLogin } from "@/services/action/userLogin";
import { useRouter } from "next/navigation";
import { storeUserInfo } from "@/services/auth.service";
import MUIForm from "@/components/Form/MUIForm";
import type { FieldValues } from "react-hook-form";
import MUIInput from "@/components/Form/MUIInput";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

export const validationScheme = z.object({
  email: z.email("Please enter a valid email address!"),
  password: z.string().min(6, "Must be at least 6 characters"),
});

const LoginPage = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  const handleLogin = async (values: FieldValues) => {
    try {
      // console.log(values);
      const res = await userLogin(values);
      if (res?.data?.accessToken) {
        toast.success(res?.message);
        storeUserInfo(res?.data?.accessToken);
        router.push("/dashboard");
      } else {
        setError(res.message);
      }
    } catch (error) {
      console.log(error);
    }
    // console.log(data.get("data"));
  };

  return (
    <Container>
      <Stack
        sx={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            boxShadow: 1,
            borderRadius: 1,
            p: 4,
            textAlign: "center",
          }}
        >
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Image src={logo} width={50} height={50} alt="logo" />
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={600}>
                Login MUI HealthCare
              </Typography>
            </Box>
          </Stack>
          {error && (
            <Box>
              <Typography
                sx={{
                  backgroundColor: "red",
                  padding: "1px",
                  borderRadius: "2px",
                  color: "white",
                  marginTop: "5px",
                }}
              >
                {error}
              </Typography>
            </Box>
          )}
          <MUIForm
            onSubmit={handleLogin}
            resolver={zodResolver(validationScheme)}
            defaultValues={{
              email: "",
              password: "",
            }}
          >
            <Grid container my={1}>
              <Grid
                size={{ md: 12 }}
                my={1}
                gap={2}
                sx={{
                  display: "flex",
                }}
              >
                <Grid size={{ md: 6 }}>
                  <MUIInput
                    name="email"
                    label="Email"
                    variant="outlined"
                    type="email"
                    size="small"
                    placeholder="Email"
                    fullWidth={true}
                  />
                </Grid>
                <Grid size={{ md: 6 }}>
                  <MUIInput
                    name="password"
                    label="Password"
                    type="password"
                    variant="outlined"
                    size="small"
                    placeholder="Password"
                    fullWidth={true}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Link href="/">
              <Typography color="secondary.main" textAlign="end" mb={1}>
                Forgot Password?
              </Typography>
            </Link>
            <Button
              sx={{
                margin: "10px 0px",
              }}
              fullWidth={true}
              type="submit"
            >
              LOGIN
            </Button>
            <Typography component="p" fontWeight={300}>
              Don&apos;t have an account?{" "}
              <Typography component="span" color="primary">
                <Link href="/register">Create an account</Link>
              </Typography>
            </Typography>
          </MUIForm>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
