import confetti from "https://cdn.skypack.dev/canvas-confetti";

confetti();
confetti();
confetti();
confetti();
confetti();
confetti();
confetti();
confetti();

window.addEventListener("click", () => {
  confetti();
});


document.querySelector(".confetti-button").addEventListener("click", (e) => {
  confetti();
  e.target.style.transform = "scale(1.5)";
  setTimeout(() => (e.target.style.transform = "scale(1)"), 100);
});
