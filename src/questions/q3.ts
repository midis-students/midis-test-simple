import { Question, shortCode } from '.';

// Кнопочки

const q: Question = {
  short: 'React фреймворки',
  query() {
    return `<h1>React фреймворки</h2><p>Какой фреймворк, созданный поверх React?</p>`;
  },
  answer(container, qId) {
    container.innerHTML = `
      <button class="quest-${qId}" id="q${qId}a0" data-score=0>Nuxt.js</button>
      <button class="quest-${qId}" id="q${qId}a1" data-score=1>Next.js</button>
      <button class="quest-${qId}" id="q${qId}a2" data-score=0>Nest.js</button>
      <button class="quest-${qId}" id="q${qId}a3" data-score=0>Vite.js</button>
    `;
    shortCode.buttons(qId);
  },
};

export default q;
