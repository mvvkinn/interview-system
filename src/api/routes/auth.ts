import { Router, Request, Response, NextFunction } from "express";
import { IUser } from "@interfaces/IUser";
import { User } from "@models/User";
import AuthService from "@services/AuthService";

const route = Router();

export default (app: Router) => {
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
        console.log("error", e);
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
        console.log(e);
        next(e);
      }
    }
  );
};
