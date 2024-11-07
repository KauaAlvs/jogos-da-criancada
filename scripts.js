import { startMemoryGame } from './jogoMemoria';
import { startMathQuiz } from './quizMatematico';
import { startAnimalSounds } from './jogoSons';

// Associando as funções aos botões quando o arquivo é carregado
window.onload = () => {
    const memoryButton = document.querySelector("button[onclick='startMemoryGame()']");
    const quizButton = document.querySelector("button[onclick='startMathQuiz()']");
    const animalSoundsButton = document.querySelector("button[onclick='startAnimalSounds()']");

    // Adicionando o evento de clique para o Jogo da Memória
    if (memoryButton) {
        memoryButton.addEventListener("click", startMemoryGame);
    }
    // Adicionando o evento de clique para o Quiz Matemático
    if (quizButton) {
        quizButton.addEventListener("click", startMathQuiz);
    }
    // Adicionando o evento de clique para o Jogo dos Sons dos Animais
    if (animalSoundsButton) {
        animalSoundsButton.addEventListener("click", startAnimalSounds);
    }
};