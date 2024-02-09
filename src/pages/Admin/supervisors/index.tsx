import Button from "@/components/Button";
import InputField from "@/components/FormFields/InputField";
import { PageLayout } from "@/components/PageLayout";
import React from "react";

const Supervisor = () => {
  return (
    <PageLayout>
      <div className="flex flex-row h-screen">
        <div className="w-1/2 shadow-vertical pt-20 pr-8">
          <p className="font-bold font-inter text-2xl">
            Onboard new coordinators
          </p>

          <div className="mt-8">
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
          </div>
        </div>
        <div className="w-1/2"></div>
      </div>
    </PageLayout>
  );
};

export default Supervisor;
