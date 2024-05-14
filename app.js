import { questions } from './data/questions.js';
import { Quiz } from './models/Quiz.js';
import { UI } from './models/UI.js';

/**
 *
 * @param {Quiz} quiz Objeto Quiz
 * @param {UI} ui Objeto UI
 */
const renderPage = (quiz, ui) => {
    if(quiz.isEnded()){
        console.log('Score:' + quiz.score);
        ui.showScore(quiz.score);
    } else {
        ui.showQuestion(quiz.getQuestionIndex().text);
        ui.showChoices(quiz.getQuestionIndex().choises, (currentChoise) => {
            quiz.guess(currentChoise)
            renderPage(quiz, ui);
        });
        ui.showProgress(quiz.questionIndex + 1, quiz.questions.length);
    }
}

function main(){
    const quiz = new Quiz(questions);
    const ui = new UI();
    renderPage(quiz, ui);
}

main();