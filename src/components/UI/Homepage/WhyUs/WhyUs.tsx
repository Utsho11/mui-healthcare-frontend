import assets from "@/assets";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import chooseUsImg from "@/assets/choose-us.png";

const servicesData = [
  {
    imageSrc: assets.svgs.award,
    title: "Award Winning Service",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
  },
  {
    imageSrc: assets.svgs.care,
    title: "Best Quality Pregnancy Care",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
  },
  {
    imageSrc: assets.svgs.equipment,
    title: "Complete Medical Equipments",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
  },
  {
    imageSrc: assets.svgs.call,
    title: "Dedicated Emergency Care",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
  },
];

const WhyUs = () => {
  return (
    <Container>
      <Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            color="primary"
            variant="h6"
            component="h1"
            fontWeight={700}
          >
            Why Us
          </Typography>
          <Typography variant="h4" component="h1" fontWeight={700}>
            Why Choose Us
          </Typography>
        </Box>
        <Grid container spacing={2} my={5}>
          <Grid size={{ md: 6 }}>
            <Box
              sx={{
                display: "flex",
                gap: "15px",
                backgroundColor: "rgba(245, 245, 245,1)",
                padding: "15px",
                alignItems: "center",
                borderRadius: "10px 10px 100px 10px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#fff",
                  padding: "15px",
                  borderRadius: "10px",
                }}
              >
                <Image
                  src={servicesData[0].imageSrc}
                  alt="serviceImg"
                  width={50}
                />
              </Box>
              <Box>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h1"
                  fontWeight={600}
                >
                  {servicesData[0].title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {servicesData[0].description}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "15px",
                backgroundColor: "rgba(245, 245, 245,1)",
                padding: "15px",
                alignItems: "center",
                borderRadius: "10px 100px 10px 10px",
                margin: "20px 0px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#fff",
                  padding: "15px",
                  borderRadius: "10px",
                }}
              >
                <Image
                  src={servicesData[1].imageSrc}
                  alt="serviceImg"
                  width={50}
                />
              </Box>
              <Box>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h1"
                  fontWeight={600}
                >
                  {servicesData[1].title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {servicesData[1].description}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "15px",
                backgroundColor: "rgba(245, 245, 245,1)",
                padding: "15px",
                alignItems: "center",
                borderRadius: "10px 10px 100px 10px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#fff",
                  padding: "15px",
                  borderRadius: "10px",
                }}
              >
                <Image
                  src={servicesData[2].imageSrc}
                  alt="serviceImg"
                  width={50}
                />
              </Box>
              <Box>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h1"
                  fontWeight={600}
                >
                  {servicesData[2].title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {servicesData[2].description}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "15px",
                backgroundColor: "rgba(245, 245, 245,1)",
                padding: "15px",
                alignItems: "center",
                borderRadius: "10px 100px 10px 10px",
                marginTop: "20px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#fff",
                  padding: "15px",
                  borderRadius: "10px",
                }}
              >
                <Image
                  src={servicesData[3].imageSrc}
                  alt="serviceImg"
                  width={50}
                />
              </Box>
              <Box>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h1"
                  fontWeight={600}
                >
                  {servicesData[3].title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {servicesData[3].description}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            sx={{
              display: "flex",
            }}
            size={{
              md: 6,
            }}
          >
            <Box
              sx={{
                margin: "0 auto",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image src={chooseUsImg} alt="choose-us" width={400} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default WhyUs;
