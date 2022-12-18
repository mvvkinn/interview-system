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
      question_one: { type: DataTypes.STRING },
      score_one: { type: DataTypes.INTEGER },
      question_two: { type: DataTypes.STRING },
      score_two: { type: DataTypes.INTEGER },
      question_three: { type: DataTypes.STRING },
      score_three: { type: DataTypes.INTEGER },
      add_question: { type: DataTypes.STRING },
      id: { type: DataTypes.INTEGER },
      name: { type: DataTypes.STRING },
      email: { type: DataTypes.STRING },
      notice_title : {type: DataTypes.STRING},
      success: {type: DataTypes.INTEGER},
    },
    { tableName: "Score", timestamps: false }
  );

  return scoreModel;
};
