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

document.querySelectorAll("nav a[href]").forEach((anchor) => {
  anchor.addEventListener(
    "click",
    function (e) {
      const href = this.getAttribute("href");
      if (!href) return;

      let hash;
      try {
        hash = new URL(href, location.href).hash;
      } catch {
        const idx = href.indexOf("#");
        hash = idx >= 0 ? href.slice(idx) : "";
      }
      if (!hash) return;

      let linkUrl = null;
      try {
        linkUrl = new URL(href, location.href);
      } catch {}
      const sameDocument = linkUrl
        ? linkUrl.origin === location.origin &&
          linkUrl.pathname === location.pathname &&
          linkUrl.search === location.search
        : href.startsWith("#");

      if (sameDocument) {
        e.preventDefault();
        const id = decodeURIComponent(hash);
        const target = document.querySelector(id);
        if (target) {
          const OFFSET = 80;
          const top =
            window.pageYOffset + target.getBoundingClientRect().top - OFFSET;
          window.scrollTo({
            top: Math.max(0, Math.round(top)),
            behavior: "smooth",
          });
          if (history.pushState) history.pushState(null, "", hash);
          else location.hash = hash;
        }
      }
    },
    { passive: false },
  );
});
