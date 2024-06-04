import { PageLayout } from "@/components/PageLayout";
import React from "react";
import JobPostingCard from "@/components/JobPostingCard";
import { JobPosting } from "@/types/job-posting.type";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "@/components/Loader";
import { FaPlus } from "react-icons/fa6";
import avatar from "@/components/icons/avatar.png";
import Image from "next/image";
import { toast } from "react-toastify";

const Employer = () => {
  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL;
  const token = localStorage.getItem("eitrams-token");

  const fetchJobPosting = async (): Promise<JobPosting[]> => {
    if (!token) {
      throw new Error("No token found");
    }
    try {
      const response = await axios.get(`${baseURL}/job-posting`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      });

      const data = response.data.data.content;
      // console.log(data);

      if (Array.isArray(data)) {
        return data;
      }
    } catch (error) {
      console.log(error);
    }
    return [];
  };

  const {
    data: jobPostingAray,
    isLoading,
    error,
  } = useQuery<JobPosting[], Error>({
    queryFn: fetchJobPosting,
    queryKey: ["jobPosts"],
  });

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error : {error.message}</div>;
  }
  return (
    <PageLayout>
      <div className="flex flex-row relative">
        <div className="w-3/5 h-full border-r-2 border-[#D5D5D5] pt-20 pr-8 relative">
          <div className="flex items-center justify-between">
            <p className="font-bold font-inter text-2xl">Job posting</p>
          </div>

          {jobPostingAray && jobPostingAray.length > 0 ? (
            jobPostingAray?.map((job) => {
              return (
                <JobPostingCard
                  key={job.id}
                  id={job.id}
                  title={job.title}
                  numberOfApplicants={job.numberOfApplicants}
                  employer={job.employer.company.name}
                  duration={job.durationInMonths}
                  location={job.location}
                  state={job.state}
                  country={job.country}
                  description={job.description}
                  numberOfOpenPositions={job.numberOfOpenPositions}
                  monthlyRemuneration={job.monthlyRemuneration}
                />
              );
            })
          ) : (
            <div>No job posting available</div>
          )}

          <div className="sticky bottom-16 right-0 flex flex-col items-end gap-1 z-100">
            <div className="bg-[#0066FF] text-white flex items-center justify-center rounded-full h-12 w-12 cursor-pointer">
              <FaPlus size={18} />
            </div>
            <p className="font-inter text-[8px] text-[#0066FF]">
              Post new jobs
            </p>
          </div>
        </div>

        <div className="pt-20 pr-8 px-10 relative">
          <div>
            <p className="font-bold font-inter text-2xl">Manage Supervisors</p>
          </div>

          <div className="mt-10">
            <div className="flex gap-4">
              <Image
                src={avatar}
                alt="aatar"
                className="h-[60px] w-[60px] rounded-full"
              />

              <div className="flex flex-col justify-between gap-1 font-inter">
                <p className="font-medium">Oluwapelumi</p>
                <p className="font-extralight">Industry Supervisor . 2 posts</p>
              </div>
            </div>
          </div>

          <div className="sticky flex flex-col items-center gap-1 z-100 mt-10">
            <div className="bg-[#0066FF] text-white flex items-center justify-center rounded-full h-12 w-12 cursor-pointer">
              <FaPlus size={18} />
            </div>
            <p className="font-inter text-[8px] text-[#0066FF]">
              Onboard supervisors
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Employer;
