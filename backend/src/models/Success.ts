import { DataTypes, Sequelize } from "sequelize";
import Container from "typedi";

export default (db: Sequelize) => {
  const scoreModel = db.define(
    "Score",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
      },
      notice_title : {type: DataTypes.STRING},
      success: {type: DataTypes.INTEGER},
      date: {type:DataTypes.DATE},
      user_name: { type: DataTypes.STRING },
    },
    { tableName: "Score", timestamps: false }
  );

  return scoreModel;
};
