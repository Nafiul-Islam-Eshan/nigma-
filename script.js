const subtitles = [
    "Your age is just a number...",
    "But your brain age? 😏",
    "Let's check your mind! 🧠 ",
    "No judgment...maybe. 😆",
];

let index = 0;
const subtitleElement = document.getElementById("subtitle");

setInterval(() => {
    index = (index + 1) % subtitles.length;
    subtitleElement.textContent = subtitles[index];
}, 2500);

 