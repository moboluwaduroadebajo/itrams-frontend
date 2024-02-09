import { PageLayout } from "@/components/PageLayout";
import React from "react";

const Student = () => {
  return (
    <PageLayout>
      <div className="flex flex-row h-screen">
        <div className="w-1/2 shadow-vertical pt-20 px-2">
          <p className="font-bold font-inter text-2xl">Students</p>
        </div>
      </div>
    </PageLayout>
  );
};

export default Student;
