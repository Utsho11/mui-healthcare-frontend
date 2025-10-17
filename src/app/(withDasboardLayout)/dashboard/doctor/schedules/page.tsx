"use client";
import { Box, Button, Stack } from "@mui/material";
import { useState } from "react";
import DoctorScheduleModal from "./components/DoctorScheduleModal";

const DoctorSchedulePage = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  return (
    <Box>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Button onClick={() => setModalOpen(true)}>
          Create Doctor Schedule
        </Button>
        <DoctorScheduleModal open={isModalOpen} setOpen={setModalOpen} />
      </Stack>
    </Box>
  );
};

export default DoctorSchedulePage;
