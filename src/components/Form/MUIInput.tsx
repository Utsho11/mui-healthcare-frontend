import { TextField, type SxProps } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TFormInput = {
  name: string;
  label: string;
  type?: string;
  variant?: "filled" | "outlined" | "standard";
  size?: "small" | "medium";
  fullWidth?: boolean;
  sx?: SxProps;
  placeholder?: string;
  required?: boolean;
};

const MUIInput = ({
  name,
  label,
  variant,
  type = "text",
  size,
  fullWidth,
  sx,
  placeholder,
  required,
}: TFormInput) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          value={field.value ?? ""}
          type={type}
          label={label}
          variant={variant}
          size={size}
          fullWidth={fullWidth}
          sx={{ ...sx }}
          placeholder={placeholder}
          required={required}
          error={!!error?.message}
          helperText={error?.message}
        />
      )}
    />
  );
};

export default MUIInput;
