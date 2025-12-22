(function () {
  const year = document.getElementById("year");
  const updated = document.getElementById("updated");
  if (year) year.textContent = String(new Date().getFullYear());
  if (updated) updated.textContent = new Date().toISOString().slice(0, 10);

  const btn = document.querySelector(".menu");
  const mobile = document.getElementById("mobileNav");
  if (!btn || !mobile) return;

  btn.addEventListener("click", () => {
    const isHidden = mobile.hasAttribute("hidden");
    if (isHidden) mobile.removeAttribute("hidden");
    else mobile.setAttribute("hidden", "");
    btn.setAttribute("aria-expanded", String(isHidden));
  });

  mobile.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      mobile.setAttribute("hidden", "");
      btn.setAttribute("aria-expanded", "false");
    });
  });
})();