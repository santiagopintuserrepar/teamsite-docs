import { copyTexts, goToTop } from "./utils.js";
import { visualizeImg } from "./handleImages.js";

window.addEventListener("load", () => {
  copyTexts();
  goToTop();
  visualizeImg();
});
