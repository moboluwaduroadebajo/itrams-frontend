import Dropdown from "@/components/Dropdown";
import { PageLayout } from "@/components/PageLayout";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import avatar from "@/components/icons/avatar.png";
import Button from "@/components/Button";
import { FaArrowRight } from "react-icons/fa6";
import { Icons } from "@/components/icons";
import AwaitingReviewCard from "@/components/AwaitingReviewCard";

const Student = () => {
  const facultyList = [""];

  const [selectedFaculty, setSelectedFaculty] = useState("");

  return (
    <PageLayout>
      <div className="flex flex-row h-full">
        <div className="w-3/5 border-r-2 border-[#D5D5D5] pt-20 pr-8 relative">
          <p className="font-bold font-inter text-2xl">Discover Jobs</p>

          <div className="flex justify-between mt-8">
            <Dropdown
              listArray={facultyList}
              toggleContainer={
                <div className="hover:border-blue-500 w-[160px] min-h-[48px] border border-[#80b3ff] rounded-[5.65px] flex justify-between items-center px-4 py-3 text-[#777777] cursor-pointer">
                  <p>{selectedFaculty || "Any Duration"}</p>
                  <span>
                    <IoIosArrowDown />
                  </span>
                </div>
              }
              setSelected={setSelectedFaculty}
            />
            <Dropdown
              listArray={facultyList}
              toggleContainer={
                <div className="hover:border-blue-500 w-[160px] min-h-[48px] border border-[#80b3ff] rounded-[5.65px] flex justify-between items-center px-4 py-3 text-[#777777] cursor-pointer">
                  <p>{selectedFaculty || "Any Industry"}</p>
                  <span>
                    <IoIosArrowDown />
                  </span>
                </div>
              }
              setSelected={setSelectedFaculty}
            />{" "}
            <Dropdown
              listArray={facultyList}
              toggleContainer={
                <div className="hover:border-blue-500 w-[160px] min-h-[48px] border border-[#80b3ff] rounded-[5.65px] flex justify-between items-center px-4 py-3 text-[#777777] cursor-pointer">
                  <p>{selectedFaculty || "Any Location"}</p>
                  <span>
                    <IoIosArrowDown />
                  </span>
                </div>
              }
              setSelected={setSelectedFaculty}
            />
          </div>

          <div className="w-full mt-8 rounded-xl bg-[#f5f9ff] p-10">
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Image alt="" src={avatar} />

                <div className="space-y-2">
                  <p className="font-bold">Civil Engineering Intern</p>
                  <p className="font-light">Beedel Constructions</p>
                </div>
              </div>

              <Button
                label="Apply"
                variant="primary"
                icon={<FaArrowRight />}
                iconPosition="right"
                additionalClassname="w-[120px]"
              />
            </div>

            <ul className="flex justify-between my-6 font-inter text-[#777]">
              <li className="flex items-center justify-center gap-1 text-xs">
                <span>
                  <Icons name="duration" />
                </span>
                12 wks - 52 wks
              </li>
              <li className="flex items-center justify-center gap-1 text-xs">
                <span>
                  <Icons name="wallet" />
                </span>
                50,000
              </li>
              <li className="flex items-center justify-center gap-1 text-xs">
                <span>
                  <Icons name="briefcase" />
                </span>
                Remote
              </li>
              <li className="flex items-center justify-center gap-1 text-xs">
                <span>
                  <Icons name="location" />
                </span>
                Lagos, Nigeria
              </li>
            </ul>

            <ul className="mt-6 list-disc">
              <li className="pb-2 font-inter ml-5 text-sm">
                Start date should be between January 15, 2024 - February 24,
                2024
              </li>
              <li className="pb-2 font-inter ml-5 text-sm">Attractive pay </li>
              <li className="pb-2 font-inter ml-5 text-sm">Room for growth</li>
              <li className="pb-2 font-inter ml-5 text-sm">
                Need a student would is willing to learn on the job and clock
                more hours.
              </li>
            </ul>
          </div>
        </div>

        <div className=" pt-20 pr-8 px-10">
          <div>
            <p className="font-bold font-inter text-2xl">Awaiting Review</p>
            <div className="w-[300px]">
              <AwaitingReviewCard />
            </div>
          </div>

          <div className="mt-16">
            <p className="font-bold font-inter text-2xl">List of offers</p>
            <div className="">
              <AwaitingReviewCard offerButton />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Student;
