import { Controller } from "react-hook-form";
import { InputLabel, FormControl, Button } from "@mui/material";
import { FormInputProps } from "../form-component/FormInputProps";

export const FormInputFile = ({ name, control, label }: FormInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <FormControl fullWidth error={!!error}>
          <InputLabel>{label}</InputLabel>
          <input
            type="file"
            onChange={(e) => {
              // Check if files are available and use the first file
              const file = e.target.files ? e.target.files[0] : null;
              onChange(file); // Pass the file or null to the onChange
            }}
            style={{ display: "none" }} // Hide the default file input
            id={name}
          />
          <label htmlFor={name}>
            <Button variant="outlined" component="span">
              {value ? value.name : "Upload File"}
            </Button>
          </label>
          {error && <span style={{ color: "red" }}>{error.message}</span>}
        </FormControl>
      )}
    />
  );
};
