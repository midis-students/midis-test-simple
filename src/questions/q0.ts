import { Question, shortCode } from '.';

const q: Question = {
  short: 'Кто разработал TypeScript?',
  query() {
    return `
    <h1>Кто разработал TypeScript?</h1>
    <p>Выберите из предложенных вариантов</p>
    `;
  },
  answer(container, qId) {
    container.innerHTML = `
        <button class="quest-${qId}" id="q${qId}a0" data-score=0>Amazon</button>
        <button class="quest-${qId}" id="q${qId}a1" data-score=0>Битрикс</button>
        <button class="quest-${qId}" id="q${qId}a2" data-score=1>Microsoft</button>
        <button class="quest-${qId}" id="q${qId}a3" data-score=0>Oracle</button>
			`;
    shortCode.buttons(qId);
  },
};

export default q;
