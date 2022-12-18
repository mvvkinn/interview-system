export interface IResume {
  id: number;
  title?: string;
  image?: string;
  education?: JSON;
  certificate?: JSON;
  activity?: JSON;
  cover_letter?: Text;
  user_name: string;
  user_email: string;
  user_birthdate: string;
  user_phone: string;
  user_address: string;
}
