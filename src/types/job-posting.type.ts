export interface JobServiceListResponse {
  data: JobPosting[];
  // meta: Meta;
}

export interface JobPosting {
  id: string;
  title: string;
  description: string;
  durationInMonths: number;
  numberOfOpenPositions: number;
}
