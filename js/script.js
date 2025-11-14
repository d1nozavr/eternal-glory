document.addEventListener("DOMContentLoaded", () => {
  const splash = document.getElementById("splash");
  const enterBtn = document.getElementById("button-64");

  const KEY = "splashSeen";

  if (sessionStorage.getItem(KEY) === "true") {
    if (splash) {
      splash.style.display = "none";
    }
    return;
  }

  if (enterBtn) {
    enterBtn.addEventListener("click", () => {
      sessionStorage.setItem(KEY, "true");

      splash.classList.add("hidden");
      setTimeout(() => {
        splash.style.display = "none";
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 600);
    });
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Плавная анимация
  });
}
