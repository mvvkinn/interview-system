import { Router } from "express";
import apply from "./routes/apply";
import auth from "./routes/auth";
import score from "./routes/score";
import test from "./routes/test";
import views from "./routes/views";

export default () => {
  const app = Router();

  test(app);
  views(app);
  auth(app);
  score(app);
  apply(app);

  return app;
};
