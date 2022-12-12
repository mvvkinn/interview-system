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

  public async create(
    email: IUser,
    name: IUser,
    id: IUser,
    title: string,
    title_id: string
  ) {
    const today = new Date();
    const year = today.getFullYear();
    //19 = 임의의 Announcement.id(면접공고 id)
    const array = [year, title_id, id];
    const interviewNumber = array.join("");

    await this.applyModel.create({
      ...email,
      interview_number: interviewNumber,
      user_id: id,
      user_name: name,
      title: title,
    });
  }

  public async findInterviewNumber(title: any, name: any) {
    const record = await this.applyModel.findOne({
      where: {
        title: title,
        user_name: name,
      },
    });
    return record;
  }

  public async findApplicant(interview_number: any) {
    const record = await this.applyModel.findOne({
      where: {
        interview_number: interview_number,
      },
    });
    return record;
  }
}
