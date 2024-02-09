import Button from "@/components/Button";
import { Icons } from "@/components/icons";
import React from "react";

interface Props {
  label: string;
  text: string;
  number: number;
}

const OverviewCard = ({ label, text, number }: Props) => {
  return (
    <div className="w-[50%]">
      <div className="h-[256px] w-[250px] mt-10 p-6 bg-[#f5f9ff] flex flex-col justify-between rounded-xl">
        <p className="font-inter text-base">{label}</p>

        <p className=" font-inter font-bold text-xl">
          {number} {text}
        </p>

        <Button
          label="View all"
          variant="primary"
          icon={<Icons name="arrow-right" />}
          iconPosition="right"
          additionalClassname="w-[100px]"
        />
      </div>
    </div>
  );
};

export default OverviewCard;
