"use client";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import ScheduleModal from "./component/ScheduleModal";
import { useEffect, useState } from "react";
import { useGetAllScheduleQuery } from "@/redux/api/scheduleApi";
import type { ISchedule } from "@/types/schedule";
import { dateFormatter } from "@/utils/dateFormatter";
import dayjs from "dayjs";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import type { GridColDef } from "@mui/x-data-grid";

const SchedulesPage = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [allSchedule, setAllSchedule] = useState<any>([]);
  const { data, isLoading } = useGetAllScheduleQuery({});

  const schedules = data?.schedules;
  const meta = data?.meta;

  console.log(schedules);

  useEffect(() => {
    const updateData = schedules?.map((schedule: ISchedule, index: number) => {
      return {
        sl: index + 1,
        id: schedule?.id,
        startDate: dateFormatter(schedule.startDate),
        endDate: dateFormatter(schedule.endDate),
        startTime: dayjs(schedule?.startDate).format("hh:mm a"),
        endTime: dayjs(schedule?.endDate).format("hh:mm a"),
      };
    });
    setAllSchedule(updateData);
  }, [schedules]);

  const columns: GridColDef[] = [
    { field: "sl", headerName: "SL" },
    { field: "startDate", headerName: "Date", flex: 1 },
    { field: "startTime", headerName: "Start Time", flex: 1 },
    { field: "endTime", headerName: "End Time", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box>
            <IconButton aria-label="delete">
              <DeleteIcon sx={{ color: "red" }} />
            </IconButton>
            <IconButton aria-label="edit">
              <EditNoteOutlinedIcon sx={{ color: "black" }} />
            </IconButton>
          </Box>
        );
      },
    },
  ];

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
      {!isLoading ? (
        <Box my={2}>
          <DataGrid rows={allSchedule ?? []} columns={columns} />
        </Box>
      ) : (
        <h1>Loading.....</h1>
      )}
    </Box>
  );
};

export default SchedulesPage;
