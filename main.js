//Definition der Fragen und Antworten
const questionData = [
  {
    id: 1,
    question: "Was ist die Hauptstadt von Deutschland?",
    answers: [
      { id: "a", text: "Berlin", isCorrect: true },
      { id: "b", text: "München", isCorrect: false },
      { id: "c", text: "Frankfurt", isCorrect: false },
      { id: "d", text: "Hamburg", isCorrect: false },
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

let ArrayCounter = 0;
var questionDiv;
var questionTitle;
var questionAnswers;

// Frage Render Funktion
function renderQuenstion(question) {
  questionDiv = document.createElement("div");
  questionDiv.classList.add("question");

  questionTitle = document.createElement("div");
  questionTitle.classList.add("question-title");

  questionTitle.appendChild(document.createTextNode(question.question));

  questionAnswers = document.createElement("div");
  questionAnswers.classList.add("quiz-button");

  // Antworten hinzufügen
  question.answers.forEach((answer) => {
    const answerDiv = document.createElement("button");
    answerDiv.classList.add("AnwBtn");
    answerDiv.appendChild(document.createTextNode(answer.text));
    questionAnswers.appendChild(answerDiv);
  });
  /*   questionDiv.appendChild(questionTitle);
  questionDiv.appendChild(questionAnswers);*/

  document.getElementById("display-question").innerHTML = "";
}
// Next Logik
function nextQuestion() {
  if (currentQuestionPointer + 1 <= questionData.length) {
    currentQuestionPointer++;
    currentQuestion = questions[currentQuestionPointer];
  } else {
    currentQuestionPointer = 0;
    currentQuestion = questions[currentQuestionPointer];
  }
  renderQuenstion(currentQuestion);
}

//Frage beantworten Funktion

// Lösung anzeigen Funktion

// Quiz Ende Funktion
