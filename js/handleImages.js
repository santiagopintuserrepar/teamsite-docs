export const visualizeImg = () => {
  document.querySelectorAll("img").forEach((img) => {
    const overlay = createOverlay();
    img.addEventListener("click", () => {
      toggleImage(img, overlay);
    });
    overlay.addEventListener("click", () => {
      toggleImage(img, overlay);
    });
  });
};

const createOverlay = () => {
  /* Create overlay */
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  /* Create BTN */
  // const closeBtn = document.createElement("span");
  // closeBtn.innerHTML = '<i class="fa-solid fa-x"></i>';
  // closeBtn.classList.add("close-btn");
  // overlay.appendChild(closeBtn);
  /* APPEND TO BODY */
  document.body.appendChild(overlay);
  return overlay;
};

const toggleImage = (img, overlay) => {
  //Adds active class if adds fullscreen from image, else remove active class.
  overlay.classList.toggle("active", img.classList.toggle("fullscreen"));
};
