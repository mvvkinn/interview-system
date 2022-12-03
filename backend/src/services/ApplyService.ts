import { Container } from "typedi";
import { ModelCtor, Sequelize } from "sequelize";
import { IApply } from "@interfaces/IApply";
import { IUser, IUserSignInDTO } from "@interfaces/IUser";

export default class ApplyService {
  applyModel: ModelCtor<any>;
  userModel: ModelCtor<any>;
  constructor() {
    const db: Sequelize = Container.get("db");
    this.applyModel = db.models.Apply;
    this.userModel = db.models.User;
  }

  public async create(email: IUser) {
    const userName = this.userModel.findAll({
      attributes: ["name"],
      where: { email: email },
    });
    const userID = this.userModel.findAll({
      attributes: ["id"],
      where: { email: email },
    });

    await this.applyModel.create({
      ...email,
      user_name: userName,
      UserID: userID,
    });
  }
}
