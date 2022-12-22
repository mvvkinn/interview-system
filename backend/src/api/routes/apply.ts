import { IUser } from "@interfaces/IUser";
import { IApply } from "@interfaces/IApply";
import ApplyService from "@services/ApplyService";
import { Router, Request, Response, NextFunction } from "express";
import { ModelCtor } from "sequelize";
import Container from "typedi";
import { Logger } from "winston";
import { IResume } from "@interfaces/IResume";
import { INotice } from "@interfaces/INotice";

const route = Router();

export default (app: Router) => {
  const logger: Logger = Container.get("logger");
  const applyServiceInstance = new ApplyService();

  app.use("/apply", route);

  //Read All
  route.get("/", async (req: Request, res: Response, next: NextFunction) => {
    try {
      const applyServiceInstance = new ApplyService();
      const result = await applyServiceInstance.findInterviewNumber(
        req.query.title,
        req.query.user_name
      );
      res.status(201).json(result);
    } catch (e) {
      logger.error(e);
      next(e);
    }
  });

  route.get(
    "/list",
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const applyServiceInstance = new ApplyService();
        const result = await applyServiceInstance.findInterviewList(
          req.query.title
        );
        res.status(201).json(result);
      } catch (e) {
        logger.error(e);
        next(e);
      }
    }
  );

  route.get(
    "/applicant",
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const applyServiceInstance = new ApplyService();
        const result = await applyServiceInstance.findApplicant(req.query);
        res.status(201).json(result);
      } catch (e) {
        logger.error(e);
        next(e);
      }
    }
  );

  route.get(
    "/token",
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const applyServiceInstance = new ApplyService();
        const result = await applyServiceInstance.generateToken(req.query);
        res.status(201).send(result);
      } catch (e) {
        logger.error(e);
        next(e);
      }
    }
  );

  //Create new Apply
  route.post("", async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user_email: IApply = req.body.user_email;
      const resume_id: IResume = req.body.resume_id;
      const notice_id: INotice = req.body.notice_id;

      const applyServiceInstance = new ApplyService();
      const result = await applyServiceInstance.create(
        user_email,
        resume_id,
        notice_id
      );

      res.status(201).send(result);
    } catch (e) {
      logger.error(e);
      next(e);
    }
  });

  //토큰 일치 검사 api
  route.post(
    "/MatchCheck",
    (req: Request, res: Response, next: NextFunction) => {
      //const TokenRequest = req.body.text;
      const tokenMatchApi = new ApplyService();
      //const interNum = tokenMatchApi.record;
      try {
        // const check = jwt.verify(req.body.text, config.jwtSecret);
        const check = tokenMatchApi.matchToken(req.body.text);

        if (check) {
          console.log("확인 완료", check);
          next();
          // const getToken = tokenMatchApi.tokenMatch(req.body.text);
          res.send("면접번호");
          // return res.json(getToken).status(200);
          //면접번호
        }
      } catch (e) {
        logger.error(e);
      }
    }
  );
};
