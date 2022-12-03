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

    public async progress(email: IUser){
        const userID = this.userModel.findAll({
            attributes: ["id"],
            where: {email: email},
        });

        await this.scoreModel.create({
            ...email,
            UserID: userID,
        });
    }
}