import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import howItWorksImg from "@/assets/how-it-works-img.png";
import searchIcon from "@/assets/icons/search-icon.png";
import doctorIcon from "@/assets/icons/doctor-icon.png";
import appointmentIcon from "@/assets/icons/appointment-icon.png";
import charityIcon from "@/assets/icons/charity-icon.png";

const HowItWorks = () => {
  return (
    <Container
      sx={{
        my: 5,
      }}
    >
      <Box mt={10}>
        <Typography variant="h6" component="h1" color="primary">
          How it Works
        </Typography>
        <Typography variant="h4" component="h1" fontWeight={700}>
          4 Easy Steps to Get Your Solution
        </Typography>
        <Typography mt={2} variant="body2" color="text.secondary">
          Access to expert physicians and surgeons, advanced technologies
        </Typography>
        <Typography variant="body2" color="text.secondary">
          and top-quality surgery facilities right here.
        </Typography>
      </Box>
      <Box>
        <Grid
          mt={5}
          sx={{
            display: "flex",
            gap: "10px",
          }}
        >
          <Grid size={{ md: 6 }}>
            <Image src={howItWorksImg} alt="howItWorks" />
          </Grid>
          <Grid size={{ md: 6 }}>
            <Grid
              sx={{
                display: "flex",
                gap: 2,
              }}
            >
              <Grid size={{ xs: 6 }}>
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    border: "1px solid lightgray",
                    borderRadius: "10px",
                    padding: "20px",
                  }}
                >
                  <Image src={searchIcon} alt="search" />
                  <Typography
                    variant="h6"
                    component="h2"
                    fontWeight={500}
                    mt={3}
                  >
                    Search Doctor
                  </Typography>
                  <Typography
                    component="p"
                    fontSize={14}
                    fontWeight={400}
                    sx={{ mt: 1 }}
                  >
                    Dolor sit amet consectetur. Scelerisque in eu mauris
                    volutpat Ornare .
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{ xs: 6 }}>
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    border: "1px solid lightgray",
                    borderRadius: "10px",
                    padding: "20px",
                  }}
                >
                  <Image src={doctorIcon} alt="search" />
                  <Typography
                    variant="h6"
                    component="h2"
                    fontWeight={500}
                    mt={3}
                  >
                    Check Doctor Profil
                  </Typography>
                  <Typography
                    component="p"
                    fontSize={14}
                    fontWeight={400}
                    sx={{ mt: 1 }}
                  >
                    Dolor sit amet consectetur. Scelerisque in eu mauris
                    volutpat Ornare .
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Grid
              sx={{
                display: "flex",
                gap: 2,
              }}
              mt={2}
            >
              <Grid size={{ xs: 6 }}>
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    border: "1px solid lightgray",
                    borderRadius: "10px",
                    padding: "20px",
                  }}
                >
                  <Image src={appointmentIcon} alt="search" />
                  <Typography
                    variant="h6"
                    component="h2"
                    fontWeight={500}
                    mt={3}
                  >
                    Schedule Appointment
                  </Typography>
                  <Typography
                    component="p"
                    fontSize={14}
                    fontWeight={400}
                    sx={{ mt: 1 }}
                  >
                    Dolor sit amet consectetur. Scelerisque in eu mauris
                    volutpat Ornare .
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{ xs: 6 }}>
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    border: "1px solid lightgray",
                    borderRadius: "10px",
                    padding: "20px",
                  }}
                >
                  <Image src={charityIcon} alt="search" />
                  <Typography
                    variant="h6"
                    component="h2"
                    fontWeight={500}
                    mt={3}
                  >
                    Get Your Solution
                  </Typography>
                  <Typography
                    component="p"
                    fontSize={14}
                    fontWeight={400}
                    sx={{ mt: 1 }}
                  >
                    Dolor sit amet consectetur. Scelerisque in eu mauris
                    volutpat Ornare .
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default HowItWorks;
