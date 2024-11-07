const animals = [
    'lion', 'lion',
    'tiger', 'tiger',
    'elephant', 'elephant',
    'giraffe', 'giraffe',
    'monkey', 'monkey',
    'zebra', 'zebra',
    'dog', 'dog',
    'cat', 'cat'
];

let flippedCards = [];
let matchedCards = [];
let isLocked = false;
let attempts = 0;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function createCard(animal, index) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('data-animal', animal);
    card.setAttribute('data-index', index);

    const front = document.createElement('div');
    front.classList.add('card-front');
    const frontImage = document.createElement('img');
    frontImage.src = `IMG/${animal}.png`;
    frontImage.alt = animal;
    front.appendChild(frontImage);

    const back = document.createElement('div');
    back.classList.add('card-back');

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', () => flipCard(card));
    return card;
}

function flipCard(card) {
    if (isLocked || card.classList.contains('flipped') || flippedCards.length === 2) return;

    card.classList.add('flipped');
    flippedCards.push(card);

    if (flippedCards.length === 2) {
        attempts++;
        document.getElementById('attempt-counter').textContent = `Tentativas: ${attempts}`;
        checkMatch();
    }
}

function checkMatch() {
    isLocked = true;
    const [firstCard, secondCard] = flippedCards;

    if (firstCard.dataset.animal === secondCard.dataset.animal) {
        matchedCards.push(firstCard, secondCard);
        flippedCards = [];
        isLocked = false;

        if (matchedCards.length === animals.length) {
            showVictoryMessage();
        }
    } else {
        setTimeout(() => {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            flippedCards = [];
            isLocked = false;
        }, 1000);
    }
}

function showVictoryMessage() {
    // Oculta todas as cartas
    document.getElementById('game-container').style.display = 'none';

    // Exibe a mensagem de vitória
    const victoryMessage = document.createElement('div');
    victoryMessage.id = 'victory-message';
    victoryMessage.textContent = `Você venceu! Parabéns!`;
    document.body.appendChild(victoryMessage);
}

function initializeGame() {
    const gameContainer = document.getElementById('game-container');
    gameContainer.innerHTML = '';
    gameContainer.style.display = 'grid'; // Torna o container visível ao reiniciar

    attempts = 0;
    document.getElementById('attempt-counter').textContent = 'Tentativas: 0';
    matchedCards = [];
    flippedCards = [];
    shuffle(animals);

    animals.forEach((animal, index) => {
        const card = createCard(animal, index);
        gameContainer.appendChild(card);
    });
}

function resetGame() {
    // Remove a mensagem de vitória, se houver
    const victoryMessage = document.getElementById('victory-message');
    if (victoryMessage) victoryMessage.remove();

    initializeGame();
}

// Iniciar o jogo ao carregar a página
window.onload = initializeGame;