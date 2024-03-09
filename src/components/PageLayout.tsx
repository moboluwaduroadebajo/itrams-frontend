import React from "react";
import Sidebar from "./Sidebar";

export const PageLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="flex flex-row h-screen justify-start">
      <Sidebar />
      <div className="flex-1 px-10 ml-[394px]">{children}</div>
    </div>
  );
};
