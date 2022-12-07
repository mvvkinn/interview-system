import { DataTypes, Sequelize } from "sequelize";
import Container from "typedi";

export default (db: Sequelize) => {
    const scoreModel = db.define(
        "Score",
        {
            score_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                unique: true,
                autoIncrement: true,
                // validate: {
                //     notEmpty: true,
                // },
            },
            // criterion: { type: DataTypes.STRING},
            question_one: { type: DataTypes.STRING},
            // answer_one: { type: DataTypes.STRING},
            score_one: { type: DataTypes.INTEGER},
            question_two: { type: DataTypes.STRING},
            // answer_two: { type: DataTypes.STRING},
            score_two: { type: DataTypes.INTEGER},
            question_three: { type: DataTypes.STRING},
            // answer_three: { type: DataTypes.STRING},
            score_three: { type: DataTypes.INTEGER},
            // opinion: { type: DataTypes.STRING},
            id: {
                type:DataTypes.INTEGER,
                // references:{
                //     model: "User",
                //     key: 'id',
                // }   
            },
            name: {type:DataTypes.STRING},
            email: {type:DataTypes.STRING}
        },
        {tableName:"Score", timestamps:false}
    );

    return scoreModel;
}