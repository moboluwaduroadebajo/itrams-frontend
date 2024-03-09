import React from "react";
import Image from "next/image";
import { Icons } from "@/components/icons";
import avatar from "@/components/icons/avatar.png";
import { JobPosting } from "@/types/job-posting.type";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import ApiInstance from "@/api";
import { useAppSelector } from "@/app/hooks";
import { selectAccessToken } from "@/reducers/account.reducer";
import { Loader } from "./Loader";

interface JobProps {
  job?: JobPosting | undefined;
}

const fetchJobPostings = async () => {
  const token = localStorage.getItem("eitrams-token");
  const response = await ApiInstance.post("/job-posting");
  return response.data;
};

const url = process.env.NEXT_PUBLIC_BASE_API_URL;

const JobPostingCard = ({ job }: JobProps) => {
  const {
    data: service,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["job-posting"],
    queryFn: async () => {
      const token = localStorage.getItem("eitrams-token");
      const { data } = await axios.get(`${url}/job-posting`, {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      });
      // console.log(service);
    },
  });

  // if (isLoading) {
  //   return <Loader />;
  // }

  return (
    <div className="w-full mt-8 rounded-xl bg-[#f5f9ff] p-10">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <Image alt="" src={avatar} />

          <div className="space-y-2">
            <p className="font-bold">{job?.title}</p>
            <p className="font-light">Beedel Constructions</p>
          </div>
        </div>

        <div className="flex gap-1">
          <Icons name="profile" />
          <span className="font-bold">{job?.numberOfOpenPositions}</span>
        </div>
      </div>

      <div>
        <ul className="flex justify-between my-6 font-inter text-[#777]">
          <li className="flex items-center justify-center gap-1 text-xs">
            <Icons name="duration" />
            12 wks - 52 wks
          </li>
          <li className="flex items-center justify-center gap-1 text-xs">
            <Icons name="wallet" />
            50,000
          </li>
          <li className="flex items-center justify-center gap-1 text-xs">
            <Icons name="briefcase" />
            Remote
          </li>
          <li className="flex items-center justify-center gap-1 text-xs">
            <Icons name="location" />
            Lagos, Nigeria
          </li>
        </ul>
      </div>

      <ul className="mt-6 list-disc">
        <li className="pb-2 font-inter ml-5 text-sm">
          Start date should be between January 15, 2024 - February 24, 2024
        </li>
        <li className="pb-2 font-inter ml-5 text-sm">Attractive pay </li>
        <li className="pb-2 font-inter ml-5 text-sm">Room for growth</li>
        <li className="pb-2 font-inter ml-5 text-sm">
          Need a student would is willing to learn on the job and clock more
          hours.
        </li>
      </ul>
    </div>
  );
};

export default JobPostingCard;
