import React from "react";
import Image from "next/image";
import avatar from "../components/icons/avatar.png";
import avatarSmall from "../components/icons/avatar2.png";

interface CardProps {
  name: string;
  text: string;
  noOfStudents?: number;
}

const AdminCard = ({ name, text, noOfStudents }: CardProps) => {
  return (
    <div className="flex items-center justify-between bg-[#f2f7ff] h-[108px] p-6 mt-4 rounded-xl">
      <div className="flex justify-start">
        <Image src={avatar} alt="image" className="mr-4" />
        <div className="flex flex-col gap-1">
          <p className=" capitalize font-inter font-medium text-base">{name}</p>
          <p className="font-inter text-base text-[777777] font-extralight capitalize">
            {text}
          </p>
        </div>
      </div>

      <div className="flex justify-">
        {noOfStudents && (
          <div className="flex flex-col font-inter items-center">
            <div className="flex items-center gap-2">
              <Image src={avatarSmall} alt="avatar" className=" h-6 w-6" />
              <p className="text-[#0066FF] font-bold text-xs">{noOfStudents}</p>
            </div>

            <p className="font-bold">Students</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminCard;
