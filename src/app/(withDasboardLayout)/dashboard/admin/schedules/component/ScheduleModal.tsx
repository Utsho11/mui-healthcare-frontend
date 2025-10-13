import MUIDatePicker from "@/components/Form/MUIDatePicker";
import MUIForm from "@/components/Form/MUIForm";
import MUITimePicker from "@/components/Form/MUITimePicker";
import MUIModal from "@/components/Shared/MUIModal/MUIModal";
import { dateFormatter } from "@/utils/dateFormatter";
import { Button, Grid } from "@mui/material";
import type { FieldValues } from "react-hook-form";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ScheduleModal = ({ open, setOpen }: TProps) => {
  const handleFormSubmit = async (values: FieldValues) => {
    try {
      values.startDate = dateFormatter(values.startDate);
      values.endDate = dateFormatter(values.endDate);
      values.startTime = dateFormatter(values.startTime);
      values.endTime = dateFormatter(values.endTime);

      console.log(values);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <MUIModal open={open} setOpen={setOpen} title="Create Speciality">
      <MUIForm onSubmit={handleFormSubmit}>
        <Grid container spacing={2} sx={{ width: "400px" }}>
          <Grid size={{ md: 12 }}>
            <MUIDatePicker name="startDate" label="Start Date" />
          </Grid>
          <Grid size={{ md: 12 }}>
            <MUIDatePicker name="endDate" label="End Date" />
          </Grid>
          <Grid size={{ md: 6 }}>
            <MUITimePicker name="startTime" label="Start Time" />
          </Grid>
          <Grid size={{ md: 6 }}>
            <MUITimePicker name="endTime" label="End Time" />
          </Grid>
        </Grid>
        <Button type="submit" sx={{ mt: 1 }}>
          Create Speciality
        </Button>
      </MUIForm>
    </MUIModal>
  );
};

export default ScheduleModal;
