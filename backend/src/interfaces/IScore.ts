export interface IScore {
    // score_id: number;
    score_id:string;
    criterion:string;
    question_one: string;
    question_two: string;
    question_three: string;
    answer_one: string;
    answer_two: string;
    answer_three: string;
    score_one: number;
    score_two: number;
    score_three: number;
    id?: number;
    name: string;
    opinion: string;
    email:string;
}