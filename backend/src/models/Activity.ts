import { DataTypes, Sequelize } from "sequelize";
import Container from "typedi";

export default (db: Sequelize) => {
  const activityModel = db.define(
    "Activity",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
      },
      period: { type: DataTypes.STRING },
      gubun: { type: DataTypes.STRING },
      location: { type: DataTypes.STRING },
      content: { type: DataTypes.STRING },
      user_email: { type: DataTypes.STRING },
      resume_title: { type: DataTypes.STRING },
    },
    { tableName: "Activity", timestamps: false }
  );

  return activityModel;
};
