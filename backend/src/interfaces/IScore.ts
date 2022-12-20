export interface IScore {
  score_id: string;
  question_one: string;
  question_two: string;
  question_three: string;
  score_one: number;
  score_two: number;
  score_three: number;
  add_question: string;
  user_interview_number?: number;
  user_name: string;
  user_email: string;
  notice_title: string;
  success: boolean;
}
