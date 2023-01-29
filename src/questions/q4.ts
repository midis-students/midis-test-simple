import { Question, shortCode } from '.';

// Кнопочки

const q: Question = {
  short: 'Импортозамещение',
  query() {
    return `<h1>Импортозамещение в России</h2><p>На каком ЯП написан 1С:Предприятие 8?</p>`;
  },
  answer(container, qId) {
    container.innerHTML = `
      <button class="quest-${qId}" id="q${qId}a0" data-score=0>YoptaScript</button>
      <button class="quest-${qId}" id="q${qId}a1" data-score=0>1C</button>
      <button class="quest-${qId}" id="q${qId}a2" data-score=1>C++</button>
      <button class="quest-${qId}" id="q${qId}a3" data-score=0>C#</button>
      <button class="quest-${qId}" id="q${qId}a4" data-score=0>C</button>
      <button class="quest-${qId}" id="q${qId}a5" data-score=0>Кумир</button>
      <button class="quest-${qId}" id="q${qId}a6" data-score=0>Pascal</button>
    `;
    shortCode.buttons(qId);
  },
};

export default q;
