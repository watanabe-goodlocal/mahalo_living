import { TextField, FormControl, FormLabel } from "@mui/material";

export default function Input({
  label,
  required = false,
  placeholder,
}: {
  label: string;
  required?: boolean;
  placeholder: string;
}) {
  return (
    <div className="pb-5">
      <FormControl className="w-full">
        <FormLabel
          className="font-bold"
          required={required}
          style={{ fontFamily: "Zen Maru Gothic, sans-serif" }}
          sx={{ fontSize: "15px" }}
        >
          {label}
        </FormLabel>
        <TextField
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
