import express from "express";
const router = express.Router();
import upload from "express-fileupload";

router.get("", (req, resp) => {
  resp.sendFile(__dirname + "/index.html");
});

router.post("/", (req, res) => {
  console.log(req.files.file);
  if (req.files) {
    console.log(req.files);
    var file = req.files.file;
    var filename = file.name;
    console.log(filename);

    file.mv("../upload" + filename, function (err) {
      if (err) {
        res.send(err);
      } else {
        res.send("file uploaded");
      }
    });
  }
});
export default router;
