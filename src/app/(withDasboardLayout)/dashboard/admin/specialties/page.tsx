"use client";
import { Box, Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import SpecialityModal from "./component/SpecialityModal";

const SpecialtiesPage = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <Box>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Button onClick={() => setModalOpen(true)}>Create Speciality</Button>
        <SpecialityModal open={isModalOpen} setOpen={setModalOpen} />
        <TextField size="small" placeholder="Search Speciality"></TextField>
      </Stack>
    </Box>
  );
};

export default SpecialtiesPage;
