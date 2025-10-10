"use client";
import { Box, Button, Stack, TextField } from "@mui/material";
import DoctorModal from "./components/DoctorModal";
import { useState } from "react";

const DoctorsPage = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <Box>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Button
          onClick={() => {
            setModalOpen(true);
          }}
        >
          Create New Doctor
        </Button>
        <DoctorModal open={isModalOpen} setOpen={setModalOpen} />
        <TextField size="small" placeholder="Search Doctor"></TextField>
      </Stack>
    </Box>
  );
};

export default DoctorsPage;
