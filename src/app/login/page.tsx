"use client";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import { toast } from "sonner";
import { useForm, type SubmitHandler } from "react-hook-form";
import { userLogin } from "@/services/action/userLogin";
import { useRouter } from "next/navigation";

export interface IFormValue {
  email: string;
  password: string;
}

const LoginPage = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<IFormValue>();
  const onSubmit: SubmitHandler<IFormValue> = async (values) => {
    try {
      // console.log(values);
      const res = await userLogin(values);
      if (res?.data?.accessToken) {
        toast.success(res?.message);
        router.push("/");
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
              <Image src={assets.svgs.logo} width={50} height={50} alt="logo" />
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={600}>
                Login MUI HealthCare
              </Typography>
            </Box>
          </Stack>
          <form onSubmit={handleSubmit(onSubmit)}>
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
                  <TextField
                    label="Email"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                    {...register("email")}
                  />
                </Grid>
                <Grid size={{ md: 6 }}>
                  <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                    {...register("password")}
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
          </form>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
