"use client";
import { Box, Button, Stack, Typography } from "@mui/material";
import ScheduleModal from "./component/ScheduleModal";
import { useState } from "react";

const SchedulesPage = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <Box>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Button onClick={() => setModalOpen(true)}>Create Schedule</Button>
        <ScheduleModal open={isModalOpen} setOpen={setModalOpen} />
      </Stack>
      <Typography
        variant="h4"
        component="h3"
        fontWeight={600}
        sx={{
          textAlign: "center",
        }}
      >
        All Schedule
      </Typography>
    </Box>
  );
};

export default SchedulesPage;
