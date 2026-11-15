const quizContainer = document.querySelector("#quiz-container");

let currentQuestion = 0;
let correctAnswers = 0;
let wrongAnswers = [];
let userName = "";

const questions = [
  {
    id: 1,
    question: "Är vatten vått?",
    answer: ["Ja", "Nej"],
    validAnswer: "Ja",
  },
  {
    id: 2,
    question: "Är himlen blå?",
    answer: ["Ja", "Nej"],
    validAnswer: "Ja",
  },
  {
    id: 3,
    question: "Är jorden platt?",
    answer: ["Ja", "Nej"],
    validAnswer: "Nej",
  },
  {
    id: 4,
    question: "Hur många ben har en spindel?",
    answer: ["Sex", "Åtta", "Tio"],
    validAnswer: "Åtta",
  },
  {
    id: 5,
    question: "Vilken färg får man om man blandar blått och gult?",
    answer: ["Lila", "Grön", "Brun", "Orange"],
    validAnswer: "Grön",
  },
  {
    id: 6,
    question: "Kan pingviner flyga?",
    answer: ["Ja", "Nej"],
    validAnswer: "Nej",
  },
  {
    id: 7,
    question: "Vad heter Sveriges huvudstad?",
    answer: ["Göteborg", "Malmö", "Stockholm", "Uppsala"],
    validAnswer: "Stockholm",
  },
  {
    id: 8,
    question: "Är solen en stjärna?",
    answer: ["Ja", "Nej"],
    validAnswer: "Ja",
  },
];

function renderStartScreen() {
  quizContainer.innerHTML = "";
  const welcome = document.createElement("h2");
  welcome.textContent = "Välkommen till Oskars quiz";
  welcome.className = "mb-4";
  const nameInput = document.createElement("input");
  nameInput.placeholder = "Skriv ditt namn här...";
  nameInput.className = "form-control form-control-lg mb-4 text-center";

  const startButton = document.createElement("button");
  startButton.textContent = "Starta Quiz";
  startButton.className = "btn btn-dark btn-lg w-100 mb-3";

  const errorText = document.createElement("p");
  errorText.className = "text-alert mt-2 fw-bold";

  startButton.addEventListener("click", () => {
    const enteredName = nameInput.value.trim();

    if (enteredName.length <= 2) {
      errorText.textContent = "Skriv ett namn med minst tre bokstäver!";
    } else {
      userName = enteredName;
      renderQuiz();
    }
  });

  quizContainer.append(welcome, nameInput, startButton, errorText);
}

function renderQuiz() {
  quizContainer.innerHTML = ""; // töm rutan med innerHTML
  if (currentQuestion === questions.length) {
    // SPELET ÄR SLUT
    const endOfQuizGreeting = document.createElement("h2");
    const resultHeader = document.createElement("p");
    // Vi använder "Template literals" (backticks ` `) för att enkelt blanda text och variabler
    endOfQuizGreeting.textContent = `Snyggt jobbat ${userName}!`;
    endOfQuizGreeting.className = "mb-3";
    resultHeader.textContent = `Resultat: ${correctAnswers} av ${questions.length} rätt`;
    resultHeader.className = "lead mb-4";
    quizContainer.append(endOfQuizGreeting, resultHeader);

    if (wrongAnswers.length > 0) {
      const wrongHeader = document.createElement("h3");
      wrongHeader.className = "text-danger mt-4 mb-3"; // Röd text med marginal
      wrongHeader.textContent = "Frågor som var fel:";
      quizContainer.append(wrongHeader);
    }
    const wrongList = document.createElement("ul");
    wrongList.className = "list-group mb-4 text-start"; // text-start gör texten vänsterställd
    wrongAnswers.forEach((wrongAnswer) => {
      const listItem = document.createElement("li"); // skapa en lista med fel svar
      listItem.className = "list-group-item list-group-item-danger";
      listItem.innerHTML = `
          <strong>Fråga:</strong> ${wrongAnswer.question} <br> 
          <strong>Ditt svar:</strong> ${wrongAnswer.userAnswer} <br> 
          <strong>Rätt svar:</strong> ${wrongAnswer.validAnswer}
        `;

      wrongList.append(listItem);
    });
    quizContainer.append(wrongList);
    const playAgain = document.createElement("button");
    playAgain.textContent = "Spela igen";
    playAgain.className = "btn btn-success btn-lg w-100 mt-4";
    playAgain.addEventListener("click", () => {
      currentQuestion = 0;
      correctAnswers = 0;
      wrongAnswers = [];
      renderStartScreen();
    });

    quizContainer.append(playAgain);
  } else {
    // SPELET PÅGÅR
    const ctQstn = questions[currentQuestion]; // se till så att rätt fråga visas, hämtad från array
    const qstnHeader = document.createElement("h2"); // skapa rubrik för frågan
    qstnHeader.textContent = ctQstn.question; // fyll header med frågan, hämtad från array
    qstnHeader.className = "mb-4";
    const qstnCounter = document.createElement("p");
    qstnCounter.textContent = `Nuvarande fråga: ${currentQuestion + 1} av ${questions.length}`;
    qstnCounter.className = "text-muted mb-4";
    quizContainer.append(qstnCounter, qstnHeader); // stoppa in frågeräknare och rubriken i html-diven
    ctQstn.answer.forEach((answers) => {
      const newButton = createAnswerBtn(answers);
      quizContainer.append(newButton);
    });
  }
}

function createAnswerBtn(answerText) {
  const answerButton = document.createElement("button");
  answerButton.textContent = answerText;
  answerButton.className = "btn btn-outline-dark btn-lg w-100 mb-3";

  answerButton.addEventListener("click", () => {
    answerHandler(answerText);
  });
  return answerButton;
}

function answerHandler(userAnswer) {
  const ctQstn = questions[currentQuestion];
  const allButtons = quizContainer.querySelectorAll("button"); // hitta alla knappar/svarsalternativ så vi kan låsa dem
  allButtons.forEach((btn) => {
    // kolla igenom knapparna
    btn.disabled = true; // avaktivera knapparna
    if (btn.textContent === ctQstn.validAnswer) {
      btn.style.backgroundColor = "lightgreen"; // grön om det är rätt
    } else {
      btn.style.backgroundColor = "red";
    }
  });
  const feedbackText = document.createElement("p");

  if (userAnswer === ctQstn.validAnswer) {
    correctAnswers++;
    // console.log("Rätt svar."); loggade först för att se så funktionen gjorde det den skulle
    feedbackText.textContent = "Rätt svar.";
  } else {
    // console.log("Fel svar.");
    feedbackText.textContent = "Fel svar.";
    wrongAnswers.push({
      question: ctQstn.question,
      validAnswer: ctQstn.validAnswer,
      userAnswer: userAnswer,
    });
  }
  quizContainer.append(feedbackText);
  // valde att köra på timer för att visa rätt/fel istället för en knapp innan man fortsätter.
  setTimeout(() => {
    currentQuestion++;
    renderQuiz();
  }, 1500);
}
renderStartScreen();
// renderQuiz();

/* Källor:
https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
*/
