import { PageLayout } from "@/components/PageLayout";
import React from "react";
import JobPostingCard from "@/components/JobPostingCard";
import { JobPosting } from "@/types/job-posting.type";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "@/components/Loader";

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
      console.log(data);

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
        <div className="w-3/5 h-screen border-r-2 border-[#D5D5D5] pt-20 pr-8">
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
