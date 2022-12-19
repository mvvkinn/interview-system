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
      education: { type: DataTypes.JSON },
      certificate: { type: DataTypes.JSON },
      activity: { type: DataTypes.JSON },
      cover_letter: { type: DataTypes.TEXT },
      user_name: { type: DataTypes.STRING },
      user_birthdate: { type: DataTypes.STRING },
      user_phone: { type: DataTypes.STRING },
      user_email: { type: DataTypes.STRING },
      user_address: { type: DataTypes.STRING },
    },
    {
      tableName: "Resume",
      timestamps: true,
      charset: "utf8",
      collate: "utf8_general_ci",
    }
  );

  return resumeModel;
};
