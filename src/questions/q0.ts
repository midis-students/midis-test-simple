import { Question, shortCode } from '.';

// Кнопочки

const q: Question = {
  short: 'Вы дядя женя?',
  query() {
    //container.style
    return `<h1>Hello ...?</h1>`;
  },
  answer(container, qId) {
    container.innerHTML = `
        <button class="quest-${qId}" id="q${qId}a0" data-score=10>Женя</button>
        <button class="quest-${qId}" id="q${qId}a1" data-score=1>World</button>
        <button class="quest-${qId}" id="q${qId}a2" data-score=0>Somebody</button>
			`;

      shortCode.buttons(qId);
  },
};

export default q;
