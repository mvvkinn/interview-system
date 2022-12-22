import { Container } from "typedi";
import { randomBytes } from "crypto";
// import argon2 from "argon2";
// import jwt from "jsonwebtoken";
import { IResume } from "@interfaces/IResume";
import config from "@config";
import { ModelCtor, Sequelize } from "sequelize";

export default class AuthService {
  userModel: ModelCtor<any>;
  resumeModel: ModelCtor<any>;

  constructor() {
    const db: Sequelize = Container.get("db");
    this.userModel = db.models.User;
    this.resumeModel = db.models.Resume;
  }

  public async RegistResume(ResumeDTO: IResume, email: string) {
    const userRecord = await this.userModel.findOne({
      where: { email: email },
    });
    const userDTO = userRecord.dataValues;
    const resumeRecord = this.resumeModel.create({
      ...ResumeDTO,
      user_name: userDTO.name,
      user_birthdate: userDTO.birthdate,
      user_phone: userDTO.phone,
      user_email: userDTO.email,
      user_address: userDTO.address,
    });

    return resumeRecord;
  }

  public async getResume(resumeDTO: any) {
    let resumeRecord;
    if (resumeDTO?.email) {
      resumeRecord = await this.resumeModel.findAll({
        where: { user_email: resumeDTO?.email },
      });
    } else if (resumeDTO?.id) {
      resumeRecord = await this.resumeModel.findAll({
        where: { id: resumeDTO?.id },
      });
    }

    return resumeRecord;
  }

  public async update(
    id: string,
    title: string,
    image: string,
    education: JSON,
    certificate: JSON,
    activity: JSON,
    cover_letter: Text
  ) {
    const updateRecord = await this.resumeModel.update(
      {
        title: title,
        image: image,
        education: education,
        certificate: certificate,
        activity: activity,
        cover_letter: cover_letter,
      },
      { where: { id: +id } }
    );
    return updateRecord;
  }

  public async deleteResume(id: string) {
    await this.resumeModel.destroy({
      where: { id: +id },
    });
  }
}
