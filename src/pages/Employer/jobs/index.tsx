import { PageLayout } from "@/components/PageLayout";
import React from "react";
import axios from "axios";
import { JobPosting } from "@/types/job-posting.type";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "@/components/Loader";
import JobPostingCard from "@/components/JobPostingCard";

const EmployerJobs = () => {
  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL;
  const token = localStorage.getItem("eitrams-token");

  const fetchActiveJobs = async (): Promise<JobPosting[]> => {
    if (!token) {
      throw new Error("No token found");
    }
    try {
      const response = await axios.get(
        `${baseURL}/job-posting/me?active=true`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
        }
      );
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

  const fetchPastJobs = async (): Promise<JobPosting[]> => {
    if (!token) {
      throw new Error("No token found");
    }
    try {
      const response = await axios.get(
        `${baseURL}/job-posting/me?active=false`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
        }
      );
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
    data: activeJobsArray,
    isLoading: isActiveLoading,
    error: isActiveError,
  } = useQuery<JobPosting[], Error>({
    queryFn: fetchActiveJobs,
    queryKey: ["activeJob"],
  });

  const {
    data: pastJobsArray,
    isLoading: isInactiveLoading,
    error: isInactiveError,
  } = useQuery<JobPosting[], Error>({
    queryFn: fetchPastJobs,
    queryKey: ["pastJob"],
  });

  if (isActiveLoading || isInactiveLoading) {
    return <Loader />;
  }

  if (isActiveError || isInactiveError) {
    return (
      <div>Error : {isActiveError?.message || isInactiveError?.message}</div>
    );
  }
  return (
    <PageLayout>
      <div className="flex relative ">
        <div className="flex flex-col justify-center basis-1/2 w-1/2 pt-20 pr-8">
          <div className="flex items-center justify-between">
            <p className="font-bold font-inter text-2xl">Active Job </p>
          </div>

          {activeJobsArray && activeJobsArray.length > 0 ? (
            activeJobsArray?.map((job) => {
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
            <div>No active jobs available</div>
          )}

          <div className="flex items-center justify-between mt-10">
            <p className="font-bold font-inter text-2xl">Past Job </p>
          </div>

          {pastJobsArray && pastJobsArray.length > 0 ? (
            pastJobsArray.map((job) => {
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
            <div>No active jobs available</div>
          )}
        </div>

        <div className="basis-1/2 w-[37%] border-l-2 border-[#D5D5D5] h-screen overflow-auto fixed right-0"></div>
      </div>
    </PageLayout>
  );
};

export default EmployerJobs;
