import { DataTypes, Sequelize } from "sequelize";
import Container from "typedi";

export default (db: Sequelize) => {
  const applyModel = db.define(
    "Apply",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
      },
      user_name: { type: DataTypes.STRING },
      interview_number: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
      title: DataTypes.STRING,
      user_id: { type: DataTypes.INTEGER },
      token: { type: DataTypes.STRING },
    },
    { tableName: "Apply", timestamps: false }
  );

  return applyModel;
};
