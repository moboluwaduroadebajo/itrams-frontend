import AwaitingReviewCard from "@/components/AwaitingReviewCard";
import { PageLayout } from "@/components/PageLayout";
import React from "react";
import { Icons } from "@/components/icons";
import avatar from "@/components/icons/avatar.png";
import { FaArrowRight, FaMagnifyingGlass } from "react-icons/fa6";
import JobPostingCard from "@/components/JobPostingCard";
import { JobServiceListResponse } from "@/types/job-posting.type";

interface Props {
  jobPosts: JobServiceListResponse | undefined;
  selectedJobId: string | null;
}

const Employer = ({ jobPosts, selectedJobId }: Props) => {
  const jobDetails = jobPosts?.data.filter(
    (data) => data.id === selectedJobId!
  );
  return (
    <PageLayout>
      <div className="flex flex-row relative">
        <div className="w-3/5 h-screen border-r-2 border-[#D5D5D5] pt-20 pr-8">
          <div className="flex items-center justify-between">
            <p className="font-bold font-inter text-2xl">Job posting</p>
          </div>

          <JobPostingCard />
        </div>

        <div className="pt-20 pr-8 px-10">
          <div>
            <p className="font-bold font-inter text-2xl">Manage Supervisors</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Employer;
