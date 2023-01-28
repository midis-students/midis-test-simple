import { Question, shortCode } from '.';
const q: Question = {
  short: 'React фреймворки',
  query() {
    return `<h1>React фреймворки</h2><p>Какой фреймворк, созданный поверх React?</p>`;
  },
  answer(container, qId) {
    container.innerHTML = `
      <div>
        <button class="quest-${qId}" id="q${qId}a0" data-score=0>Nuxt.js</button>
        <button class="quest-${qId}" id="q${qId}a1" data-score=1>Next.js</button>
        <button class="quest-${qId}" id="q${qId}a2" data-score=0>Nest.js</button>
        <button class="quest-${qId}" id="q${qId}a3" data-score=0>Vite.js</button>
      </div>
    `;
    shortCode.buttons()
  },
};

export default q;
