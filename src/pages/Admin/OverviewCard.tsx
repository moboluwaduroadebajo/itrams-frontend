import Button from "@/components/Button";
import { Icons } from "@/components/icons";
import Link from "next/link";
import React from "react";

interface Props {
  label: string;
  text: string;
  number: number;
  path: string;
}

const OverviewCard = ({ label, text, number, path }: Props) => {
  return (
    <div className="w-2/5">
      <div className="h-[256px] w-[308px] mt-10 p-6 bg-[#f5f9ff] flex flex-col justify-between rounded-xl">
        <p className="font-inter text-base">{label}</p>

        <p className="font-inter font-bold text-xl">
          {number} {text}
        </p>
        <Link href={path}>
          <Button
            label="View all"
            variant="primary"
            icon={<Icons name="arrow-right" />}
            iconPosition="right"
            additionalClassname="w-[120px]"
          />
        </Link>
      </div>
    </div>
  );
};

export default OverviewCard;
