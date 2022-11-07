import { Router } from "express";

const route = Router();

export default (app: Router) => {
  app.get("/", (req, res, next) => {
    res.render("index");
  });
};
