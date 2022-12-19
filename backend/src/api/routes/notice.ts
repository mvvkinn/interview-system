import { Router, Request, Response, NextFunction } from "express";
import { INotice } from "@interfaces/INotice";
import NoticeService from "@services/NoticeService";
import Container from "typedi";
import { celebrate, Joi } from "celebrate";
import { Logger } from "winston";
import { upload } from "@controllers/noticeController";

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

  route.post(
    "/upload/notice",
    upload.single("image"),
    async (req: Request, res: Response, next: NextFunction) => {
      console.log(req.file?.path);

      res.send(req.file?.path);
    }
  );

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

  route.get("/read/:id", async (req, res, next) => {
    try {
      const noticeServiceInstance = new NoticeService();
      const result = await noticeServiceInstance.detail(req.params.id);
      res.status(201).json(result);
    } catch (e) {
      logger.error(e);
      next(e);
    }
  });
};
