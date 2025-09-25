// ---------------- Form Validation ----------------
const form = document.getElementById("contactForm");
form.addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (name === "") return alert("Enter your name.");
  if (email === "") return alert("Enter your email.");
  if (!email.match(emailPattern)) return alert("Enter a valid email.");
  alert("Form submitted successfully!");
  form.reset();
});

// ---------------- Alert Button ----------------
document.getElementById("alertButton")
  .addEventListener("click", () => alert("🎉 You clicked the button!"));

// ---------------- To-Do List ----------------
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return alert("Enter a task!");
  const li = document.createElement("li");
  li.textContent = taskText;

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.addEventListener("click", () => taskList.removeChild(li));

  li.appendChild(delBtn);
  taskList.appendChild(li);
  taskInput.value = "";
});

// ---------------- Quiz Section ----------------
const quizData = [
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "CSS", "JavaScript", "Python"],
    correct: "CSS"
  },
  {
    question: "Which tag is used for the largest heading in HTML?",
    options: ["<h6>", "<h3>", "<h1>", "<p>"],
    correct: "<h1>"
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["//", "/* */", "#", "<!-- -->"],
    correct: "//"
  }
];

const quizContainer = document.getElementById("quizContainer");
const submitQuiz = document.getElementById("submitQuiz");
const quizResult = document.getElementById("quizResult");

function loadQuiz() {
  quizData.forEach((q, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.innerHTML = `<p><b>${index + 1}. ${q.question}</b></p>`;
    q.options.forEach(option => {
      const label = document.createElement("label");
      label.innerHTML = `
        <input type="radio" name="q${index}" value="${option}">
        ${option}
      `;
      questionDiv.appendChild(label);
    });
    quizContainer.appendChild(questionDiv);
  });
}
loadQuiz();

submitQuiz.addEventListener("click", () => {
  let score = 0;
  quizData.forEach((q, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    if (selected && selected.value === q.correct) {
      score++;
    }
  });
  quizResult.textContent = `You scored ${score} out of ${quizData.length}! 🎯`;
});

// ---------------- Joke API ----------------
const jokeBtn = document.getElementById("jokeBtn");
const jokeText = document.getElementById("jokeText");

jokeBtn.addEventListener("click", () => {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response => response.json())
    .then(data => {
      jokeText.textContent = `${data.setup} 😂 ${data.punchline}`;
    })
    .catch(err => {
      jokeText.textContent = "⚠️ Couldn't fetch a joke right now!";
      console.error(err);
    });
});
