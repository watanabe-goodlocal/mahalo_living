import { Input, FormControl, FormLabel } from "@mui/joy";

export default function FormInput({
  label,
  required = false,
  placeholder,
}: {
  label: string;
  required?: boolean;
  placeholder: string;
}) {
  return (
    <FormControl>
      <FormLabel
        required={required}
        style={{ fontFamily: "Zen Maru Gothic, sans-serif" }}
        sx={{ fontSize: "12px" }}
      >
        {label}
      </FormLabel>
      <Input
        style={{ fontFamily: "Zen Maru Gothic, sans-serif" }}
        placeholder={placeholder}
        size="lg"
      />
    </FormControl>
  );
}
