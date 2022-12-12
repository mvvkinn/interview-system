import dotenv from "dotenv";

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || "development";

const envFound = dotenv.config();
if (envFound.error) {
  // This error should crash whole process

  throw new Error("Couldn't find src/.env");
}
export default {
  db:
    process.env.NODE_ENV == "development"
      ? (process.env.INTERVIEW_DEVDB as string)
      : (process.env.INTERVIEW_DB as string),
  port: process.env.PORT,

  jwtSecret: process.env.JWT_SECRET as string,
  jwtAlgorithm: process.env.JWT_ALGO as any,

  logs: {
    level: process.env.LOG_LEVEL || "silly",
  },
};
