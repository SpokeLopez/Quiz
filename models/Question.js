export class Question {
    /**
     *
     * @param {string} text el texto de la pregunta
     * @param {string[]} choises listado de opciones de respuestas
     * @param {string} answer respuesta de la pregunta
     */
    constructor(text, choises, answer) {
        this.text = text;
        this.choises = choises;
        this.answer = answer;
    }
    /**
     *
     * @param {string} choice respuesta del usuario
     * @returns {boolean} responde true si la respuesta es correcta
     */
    correctAnswer(choice) {
        return choice === this.answer;
    }

}