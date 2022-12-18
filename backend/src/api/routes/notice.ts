import { Router, Request, Response, NextFunction } from "express";
import { INotice } from "@interfaces/INotice";
import NoticeService from "@services/NoticeService";
import Container from "typedi";
import { celebrate, Joi } from "celebrate";
import { Logger } from "winston";

const route = Router();

export default (app: Router) => {
  const logger: Logger = Container.get("logger");
  app.use("/notice", route);

  route.post("", async (req: Request, res: Response, next: NextFunction) => {
    try {
      const NoticeDTO: INotice = req.body;

      const noticeServiceInstance = new NoticeService();
      const result = await noticeServiceInstance.RegistNotice(NoticeDTO);

      res.status(201).send(result);
    } catch (e) {
      logger.error(e);
      next(e);
    }
  });

  route.get("/read", async (req, res, next) => {
    try {
      const noticeServiceInstance = new NoticeService();
      const result = await noticeServiceInstance.find();
      res.status(201).json(result);
    } catch (e) {
      logger.error(e);
      next(e);
    }
  });
};
