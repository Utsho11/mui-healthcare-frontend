import MUIForm from "@/components/Form/MUIForm";
import MUIInput from "@/components/Form/MUIInput";
import MUISelectField from "@/components/Form/MUISelectField";
import MUIFullScreenModal from "@/components/Shared/MUIModal/MUIFullScreenModal";
import { useCreateDoctorMutation } from "@/redux/api/doctorApi";
import { Gender } from "@/types";
import modifyPayload from "@/utils/modifyPayload";
import { Button, Grid } from "@mui/material";
import type { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const defaultValues = {
  doctor: {
    email: "",
    name: "",
    contactNumber: "",
    address: "",
    registrationNumber: "",
    gender: "",
    experience: 0,
    apointmentFee: 0,
    qualification: "",
    currentWorkingPlace: "",
    designation: "",
    profilePhoto: "",
  },
  password: "",
};

const DoctorModal = ({ open, setOpen }: TProps) => {
  const [createDoctor] = useCreateDoctorMutation();

  const handleFormSubmit = async (values: FieldValues) => {
    values.doctor.experience = Number(values.doctor.experience);
    values.doctor.apointmentFee = Number(values.doctor.apointmentFee);
    const data = modifyPayload(values);

    console.log(data.get("data"));

    try {
      const res = await createDoctor(data).unwrap();
      console.log(res);
      if (res?.id) {
        toast.success("Doctor created successfully!!");
        setOpen(false);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <MUIFullScreenModal open={open} setOpen={setOpen} title="Create New Doctor">
      <MUIForm onSubmit={handleFormSubmit} defaultValues={defaultValues}>
        <Grid container spacing={2} sx={{ my: 5 }}>
          <Grid
            size={{
              xs: 12,
              sm: 12,
              md: 4,
            }}
          >
            <MUIInput
              name="doctor.name"
              label="Name"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid
            size={{
              xs: 12,
              sm: 12,
              md: 4,
            }}
          >
            <MUIInput
              name="doctor.email"
              type="email"
              label="Email"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>

          <Grid
            size={{
              xs: 12,
              sm: 12,
              md: 4,
            }}
          >
            <MUIInput
              name="password"
              type="password"
              label="Password"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>

          <Grid
            size={{
              xs: 12,
              sm: 12,
              md: 4,
            }}
          >
            <MUIInput
              name="doctor.contactNumber"
              label="Contract Number"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid
            size={{
              xs: 12,
              sm: 12,
              md: 4,
            }}
          >
            <MUIInput
              name="doctor.address"
              label="Address"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid
            size={{
              xs: 12,
              sm: 12,
              md: 4,
            }}
          >
            <MUIInput
              name="doctor.registrationNumber"
              label="Registration Number"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid
            size={{
              xs: 12,
              sm: 12,
              md: 4,
            }}
          >
            <MUIInput
              name="doctor.experience"
              type="number"
              label="Experience"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid
            size={{
              xs: 12,
              sm: 12,
              md: 4,
            }}
          >
            <MUISelectField
              items={Gender}
              name="doctor.gender"
              label="Gender"
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid
            size={{
              xs: 12,
              sm: 12,
              md: 4,
            }}
          >
            <MUIInput
              name="doctor.apointmentFee"
              type="number"
              label="ApointmentFee"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid
            size={{
              xs: 12,
              sm: 12,
              md: 4,
            }}
          >
            <MUIInput
              name="doctor.qualification"
              label="Qualification"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>

          <Grid
            size={{
              xs: 12,
              sm: 12,
              md: 4,
            }}
          >
            <MUIInput
              name="doctor.currentWorkingPlace"
              label="Current Working Place"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid
            size={{
              xs: 12,
              sm: 12,
              md: 4,
            }}
          >
            <MUIInput
              name="doctor.designation"
              label="Designation"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
        </Grid>

        <Button type="submit">Create</Button>
      </MUIForm>
    </MUIFullScreenModal>
  );
};

export default DoctorModal;
