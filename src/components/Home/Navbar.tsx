import React from "react";
import { Icons } from "../icons";
import Button from "../Button";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="md:px-12">
      <nav className="md:p-16 p-4 mb-10">
        <div className="flex justify-between items-center w-full">
          <Icons name="logo" />
          <Link href="/signup">
            <Button
              variant="primary"
              size="large"
              label="Sign up"
              additionalClassname="md:w-[244px] w-[150px]"
            />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
