export interface JobServiceListResponse {
  data: JobPosting[];
}

export interface company {
  company: employerCompanyDetail;
}

export interface employerCompanyDetail {
  id: string;
  industry: string;
  mission: string;
  name: string;
  vision: string;
}
export interface JobPosting {
  id: string;
  title: string;
  employer: company;
  state: string;
  country: string;
  location: string;
  description: string;
  durationInMonths: string;
  numberOfOpenPositions: number;
  numberOfApplicants: string;
  monthlyRemuneration: number;
}
