/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Box, Button, IconButton, Pagination, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { dateFormatter } from "@/utils/dateFormatter";
import { ISchedule } from "@/types/schedule";
import dayjs from "dayjs";
import { useGetAllDoctorSchedulesQuery } from "@/redux/api/doctorScheduleApi";
import DoctorScheduleModal from "./components/DoctorScheduleModal";

const DoctorSchedulesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [allSchedule, setAllSchedule] = useState<any>([]);

  const query: Record<string, any> = {};

  query["page"] = page;
  query["limit"] = limit;

  const { data, isLoading } = useGetAllDoctorSchedulesQuery({ ...query });
  // console.log(data);

  const schedules = data?.doctorSchedules;
  const meta = data?.meta;

  const pageCount: number =
    typeof meta?.total === "number" ? Math.ceil(meta.total / limit) : 0;

  // console.log({ schedules });

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    const updateData = schedules?.map((schedule: ISchedule) => {
      return {
        id: schedule?.scheduleId,
        startDate: dateFormatter(schedule?.schedule?.startDate),
        startTime: dayjs(schedule?.schedule?.startDate).format("h:mm A"),
        endTime: dayjs(schedule?.schedule?.endDate).format("h:mm A"),
      };
    });
    setAllSchedule(updateData);
  }, [schedules]);

  const columns: GridColDef[] = [
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
          <IconButton aria-label="delete">
            <DeleteIcon sx={{ color: "red" }} />
          </IconButton>
        );
      },
    },
  ];

  // console.log({ allSchedule });

  return (
    <Box>
      <Button onClick={() => setIsModalOpen(true)}>
        Create Doctor Schedule
      </Button>
      <DoctorScheduleModal open={isModalOpen} setOpen={setIsModalOpen} />
      <Box sx={{ mb: 5 }}></Box>

      <Box>
        {!isLoading ? (
          <Box my={2}>
            <DataGrid
              rows={allSchedule ?? []}
              columns={columns}
              hideFooterPagination
              slots={{
                footer: () => {
                  return (
                    <Box
                      sx={{
                        py: 2,
                      }}
                    >
                      <Stack spacing={2}>
                        <Pagination
                          count={pageCount}
                          page={page}
                          onChange={handleChange}
                        />
                      </Stack>
                    </Box>
                  );
                },
              }}
            />
          </Box>
        ) : (
          <h1>Loading.....</h1>
        )}
      </Box>
    </Box>
  );
};

export default DoctorSchedulesPage;
