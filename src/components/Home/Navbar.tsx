import React from "react";
import { Icons } from "../icons";
import Button from "../Button";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="p-16 mb-10">
        <div className="flex justify-between items-center w-full">
          <Icons name="logo" />
          <Link href="/signup">
            <Button
              variant="primary"
              label="Sign up"
              additionalClassname="w-[244px]"
            />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
