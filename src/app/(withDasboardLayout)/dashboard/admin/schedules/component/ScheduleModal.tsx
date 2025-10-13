import MUIDatePicker from "@/components/Form/MUIDatePicker";
import MUIForm from "@/components/Form/MUIForm";
import MUITimePicker from "@/components/Form/MUITimePicker";
import MUIModal from "@/components/Shared/MUIModal/MUIModal";
import { useCreateScheduleMutation } from "@/redux/api/scheduleApi";
import { dateFormatter } from "@/utils/dateFormatter";
import { timeFormatter } from "@/utils/timeFormatter";
import { Button, Grid } from "@mui/material";
import type { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ScheduleModal = ({ open, setOpen }: TProps) => {
  const [crateSchedule] = useCreateScheduleMutation();

  const handleFormSubmit = async (values: FieldValues) => {
    try {
      values.startDate = dateFormatter(values.startDate);
      values.endDate = dateFormatter(values.endDate);
      values.startTime = timeFormatter(values.startTime);
      values.endTime = timeFormatter(values.endTime);

      const res = await crateSchedule(values).unwrap();
      console.log(res);
      if (res?.length) {
        toast.success("Schedule created successfully!!");
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
