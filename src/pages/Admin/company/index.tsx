import { PageLayout } from "@/components/PageLayout";
import React, { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Dropdown from "@/components/Dropdown";
import { IoIosArrowDown } from "react-icons/io";
import { companyList } from "@/utils/miscellanous.util";
import AdminCard from "@/components/AdminCard";

const Company = () => {
  const facultyList = ["Science", "Arts", "Social Science", "Clinicals"];

  const [selectedFaculty, setSelectedFaculty] = useState("");

  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");

  return (
    <PageLayout>
      <div className="flex flex-row">
        <div className="w-1/2 shadow-vertical pt-20 pr-8">
          <div className="flex items-center justify-between">
            <p className="font-bold font-inter text-2xl">
              Registered Companies
            </p>
            <FaMagnifyingGlass size={24} />
          </div>

          <div className="flex justify-between mt-8">
            <Dropdown
              listArray={facultyList}
              toggleContainer={
                <div className="hover:border-blue-500 w-[145px] min-h-[48px] border border-[#80b3ff] rounded-[5.65px] flex justify-between items-center px-4 py-3 text-[#777777] capitalize cursor-pointer">
                  <p>{selectedFaculty || "Any duration"}</p>
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
                <div className="hover:border-blue-500 w-[200px] min-h-[48px] border border-[#80b3ff] rounded-[5.65px] flex justify-between items-center px-4 py-3 text-[#777777] capitalize cursor-pointer">
                  <p>{selectedDepartment || "Any industry"}</p>
                  <span>
                    <IoIosArrowDown />
                  </span>
                </div>
              }
              setSelected={setSelectedDepartment}
            />
            <Dropdown
              listArray={facultyList}
              toggleContainer={
                <div className="hover:border-blue-500 w-[145px] min-h-[48px] border border-[#80b3ff] rounded-[5.65px] flex justify-between items-center px-4 py-3 text-[#777777] capitalize cursor-pointer">
                  <p>{selectedLevel || "Any location"}</p>
                  <span>
                    <IoIosArrowDown />
                  </span>
                </div>
              }
              setSelected={setSelectedLevel}
            />
          </div>

          <div className="my-8">
            {companyList.map((item) => (
              <AdminCard
                key={item.name}
                name={item.name}
                department={item.company}
              />
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Company;
