import { DataTypes, Sequelize } from "sequelize";
import Container from "typedi";

export default (db: Sequelize) => {
  const noticeModel = db.define(
    "Notice",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
      },
      title: { type: DataTypes.STRING },
      content: { type: DataTypes.STRING },
      image: { type: DataTypes.STRING },
      start_recruit: { type: DataTypes.DATE },
      end_recruit: { type: DataTypes.DATE },
      number: { type: DataTypes.INTEGER },
    },
    { tableName: "Notice", timestamps: true }
  );

  return noticeModel;
};
