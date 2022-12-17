import { DataTypes, Sequelize } from "sequelize";
import Container from "typedi";

export default (db: Sequelize) => {
  const educationModel = db.define(
    "Education",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
      },
      period: { type: DataTypes.STRING },
      school: { type: DataTypes.STRING },
      major: { type: DataTypes.STRING },
      user_email: { type: DataTypes.STRING },
      resume_title: { type: DataTypes.STRING },
    },
    { tableName: "Education", timestamps: false }
  );

  return educationModel;
};
