import { DataTypes, Sequelize } from "sequelize";
import Container from "typedi";

export default (db: Sequelize) => {
  const certificateModel = db.define(
    "Certificate",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
      },
      acquisition_date: { type: DataTypes.STRING },
      certificate: { type: DataTypes.STRING },
      rating: { type: DataTypes.STRING },
      issuer: { type: DataTypes.STRING },
      user_email: { type: DataTypes.STRING },
      resume_title: { type: DataTypes.STRING },
    },
    { tableName: "Certificate", timestamps: false }
  );

  return certificateModel;
};
