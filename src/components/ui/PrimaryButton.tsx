import React from "react";
import { Button } from "./button";

export default function PrimaryButton({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Button variant="primary" className="flex gap-2 py-6 px-5 text-white">
      {children}
    </Button>
  );
}
