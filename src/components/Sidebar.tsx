import React from "react";
import { Icons } from "./icons";
import MenuItem from "./MenuItem";
import Image from "next/image";
import avatar from "./icons/avatar.png";
import { useRouter } from "next/router";
import {
  accountSlice,
  selectAccountState,
  selectUserRole,
} from "@/reducers/account.reducer";
import {
  ADMIN_MENU_LIST,
  COORDINATOR_MENU_LIST,
  EMPLOYER_MENU_LIST,
  STUDENT_MENU_LIST,
  SUPERVISOR_MENU_LIST,
} from "@/constants/sidebar-items";
import { useAppDispatch, useAppSelector } from "@/app/hooks";

const Sidebar = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const userRole = useAppSelector(selectUserRole);

  const handleLogout = async () => {
    localStorage.removeItem("eitrams-token");
    localStorage.removeItem("eitrams-userRole");
    await dispatch(accountSlice.actions.resetAccountState());
    router.push("/signin");
  };

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

      <div className="flex items-center gap-2 mt-4 ">
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

        {userRole === "EMPLOYER" && (
          <div className="font-inter text-xs">
            <p className="font-bold">BEEDEL Construction Nigeria LTD</p>
            <p>Civil construction and consultancy</p>
          </div>
        )}

        {userRole === "STUDENT" && (
          <div className="font-inter text-xs">
            <p className="font-bold">Oluwapelumi Egunjobi</p>
            <p>Civil Engineering</p>
          </div>
        )}

        {userRole === "SUPERVISOR" && (
          <div className="font-inter text-xs">
            <p className="font-bold">Lauren Johnson</p>
            <p>Industry Supervisor</p>
          </div>
        )}

        {userRole === "COORDINATOR" && (
          <div className="font-inter text-xs">
            <p className="font-bold">Tijani Dada</p>
            <p>Department Supervisor</p>
          </div>
        )}
      </div>
      <div className="mt-10 cursor-pointer font-bold" onClick={handleLogout}>
        Logout
      </div>
    </div>
  );
};

export default Sidebar;
