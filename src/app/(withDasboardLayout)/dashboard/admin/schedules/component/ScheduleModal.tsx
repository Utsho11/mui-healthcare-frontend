import MUIForm from "@/components/Form/MUIForm"
import MUIModal from "@/components/Shared/MUIModal/MUIModal"
import { Button } from "@mui/material"
import type { FieldValues } from "react-hook-form";

type TProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  };


const ScheduleModal = ({ open, setOpen }: TProps) => {


    const handleFormSubmit = async (values: FieldValues) => {
        
        try {
         
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
          console.error(err.message);
        }
      };

  return (
    <MUIModal open={open} setOpen={setOpen} title="Create Speciality">
    <MUIForm onSubmit={handleFormSubmit}>
     
      <Button type="submit" sx={{ mt: 1 }}>
        Create Speciality
      </Button>
    </MUIForm>
  </MUIModal>
  )
}

export default ScheduleModal