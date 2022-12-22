export interface IUser {
  id: number;
  email: string;
  password: string;
  name: string;
  gender: string; // char
  birthdate: string;
  phone?: string;
  zipcode?: string;
  address?: string;
  recieve_info?: boolean;
  role?: string;
}

export interface IUserSignInDTO {
  username: string;
  password: string;
}
