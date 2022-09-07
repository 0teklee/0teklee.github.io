const progressBar = () => {
  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.getElementsByClassName(
    "progressHeader"
  )[0].style.width = `${scrolled}%`;
};

window.onscroll = () => {
  progressBar();
};

const footerButton = document.getElementsByClassName("top")[0];

footerButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
