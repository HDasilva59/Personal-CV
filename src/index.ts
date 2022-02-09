/* eslint-disable prettier/prettier */
import express from "express";
import nunjucks from "nunjucks";

const app = express();

app.use(express.static("public"));

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

app.set("view engine", "njk");

app.get("/", (request, response) => {
  response.send("home-page");
});

app.listen(2500, () => {
  console.log("http://localhost:2500");
});
