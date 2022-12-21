import { IUser } from "@interfaces/IUser";
import { IApply } from "@interfaces/IApply";
import ApplyService from "@services/ApplyService";
import { Router, Request, Response, NextFunction } from "express";
import { ModelCtor } from "sequelize";
import Container from "typedi";
import { Logger } from "winston";
import { IResume } from "@interfaces/IResume";
import { INotice } from "@interfaces/INotice";
import { IPasscheck } from "@interfaces/IPasscheck";

const route = Router();

export default (app: Router) => {
  const logger: Logger = Container.get("logger");
  const applyServiceInstance = new ApplyService();

  app.use("/passcheck", route);