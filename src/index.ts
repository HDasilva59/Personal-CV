/* eslint-disable prettier/prettier */
import express from "express";
import nunjucks from "nunjucks";

const app = express();

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

app.use(express.static("public"));

app.set("view engine", "njk");

app.get("/", (request, response) => {
  response.render("home-page");
});

app.get("/:page", (request, response) => {
  const pages = ["about-me", "portfolio", "home-page"];
  const routeParameters = request.params;
  const findPage = pages.find((page) => page === routeParameters.page);
  if(findPage){
    response.render(request.params.page)
  } else {
    response.status(404).render("Error404", { error: "Page not found" });
  }
});

app.listen(2500, () => {
  console.log("http://localhost:2500");
});
