import { ComponentProps } from "react";
import { TextField, FormControl, FormLabel } from "@mui/material";

interface InputProps extends ComponentProps<typeof TextField> {
  label: string;
  required?: boolean;
}

export default function Input({
  label,
  required = false,
  placeholder,
  ...props
}: InputProps) {
  return (
    <div className="pb-5">
      <FormControl className="w-full">
        <FormLabel
          className="font-bold text-primary"
          required={required}
          style={{ fontFamily: "Zen Maru Gothic, sans-serif" }}
          sx={{ fontSize: "15px" }}
        >
          {label}
        </FormLabel>
        <TextField
          {...props}
          placeholder={placeholder}
          sx={{
            input: {
              "&::placeholder": {
                fontFamily: "Zen Maru Gothic, sans-serif",
              },
            },
          }}
        />
      </FormControl>
    </div>
  );
}
