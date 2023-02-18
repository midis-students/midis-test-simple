import { Question, shortCode } from '.';

// Кнопочки

const q: Question = {
  short: 'Utility Type',
  query() {
    return `<h1>У нас есть тип в нашей кодовой базе для комментария:</h1>
    <p class = "correction">Код на TypeScript</p>
      <pre><code>
  type Comment = {
    comment: string;
    email: string;
  } 

</code></pre>
      <h2>Какой общий тип мы можем использовать Comment, чтобы создать тип, эквивалентный приведенному ниже типу</h2>
      <pre>
      <code>
  type ReadonlyComment = {
    readonly comment: string;
    readonly email: string;
  }</code>
      </pre>
    `;
  },
  answer(container, qId) {
    container.innerHTML = `
      <button class="quest-${qId}" id="q${qId}a0" data-score=1>Readonly<Comment></button>
      <button class="quest-${qId}" id="q${qId}a1" data-score=0>Required<Comment></button>
      <button class="quest-${qId}" id="q${qId}a2" data-score=0>Partial<Comment></button>
    `;
    shortCode.buttons(qId);
  },
};

export default q;
