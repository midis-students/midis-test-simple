import { Question, shortCode } from '.';

// Инпут

const q: Question = {
  short: 'Хахатон',
  query() {
    return `<h1>Ну вот и похихикали</h1><p>Сколько рублей проиграла команда Восторг на VK хахатоне</p>`;
  },
  answer(container, qId) {
    container.innerHTML = `<input id="q${qId}" type="number">`;
    shortCode.input(qId);
  },
  check(qId){
    shortCode.inputCheck(qId, "100000")
  }
};

export default q;
