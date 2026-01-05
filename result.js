// Get stored data
const ageGroup = localStorage.getItem("ageGroup");
const totalScore = Number(localStorage.getItem("totalScore"));

// Safety check
if (!ageGroup || !totalScore) {
  window.location.href = "age.html";
}

// Real age fallback (if not stored earlier)
const realAgeMap = {
  kid: 10,
  teen: 16,
  young: 22,
  adult: 35,
  legend: 55
};

const realAge =
  Number(localStorage.getItem("realAge")) || realAgeMap[ageGroup];

// Score normalization (5 questions, score 1–3)
const minScore = 5;
const maxScore = 15;

const scorePercent = (totalScore - minScore) / (maxScore - minScore);

// Mental age calculation
const mentalAge = Math.round(realAge - 6 + scorePercent * 20);

// Funny labels based on score
let maturityLevel = "";
let lifeStatus = "";
let brainMode = "";

if (scorePercent < 0.33) {
  maturityLevel = "Emotionally WiFi Disconnected";
  lifeStatus = "Living in vibes, not plans";
  brainMode = "Random Thoughts Lite";
} else if (scorePercent < 0.66) {
  maturityLevel = "Pretending to be responsible";
  lifeStatus = "Confused but confident";
  brainMode = "Overthinking Pro";
} else {
  maturityLevel = "Mentally Too Aware";
  lifeStatus = "Has plans but ignores them";
  brainMode = "Overthinking Pro Max";
}

// Render to DOM (IDs must exist in HTML)
document.getElementById("realAge").textContent = realAge;
document.getElementById("mentalAge").textContent = mentalAge;
document.getElementById("maturity").textContent = maturityLevel;
document.getElementById("lifeStatus").textContent = lifeStatus;
document.getElementById("brainMode").textContent = brainMode;

// Optional restart button
const restartBtn = document.getElementById("restartBtn");
if (restartBtn) {
  restartBtn.addEventListener("click", () => {
    localStorage.clear();
    window.location.href = "index.html";
  });
}
