import React from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

type PillTypes = {
  children: React.ReactNode;
  className?: string;
};
const Pill: React.FC<PillTypes> = ({ children, className }) => (
  <div className={twMerge(clsx("border w-max", className))}>{children}</div>
);

export default Pill;
