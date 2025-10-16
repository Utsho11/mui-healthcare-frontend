"use client";

import MUIForm from "@/components/Form/MUIForm";
import MUIInput from "@/components/Form/MUIInput";
import MUISelectField from "@/components/Form/MUISelectField";
import { useGetDoctorQuery } from "@/redux/api/doctorApi";
import { Gender } from "@/types";
import { Box, Button, Grid, Typography } from "@mui/material";
import type { FieldValues } from "react-hook-form";

type TParams = {
  params: {
    doctorId: string;
  };
};

const defaultValues = {
  email: "",
  name: "",
  contactNumber: "",
  address: "",
  registrationNumber: "",
  gender: "",
  experience: 0,
  apointmentFee: 0,
  qualification: "",
  currentWorkingPlace: "",
  designation: "",
  profilePhoto: "",
};

const DoctorUpdatePage = ({ params }: TParams) => {
  //   console.log(params.doctorId);
  const id = params?.doctorId;
  const { data, isLoading } = useGetDoctorQuery(id);

  console.log(data);

  const handleFormSubmit = async (values: FieldValues) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <Box>
      <Typography component="h5" variant="h5">
        Update Doctor Info
      </Typography>
      {isLoading ? (
        "Loading..."
      ) : (
        <MUIForm onSubmit={handleFormSubmit} defaultValues={defaultValues}>
          <Grid container spacing={2} sx={{ my: 5 }}>
            <Grid
              size={{
                xs: 12,
                sm: 12,
                md: 4,
              }}
            >
              <MUIInput
                name="name"
                label="Name"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid
              size={{
                xs: 12,
                sm: 12,
                md: 4,
              }}
            >
              <MUIInput
                name="email"
                type="email"
                label="Email"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>

            <Grid
              size={{
                xs: 12,
                sm: 12,
                md: 4,
              }}
            >
              <MUIInput
                name="contactNumber"
                label="Contract Number"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid
              size={{
                xs: 12,
                sm: 12,
                md: 4,
              }}
            >
              <MUIInput
                name="address"
                label="Address"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid
              size={{
                xs: 12,
                sm: 12,
                md: 4,
              }}
            >
              <MUIInput
                name="registrationNumber"
                label="Registration Number"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid
              size={{
                xs: 12,
                sm: 12,
                md: 4,
              }}
            >
              <MUIInput
                name="experience"
                type="number"
                label="Experience"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid
              size={{
                xs: 12,
                sm: 12,
                md: 4,
              }}
            >
              <MUISelectField
                items={Gender}
                name="gender"
                label="Gender"
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid
              size={{
                xs: 12,
                sm: 12,
                md: 4,
              }}
            >
              <MUIInput
                name="apointmentFee"
                type="number"
                label="ApointmentFee"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid
              size={{
                xs: 12,
                sm: 12,
                md: 4,
              }}
            >
              <MUIInput
                name="qualification"
                label="Qualification"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>

            <Grid
              size={{
                xs: 12,
                sm: 12,
                md: 4,
              }}
            >
              <MUIInput
                name="currentWorkingPlace"
                label="Current Working Place"
                fullWidth={true}
              />
            </Grid>
            <Grid
              size={{
                xs: 12,
                sm: 12,
                md: 4,
              }}
            >
              <MUIInput
                name="designation"
                label="Designation"
                fullWidth={true}
              />
            </Grid>
          </Grid>

          <Button type="submit">Update</Button>
        </MUIForm>
      )}
    </Box>
  );
};

export default DoctorUpdatePage;
