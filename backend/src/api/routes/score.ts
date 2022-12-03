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
            const scoreId: IScore = req.body.score_id;
            // console.log(criterion);

            // const newUser = await db.User.create({
            // })

            // const exScore = await IUser.findOne({
            //     where: {
            //         id: req.body.id;
            //     }
            // })

            const ScoreServiceInstance = new ScoreService();
            // const result = await ScoreServiceInstance.progress(email);
            // const result = await ScoreServiceInstance.progress(id);
            const result = await ScoreServiceInstance.progress(id);

            // const result = await ScoreServiceInstance.progress(
                // req.body.id,
                // req.body.criterion
            //   );
              return res.json({id}).status(200);

            res.status(201).send(result);
        } catch(e) {
            logger.error(e);
            next(e);
        }
    });
};