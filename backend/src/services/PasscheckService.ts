import { Container } from "typedi";
import { randomBytes } from "crypto";
import { IPasscheck } from "@interfaces/IPasscheck";
import { ModelCtor, Sequelize } from "sequelize";

export default class AuthService {
  passcheckModel: ModelCtor<any>;
  userModel: ModelCtor<any>;
  noticeModel: ModelCtor<any>;
  scoreModel: ModelCtor<any>;

  constructor() {
    const db: Sequelize = Container.get("db");
    this.passcheckModel = db.models.Passcheck;
    this.userModel = db.models.User;
    this.noticeModel = db.models.Notice;
    this.scoreModel = db.models.Score;
  }

  public async passcheck(PasscheckDTO: IPasscheck) {
    const passcheckRecord = this.passcheckModel.create({
      ...PasscheckDTO,
    });
    return passcheckRecord;
  }
}
