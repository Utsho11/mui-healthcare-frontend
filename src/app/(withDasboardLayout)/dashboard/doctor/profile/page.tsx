"use client";
import { useGetMYProfileQuery } from "@/redux/api/myProfile";
import { Container, Grid } from "@mui/material";
import DoctorInformation from "./components/DoctorInformation";

const Profile = () => {
  const { data, isLoading } = useGetMYProfileQuery({});
  if (isLoading) {
    <p>Loading...</p>;
  }
  return (
    <>
      <Container>
        <Grid size={{ xs: 12, md: 8 }}>
          <DoctorInformation data={data} />
        </Grid>
      </Container>
    </>
  );
};

export default Profile;
