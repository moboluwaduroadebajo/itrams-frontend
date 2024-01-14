import React from "react";
import { Icons } from "./icons";

export const Loader = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <Icons name="loading-indicator" />
      </div>
    </div>
  );
};
