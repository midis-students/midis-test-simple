import { Question, shortCode } from '.';

// Кнопочки

const q: Question = {
  short: 'Utility Type',
  query() {
    return `<h1>У нас есть тип в нашей кодовой базе для комментария:</h1>
      <pre><code>
  type Comment = {
    comment: string;
    email: string;
  } 

</code></pre>
      <h2>Какой Utility Type мы можем использовать для Comment, чтобы создать тип, эквивалентный приведенному ниже типу</h2>
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
      <button class="quest-${qId}" id="q${qId}a0" data-score=1>Readonly&lt;Comment&gt;</button>
      <button class="quest-${qId}" id="q${qId}a1" data-score=0>Required&lt;Comment&gt;</button>
      <button class="quest-${qId}" id="q${qId}a2" data-score=0>Partial&lt;Comment&gt;</button>
    `;
    shortCode.buttons(qId);
  },
};

export default q;
