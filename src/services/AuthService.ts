import { User } from "@models/User";
import { randomBytes } from "crypto";
import argon2 from "argon2";
import jwt from "jsonwebtoken";
import { IUser, IUserSignInDTO } from "@interfaces/IUser";
import config from "@config";

export default class AuthService {
  public async SignUp(UserDTO: IUser) {
    const salt = randomBytes(32);

    const hashedPassword = await argon2.hash(UserDTO.password, { salt });
    const userRecord = await User.Create({
      ...UserDTO,
      password: hashedPassword,
      salt: salt.toString("hex"),
    });

    return userRecord;
  }

  public async SignIn(
    username: string,
    password: string
  ): Promise<{ user: IUser; token: string }> {
    const userRecord = await User.findOne({ username });
    const userDTO = Object.keys(userRecord).map(key => {
      const user = Object(userRecord[key as keyof IUser]);
      return user;
    })[0];

    if (!userDTO) {
      throw new Error(`Can't find user : ${username}`);
    }

    const isPasswordValid = await argon2.verify(userDTO.password, password);

    if (isPasswordValid) {
      const token = this.generateToken(userDTO);

      const user = userDTO.toObject();
      Reflect.deleteProperty(userDTO, "password");
      Reflect.deleteProperty(userDTO, "salt");

      return { user, token };
    } else {
      throw new Error("Invalid password");
    }
  }

  private generateToken(user: any) {
    const today = new Date();
    const tokenExpiration = new Date(today);
    tokenExpiration.setDate(today.getDate() + 60);

    console.log(config.jwtSecret);
    return jwt.sign(
      {
        _id: user.id,
        username: user.username,
        exp: tokenExpiration.getTime() / 1000,
      },
      config.jwtSecret
    );
  }
}
