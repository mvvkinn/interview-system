export interface IScore {
  score_id: string;
  attitude: string;
  attitude_opinion: string;
  communication_skills: string;
  communication_skills_opinion: string;
  logical: string;
  logical_opinion: string;
  reliability: number;
  reliability_opinion: number;
  judgment: number;
  judgment_opinion: number;
  leadership: number;
  leadership_opinion: number;
  business: string;
  business_opinion: string;
  opinion: string;
  user_interview_number?: number;
  user_name: string;
  interviewer_name: string;
  notice_title: string;
  successNumber: number;
  isSuccess: boolean;
}
