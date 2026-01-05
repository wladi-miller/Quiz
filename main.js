//Definition der Fragen und Antworten
const questionData = [
  {
    id: 1,
    question: "Was ist die Hauptstadt von Deutschland?",
    answers: [
      { id: "a", text: "Hamburg", isCorrect: false },
      { id: "b", text: "München", isCorrect: false },
      { id: "c", text: "Frankfurt", isCorrect: false },
      { id: "d", text: "Berlin", isCorrect: true },
    ],
  },
  {
    id: 2,
    question: "Welche Einwohnerzahl hat Deutschland?",
    answers: [
      { id: "a", text: "83 Millionen", isCorrect: true },
      { id: "b", text: "70 Millionen", isCorrect: false },
      { id: "c", text: "90 Millionen", isCorrect: false },
      { id: "d", text: "100 Millionen", isCorrect: false },
    ],
  },
  {
    id: 3,
    question: "Welcher Fluss fließt durch Berlin?",
    answers: [
      { id: "a", text: "Spree", isCorrect: true },
      { id: "b", text: "Elbe", isCorrect: false },
      { id: "c", text: "Rhein", isCorrect: false },
      { id: "d", text: "Donau", isCorrect: false },
    ],
  },
  {
    id: 4,
    question: "Welches dieser Autos stammt aus Deutschland?",
    answers: [
      { id: "a", text: "BMW", isCorrect: true },
      { id: "b", text: "Ford", isCorrect: false },
      { id: "c", text: "Toyota", isCorrect: false },
      { id: "d", text: "Volkswagen", isCorrect: false },
    ],
  },
];

// Initialisierung
let currentQuestion;
let currentQuestionPointer = -1;

// Frage Render Funktion
function renderQuenstion(question) {
  const questionDiv = document.createElement("div");
  questionDiv.id = question.id;
  questionDiv.classList.add("question");

  const questionTitle = document.createElement("div");
  questionTitle.classList.add("question-title");

  questionTitle.appendChild(document.createTextNode(question.question));

  const questionAnswers = document.createElement("div");
  questionAnswers.classList.add("quiz-button");

  // Antworten hinzufügen
  question.answers.forEach((answer) => {
    const answerDiv = document.createElement("button");
    answerDiv.classList.add("AnwBtn");
    answerDiv.appendChild(document.createTextNode(answer.text));
    answerDiv.onclick = () => answerQuestion(answer);
    questionAnswers.appendChild(answerDiv);
  });
  questionDiv.appendChild(questionTitle);
  questionDiv.appendChild(questionAnswers);

  document.getElementById("display-question").appendChild(questionDiv);
}
// Next Logik
function nextQuestion() {
  if (currentQuestion) {
    document.getElementById(String(currentQuestion.id)).remove();
  }
  if (currentQuestionPointer + 1 <= questionData.length) {
    currentQuestionPointer++;
    currentQuestion = questionData[currentQuestionPointer];
  } else {
    currentQuestionPointer = 0;
    currentQuestion = questionData[currentQuestionPointer];
  }
  renderQuenstion(currentQuestion);
}

//Frage beantworten Funktion
function answerQuestion(answer) {
  if (answer.isCorrect) {
    alert("Richtige Antwort!");
    //Button grün färben
    const buttons = document.querySelectorAll(".AnwBtn");
    buttons.forEach((button) => {
      if (button.textContent === answer.text) {
        button.style.backgroundColor = "green";
      }
    });
  } else {
    alert("Falsche Antwort");
    //Button rot färben
    const buttons = document.querySelectorAll(".AnwBtn");
    buttons.forEach((button) => {
      if (button.textContent === answer.text) {
        button.style.backgroundColor = "red";
        //Richtige Antwort grün färben
        questionData[currentQuestionPointer].answers.forEach((ans) => {
          if (ans.isCorrect) {
            buttons.forEach((btn) => {
              if (btn.textContent === ans.text) {
                btn.style.backgroundColor = "green";
              }
            });
          }
        });
      }
    });
  }
}

// Lösung anzeigen Funktion
function Solution() {
  //Richtige Antwort grün färben
  const buttons = document.querySelectorAll(".AnwBtn");
  questionData[currentQuestionPointer].answers.forEach((ans) => {
    if (ans.isCorrect) {
      buttons.forEach((btn) => {
        if (btn.textContent === ans.text) {
          btn.style.backgroundColor = "green";
        }
      });
    }
  });
}

// Quiz Ende Funktion
