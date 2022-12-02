import { Container } from "typedi";
import { ModelCtor, Sequelize } from "sequelize";

export default class AuthService {
  applyModel: ModelCtor<any>;
  constructor() {
    const db: Sequelize = Container.get("db");
    this.applyModel = db.models.Apply;
  }

  public async create(record: object) {
    await this.applyModel.create({ ...record });
  }
}
