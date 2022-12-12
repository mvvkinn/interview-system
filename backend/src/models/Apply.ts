import { DataTypes, Sequelize } from "sequelize";
import Container from "typedi";

export default (db: Sequelize) => {
  const applyModel = db.define(
    "Apply",
    {
      interview_number: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
      },
      qrcode: { type: DataTypes.STRING },
      date: { type: DataTypes.INTEGER },
      user_name: { type: DataTypes.STRING },
      notice_title: { type: DataTypes.STRING },
      resume_id: { type: DataTypes.INTEGER },
    },
    { tableName: "Apply", timestamps: false }
  );

  return applyModel;
};
