import MUIModal from "@/components/Shared/MUIModal/MUIModal";
import { TextField } from "@mui/material";
import type React from "react";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SpecialityModal = ({ open, setOpen }: TProps) => {
  return (
    <MUIModal open={open} setOpen={setOpen} title="Create Speciality">
      <TextField />
    </MUIModal>
  );
};

export default SpecialityModal;
