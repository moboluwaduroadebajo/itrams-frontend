import { PageLayout } from "@/components/PageLayout";
import React from "react";
import { FaMagnifyingGlass, FaPlus } from "react-icons/fa6";
import AdminCard from "@/components/AdminCard";
import { supervisorList } from "@/utils/miscellanous.util";

const Supervisor = () => {
  return (
    <PageLayout>
      <div className="flex flex-row">
        <div className="w-1/2 border-r-2 border-[#D5D5D5] pt-20 pr-8 relative">
          <div className="flex items-center justify-between">
            <p className="font-bold font-inter text-2xl">
              Departmental Supervisors
            </p>
            <FaMagnifyingGlass size={24} />
          </div>

          <div className="overflow-y-auto my-8">
            {supervisorList.map((item) => (
              <AdminCard
                key={item.name}
                name={item.name}
                department={item.department}
                noOfStudents={item.noOfStudents}
              />
            ))}
          </div>
          <div className="fixed bottom-16 right-[42%] flex flex-col items-center gap-1 z-100 hover:scale-125">
            <div className="bg-[#0066FF] text-white flex items-center justify-center rounded-full h-12 w-12 cursor-pointer">
              <FaPlus size={18} />
            </div>
            <p className="font-inter text-[8px] text-[#0066FF]">
              Onboard new supervisor
            </p>
          </div>

          {/* <div className="mt-8">
            <InputField
              name="name"
              type="text"
              label="Full name"
              placeholder="Enter your name"
            />
            <InputField
              type="text"
              name="department"
              label="Department"
              placeholder="Enter your department"
            />{" "}
            <InputField
              type="email"
              name="email"
              label="email address"
              placeholder="Enter your email"
            />{" "}
            <InputField
              type="text"
              name="bio"
              label="bio"
              placeholder="Enter your bio"
            />
            <Button
              label="Onboard"
              variant="primary"
              additionalClassname="w-full"
            />
          </div> */}
        </div>
        <div className="basis-1/2"></div>
      </div>
    </PageLayout>
  );
};

export default Supervisor;
