import express from "express";
import config from "@config";
import loaders from "@loaders";
import Container from "typedi";
import { Logger } from "winston";
import { createServer } from "http";

async function startServer() {
  const app = express();
  const httpServer = createServer(app);
  await loaders(app, httpServer);

  const logger: Logger = Container.get("logger");

  httpServer.listen(config.port, () => {
    logger.info(`Server running on http://localhost:${config.port}`);
  });
}

startServer();
