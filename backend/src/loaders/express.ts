import express, { Request, Response, NextFunction } from "express";
import morgan from "morgan";
import { OpticMiddleware } from "@useoptic/express-middleware";
import routes from "@api";
import history from "connect-history-api-fallback";

export default (app: express.Application) => {
  app.get("/status", (req, res) => {
    res.status(200).end();
  });

  app.use(morgan("dev"));
  app.use(
    OpticMiddleware({
      enabled: process.env.NODE_ENV !== "production",
    })
  );
  app.disable("x-powered-by");
  app.use(history());

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(express.static(__dirname + "/../public"));
  app.use(express.static("uploads"));

  app.use(routes());

  app.use((req, res, next) => {
    const err: any = new Error("Not Found");
    err["status"] = 404;
    next(err);
  });

  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    res.status(err.status || 500);
    res.json({
      errors: {
        message: err.message,
      },
    });
  });
};
