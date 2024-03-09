import Image from "next/image";
import React from "react";
import avatar from "@/components/icons/avatar.png";
import { RxCross2 } from "react-icons/rx";
import { BsCheckLg } from "react-icons/bs";
import { Icons } from "./icons";

interface Props {
  offerButton?: boolean;
}

const AwaitingReviewCard = ({ offerButton }: Props) => {
  return (
    <div className="bg-[#f5f9ff] w-auto p-6 flex items-center mt-6 rounded-xl gap-2">
      <Image src={avatar} alt="" />
      <div className="space-y-2">
        <p className="font-bold">Job description</p>
        <p>Name of company</p>
      </div>

      {offerButton && (
        <div className="flex gap-4">
          <div className="flex flex-col items-center justify-center ml-4 cursor-pointer">
            <div className="w-8 h-8 rounded-full text-white bg-[#f44336] flex justify-center items-center">
              <RxCross2 />
            </div>
            <p className=" font-inter font-extralight text-[10px]">Reject</p>
          </div>

          <div className="flex flex-col items-center justify-center ml-4 cursor-pointer">
            <div className="w-8 h-8 rounded-full text-white bg-[#4bae4f] flex justify-center items-center">
              <BsCheckLg />
            </div>
            <p className=" font-inter font-extralight text-[10px]">Approve</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AwaitingReviewCard;
