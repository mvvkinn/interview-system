import { IUser } from "@interfaces/IUser";
import { Model } from "@loaders/mysql";

export const User = new Model<IUser & Document>("user");
