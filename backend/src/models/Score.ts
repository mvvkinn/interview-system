import { DataTypes, Sequelize } from "sequelize";

export default (db: Sequelize) => {
  const scoreModel = db.define(
    "Score",
    {
      score_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
      },
      attitude: { type: DataTypes.STRING },
      attitude_opinion: { type: DataTypes.STRING },
      communication_skills: { type: DataTypes.STRING },
      communication_skills_opinion: { type: DataTypes.STRING },
      logical: { type: DataTypes.STRING },
      logical_opinion: { type: DataTypes.STRING },
      reliability: { type: DataTypes.STRING },
      reliability_opinion: { type: DataTypes.STRING },
      judgment: { type: DataTypes.STRING },
      judgment_opinion: { type: DataTypes.STRING },
      leadership: { type: DataTypes.STRING },
      leadership_opinion: { type: DataTypes.STRING },
      business: { type: DataTypes.STRING },
      business_opinion: { type: DataTypes.STRING },
      opinion: { type: DataTypes.STRING },
      user_interview_number: { type: DataTypes.INTEGER },
      user_name: { type: DataTypes.STRING },
      interviewer_name: { type: DataTypes.STRING },
      notice_title: { type: DataTypes.STRING },
      successNumber: { type: DataTypes.INTEGER },
      isSuccess: { type: DataTypes.BOOLEAN },
    },
    { tableName: "Score", timestamps: false }
  );

  return scoreModel;
};
