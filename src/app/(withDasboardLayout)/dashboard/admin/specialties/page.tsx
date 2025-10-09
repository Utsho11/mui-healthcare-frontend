"use client";
import {
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import SpecialityModal from "./component/SpecialityModal";
import { useGaetAllSpecialityQuery } from "@/redux/api/specialitiesApi";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import DeleteIcon from "@mui/icons-material/Delete";

const SpecialtiesPage = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const columns: GridColDef[] = [
    { field: "title", headerName: "Title", width: 300 },
    {
      field: "icon",
      headerName: "Icon",
      width: 300,

      renderCell: ({ row }) => {
        return (
          <Box
            sx={{
              py: 2,
            }}
          >
            <Image src={row.icon} width={20} height={20} alt="icon" />
          </Box>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 400,
      renderCell: ({ row }) => {
        return (
          <IconButton aria-label="delete" onClick={() => handleDelete(row.id)}>
            <DeleteIcon />
          </IconButton>
        );
      },
    },
  ];

  const { data } = useGaetAllSpecialityQuery({});

  // console.log(data);

  const handleDelete = (id: string) => {
    console.log(id);
  };

  return (
    <Box>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Button onClick={() => setModalOpen(true)}>Create Speciality</Button>
        <SpecialityModal open={isModalOpen} setOpen={setModalOpen} />
        <TextField size="small" placeholder="Search Speciality"></TextField>
      </Stack>
      <Box>
        <Typography>All Specialities</Typography>
        <DataGrid rows={data} columns={columns} />
      </Box>
    </Box>
  );
};

export default SpecialtiesPage;
