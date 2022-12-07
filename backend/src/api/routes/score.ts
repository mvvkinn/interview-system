import { Router, Request, Response, NextFunction } from "express";
// import { IUser } from "@interfaces/IUser";
import { IScore } from "@interfaces/IScore";
import ScoreService from "@services/ScoreService";
import Container from "typedi";
import { Logger } from "winston";
import { ModelCtor } from "sequelize";

const route = Router();

export default (app: Router) => {
    const logger: Logger = Container.get("logger");

    app.use("/score", route);

    route.post("/read",async (req, res, next)=> {
        // const id = req.params;
        try{
            const scoreServiceInstance = new ScoreService();
            const result = await scoreServiceInstance.find(req.body.id);
                // console.log(result);
                // console.log(req.params);
                // logger.info(`${req}`);
                res.status(201).json(result);
        } catch(e){
            logger.error(e);
            next(e);
        }
    });

    route.post("/test",async (req: Request, res: Response, next: NextFunction) => {
        try {
            const ScoreDTO: IScore = req.body;

            const scoreServiceInstance = new ScoreService();
            const result = await scoreServiceInstance.created(ScoreDTO);
                console.log(result);
                logger.info('post는 뜨나 확인');
                res.status(201).send(result);
            
        } catch(e) {
            logger.error(e);
            next(e);
        }
    });
};
