import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import router from "./routers/router";

export const app = express();
const PORT = Bun.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(morgan("dev"));
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});