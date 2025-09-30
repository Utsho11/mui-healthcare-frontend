import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import FacebookImage from "@/assets/landing_page/facebook.png";
import XImage from "@/assets/landing_page/twitter.png";
import InstagramImage from "@/assets/landing_page/instagram.png";
import LinkedInImage from "@/assets/landing_page/linkedin.png";

const Footer = () => {
  return (
    <Box bgcolor="rgb(17,26,34)" py={5}>
      <Container>
        <Stack
          direction="row"
          spacing={4}
          alignItems="center"
          justifyContent="center"
        >
          <Typography color="#fff" component={Link} href="/consultation">
            Consultation
          </Typography>
          <Typography color="#fff" component={Link} href="/healthPlans">
            Health Plans
          </Typography>
          <Typography color="#fff" component={Link} href="/medicine">
            Medicine
          </Typography>
          <Typography color="#fff" component={Link} href="/diagnostics">
            Diagnostics
          </Typography>
          <Typography color="#fff" component={Link} href="/ngos">
            NGOs
          </Typography>
        </Stack>
        <Stack
          direction="row"
          spacing={4}
          alignItems="center"
          justifyContent="center"
          py={4}
        >
          <Image src={FacebookImage} width={30} height={30} alt="Facebook" />
          <Image src={XImage} width={30} height={30} alt="X" />
          <Image src={InstagramImage} width={30} height={30} alt="Instagram" />
          <Image src={LinkedInImage} width={30} height={30} alt="LinkedIn" />
        </Stack>
        <div className="border-b-2 border-dashed border-white"></div>
        <Stack
          color="#fff"
          direction="row"
          justifyContent="center"
          spacing={8}
          pt={4}
        >
          <Typography color="#fff">
            © 2025 MUI Health Care. All rights reserved.
          </Typography>
          <Typography variant="h5" component="h3" fontWeight={600}>
            M
            <Box component="span" color="primary.main">
              UI
            </Box>{" "}
            HealthCare
          </Typography>
          <Typography color="#fff">
            Privacy Policy. Terms & Conditions
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
