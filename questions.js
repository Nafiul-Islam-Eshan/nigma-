const ageGroup = localStorage.getItem("ageGroup");


if (!ageGroup) {
  // Safety fallback
  window.location.href = "age.html";
}

// ===============================
// 1. GET SELECTED AGE GROUP
// ===============================

// ===============================
// 2. QUESTION BANK (5 PER GROUP)
// ===============================
const questionsData = {
  kid: [
    {
      q: "What do you do first after school?",
      options: [
        { text: "Homework 📚", score: 3 },
        { text: "Play games 🎮", score: 2 },
        { text: "Sleep 😴", score: 1 }
      ]
    },
    {
      q: "When someone takes your toy, you…",
      options: [
        { text: "Cry loudly 😭", score: 1 },
        { text: "Tell an adult 👩‍🏫", score: 2 },
        { text: "Plan revenge 😈", score: 3 }
      ]
    },
    {
      q: "Your favorite time of day?",
      options: [
        { text: "Morning ☀️", score: 1 },
        { text: "Evening 🌆", score: 2 },
        { text: "Midnight 🌙", score: 3 }
      ]
    },
    {
      q: "If you're bored, you…",
      options: [
        { text: "Annoy siblings 😝", score: 1 },
        { text: "Watch cartoons 📺", score: 2 },
        { text: "Create your own game 🧠", score: 3 }
      ]
    },
    {
      q: "What makes you happiest?",
      options: [
        { text: "Chocolate 🍫", score: 1 },
        { text: "Friends 🤝", score: 2 },
        { text: "Winning a game 🏆", score: 3 }
      ]
    }
  ],

  teen: [
    {
      q: "How often do you say 'bro'?",
      options: [
        { text: "Every sentence 😎", score: 1 },
        { text: "Sometimes 🙂", score: 2 },
        { text: "Never 😐", score: 3 }
      ]
    },
    {
      q: "Your sleep schedule is…",
      options: [
        { text: "Healthy 🛌", score: 3 },
        { text: "Irregular 😵", score: 2 },
        { text: "What is sleep? 📱", score: 1 }
      ]
    },
    {
      q: "Biggest stress right now?",
      options: [
        { text: "Exams 📖", score: 3 },
        { text: "Crush 😳", score: 2 },
        { text: "Low battery 🔋", score: 1 }
      ]
    },
    {
      q: "Parents say you are…",
      options: [
        { text: "Responsible 😇", score: 3 },
        { text: "Changing 😐", score: 2 },
        { text: "Always on phone 📱", score: 1 }
      ]
    },
    {
      q: "Free time means…",
      options: [
        { text: "Learning skills 🧠", score: 3 },
        { text: "Hanging out 🤝", score: 2 },
        { text: "Endless scrolling 😵‍💫", score: 1 }
      ]
    }
  ],

  young: [
    {
      q: "Your biggest fear right now?",
      options: [
        { text: "Career failure 😰", score: 3 },
        { text: "Marriage questions 💍", score: 2 },
        { text: "Low phone battery 🔋", score: 1 }
      ]
    },
    {
      q: "Your weekend plan?",
      options: [
        { text: "Upskill or work 📚", score: 3 },
        { text: "Netflix & chill 🍿", score: 2 },
        { text: "Overthink life 🤯", score: 1 }
      ]
    },
    {
      q: "Money situation?",
      options: [
        { text: "Saving 💰", score: 3 },
        { text: "Managing 😐", score: 2 },
        { text: "Living day by day 😭", score: 1 }
      ]
    },
    {
      q: "Your sleep time?",
      options: [
        { text: "Before 11 PM 🛌", score: 3 },
        { text: "After midnight 🌙", score: 2 },
        { text: "Sunrise 😵", score: 1 }
      ]
    },
    {
      q: "Life status?",
      options: [
        { text: "Focused 🎯", score: 3 },
        { text: "Confused 🤔", score: 2 },
        { text: "Surviving 😶", score: 1 }
      ]
    }
  ],

  adult: [
    {
      q: "What hurts when you wake up?",
      options: [
        { text: "Nothing 💪", score: 3 },
        { text: "Back 😖", score: 2 },
        { text: "Everything 😭", score: 1 }
      ]
    },
    {
      q: "Happiness means…",
      options: [
        { text: "Peace ☮️", score: 3 },
        { text: "Salary day 💰", score: 2 },
        { text: "Good sleep 🛌", score: 1 }
      ]
    },
    {
      q: "Free time is spent on…",
      options: [
        { text: "Family 👨‍👩‍👧", score: 3 },
        { text: "Rest 😌", score: 2 },
        { text: "Phone scrolling 📱", score: 1 }
      ]
    },
    {
      q: "Your energy level?",
      options: [
        { text: "High ⚡", score: 3 },
        { text: "Medium 😐", score: 2 },
        { text: "Low 🔋", score: 1 }
      ]
    },
    {
      q: "Your life goal now?",
      options: [
        { text: "Stability 🏡", score: 3 },
        { text: "Growth 📈", score: 2 },
        { text: "Peace & sleep 😴", score: 1 }
      ]
    }
  ],

  legend: [
    {
      q: "Your advice to youth?",
      options: [
        { text: "Enjoy life 😌", score: 3 },
        { text: "Study hard 📚", score: 2 },
        { text: "I’m tired 😴", score: 1 }
      ]
    },
    {
      q: "Your mornings start with…",
      options: [
        { text: "Peaceful tea ☕", score: 3 },
        { text: "News 📰", score: 2 },
        { text: "Back pain 😖", score: 1 }
      ]
    },
    {
      q: "What matters most now?",
      options: [
        { text: "Health ❤️", score: 3 },
        { text: "Family 👨‍👩‍👧", score: 2 },
        { text: "Comfort 😌", score: 1 }
      ]
    },
    {
      q: "Your reaction to new trends?",
      options: [
        { text: "Ignore 😐", score: 3 },
        { text: "Try once 🤔", score: 2 },
        { text: "What is this? 😵", score: 1 }
      ]
    },
    {
      q: "Free time means…",
      options: [
        { text: "Reflection 🧠", score: 3 },
        { text: "Rest 😌", score: 2 },
        { text: "Nothing 😴", score: 1 }
      ]
    }
  ]
};

// ===============================
// 3. QUIZ ENGINE (NO HTML CHANGE)
// ===============================
const questions = questionsData[ageGroup];
let currentIndex = 0;
let totalScore = 0;
let selectedScore = null;

const questionText = document.getElementById("questionText");
const optionsDiv = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {
  selectedScore = null;
  nextBtn.disabled = true;
  nextBtn.classList.remove("enabled");
  optionsDiv.innerHTML = "";

  const currentQuestion = questions[currentIndex];
  questionText.textContent = currentQuestion.q;

  currentQuestion.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt.text;

    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".options button")
        .forEach(b => b.classList.remove("selected"));

      btn.classList.add("selected");
      selectedScore = opt.score;
      nextBtn.disabled = false;
      nextBtn.classList.add("enabled");
    });

    optionsDiv.appendChild(btn);
  });
}

nextBtn.addEventListener("click", () => {
  if (selectedScore === null) return;

  totalScore += selectedScore;
  currentIndex++;

  if (currentIndex < questions.length) {
    loadQuestion();
  } else {
    localStorage.setItem("totalScore", totalScore);
    window.location.href = "result.html";
  }
});

// ===============================
// 4. INIT
// ===============================
loadQuestion();

