import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

const Specialist = async () => {
  const res = await fetch("http://localhost:5000/api/v1/specialties", {
    next: {
      revalidate: 30,
    },
  });

  const { data: specialisties } = await res.json();

  // console.log(specialisties);

  return (
    <Container>
      <Box
        sx={{
          margin: "40px 0",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            textAlign: "start",
          }}
        >
          <Typography variant="h4" fontWeight={600}>
            Explore Treatment across specialities
          </Typography>
          <Typography
            color="secondary.main"
            component="p"
            fontWeight={300}
            fontSize={18}
          >
            Find experienced doctors across all specialities
          </Typography>
        </Box>

        <Stack direction="row" gap={4} mt={5}>
          {specialisties.map((speciality: any) => (
            <Box
              key={speciality.id}
              sx={{
                flex: 1,
                width: "150px",
                backgroundColor: "rgb(245,245,245,1)",
                border: "1px solid rgb(250,250,250,1)",
                borderRadius: "10px",
                textAlign: "center",
                padding: "40px 10px",
                "& img": {
                  width: "50px",
                  height: "50px",
                  margin: "0 auto",
                },
                "&:hover": {
                  border: "1px solid blue",
                  borderRadius: "10px",
                  padding: "40px 10px",
                },
              }}
            >
              <Image
                src={speciality.icon}
                alt={speciality.title}
                width={100}
                height={100}
              />
              <Typography component="p" fontWeight={600} mt={2}>
                {speciality.title}
              </Typography>
            </Box>
          ))}
        </Stack>
        <Button
          variant="outlined"
          sx={{
            marginTop: "20px",
          }}
        >
          View All
        </Button>
      </Box>
    </Container>
  );
};

export default Specialist;
