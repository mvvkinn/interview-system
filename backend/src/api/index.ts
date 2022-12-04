import { Router } from "express";
import auth from "./routes/auth";
import test from "./routes/test";
import views from "./routes/views";
import qrcode from "./routes/qrcode";

export default () => {
  const app = Router();

  test(app);
  views(app);
  auth(app);
  qrcode(app);

  return app;
};
