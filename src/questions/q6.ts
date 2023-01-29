import { Question, shortCode } from '.';

// Инпут

const q: Question = {
  short: 'Ку',
  query() {
    return `<h1>Угадай ЯП</h1>
    <p>Дарова 6=>2</p>
    <p>!Война</p>`;
  },
  answer(container, qId) {
    container.innerHTML = `<input id="q${qId}" type="text">`;
    shortCode.input(qId);
  },
  check(qId){
    shortCode.inputCheck(qId, "кумир")
  }
};

export default q;
