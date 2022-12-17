import { Router, Request, Response, NextFunction } from "express";
import { IResume, IEducation } from "@interfaces/IResume";
import ResumeService from "@services/ResumeService";
import Container from "typedi";
import { celebrate, Joi } from "celebrate";
import { Logger } from "winston";
import { upload } from "@controllers/resumeController";

const route = Router();

export default (app: Router) => {
  const logger: Logger = Container.get("logger");
  app.use("/interview", route);

  route.post("", async (req: Request, res: Response, next: NextFunction) => {
    try {
      const ResumeDTO: IResume = req.body;
      const email: string = req.body.user_email;

      const resumeServiceInstance = new ResumeService();
      const result = await resumeServiceInstance.RegistResume(ResumeDTO, email);

      res.status(201).send(result);
    } catch (e) {
      logger.error(e);
      next(e);
    }
  });

  route.post(
    "/upload",
    upload.single("image"),
    async (req: Request, res: Response, next: NextFunction) => {
      console.log(req.file?.path);

      res.send(req.file?.path);
    }
  );

  route.post(
    "/education",
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const EducationDTO: IEducation = req.body;
        const email: string = req.body.user_email;
        const id: string = req.body.resume_id;

        const resumeServiceInstance = new ResumeService();
        const result = await resumeServiceInstance.RegistEducation(
          EducationDTO,
          email,
          id
        );

        res.status(201).send(result);
      } catch (e) {
        logger.error(e);
        next(e);
      }
    }
  );
};
