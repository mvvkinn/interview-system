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
  public async find() {
    const findRecord = await this.noticeModel.findAll({
      order: [["id", "DESC"]],
    });
    return findRecord;
  }

  public async detail(id: string) {
    const findRecord = await this.noticeModel.findOne({
      where: {
        id: +id,
      },
    });
    return findRecord;
  }
}
