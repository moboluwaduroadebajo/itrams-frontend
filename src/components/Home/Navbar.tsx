import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between h-[90px] bg-[#072A40] px-16 py-8">
        <h2 className="text-[30px] font-bold text-[#178CA4]">ITraMs</h2>
        <div className="flex justify-center items-center gap-6">
          <button className="h-[50px] w-[105px] rounded-md  bg-[#178CA4] text-white">
            Login
          </button>
          <button className="h-[50px] w-[105px] rounded-md bg-[#178CA4] text-white">
            Sign up
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
