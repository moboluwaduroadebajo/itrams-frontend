import React from "react";
import { Icons } from "./icons";
import clsx from "clsx";
import Link from "next/link";

interface MenuItemProps {
  icon: string;
  label: string;
  path: string;
  isTabActive: boolean;
}
const MenuItem = ({ icon, label, path, isTabActive }: MenuItemProps) => {
  return (
    <Link href={path}>
      <li
        className={clsx({
          "flex items-center  font-poppins h-[60px] mb-5 px-12 gap-4 text-left cursor-pointer hover:bg-[#d9e8ff] hover:text-[#0066FF]":
            true,
          "bg-[#d9e8ff] text-[#0066FF]": isTabActive,
        })}>
        <Icons
          name={icon}
          fill={isTabActive ? "#0066FF" : ""}
          className="hover:fill-red-700"
        />
        {label}
      </li>
    </Link>
  );
};

export default MenuItem;
