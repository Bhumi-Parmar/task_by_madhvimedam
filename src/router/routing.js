import express from "express";
import students from "../students/std.services";
import fileupload from "../fileUpload";
import uploadMultImg from "../uploadMultImg";
import stdservice from "../students/std.services";
import stdcontroler from "../students/std.controller";

var router = express.Router();

router.get("/", (req, resp) => {
  resp.json({ message: "api is working" });
});
router.get("/ejs", (req, res, next) => {
  res.render("index.ejs");
});
router.get("/pug", (req, res, next) => {
  res.render("index", {
    title: "express pug",
    message: "express template",
  });
});
router.get("/hbs", (req, res, next) => {
  res.render("index.hbs");
});

router.use("/fileupload", fileupload);
router.use("/uploadMultImg", uploadMultImg);
router.get("/students", students.getData);
router.post("/students", students.postData);
router.put("/students/:userId", students.putData);
router.delete("/students/:userId", students.delData);

export default router;
