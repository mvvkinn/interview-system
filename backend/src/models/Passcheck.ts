import { DataTypes, Sequelize } from "sequelize";
import Container from "typedi";

export default (db: Sequelize) => {
  const passcheckModel = db.define(
    "Passcheck",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
      },
      email: { type: DataTypes.STRING },
      resume_title: { type: DataTypes.STRING },
      sum: { type: DataTypes.INTEGER },
      pass: { type: DataTypes.BOOLEAN },
    },
    { tableName: "Passcheck", timestamps: false }
  );

  return passcheckModel;
};
