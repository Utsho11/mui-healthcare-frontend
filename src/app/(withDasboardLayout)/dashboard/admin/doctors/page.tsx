"use client";
import {
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import DoctorModal from "./components/DoctorModal";
import { useState } from "react";
import type { GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { DataGrid } from "@mui/x-data-grid";
import {
  useDeleteDoctorMutation,
  useGetAllDoctorsQuery,
} from "@/redux/api/doctorApi";
import { useDebounced } from "@/redux/hooks";
import { toast } from "sonner";

const DoctorsPage = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const query: Record<string, any> = {};

  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedTerm) {
    query["searchTerm"] = searchTerm;
  }

  const { data, isLoading } = useGetAllDoctorsQuery({ ...query });

  const doctors = data?.doctors;
  const meta = data?.meta;

  console.log(data);

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "contactNumber", headerName: "Contact Number", flex: 1 },
    { field: "gender", headerName: "Gender", flex: 1 },
    { field: "apointmentFee", headerName: "Appointment Fee", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box>
            <IconButton
              onClick={() => handleDelete(row.id)}
              aria-label="delete"
            >
              <DeleteIcon sx={{ color: "red" }} />
            </IconButton>
          </Box>
        );
      },
    },
  ];

  const [deleteDoctor] = useDeleteDoctorMutation();

  const handleDelete = async (id: string) => {
    try {
      const res = await deleteDoctor(id).unwrap();
      if (res?.id) {
        toast.success("Doctor deleted successfully.");
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error(err?.message);
    }
  };

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
        <TextField
          size="small"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          placeholder="Search Doctor"
        ></TextField>
      </Stack>
      <Typography
        variant="h4"
        component="h3"
        fontWeight={600}
        sx={{
          textAlign: "center",
        }}
      >
        All Doctors
      </Typography>
      <Box
        sx={{
          my: 2,
        }}
      >
        {!isLoading ? (
          <DataGrid rows={doctors} columns={columns} />
        ) : (
          <h1>Loading data...</h1>
        )}
      </Box>
    </Box>
  );
};

export default DoctorsPage;
