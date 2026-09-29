const envelope = document.getElementById("openEnvelope");
const introScreen = document.getElementById("introScreen");
const siteContent = document.getElementById("siteContent");
const confettiContainer = document.getElementById("confettiContainer");

let hasOpened = false;

envelope.addEventListener("click", () => {
  if (hasOpened) return;
  hasOpened = true;

  // Open the envelope
  envelope.classList.add("open");

  // Launch colorful confetti
  createConfetti();

  // Reveal the birthday website after the animation
  setTimeout(() => {
    introScreen.classList.add("hide");
    siteContent.classList.add("show");
  }, 2200);

  // Remove the intro screen after its fade-out
  setTimeout(() => {
    introScreen.style.display = "none";
    confettiContainer.innerHTML = "";
  }, 3300);
});

function createConfetti() {
  const colors = [
    "#ffdf8e",
    "#ff8fab",
    "#c084fc",
    "#f9a8d4",
    "#ffffff",
    "#e879f9",
  ];

  for (let i = 0; i < 120; i++) {
    const piece = document.createElement("div");
    piece.classList.add("confetti");

    piece.style.left = Math.random() * 100 + "vw";
    piece.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];

    piece.style.animationDelay = Math.random() * 1.5 + "s";
    piece.style.animationDuration = 2 + Math.random() * 2 + "s";

    piece.style.width = 6 + Math.random() * 8 + "px";
    piece.style.height = 8 + Math.random() * 12 + "px";

    confettiContainer.appendChild(piece);
  }
}
