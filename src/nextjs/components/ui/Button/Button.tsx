import { Button as MUIButton } from "@mui/material";

export default function Button({ label }: { label: string }) {
  return (
    <MUIButton className="bg-primary text-white w-full py-4">{label}</MUIButton>
  );
}
