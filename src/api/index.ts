import { Router } from "express";
import auth from "./routes/auth";
import test from "./routes/test";
import views from "./routes/views";

export default () => {
  const app = Router();

  test(app);
  views(app);
  auth(app);

  return app;
};
