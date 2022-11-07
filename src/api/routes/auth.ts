import { Router, Request, Response, NextFunction } from "express";
import { IUser } from "@interfaces/IUser";
import AuthService from "@services/AuthService";
import Container from "typedi";
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

        const { user, token } = await authServiceInstance.SignIn(
          req.body.username,
          req.body.password
        );
        return res.json({ user, token }).status(200);
      } catch (e) {
        logger.error(e);
        next(e);
      }
    }
  );
};
