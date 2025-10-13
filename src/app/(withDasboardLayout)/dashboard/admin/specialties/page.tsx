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
import {
  useDeleteSpecialityMutation,
  useGetAllSpecialityQuery,
} from "@/redux/api/specialitiesApi";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "sonner";

const SpecialtiesPage = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const { data, isLoading } = useGetAllSpecialityQuery({});

  const [deleteSpeciality] = useDeleteSpecialityMutation();

  const columns: GridColDef[] = [
    { field: "title", headerName: "Title", width: 300 },
    {
      field: "icon",
      headerName: "Icon",
      width: 300,
      align: "center",
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <Box
            sx={{
              pt: 1,
            }}
          >
            <Image src={row.icon} width={30} height={30} alt="icon" />
          </Box>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 400,
      headerAlign: "center",
      flex: 1,
      align: "center",
      renderCell: ({ row }) => {
        return (
          <IconButton aria-label="delete" onClick={() => handleDelete(row.id)}>
            <DeleteIcon />
          </IconButton>
        );
      },
    },
  ];

  // console.log(data);

  const handleDelete = async (id: string) => {
    try {
      const res = await deleteSpeciality(id).unwrap();
      if (res?.id) {
        toast.success("Speciality deleted successfully.");
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error(err?.message);
    }
  };

  return (
    <Box>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Button onClick={() => setModalOpen(true)}>Create Speciality</Button>
        <SpecialityModal open={isModalOpen} setOpen={setModalOpen} />
        <TextField size="small" placeholder="Search Speciality"></TextField>
      </Stack>
      <Typography
        variant="h4"
        component="h3"
        fontWeight={600}
        sx={{
          textAlign: "center",
        }}
      >
        All Specialities
      </Typography>
      <Box
        sx={{
          my: 2,
        }}
      >
        {!isLoading ? (
          <DataGrid rows={data} columns={columns} hideFooter={true} />
        ) : (
          <h1>Loading data...</h1>
        )}
      </Box>
    </Box>
  );
};

export default SpecialtiesPage;
