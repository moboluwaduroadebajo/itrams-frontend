import React from "react";
import studentDynamicImg from "@/assets/studentDynamicImg.png";
import Image from "next/image";
import { Icons } from "../icons";

const About = () => {
  const names = [{ name: "Student" }, { name: "Employee" }, { name: "School" }];
  return (
    <div>
      <div className="flex justify-center items-center bg-aboutImage bg-center bg-no-repeat md:w-full m-auto md:h-[70vh] h-[80vh]">
        <p className="text-center font-poppins md:text-lg lg:w-1/2 w-3/4 md:px-12 font-extralight tracking-wider leading-9">
          This platform streamlines the process of acquiring relevant{" "}
          <span className=" font-semibold">industrial training placement</span>{" "}
          and assist organizations in{" "}
          <span className=" font-semibold">recruiting students</span> for an
          wholesome industrial experience.  It assist industrial training units
          to {""}
          <span className=" font-semibold">
            enforce statutory students responsibilities
          </span>{" "}
          during their industrial training period.
        </p>
      </div>

      <div className="my-7 pb-10">
        <div className="flex md:flex-wrap items-center gap-x-14 justify-center font-poppins mb-20">
          {names.map((item) => (
            <p
              key={item.name}
              className="md:w-[208px] w-1/2 h-[59px] bg-re flex items-center justify-center text-lg cursor-pointer hover:border-b-2 border-[#0066FF] hover:text-[#0066FF]">
              {item.name}
            </p>
          ))}
        </div>

        <div className="flex justify-between gap-10 leading-8 md:w-1/2 md:m-auto mx-6 border-l-4">
          <Image
            src={studentDynamicImg}
            alt="student-dynamic"
            className="md:block hidden"
          />

          <div className="flex flex-col gap-4 font-poppins">
            <p className="font-bold md:text-2xl text-xl">Search for a job</p>
            <p className="text-justify">
              This platform allows you to search for jobs and helps you as a
              student streamlines the process of acquiring relevant industrial
              training placement. You can search for jobs based on industry,
              location etc{" "}
            </p>

            <div className="flex justify-end pt-12 cursor-pointer">
              <Icons name="blue-arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
