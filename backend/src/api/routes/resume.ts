import { Router, Request, Response, NextFunction } from "express";
import { IResume } from "@interfaces/IResume";
import ResumeService from "@services/ResumeService";
import Container from "typedi";
import { celebrate, Joi } from "celebrate";
import { Logger } from "winston";

const route = Router();

export default (app: Router) => {
  const logger: Logger = Container.get("logger");
  app.use("/interview", route);

  route.post("", async (req: Request, res: Response, next: NextFunction) => {
    try {
      const ResumeDTO: IResume = req.body;
      const email: string = req.body.email;

      const resumeServiceInstance = new ResumeService();
      const result = await resumeServiceInstance.RegistResume(ResumeDTO, email);

      res.status(201).send(result);
    } catch (e) {
      logger.error(e);
      next(e);
    }
  });
};
