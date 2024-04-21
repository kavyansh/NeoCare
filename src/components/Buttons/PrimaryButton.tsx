import React from "react";

export default function PrimaryButton({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <button className={`bg-primary-orange rounded-md px-5 py-2.5 ${className}`}>
      {children}
    </button>
  );
}
