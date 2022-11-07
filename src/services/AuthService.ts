import { Container } from "typedi";
import { randomBytes } from "crypto";
import argon2 from "argon2";
import jwt from "jsonwebtoken";
import { IUser, IUserSignInDTO } from "@interfaces/IUser";
import config from "@config";
import { ModelCtor, Sequelize } from "sequelize";

export default class AuthService {
  userModel: ModelCtor<any>;
  constructor() {
    const db: Sequelize = Container.get("db");
    this.userModel = db.models.User;
  }

  public async SignUp(UserDTO: IUser) {
    const salt = randomBytes(32);

    const hashedPassword = await argon2.hash(UserDTO.password, { salt });
    const userRecord = this.userModel.create({
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
    const userRecord = await this.userModel.findByPk(username);

    if (!userRecord) {
      throw new Error(`Can't find user : ${username}`);
    }

    const userDTO = userRecord.dataValues;
    const isPasswordValid = await argon2.verify(userDTO.password, password);

    if (isPasswordValid) {
      const token = this.generateToken(userDTO);

      const user = Object(userDTO);
      Reflect.deleteProperty(user, "password");
      Reflect.deleteProperty(user, "salt");

      return { user, token };
    } else {
      throw new Error("Invalid password");
    }
  }

  private generateToken(user: any) {
    const today = new Date();
    const tokenExpiration = new Date(today);
    tokenExpiration.setDate(today.getDate() + 60);

    return jwt.sign(
      {
        username: user.username,
        role: user.role,
        exp: tokenExpiration.getTime() / 1000,
      },
      config.jwtSecret
    );
  }
}
