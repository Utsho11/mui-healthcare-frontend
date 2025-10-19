"use client";
import {
  useGetMYProfileQuery,
  useUpdateMYProfileMutation,
} from "@/redux/api/myProfile";
import { Box, Container, Grid } from "@mui/material";
import DoctorInformation from "./components/DoctorInformation";
import Image from "next/image";
import AutoFileUploader from "@/components/Form/AutoFileUploader";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const Profile = () => {
  const { data, isLoading } = useGetMYProfileQuery({});

  const [updateMYProfile, { isLoading: updating }] =
    useUpdateMYProfileMutation();

  const fileUploadHandler = (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("data", JSON.stringify({}));

    updateMYProfile(formData);
  };
  if (isLoading) {
    <p>Loading...</p>;
  }
  return (
    <>
      <Container>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Box
              sx={{
                height: 300,
                width: "100%",
                overflow: "hidden",
                borderRadius: 1,
              }}
            >
              <Image
                height={300}
                width={400}
                src={data?.profilePhoto}
                alt="User Photo"
              />
            </Box>
            <Box my={3}>
              {updating ? (
                <p>Uploading...</p>
              ) : (
                <AutoFileUploader
                  name="file"
                  label="Choose Your Profile Photo"
                  icon={<CloudUploadIcon />}
                  onFileUpload={fileUploadHandler}
                  variant="text"
                />
              )}
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 8 }}>
            <DoctorInformation data={data} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Profile;
