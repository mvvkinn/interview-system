process.env.NODE_ENV = process.env.NODE_ENV || "development";

export default {
  db:
    process.env.NODE_ENV == "development"
      ? (process.env.INTERVIEW_DEVDB as string)
      : (process.env.INTERVIEW_DB as string),
  port: 3000,

  jwtSecret: process.env.JWT_SECRET as string,
  jwtAlgorithm: process.env.JWT_ALGO as string,
};
