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
import { useForm, SubmitHandler } from "react-hook-form";
import modifyPayload from "@/utils/modifyPayload";

interface IPatientData {
  name: string;
  email: string;
  contactNumber: string;
  address: string;
}

interface IPatientFormData {
  password: string;
  patient: IPatientData;
}

const RegisterPage = () => {
  const { register, handleSubmit } = useForm<IPatientFormData>();
  const onSubmit: SubmitHandler<IPatientFormData> = (values) => {
    const data = modifyPayload(values);
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
                Patient Register
              </Typography>
            </Box>
          </Stack>
          <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container my={1}>
                <Grid size={{ md: 12 }} my={1}>
                  <TextField
                    label="Name"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                    {...register("patient.name")}
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
                    <TextField
                      label="Email"
                      variant="outlined"
                      size="small"
                      fullWidth={true}
                      {...register("patient.email")}
                    />
                  </Grid>
                  <Grid size={{ md: 6 }}>
                    <TextField
                      label="Password"
                      variant="outlined"
                      size="small"
                      fullWidth={true}
                      {...register("password")}
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
                    <TextField
                      label="Contact Number"
                      variant="outlined"
                      size="small"
                      fullWidth={true}
                      {...register("patient.contactNumber")}
                    />
                  </Grid>
                  <Grid size={{ md: 6 }}>
                    <TextField
                      label="Address"
                      variant="outlined"
                      size="small"
                      fullWidth={true}
                      {...register("patient.address")}
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
            </form>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
