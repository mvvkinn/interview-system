import { Router, Request, Response, NextFunction } from "express";
import { IUser } from "@interfaces/IUser";
import { IScore } from "@interfaces/IScore";
import ScoreService from "@services/ScoreService";
import Container from "typedi";
import { Logger } from "winston";
import { ModelCtor } from "sequelize";

const route = Router();

export default (app: Router) => {
    const logger: Logger = Container.get("logger");
    const ScoreServiceInstance = new ScoreService();

    app.use("/score", route);

    route.get("",(req:Request, res:Response, next:NextFunction)=> {
    });

    route.post("",async (req: Request, res: Response, next: NextFunction) => {
        try {
            
            const id: IUser = req.body.id;
            const name: IUser = req.body.name;

            const ScoreServiceInstance = new ScoreService();
            const result = await ScoreServiceInstance.progress(id,name);

            res.status(201).send(result);
        } catch(e) {
            logger.error(e);
            next(e);
        }
    });
};