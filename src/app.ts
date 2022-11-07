import express from "express";
import config from "@config";
import loaders from "@loaders";
import Container from "typedi";
import { Logger } from "winston";

async function startServer() {
  const app = express();
  await loaders(app);

  const logger: Logger = Container.get("logger");

  app.listen(config.port, () => {
    logger.info(`Server running on http://localhost:${config.port}`);
  });
}

startServer();
