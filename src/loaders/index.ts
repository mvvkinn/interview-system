import expressLoader from "./express";
import { Application } from "express";

export default async (expressApp: Application) => {
  await expressLoader(expressApp);
  console.log("express loaded");
};
