export interface IResume {
  id: number;
  title?: string;
  image?: string;
  period?: string;
  school?: string;
  major?: string;
  acquisition_date?: string;
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
  period?: string;
  school?: string;
  major?: string;
  resume_title?: string;
  user_email: string;
}

export interface IActivity {
  id: number;
  period?: string;
  gubun?: string;
  location?: string;
  content?: string;
  resume_title?: string;
  user_email: string;
}

export interface ICertificate {
  id: number;
  acquisition_date?: string;
  certificate?: string;
  rating?: string;
  issuer?: string;
  resume_title?: string;
  user_email: string;
}
