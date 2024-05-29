import React, { useEffect, useState } from "react";
import { Icons } from "./icons";
import MenuItem from "./MenuItem";
import Image from "next/image";
import avatar from "./icons/avatar.png";
import { useRouter } from "next/router";
import { accountSlice, selectUserRole } from "@/reducers/account.reducer";
import {
  ADMIN_MENU_LIST,
  COORDINATOR_MENU_LIST,
  EMPLOYER_MENU_LIST,
  STUDENT_MENU_LIST,
  SUPERVISOR_MENU_LIST,
} from "@/constants/sidebar-items";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import ProfileDropdown from "./ProfileDropdown";
import axios from "axios";
import { userDetail } from "@/types/user.type";

const Sidebar = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const userRole = useAppSelector(selectUserRole);

  const [openProfile, setOpenProfile] = useState(false);
  const [userData, setUserData] = useState<userDetail>();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdownVisibility = () => {
    setIsDropdownVisible((vis) => !vis);
  };

  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL;
  const token = localStorage.getItem("eitrams-token");

  const handleLogout = async () => {
    localStorage.removeItem("eitrams-token");
    localStorage.removeItem("eitrams-userRole");
    await dispatch(accountSlice.actions.resetAccountState());
    router.push("/signin");
  };

  useEffect(() => {
    const getuserData = async () => {
      try {
        const response = await axios.get(`${baseURL}/user/profile`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: ` ${token}`,
          },
        });

        setUserData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getuserData();
  }, []);

  return (
    <div className="flex flex-col shadow-vertical w-[394px] pl-[70px] pt-10 min-h-screen fixed top-0 bottom-0 z-50">
      <Icons name="logo" />

      {userRole === "ADMIN" && (
        <div className="mt-24 flex flex-col">
          {ADMIN_MENU_LIST.map((item) => {
            return (
              <MenuItem
                key={item.path}
                label={item.label}
                icon={item.icon}
                path={item.path}
                isTabActive={router.pathname === item.path}
              />
            );
          })}
        </div>
      )}

      {userRole === "EMPLOYER" && (
        <div className="mt-24 flex flex-col">
          {EMPLOYER_MENU_LIST.map((item) => {
            return (
              <MenuItem
                key={item.path}
                label={item.label}
                icon={item.icon}
                path={item.path}
                isTabActive={router.pathname === item.path}
              />
            );
          })}
        </div>
      )}

      {userRole === "STUDENT" && (
        <div className="mt-24 flex flex-col">
          {STUDENT_MENU_LIST.map((item) => {
            return (
              <MenuItem
                key={item.path}
                label={item.label}
                icon={item.icon}
                path={item.path}
                isTabActive={router.pathname === item.path}
              />
            );
          })}
        </div>
      )}

      {userRole === "SUPERVISOR" && (
        <div className="mt-24 flex flex-col">
          {SUPERVISOR_MENU_LIST.map((item) => {
            return (
              <MenuItem
                key={item.path}
                label={item.label}
                icon={item.icon}
                path={item.path}
                isTabActive={router.pathname === item.path}
              />
            );
          })}
        </div>
      )}

      {userRole === "COORDINATOR" && (
        <div className="mt-24 flex flex-col">
          {COORDINATOR_MENU_LIST.map((item) => {
            return (
              <MenuItem
                key={item.path}
                label={item.label}
                icon={item.icon}
                path={item.path}
                isTabActive={router.pathname === item.path}
              />
            );
          })}
        </div>
      )}

      <div className="w-full group">
        <div
          className="flex items-center gap-2 mt-4 cursor-pointer hover:bg-[#d9e8ff] px-4 py-6"
          onClick={() => setOpenProfile(!openProfile)}>
          <Image
            src={avatar}
            alt="aatar"
            className="h-[60px] w-[60px] rounded-full"
          />
          {userRole === "ADMIN" && (
            <div className="max-w-[200px]">
              <p className="font-bold font-inter text-xs">
                Industrial training and coordination center
              </p>
            </div>
          )}

          <div className="font-inter text-xs">
            <p className="font-bold">{`${userData?.firstName} ${userData?.lastName}`}</p>

            {userRole === "EMPLOYER" && <p>{userData?.company?.name}</p>}
            {userRole === "STUDENT" && <p>{userData?.department.name}</p>}

            {userRole === "SUPERVISOR" && <p>Industry Supervisor</p>}
            {userRole === "COORDINATOR" && <p>Department Supervisor</p>}
          </div>
        </div>

        <div className="hidden group-hover:block hover:block">
          <ProfileDropdown
            toggleDropdownVisibility={toggleDropdownVisibility}
            onProfileClick={() => {}}
            onLogoutClick={handleLogout}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
