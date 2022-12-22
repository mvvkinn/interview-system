import { Container } from "typedi";
import { ModelCtor, Sequelize } from "sequelize";
import { IApply } from "@interfaces/IApply";
import { IUser, IUserSignInDTO } from "@interfaces/IUser";
import { IResume } from "@interfaces/IResume";
import { INotice } from "@interfaces/INotice";
import jwt from "jsonwebtoken";
import config from "@config";

export default class ApplyService {
  applyModel: ModelCtor<any>;
  userModel: ModelCtor<any>;
  noticeModel: any;
  resumeModel: ModelCtor<any>;
  constructor() {
    const db: Sequelize = Container.get("db");
    this.applyModel = db.models.Apply;
    this.userModel = db.models.User;
    this.noticeModel = db.models.Notice;
    this.resumeModel = db.models.Resume;
  }

  public async create(
    user_email: IApply,
    resume_id: IResume,
    notice_id: INotice
  ) {
    const userRecord = await this.userModel.findOne({
      where: { email: user_email },
    });
    const user_id = userRecord.dataValues.id;
    const user_name = userRecord.dataValues.name;

    const noticeRecord = await this.noticeModel.findOne({
      where: { id: notice_id },
    });
    const notice_title = noticeRecord.dataValues.title;

    const today = new Date();
    const year = today.getFullYear();

    const array = [year, notice_id, user_id];
    const interviewNumber = array.join("");

    return await this.applyModel.create({
      ...user_email,
      interview_number: interviewNumber,
      date: today,
      user_name: user_name,
      notice_title: notice_title,
      resume_id: resume_id,
      user_email: user_email,
    });
  }

  public async generateToken(infoDTO: any) {
    const accessToken = jwt.sign(
      {
        id: infoDTO.id,
        email: infoDTO.email,
        name: infoDTO.name,
        interview_number: infoDTO.interview_number,
      },
      config.jwtSecret,
      {
        subject: "userAuthQRCodeJwt",
        issuer: "server",
        expiresIn: "5m",
      }
    );

    return accessToken;
  }

  public matchToken(text: any) {
    const check = jwt.verify(text, config.jwtSecret);
    return check;
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

  public async findApplicant(applyDTO: any) {
    let record;
    if (applyDTO?.interview_number) {
      record = await this.applyModel.findOne({
        where: {
          interview_number: applyDTO?.interview_number,
        },
      });
    } else if (applyDTO?.resume_id) {
      record = await this.applyModel.findOne({
        where: {
          resume_id: applyDTO?.resume_id,
        },
      });
    } else if (applyDTO?.notice_title) {
      record = await this.applyModel.findOne({
        where: {
          notice_title: applyDTO?.notice_title,
          user_email: applyDTO?.email,
        },
      });
    } else if (applyDTO?.email) {
      record = await this.applyModel.findAll({
        where: {
          user_email: applyDTO?.email,
        },
      });
    }
    return record;
  }

  public async findInterviewList(notice_title: any) {
    const record = await this.applyModel.findAll({
      where: {
        notice_title: notice_title,
      },
    });
    return record;
  }
}
