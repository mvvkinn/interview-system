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
  route.get("", (req: Request, res: Response, next: NextFunction) => {});

  //Create new Apply
  route.post("", async (req: Request, res: Response, next: NextFunction) => {
    try {
      const email: IUser = req.body.email;
      const name: IUser = req.body.name;
      const id: IUser = req.body.id;
      const title: IApply = req.body.title;

      const applyServiceInstance = new ApplyService();
      const result = await applyServiceInstance.create(email, name, id, title);

      res.status(201).send(result);
    } catch (e) {
      logger.error(e);
      next(e);
    }
  });
};
