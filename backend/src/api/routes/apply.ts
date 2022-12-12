import { IUser } from "@interfaces/IUser";
import { IApply } from "@interfaces/IApply";
import ApplyService from "@services/ApplyService";
import { Router, Request, Response, NextFunction } from "express";
import { ModelCtor } from "sequelize";
import Container from "typedi";
import { Logger } from "winston";

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
    "/applicant",
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const applyServiceInstance = new ApplyService();
        const result = await applyServiceInstance.findApplicant(
          req.query.intereview_number
        );
        res.status(201).json(result);
      } catch (e) {
        logger.error(e);
        next(e);
      }
    }
  );

  //Create new Apply
  route.post("", async (req: Request, res: Response, next: NextFunction) => {
    try {
      const email: IUser = req.body.email;
      const name: IUser = req.body.name;
      const id: IUser = req.body.id;
      const title_id: string = req.body.title_id;
      const title: string = req.body.title;

      const applyServiceInstance = new ApplyService();
      const result = await applyServiceInstance.create(
        email,
        name,
        id,
        title,
        title_id
      );

      res.status(201).send(result);
    } catch (e) {
      logger.error(e);
      next(e);
    }
  });
};
