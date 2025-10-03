import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TFormInput = {
  name: string;
  label: string;
  type: string;
  variant: "filled" | "outlined" | "standard";
  size: "small" | "medium";
  fullWidth: boolean;
};

const MUIInput = ({
  name,
  label,
  variant,
  type = "text",
  size,
  fullWidth,
}: TFormInput) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextField
          {...field}
          value={field.value ?? ""}
          type={type}
          label={label}
          variant={variant}
          size={size}
          fullWidth={fullWidth}
        />
      )}
    />
  );
};

export default MUIInput;
