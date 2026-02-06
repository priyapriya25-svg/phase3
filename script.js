const questions = [
  { q: "HTML stands for?", o: ["Hyper Text Markup Language", "High Text Machine Language", "Hyperlinks Text ML", "Home Tool Markup"], a: 0 },
  { q: "CSS is used for?", o: ["Logic", "Styling", "Database", "Server"], a: 1 },
  { q: "JS is called the?", o: ["Skeleton", "Clothes", "Brain", "Design"], a: 2 },
  { q: "Which tag is used for JavaScript?", o: ["js tag", "javascript tag", "script tag", "code tag"], a: 2 },
  { q: "DOM stands for?", o: ["Data Object Model", "Document Object Model", "Design Object Mode", "None"], a: 1 },
  { q: "Which symbol means equal value & type?", o: ["=", "==", "===", "!="], a: 2 },
  { q: "Which is a loop?", o: ["if", "for", "alert", "prompt"], a: 1 },
  { q: "Which is NOT JS datatype?", o: ["String", "Boolean", "Float", "Number"], a: 2 },
  { q: "console.log is used for?", o: ["Design", "Output", "Styling", "Navigation"], a: 1 },
  { q: "JS runs in?", o: ["Browser", "Compiler", "Database", "CPU"], a: 0 }
];


let index = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const resultEl = document.getElementById("result");

loadQuestion();

function loadQuestion() {
  resultEl.innerText = "";
  optionsEl.innerHTML = "";

  questionEl.innerText = `Q${index + 1}. ${questions[index].q}`;

  questions[index].o.forEach((opt, i) => {
    optionsEl.innerHTML += `
      <div class="option">
        <input type="radio" name="option" value="${i}" onclick="checkAnswer(${i})">
        ${opt}
      </div>
    `;
  });
}

function checkAnswer(selected) {
  if (selected === questions[index].a) {
    resultEl.innerText = "✅ Correct Answer!";
    resultEl.style.color = "green";
    score++;
  } else {
    resultEl.innerText = "❌ Wrong Answer!";
    resultEl.style.color = "red";
  }
}

function nextQuestion() {
  index++;

  if (index < questions.length) {
    loadQuestion();
  } else {
    alert(`🎉 Quiz Finished!\nYour Score: ${score}/${questions.length}`);
    window.location.href = "index.html";
  }
}
