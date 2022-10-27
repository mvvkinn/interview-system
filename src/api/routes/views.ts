import { Router } from "express";

const route = Router();

export default (app: Router) => {
  app.use(route);

  app.get("/", (req, res) => {
    res.render("index.ejs");
  });

  app.get("/signupPage", (req, res) => {
    res.render("signup.ejs");
  });
};
