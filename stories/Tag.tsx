import clsx from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
  type: number;
  children: React.ReactNode;
};
const Tag = ({ className, type = 0, children }: Props) => {
  const getTagClasses = (type: number) => {
    switch (type) {
      case 1:
        return "bg-[#FAFCEA] text-[#7F8919]";
      case 2:
        return "bg-[#ECFCFB] text-[#268C85]";
      case 3:
        return "bg-[#F5F0FF] text-[#60419B]";
      case 4:
        return "bg-[#FAEEF2] text-[#7E324E]";
      default:
        return "bg-[#EDF1F7] text-[#345279]";
    }
  };
  const classNames = twMerge(
    clsx("rounded-[4px] py-1 px-2", className, getTagClasses(type))
  );
  return <div className={classNames}>{children}</div>;
};

export default Tag;
