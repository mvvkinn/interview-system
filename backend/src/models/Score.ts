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
            },
            criterion: { type: DataTypes.STRING, allowNull: false},
            question_one: { type: DataTypes.STRING, allowNull: false },
            anwer_one: { type: DataTypes.STRING },
            score_one: { type: DataTypes.INTEGER, allowNull: false },
            question_two: { type: DataTypes.STRING, allowNull: false },
            anwer_two: { type: DataTypes.STRING },
            score_two: { type: DataTypes.INTEGER, allowNull: false },
            question_three: { type: DataTypes.STRING, allowNull: false },
            anwer_three: { type: DataTypes.STRING },
            score_three: { type: DataTypes.INTEGER, allowNull: false },
            opinion: { type: DataTypes.STRING },
            id: {type:DataTypes.INTEGER},
        },
        {tableName:"Score", timestamps:false}
    );

    return scoreModel;
}