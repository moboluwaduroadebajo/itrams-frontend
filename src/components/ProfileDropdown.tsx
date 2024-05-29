import React, { useRef } from "react";
import { Icons } from "./icons";
import useOutsideClick from "@/hooks/useOutsideClick";

interface IProps {
  toggleDropdownVisibility: () => void;
  onProfileClick: () => void;
  onLogoutClick: () => void;
}

const ProfileDropdown = ({
  onProfileClick,
  onLogoutClick,
  toggleDropdownVisibility,
}: IProps) => {
  // const rootRef = useRef<HTMLDivElement | null>(null);
  // const divRef = useRef<HTMLDivElement | null>(null);

  // useOutsideClick(rootRef, divRef, toggleDropdownVisibility);

  return (
    <div className="absolute left-[30%] flex justify-center">
      <ul className="flex flex-col items-center justify-center shadow rounded bg-[#f5f9ff] animate-show_dropdown">
        <li
          className="flex items-center font-inter text-xs px-9 py-4 gap-4 h-14 w-[220px] cursor-pointer hover:border hover:border-solid hover:border-[#0066ff80]"
          onClick={() => {
            onProfileClick();
            toggleDropdownVisibility();
          }}>
          <Icons name="blue-profile" />
          Profile
        </li>

        <li
          className="flex items-center font-inter text-xs px-9 py-4 gap-4 h-14 w-[220px] cursor-pointer hover:border hover:border-solid hover:border-[#0066ff80]"
          onClick={() => {
            onLogoutClick();
            toggleDropdownVisibility();
          }}>
          <Icons name="logout" />
          Log out
        </li>
      </ul>
    </div>
  );
};

export default ProfileDropdown;
