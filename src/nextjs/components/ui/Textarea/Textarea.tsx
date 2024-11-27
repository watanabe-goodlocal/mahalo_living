import { ComponentProps, forwardRef } from "react";
import { FormControl, FormLabel, TextareaAutosize } from "@mui/material";

interface TextareaProps extends ComponentProps<typeof TextareaAutosize> {
  label: string;
  required?: boolean;
  formSize?: string;
  error?: boolean;
  helperText?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea(
    {
      label,
      required = false,
      placeholder,
      formSize = "w-full",
      error,
      helperText,
      ...props
    },
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
          <TextareaAutosize
            {...props}
            className={`p-3 border rounded h-44 ${
              error ? "border-red-600" : "border-neutral-300"
            }`}
            ref={ref}
            placeholder={placeholder}
          />
          {error && (
            <p className="text-[#d32e2e] text-xs pl-3 pt-1">{helperText}</p>
          )}
        </FormControl>
      </div>
    );
  }
);

export default Textarea;
