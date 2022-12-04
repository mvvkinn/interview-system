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
            console.log(req.body);
            
            const id: IUser = req.body.id;
            const criterion: IScore = req.body.criterion;

            const ScoreServiceInstance = new ScoreService();
            const result = await ScoreServiceInstance.progress(id);

              return res.json({id}).status(200);

            res.status(201).send(result);
        } catch(e) {
            logger.error(e);
            next(e);
        }
    });
};