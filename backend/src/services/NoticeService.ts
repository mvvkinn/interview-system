import { Container } from "typedi";
import { randomBytes } from "crypto";
import { INotice } from "@interfaces/INotice";
import { ModelCtor, Sequelize } from "sequelize";

export default class AuthService {
  noticeModel: ModelCtor<any>;

  constructor() {
    const db: Sequelize = Container.get("db");
    this.noticeModel = db.models.Notice;
  }

  public async RegistNotice(NoticeDTO: INotice) {
    const resumeRecord = this.noticeModel.create({
      ...NoticeDTO,
    });

    return resumeRecord;
  }
}
