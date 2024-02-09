import React from "react";
import { Icons } from "./icons";
import MenuItem from "./MenuItem";
import Image from "next/image";
import avatar from "./icons/avatar.png";
import { useRouter } from "next/router";

const menuList = [
  { icon: "home", label: "Home", path: "/admin" },
  {
    icon: "book",
    label: "Departmental Supervisors",
    path: "/admin/supervisors",
  },
  { icon: "teacher", label: "Student", path: "/admin/students" },
  { icon: "case", label: "Registered Company", path: "/admin/company" },
];
const Sidebar = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col shadow-vertical w-[394px] pl-[70px] pt-10 min-h-screen">
      <Icons name="logo" />

      <div className="mt-24 flex flex-col">
        {menuList.map((item) => {
          return (
            <MenuItem
              key={item.path}
              label={item.label}
              icon={item.icon}
              path={item.path}
              isTabActive={router.pathname === item.path}
              // isTabActive={false}
            />
          );
        })}
      </div>

      <div className="flex items-center gap-2 mt-4 max-w-[200px]">
        <Image
          src={avatar}
          alt="aatar"
          className="h-[60px] w-[60px] rounded-full"
        />
        <div>
          <p className="font-bold font-inter text-xs">
            Industrial training and coordination center
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
