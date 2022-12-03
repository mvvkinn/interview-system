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

  public async create(email: IUser, name: IUser, id: IUser) {
    //11 = 임의의 Announcement.id(면접공고 id)
    const array = [11, id];
    const interviewNumber = array.join("");

    await this.applyModel.create({
      ...email,
      interview_number: interviewNumber,
      user_id: id,
      user_name: name,
    });
  }
}
