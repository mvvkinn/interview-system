export interface IResume {
  id: number;
  title?: string;
  image?: string;
  period?: Date;
  school?: string;
  major?: string;
  acquisition_date?: Date;
  certificate?: string;
  rating?: string;
  issuer?: string;
  user_name: string;
  user_email: string;
  user_birthdate: Date;
  user_phone: string;
  user_address: string;
}

export interface IEducation {
  id: number;
  period?: Date;
  school?: string;
  major?: string;
  resume_title?: string;
  user_email: string;
}
