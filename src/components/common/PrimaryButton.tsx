import { Button } from "@/components/ui/button";
import { ComponentProps } from "react";

type PrimaryButtonProps = ComponentProps<typeof Button>;

export default function PrimaryButton(props: PrimaryButtonProps) {
  return <Button {...props} />;
}
