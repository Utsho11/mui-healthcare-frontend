import MUIFileUpload from "@/components/Form/MUIFileUploader";
import MUIForm from "@/components/Form/MUIForm";
import MUIInput from "@/components/Form/MUIInput";
import MUIModal from "@/components/Shared/MUIModal/MUIModal";
import { useCreateSpecialityMutation } from "@/redux/api/specialitiesApi";
import modifyPayload from "@/utils/modifyPayload";
import { Button, Grid } from "@mui/material";
import type React from "react";
import type { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SpecialityModal = ({ open, setOpen }: TProps) => {
  const [createSpeciality] = useCreateSpecialityMutation();

  const handleFormSubmit = async (values: FieldValues) => {
    const data = modifyPayload(values);
    try {
      const res = await createSpeciality(data).unwrap();
      console.log(res);
      if (res?.id) {
        toast.success("Specialty created successfully!!");
        setOpen(false);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error(err.message);
    }
  };

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
