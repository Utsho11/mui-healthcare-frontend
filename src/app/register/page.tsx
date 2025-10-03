"use client";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import logo from "@/assets/svgs/logo.svg";
import Link from "next/link";
import { type FieldValues } from "react-hook-form";
import modifyPayload from "@/utils/modifyPayload";
import { registerPatient } from "@/services/action/registerPatient";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { userLogin } from "@/services/action/userLogin";
import { storeUserInfo } from "@/services/auth.service";
import MUIForm from "@/components/Form/MUIForm";
import MUIInput from "@/components/Form/MUIInput";
import { z } from "zod";



const RegisterPage = () => {
  const router = useRouter();
  const handleRegister = async (values: FieldValues) => {
    const data = modifyPayload(values);
    try {
      const res = await registerPatient(data);
      if (res?.data?.id) {
        toast.success(res?.message);
        const result = await userLogin({
          email: values.patient.email,
          password: values.password,
        });
        if (result?.data?.accessToken) {
          storeUserInfo(result?.data?.accessToken);
          router.push("/");
        }
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
                Patient Register
              </Typography>
            </Box>
          </Stack>
          <Box>
            <MUIForm onSubmit={handleRegister}>
              <Grid container my={1}>
                <Grid size={{ md: 12 }} my={1}>
                  <MUIInput
                    name="patient.name"
                    label="Name"
                    required={true}
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                  />
                </Grid>
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
                      label="Email"
                      variant="outlined"
                      size="small"
                      fullWidth={true}
                      required={true}
                      name="patient.email"
                    />
                  </Grid>
                  <Grid size={{ md: 6 }}>
                    <MUIInput
                      label="Password"
                      type="password"
                      variant="outlined"
                      size="small"
                      fullWidth={true}
                      name="password"
                      required={true}
                    />
                  </Grid>
                </Grid>
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
                      label="Contact Number"
                      variant="outlined"
                      required={true}
                      size="small"
                      fullWidth={true}
                      name="patient.contactNumber"
                    />
                  </Grid>
                  <Grid size={{ md: 6 }}>
                    <MUIInput
                      label="Address"
                      required={true}
                      variant="outlined"
                      size="small"
                      fullWidth={true}
                      name="patient.address"
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Button
                sx={{
                  margin: "10px 0px",
                }}
                fullWidth={true}
                type="submit"
              >
                REGISTER
              </Button>
              <Typography component="p" fontWeight={300}>
                Do you already have an account?{" "}
                <Link href="/login">
                  <Typography component="span" color="primary">
                    Login
                  </Typography>
                </Link>
              </Typography>
            </MUIForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
