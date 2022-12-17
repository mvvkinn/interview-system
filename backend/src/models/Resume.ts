import { DataTypes, Sequelize } from "sequelize";
import Container from "typedi";

export default (db: Sequelize) => {
  const resumeModel = db.define(
    "Resume",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
      },
      title: { type: DataTypes.STRING },
      image: { type: DataTypes.STRING },
      user_name: { type: DataTypes.STRING },
      user_birthdate: { type: DataTypes.DATE },
      user_phone: { type: DataTypes.STRING },
      user_email: { type: DataTypes.STRING },
      user_address: { type: DataTypes.STRING },
    },
    { tableName: "Resume", timestamps: true }
  );

  return resumeModel;
};
