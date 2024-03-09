import Button from "@/components/Button";
import { PageLayout } from "@/components/PageLayout";
import { Icons } from "@/components/icons";
import React from "react";
import OverviewCard from "./OverviewCard";

const list = [
  {
    label: "Supervisors",
    text: "departmental supervisors",
    path: "/admin/supervisors",
    number: 26,
  },
  { label: "Company", text: "Company", path: "/admin/company", number: 206 },
  { label: "Depertment", text: "Department", path: "", number: 12 },
  {
    label: "Students",
    text: " Student",
    path: "/admin/students",
    number: 1200,
  },
];

const admin = () => {
  return (
    <PageLayout>
      <div className="flex flex-row w-[70%]">
        <div className="pt-20 px-2">
          <p className="font-bold font-inter text-2xl">Overview</p>

          <div className="flex flex-wrap w-full">
            {list.map((item) => (
              <OverviewCard
                key={item.label}
                label={item.label}
                text={item.text}
                number={item.number}
                path={item.path}
              />
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default admin;
