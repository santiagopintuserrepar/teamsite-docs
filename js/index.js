import "./vendor/jquery-3.6.4.min.js";
import { copyTexts, goToTop } from "./utils.js";
import { visualizeImg } from "./handleImages.js";

const main = () => {
  console.log("Index Loaded");
  copyTexts();
  goToTop();
  visualizeImg();
  $("#header").load("../../partials/header.html");
};

$(() => {
  main();
});
