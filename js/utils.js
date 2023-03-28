export const copyTexts = () => {
  const btns = document.querySelectorAll(".copy-this");

  btns.forEach((btn) => {
    /* Behavior when copy success or fails */
    const onCopy = (success = true) => {
      /* ON REJECTED */
      btn.classList.toggle("btn-secondary");
      btn.classList.toggle(success ? "btn-success" : "btn-danger");
      btn.innerText = success ? "Copiado" : "Error";
      setTimeout(() => {
        btn.classList.toggle("btn-secondary");
        btn.classList.toggle(success ? "btn-success" : "btn-danger");
        btn.innerText = "Copiar";
      }, 3000);
    };

    let id = btn.getAttribute("data-id");
    btn.addEventListener("click", (e) => {
      let textToCopy = document.getElementById(id).innerText;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(textToCopy).then(
          () => {
            /* ON SUCCESS */
            onCopy();
          },
          () => {
            onCopy(false);
          }
        );
      } else {
        onCopy(false);
      }
    });
  });
};

export const goToTop = () => {
  const scrollBtn = document.getElementById("scrollTopBtn");
  if (!scrollBtn) return;

  /* Show btn only when scroll is bigger than 400 */
  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 400 ? "block" : "none";
  });
  scrollBtn.onclick = () => {
    window.scrollTo(0, 0);
  };
};
