import { IUser } from "@interfaces/IUser";
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
      console.log(req.body);
      const email: IUser = req.body.email;

      const applyServiceInstance = new ApplyService();
      const result = await applyServiceInstance.create(email);

      res.status(201).send(result);
    } catch (e) {
      logger.error(e);
      next(e);
    }
  });
};
