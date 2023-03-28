import "./vendor/jquery-3.6.4.min.js";
import { copyTexts, goToTop } from "./utils.js";
import { visualizeImg } from "./handleImages.js";

window.addEventListener("load", () => {
  copyTexts();
  goToTop();
  visualizeImg();
  $("#header").load("../../partials/header.html");
});
