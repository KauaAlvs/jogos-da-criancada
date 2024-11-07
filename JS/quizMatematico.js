let questions = [
    { question: "Quanto é 2 + 2?", options: ["3", "4", "5"], answer: "4" },
    { question: "Quanto é 5 * 3?", options: ["15", "10", "20"], answer: "15" },
    { question: "Quanto é 9 - 4?", options: ["5", "6", "7"], answer: "5" },
    { question: "Quanto é 6 / 2?", options: ["2", "3", "4"], answer: "3" }
];
let currentQuestionIndex = 0;
let score = 0;

function startMathQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    document.getElementById("quiz-container").style.display = "block";
    document.querySelector(".start-btn").style.display = "none";
    document.getElementById("result-container").style.display = "none";
    showQuestion();
}

function showQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showResults();
        return;
    }

    const questionData = questions[currentQuestionIndex];
    document.getElementById("question").textContent = questionData.question;
    document.getElementById("option1").textContent = questionData.options[0];
    document.getElementById("option2").textContent = questionData.options[1];
    document.getElementById("option3").textContent = questionData.options[2];

    document.getElementById("option1").onclick = () => checkAnswer(questionData.options[0]);
    document.getElementById("option2").onclick = () => checkAnswer(questionData.options[1]);
    document.getElementById("option3").onclick = () => checkAnswer(questionData.options[2]);
}

function checkAnswer(selectedOption) {
    const questionData = questions[currentQuestionIndex];
    if (selectedOption === questionData.answer) {
        score++;
    }
    currentQuestionIndex++;
    showQuestion();
}

function showResults() {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("result-container").style.display = "block";
    document.getElementById("result-content").textContent = `Você acertou ${score} de ${questions.length} perguntas.`;

    const feedback = document.getElementById("feedback-message");
    if (score >= 3) {
        feedback.textContent = "Parabéns! Você mandou muito bem!";
        feedback.style.color = "#16b4c9";
    } else {
        feedback.textContent = "Boa tentativa! Continue praticando para melhorar!";
        feedback.style.color = "#e74c3c";
    }
}