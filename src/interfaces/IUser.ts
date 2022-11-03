export interface IUser {
  username: string;
  email: string;
  password: string;
  name: string;
  gender: string; // char
  birthdate: Date;
  phone?: string;
  zipcode?: string;
  address?: string;
  recieve_info?: boolean;
}

export interface IUserSignInDTO {
  username: string;
  password: string;
}
