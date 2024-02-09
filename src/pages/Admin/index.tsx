import Button from "@/components/Button";
import { PageLayout } from "@/components/PageLayout";
import { Icons } from "@/components/icons";
import React from "react";
import OverviewCard from "./OverviewCard";

const list = [
  { label: "Supervisors", text: "departmental supervisors", number: 26 },
  { label: "Company", text: "Company", number: 206 },
  { label: "Depertment", text: "Department", number: 12 },
  { label: "Students", text: " Student", number: 1200 },
];

const admin = () => {
  return (
    <PageLayout>
      <div className="flex flex-row h-screen">
        <div className="w-1/2 shadow-vertical pt-20 px-2">
          <p className="font-bold font-inter text-2xl">Overview</p>

          <div className="flex flex-wrap justify w-full">
            {list.map((item) => (
              <OverviewCard
                key={item.label}
                label={item.label}
                text={item.text}
                number={item.number}
              />
            ))}
          </div>
        </div>
        <div className="w-1/2"></div>
      </div>
    </PageLayout>
  );
};

export default admin;
