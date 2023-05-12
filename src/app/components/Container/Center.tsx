import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  width?: string;
}

const Center = ({ children, className, width = "w-100" }: Props) => {
  return (
    <div
      className={`${width} d-flex align-items-center justify-content-center ${className}`}
    >
      {children}
    </div>
  );
};

export default Center;
