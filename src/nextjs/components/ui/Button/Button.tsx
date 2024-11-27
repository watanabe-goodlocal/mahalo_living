import { Button as MUIButton } from "@mui/material";

export default function Button({
  label,
  type,
  bgColor = "bg-primary",
  textColor = "text-white",
}: {
  label: string;
  type?: "submit";
  bgColor?: string;
  textColor?: string;
}) {
  return (
    <div>
      <MUIButton type={type} className={`${bgColor} ${textColor} w-full py-4`}>
        {label}
      </MUIButton>
    </div>
  );
}
