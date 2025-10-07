import MUIFileUpload from "@/components/Form/MUIFileUploader";
import MUIForm from "@/components/Form/MUIForm";
import MUIInput from "@/components/Form/MUIInput";
import MUIModal from "@/components/Shared/MUIModal/MUIModal";
import { Button, Grid } from "@mui/material";
import type React from "react";
import type { FieldValues } from "react-hook-form";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SpecialityModal = ({ open, setOpen }: TProps) => {
  const handleFormSubmit = (values: FieldValues) => {};
  return (
    <MUIModal open={open} setOpen={setOpen} title="Create Speciality">
      <MUIForm onSubmit={handleFormSubmit}>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          gap={2}
        >
          <Grid>
            <MUIInput name="title" label="Title" size="small" />
          </Grid>
          <Grid>
            <MUIFileUpload name="file" label="Upload an image" />
          </Grid>
        </Grid>
        <Button type="submit" sx={{ mt: 1 }}>
          Create Speciality
        </Button>
      </MUIForm>
    </MUIModal>
  );
};

export default SpecialityModal;
