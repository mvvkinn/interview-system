import { Router, Request, Response, NextFunction } from "express";
import { IScore } from "@interfaces/IScore";
import ScoreService from "@services/ScoreService";
import Container from "typedi";
import { Logger } from "winston";
import { ModelCtor } from "sequelize";

const route = Router();

export default (app: Router) => {
  const logger: Logger = Container.get("logger");

  app.use("/score", route);

  route.get("/read", async (req, res, next) => {
    try {
      const scoreServiceInstance = new ScoreService();
      const result = await scoreServiceInstance.find(req.query);
      res.status(201).json(result);
    } catch (e) {
      logger.error(e);
      next(e);
    }
  });

  route.post("", async (req: Request, res: Response, next: NextFunction) => {
    try {
      const ScoreDTO: IScore = req.body;
      const scoreServiceInstance = new ScoreService();
      const result = await scoreServiceInstance.created(ScoreDTO);
      res.status(201).send(result);
    } catch (e) {
      logger.error(e);
      next(e);
    }
  });
};
