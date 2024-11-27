import { ComponentProps, forwardRef } from "react";
import { TextField, FormControl, FormLabel } from "@mui/material";

interface InputProps extends ComponentProps<typeof TextField> {
  label: string;
  required?: boolean;
  formSize?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, required = false, placeholder, formSize = "w-full", ...props },
  ref
) {
  return (
    <div className="pb-5">
      <FormControl className={formSize}>
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
          inputRef={ref}
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
});

export default Input;
