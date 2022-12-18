import { Container } from "typedi";
import { ModelCtor, Sequelize } from "sequelize";
import { IScore } from "@interfaces/IScore";

export default class ScoreService {
  scoreModel: ModelCtor<any>;

  constructor() {
    const db: Sequelize = Container.get("db");
    this.scoreModel = db.models.Score;
  }

  public async created(ScoreDTO: IScore) {
    const scoreRecord = this.scoreModel.create({
      ...ScoreDTO,
    });
    return scoreRecord;
  }

  public async find(email: any, name: any, notice_title:any) {
    const findRecord = await this.scoreModel.findOne({
      where: {email: email, name: name, notice_title:notice_title},
    });
    return findRecord;
  }
}
