import "./vendor/jquery-3.6.4.min.js";
import { copyTexts, goToTop } from "./utils.js";
import { visualizeImg } from "./handleImages.js";

const main = () => {
  console.log("Index Loaded");
  copyTexts();
  goToTop();
  visualizeImg();
  let homeRoute = "../partials/header.html";
  let pageRoute = "../../partials/header.html";
  let route;
  $("body").attr("data-url") === "/"
    ? (route = homeRoute)
    : (route = pageRoute);
  $("#header").load(route);
};

$(() => {
  main();
});
