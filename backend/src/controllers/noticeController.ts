import multer from "multer";
import fs from "fs";
import path from "path";

try {
  fs.readdirSync("uploads/notice");
} catch (err) {
  fs.mkdirSync("uploads/notice");
}

export const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/notice/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 10 * 1024 * 1024 }, // 5mb setting
});
