import { Container } from "typedi";
import { ModelCtor, Sequelize } from "sequelize";
import { IScore } from "@interfaces/IScore";
import { IUser, IUserSignInDTO } from "@interfaces/IUser";

export default class ScoreService {
    scoreModel: ModelCtor<any>;
    userModel: ModelCtor<any>;

    constructor(){
        const db: Sequelize = Container.get("db");
        this.scoreModel = db.models.Score;
        this.userModel = db.models.User;
    }

    public async progress(id: IUser){
        const userID = await this.userModel.findAll({
            attributes: ["id"],
            where: {id: id},
        });

        await this.scoreModel.create({
            ...id,
            user_id: userID,
        });
    }
}