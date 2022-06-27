import express from "express";
import path from "path";
import router from "./router/routing";

const PORT = process.env.PORT || 7000;
const app = express();
app.use(router);

const middleware = (req, resp, next) => {
  console.log("hello middleware");
  next();
};

app.set("views", "./views");
app.set("view engine", "ejs");
app.set("view engine", "pug");
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));



app.use((error, req, res, next) => {
  console.log(error);
  if(res.status(error.status || 500))
  res.json({
    error:{
      throw :new BadRequestException("Something is missing"),
      message: error.meassage,
    }
  });
});

app.listen(PORT, () => {
  console.log(`connection is live at port no. :${PORT}`);
});
export default router;
