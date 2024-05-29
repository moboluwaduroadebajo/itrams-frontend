import React from "react";
import { Icons } from "../icons";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center my-10 gap-6 border-t border-[#0066FF] pt-20">
      <div className="flex items-center justify-center gap-3">
        <Icons name="facebook" />
        <Icons name="twitter" />
        <Icons name="instagram" />
        <Icons name="linkedIn" />
      </div>
      <div className=" font-sans text-xl font-light leading-8">
        Copyright @ e-itrams 2023
      </div>
    </div>
  );
};

export default Footer;
