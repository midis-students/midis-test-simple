import { Question, shortCode } from '.';

const q: Question = {
  short: 'Предшествиник TypeScript',
  query() {
    return `<h1>Какой из следующих языков программирования повлиял на создание TypeScript?</p>`;
  },
  answer(container, qId) {
    container.innerHTML = `
      <button class="quest-${qId}" id="q${qId}a0" data-score=0>Java</button>
      <button class="quest-${qId}" id="q${qId}a1" data-score=1>JavaScript</button>
      <button class="quest-${qId}" id="q${qId}a2" data-score=0>CoffeScript</button>
      <button class="quest-${qId}" id="q${qId}a3" data-score=0>C#</button>
    `;
    shortCode.buttons(qId);
  },
};

export default q;
