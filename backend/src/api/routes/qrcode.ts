import express, { Request, Response, NextFunction } from "express";
import QRCode from "qrcode";
import path from "path";
import { Json } from "sequelize/types/utils";
import { Router } from "express";
import jwt from "jsonwebtoken";
import { Logger } from "winston";
import Container from "typedi";
import { stringify } from "querystring";
import { token } from "morgan";

const ACCESS_SECRET = "accesssecret";
const REFRESH_SECRET = "refreshsecret";
const app = express();
const route = Router();
let accessToken: any;

route.use(express.json());
route.use(express.urlencoded({ extended: true }));

export default (app: Router) => {
  const logger: Logger = Container.get("logger");
  app.use("/auth", route);
  route.post("/TokenIssued", async (req: Request, res: Response) => {
    try {
      const input_text = req.body;

      accessToken = jwt.sign(
        {
          id: input_text.id,
          username: input_text.username,
          password: input_text.password,
          email: input_text.email, //유저정보
        },
        ACCESS_SECRET, //기본키,비밀키가 들어갈 자리
        {
          subject: "userAuthJwt",
          expiresIn: "10m",
          issuer: "server",
          // audience: input_text.userAuthJwt,
        }
      );
      console.log("토큰생성", accessToken);

      //토큰 전송
      res.cookie("accessToken", accessToken, {
        secure: false,
        httpOnly: false,
      });
      res.status(200).json("tokenCatch");
    } catch (e) {
      res.status(500).json("error");
      logger.error(e);
    }
  });

  route.post("/QrIssued", (req: Request, res: Response, next: NextFunction) => {
    QRCode.toDataURL(accessToken, (err: any, src: string) => {
      console.log(src);
      res.sendFile(__dirname + "/views/home.html", {
        QRCode: src,
      });
      const data = src.replace(/.*,/, "");
      const img = Buffer.from(data, "base64");

      res.end(img);
    });
  });

  //토큰 일치 검사 api
  route.get(
    "/MatchCheck",
    (req: Request, res: Response, next: NextFunction) => {
      //const token = req.headers[accessToken] || req.query.token;
      //const pullToken = Buffer.from(req.body.text, "base64")
      try {
        const check = jwt.verify(req.body.text, ACCESS_SECRET);

        if (check) {
          console.log("확인 완료", check);
          //면접번호
          res.send("12041-51-5");
          next();
        }
      } catch (e) {
        logger.error(e);
      }
    }
  );
};
