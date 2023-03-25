window.addEventListener("scroll", () => {
  if (window.pageYOffset > 150) {
    document.getElementById("navbar").classList.add("hide");
  } else {
    document.getElementById("navbar").classList.remove("hide");
  }
});
