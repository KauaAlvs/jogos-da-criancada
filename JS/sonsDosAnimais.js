const animalSounds = [
    { sound: 'cavalo.mp3', name: 'Cavalo' },
    { sound: 'galinha.mp3', name: 'Galinha' },
    { sound: 'porco.mp3', name: 'Porco' },
    { sound: 'cachorro.mp3', name: 'Cachorro' },
    { sound: 'gato.mp3', name: 'Gato' },
    { sound: 'vaca.mp3', name: 'Vaca' },
    { sound: 'pato.mp3', name: 'Pato' },
    { sound: 'ovelha.mp3', name: 'Ovelha' }
];

let currentSoundIndex = 0;
let animalSoundsScore = 0;
let currentAnswer = {};
let questionsAsked = 0;
let selectedQuestions = [];
let audioPlaying = false; // Controle de áudio em reprodução

function startAnimalSounds() {
    document.querySelector('button').style.display = 'none';
    document.getElementById('result-container').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
    animalSoundsScore = 0;
    questionsAsked = 0;
    selectedQuestions = getRandomQuestions();
    showSound();
}

function showSound() {
    const sound = selectedQuestions[questionsAsked];
    currentAnswer = sound;

    document.getElementById('animal-sound').textContent = `Qual animal fez este som?`;

    const audio = new Audio('AUDIOS/' + sound.sound);
    audioPlaying = true;
    disableOptions(true); // Desabilita as opções enquanto o som toca

    audio.play();
    audio.onended = () => {
        audioPlaying = false;
        disableOptions(false); // Reabilita as opções após o fim do som
    };

    const options = generateOptions(sound); // Gerar opções corretas e embaralhadas

    document.getElementById('option1').textContent = options[0].name;
    document.getElementById('option2').textContent = options[1].name;
    document.getElementById('option3').textContent = options[2].name;

    document.getElementById('option1').onclick = () => checkAnimalSound(options[0]);
    document.getElementById('option2').onclick = () => checkAnimalSound(options[1]);
    document.getElementById('option3').onclick = () => checkAnimalSound(options[2]);
}

// Gera opções que incluem a resposta correta e duas outras aleatórias
function generateOptions(correctSound) {
    let options = animalSounds.filter(item => item.sound !== correctSound.sound);
    options = options.sort(() => Math.random() - 0.5).slice(0, 2);
    options.push(correctSound);
    return options.sort(() => Math.random() - 0.5);
}

function getRandomQuestions() {
    let shuffled = [...animalSounds];
    shuffled = shuffled.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 3);
}

function checkAnimalSound(selected) {
    if (audioPlaying) return; // Bloqueia respostas enquanto o áudio toca

    if (selected.sound === currentAnswer.sound) {
        animalSoundsScore++;
    }

    questionsAsked++;

    if (questionsAsked < 3) {
        showSound();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('game-container').style.display = 'none';
    const resultContent = document.getElementById('result-content');
    resultContent.innerHTML = "";

    const scoreResult = document.createElement('p');
    scoreResult.id = 'score-result';
    scoreResult.textContent = `Você acertou ${animalSoundsScore} de 3 perguntas.`;
    resultContent.appendChild(scoreResult);

    selectedQuestions.forEach((question, index) => {
        const questionResult = document.createElement('p');
        questionResult.textContent = `Pergunta ${index + 1}: Qual animal fez o som?`;

        const correctAnswer = document.createElement('p');
        correctAnswer.textContent = `Resposta correta: ${question.name}`;

        const replayButton = document.createElement('button');
        replayButton.textContent = 'Reproduzir Som novamente';
        replayButton.onclick = () => replaySound(question);

        resultContent.appendChild(questionResult);
        resultContent.appendChild(correctAnswer);
        resultContent.appendChild(replayButton);
    });

    const spacer = document.createElement('br'); // Espaço entre os botões
    resultContent.appendChild(spacer);

    const restartButton = document.createElement('button');
    restartButton.textContent = 'Recomeçar Jogo';
    restartButton.onclick = startAnimalSounds; // Corrige o botão para iniciar o jogo corretamente
    resultContent.appendChild(restartButton);

    document.getElementById('result-container').style.display = 'block';
}

function replaySound(sound) {
    const audio = new Audio('AUDIOS/' + sound.sound);
    audio.play();
}

function disableOptions(disabled) {
    document.getElementById('option1').disabled = disabled;
    document.getElementById('option2').disabled = disabled;
    document.getElementById('option3').disabled = disabled;
}