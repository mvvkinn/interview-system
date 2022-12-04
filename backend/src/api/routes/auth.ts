import { Router, Request, Response, NextFunction } from "express";
import { IUser } from "@interfaces/IUser";
import AuthService from "@services/AuthService";
import Container from "typedi";
import { celebrate, Joi } from "celebrate";
import { Logger } from "winston";

const route = Router();

export default (app: Router) => {
  const logger: Logger = Container.get("logger");
  app.use("/auth", route);

  route.post(
    "/signup",
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        console.log(req.body);
        const UserDTO: IUser = req.body;

        const authServiceInstance = new AuthService();
        const result = await authServiceInstance.SignUp(UserDTO);

        res.status(201).send(result);
      } catch (e) {
        logger.error(e);
        next(e);
      }
    }
  );

  route.post(
    "/signin",
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const authServiceInstance = new AuthService();

        const { userDTO, token } = await authServiceInstance.SignIn(
          req.body.email,
          req.body.password
        );
        return res.json({ userDTO, token }).status(200);
      } catch (e: any) {
        console.log(e);
        logger.error(e);
        e.status = 401;
        next(e);
      }
    }
  );

  route.post("/emailDuplication", async (req, res, next) => {
    try {
      const authServiceInstance = new AuthService();

      const isDuplicate = await authServiceInstance.isEmailExist(
        req.body.email
      );

      return res.json({ emailDuplication: isDuplicate });
    } catch (e) {
      logger.error(e);
      next(e);
    }
  });
};
