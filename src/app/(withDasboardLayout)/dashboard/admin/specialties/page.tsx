"use client";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import SpecialityModal from "./component/SpecialityModal";
import { useGaetAllSpecialityQuery } from "@/redux/api/specialitiesApi";

const SpecialtiesPage = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const { data } = useGaetAllSpecialityQuery({});

  console.log(data);
  return (
    <Box>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Button onClick={() => setModalOpen(true)}>Create Speciality</Button>
        <SpecialityModal open={isModalOpen} setOpen={setModalOpen} />
        <TextField size="small" placeholder="Search Speciality"></TextField>
      </Stack>
      <Box>
        <Typography>All Specialities</Typography>
      </Box>
    </Box>
  );
};

export default SpecialtiesPage;
