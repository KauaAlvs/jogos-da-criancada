const animalQuestions = [
    { question: "Qual é o maior animal terrestre?", options: ["Elefante", "Girafa", "Leão"], correct: 0 },
    { question: "Qual animal faz o som de 'miau'?", options: ["Cachorro", "Gato", "Vaca"], correct: 1 },
    { question: "Qual é o maior mamífero?", options: ["Baleia Azul", "Elefante", "Girafa"], correct: 0 },
    { question: "Qual animal vive na água e é um peixe?", options: ["Golfinho", "Tubarão", "Baleia"], correct: 1 },
    { question: "Qual animal é conhecido como 'Rei da Selva'?", options: ["Tigre", "Leão", "Urso"], correct: 1 },
    { question: "Qual animal põe ovos?", options: ["Gato", "Galinha", "Cachorro"], correct: 1 },
    { question: "Qual animal pode voar?", options: ["Gato", "Elefante", "Águia"], correct: 2 },
    { question: "Qual é o animal mais rápido do mundo?", options: ["Guepardo", "Águia", "Leão"], correct: 0 },
    { question: "Qual animal tem a maior longevidade?", options: ["Tartaruga", "Elefante", "Cachalote"], correct: 0 },
    { question: "Qual é o maior réptil?", options: ["Crocodilo", "Dragão barbudo", "Jacaré"], correct: 0 },
    { question: "Qual animal é conhecido por sua habilidade de mudar de cor?", options: ["Camaleão", "Lula", "Cervo"], correct: 0 },
    { question: "Qual desses animais vive no Polo Norte?", options: ["Urso Polar", "Leão Marinho", "Pinguim"], correct: 0 },
    { question: "Qual animal é o símbolo nacional do Brasil?", options: ["Onça-pintada", "Arara", "Cachorro-do-mato"], correct: 1 },
    { question: "Qual animal é conhecido por sua grande memória?", options: ["Cavalo", "Elefante", "Golfinho"], correct: 1 }
];

let selectedQuestions = [];
let animalCurrentIndex = 0;
let animalScore = 0;

function startAnimalQuiz() {
    document.querySelector('button').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    animalScore = 0;
    animalCurrentIndex = 0;
    selectedQuestions = animalQuestions.sort(() => 0.5 - Math.random()).slice(0, 3); // Exibir apenas 3 perguntas por vez
    showAnimalQuestion();
}

function showAnimalQuestion() {
    const question = selectedQuestions[animalCurrentIndex];
    document.getElementById('question').textContent = question.question;
    document.getElementById('option1').textContent = question.options[0];
    document.getElementById('option2').textContent = question.options[1];
    document.getElementById('option3').textContent = question.options[2];

    document.getElementById('option1').onclick = () => checkAnimalAnswer(0);
    document.getElementById('option2').onclick = () => checkAnimalAnswer(1);
    document.getElementById('option3').onclick = () => checkAnimalAnswer(2);
}

function checkAnimalAnswer(selected) {
    if (selected === selectedQuestions[animalCurrentIndex].correct) {
        animalScore++;
    }
    animalCurrentIndex++;

    if (animalCurrentIndex < selectedQuestions.length) {
        showAnimalQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('quiz-container').style.display = 'none';
    const resultContent = document.getElementById('result-content');
    resultContent.innerHTML = "";

    selectedQuestions.forEach((q, index) => {
        const questionResult = document.createElement('p');
        questionResult.textContent = `${index + 1}. ${q.question}`;
        const correctAnswer = document.createElement('p');
        correctAnswer.textContent = `Resposta correta: ${q.options[q.correct]}`;
        resultContent.appendChild(questionResult);
        resultContent.appendChild(correctAnswer);
    });

    const scoreResult = document.createElement('p');
    scoreResult.textContent = `Você acertou ${animalScore} de ${selectedQuestions.length} perguntas.`;
    resultContent.appendChild(scoreResult);

    const restartButton = document.createElement('button');
    restartButton.textContent = 'Recomeçar Jogo';
    restartButton.onclick = restartQuiz;
    resultContent.appendChild(document.createElement('br')); // Quebra de linha antes do botão
    resultContent.appendChild(restartButton);

    document.getElementById('result-container').style.display = 'block';
}

function restartQuiz() {
    document.getElementById('result-container').style.display = 'none';
    document.querySelector('button').style.display = 'block';
    startAnimalQuiz(); // Reinicia o jogo corretamente
}