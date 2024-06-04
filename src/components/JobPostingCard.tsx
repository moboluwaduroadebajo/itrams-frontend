import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Icons } from "@/components/icons";
import avatar from "@/components/icons/avatar.png";

interface JobProps {
  id: string;
  title: string;
  employer: string;
  state: string;
  country: string;
  location: string;
  description: string;
  duration: string;
  numberOfOpenPositions: number;
  numberOfApplicants: string;
  monthlyRemuneration: number;
}

const JobPostingCard = ({
  id,
  title,
  state,
  country,
  location,
  duration,
  description,
  employer,
  numberOfApplicants,
  monthlyRemuneration,
}: JobProps) => {
  const [displayDesc, setDisplayDesc] = useState("");
  const [fullText, setFullText] = useState(true);
  const maxLength = 300;

  useEffect(() => {
    if (description.length > 300) {
      const shortText = description.slice(0, maxLength);
      setDisplayDesc(`${shortText}...`);
    } else {
      setDisplayDesc(description);
    }
  }, [description]);

  return (
    <div className="w-full mt-10 rounded-xl bg-[#f5f9ff] p-10">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <Image alt="employer-image" src={avatar} />

          <div className="space-y-2">
            <p className="font-bold">{title}</p>
            <p className="font-light">{employer}</p>
          </div>
        </div>

        <div className="flex gap-1">
          <Icons name="profile" />
          <span className="font-bold">{numberOfApplicants}</span>
        </div>
      </div>

      <div>
        <ul className="flex justify-between my-6 font-inter text-[#777]">
          <li className="flex items-center justify-center gap-1 text-xs">
            <Icons name="duration" />
            {duration} months
          </li>
          <li className="flex items-center justify-center gap-1 text-xs">
            <Icons name="wallet" />
            {monthlyRemuneration}
          </li>
          <li className="flex items-center justify-center gap-1 text-xs">
            <Icons name="briefcase" />
            {location}
          </li>
          <li className="flex items-center justify-center gap-1 text-xs">
            <Icons name="location" />
            {state}, {country}
          </li>
        </ul>
      </div>

      <div
        dangerouslySetInnerHTML={{
          __html: fullText ? displayDesc : description,
        }}
        className="font-inter mt-5 text-sm"></div>
      {description.length >= maxLength ? (
        <p
          onClick={() => setFullText(!fullText)}
          className=" cursor-pointer text-[#0066FF]">
          {fullText ? "Read more..." : "Read less"}
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default JobPostingCard;
