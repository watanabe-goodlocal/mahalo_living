import { Button as MUIButton } from "@mui/material";

export default function Button({
  label,
  type,
}: {
  label: string;
  type?: "submit";
}) {
  return (
    <MUIButton type={type} className="bg-primary text-white w-full py-4">
      {label}
    </MUIButton>
  );
}
