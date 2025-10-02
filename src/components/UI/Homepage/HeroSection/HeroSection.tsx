import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import grid from "@/assets/svgs/grid.svg";
import arrow from "@/assets/svgs/arrow.svg";
import doctor1 from "@/assets/images/doctor1.png";
import doctor2 from "@/assets/images/doctor2.png";
import doctor3 from "@/assets/images/doctor3.png";
import stethoscope from "@/assets/images/Stetoscope.png";

const HeroSection = () => {
  return (
    <Container
      sx={{
        display: "flex",
        direction: "row",
        my: 16,
      }}
    >
      <Box
        sx={{
          flex: 1,
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: "-120px",
            top: "-90px",
            width: "700px",
          }}
        >
          <Image src={grid} alt="grid"></Image>
        </Box>
        <Box>
          <Typography variant="h3" component="h1" fontWeight={600}>
            Healthier Hearts
          </Typography>
          <Typography variant="h3" component="h1" fontWeight={600}>
            Come From
          </Typography>
          <Typography
            variant="h3"
            component="h1"
            fontWeight={600}
            color="primary.main"
          >
            Preventive Care
          </Typography>
          <Typography
            color="secondary.main"
            variant="h6"
            component="p"
            fontWeight={400}
            sx={{
              width: "50%",
              my: "2rem",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            voluptates incidunt quidem ut dolorem beatae accusantium ab sed iste
            explicabo.
          </Typography>
          <Button
            sx={{
              marginRight: "8px",
            }}
          >
            Make Appointment
          </Button>
          <Button
            variant="outlined"
            sx={{
              marginLeft: "8px",
            }}
          >
            Contact Us
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          p: 1,
          display: "flex",
          flex: 1,
          position: "relative",
          justifyContent: "center",
          mt: 0,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: 220,
            top: -50,
          }}
        >
          <Image src={arrow} width={100} height={100} alt="arrow"></Image>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 2,
          }}
        >
          <Box>
            <Image src={doctor1} width={240} height={240} alt="doctor1"></Image>
          </Box>
          <Box>
            <Image src={doctor2} width={240} height={240} alt="doctor2"></Image>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: 220,
              left: 140,
            }}
          >
            <Image src={doctor3} width={240} height={240} alt="doctor3"></Image>
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "-10px",
            right: 0,
            zIndex: -1,
          }}
        >
          <Image src={stethoscope} width={180} height={180} alt="arrow"></Image>
        </Box>
      </Box>
    </Container>
  );
};

export default HeroSection;
