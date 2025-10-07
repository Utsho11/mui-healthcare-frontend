import * as React from "react";
import { type SxProps } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Input } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TProps = {
  name: string;
  label?: string;
  sx?: SxProps;
};

export default function MUIFileUpload({ name, label, sx }: TProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value, ...field } }) => {
        return (
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            sx={{ ...sx }}
            startIcon={<CloudUploadIcon />}
          >
            {label || "Upload a file"}
            <Input
              {...field}
              value={value?.fileName}
              type={name}
              onChange={(e) =>
                onChange((e?.target as HTMLInputElement).files?.[0])
              }
              style={{
                display: "none",
              }}
            />
          </Button>
        );
      }}
    />
  );
}
