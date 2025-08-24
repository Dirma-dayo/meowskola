const phrases = [
  "i saw what you downloaded last summer",
  "click here to claim your 10MB of FREE RAM",
  "hidup.... HIDUP MAHASISWA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
  "would u like to install clippy? (not a virus)",
  "ur computer needs more glitter click here!",
  "im watching you type",
  "hi im definitely not spyware click me for infinite funsies",
];

export default function runBonzi(container) {
  if (!container) return;

  const bonzi = container.querySelector("#bonzi");
  const speech = container.querySelector("#bonzi-speech");

  if (bonzi) {
    bonzi.addEventListener("click", () => {
      window.open("https://vx-underground.org/", "_blank");
    });
  }

  if (speech) {
    setInterval(() => {
      speech.textContent = phrases[Math.floor(Math.random() * phrases.length)];
    }, 5000);
  }
}
