export class UI {
    constructor(){}
    /**
     *
     * @param {string} text renderizamos la pregunta
     */
    showQuestion(text) {
        const questionText = document.querySelector('#question');
        questionText.innerHTML = text;
    }
    /**
     *
     * @param {string[]} choices opciones de respuestas
     */
    showChoices(choices, callback) {
        const choicesContainer = document.querySelector('#choices');
        choicesContainer.innerHTML = '';
        for (let i = 0; i < choices.length; i++) {
            const button = document.createElement("button");
            button.addEventListener("click", () => callback(choices[i]));
            button.className = "button";
            button.innerText = choices[i];

            choicesContainer.append(button);
        }
    }
    /**
     *
     * @param {number} score puntuacion final
     */
    showScore(score){
        const quizEndHTML = `
        <h1>Score</h1>
            <h2>Tu puntuaje fue de: ${score}</h2>`;
        const elemento = document.querySelector('#quiz');
        elemento.innerHTML = quizEndHTML;
    }

    /**
     *
     * @param {number} currentIndex Pregunta actual del Quiz
     * @param {number} total Total de preguntas en el Quiz
     */

    showProgress(currentIndex, total){
        const progress = document.querySelector('#progress');
        progress.innerHTML = `Pregunta ${currentIndex} de ${total}`
    }
}