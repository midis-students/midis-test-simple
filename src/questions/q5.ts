import { Question, shortCode } from '.';

// Инпут

const q: Question = {
  short: 'Сталин не одобряет',
  query() {
    return `<h1>Помнишь?</h1>
    <p>В каком году <s>распался ссср</s> основали 1С?</p>`;
  },
  answer(container, qId) {
    container.innerHTML = `<input id="q${qId}" type="number">`;
    shortCode.input(qId);
  },
  check(qId){
    shortCode.inputCheck(qId, "1991")
  }
};

export default q;
