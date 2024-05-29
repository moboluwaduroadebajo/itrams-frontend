import AdminCard from "@/components/AdminCard";
import Button from "@/components/Button";
import Dropdown from "@/components/Dropdown";
import CustomSelect from "@/components/FormFields/CustomSelect";
import { PageLayout } from "@/components/PageLayout";
import { Icons } from "@/components/icons";
import { supervisorList } from "@/utils/miscellanous.util";
import React, { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { v4 as uuid } from "uuid";

const Student = () => {
  const facultyList = ["Science", "Arts", "Social Science", "Clinicals"];

  const [selectedFaculty, setSelectedFaculty] = useState("");

  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");

  return (
    <PageLayout>
      <div className="flex flex-row">
        <div className="w-1/2 border-r-2 border-[#D5D5D5] pt-20 pr-8">
          <div className="flex items-center justify-between">
            <p className="font-bold font-inter text-2xl">Students</p>
            <FaMagnifyingGlass size={24} />
          </div>

          <div className="flex justify-between mt-8">
            <Dropdown
              listArray={facultyList}
              toggleContainer={
                <div className="hover:border-blue-500 w-[145px] min-h-[48px] border border-[#80b3ff] rounded-[5.65px] flex justify-between items-center px-4 py-3 text-[#777777] cursor-pointer">
                  <p>{selectedFaculty || "Any faculty"}</p>
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
                <div className="hover:border-blue-500 w-[200px] min-h-[48px] border border-[#80b3ff] rounded-[5.65px] flex justify-between items-center px-4 py-3 text-[#777777] cursor-pointer">
                  <p>{selectedDepartment || "Any Department"}</p>
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
                <div className="hover:border-blue-500 w-[145px] min-h-[48px] border border-[#80b3ff] rounded-[5.65px] flex justify-between items-center px-4 py-3 text-[#777777] cursor-pointer">
                  <p>{selectedLevel || "Any level"}</p>
                  <span>
                    <IoIosArrowDown />
                  </span>
                </div>
              }
              setSelected={setSelectedLevel}
            />
          </div>

          <div className="my-8">
            {supervisorList.map((item) => (
              <AdminCard
                key={uuid()}
                name={item.name}
                department={item.department}
              />
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Student;
