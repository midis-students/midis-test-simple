import { Question, shortCode } from '.';

const q: Question = {
  short: 'Abstract Class',
  query() {
    return `<h1>Что вернет этот код?</h1>
      <pre><code>
  abstract class Foo{
    constructor(){
      console.log("Hello world")
    }  
  }
  new Foo();
      </code></pre>
    `;
  },
  answer(container, qId) {
    container.innerHTML = `
      <button class="quest-${qId}" id="q${qId}a0" data-score=0>Hello world</button>
      <button class="quest-${qId}" id="q${qId}a1" data-score=1>Ошибку</button>
      <button class="quest-${qId}" id="q${qId}a2" data-score=0>Ничего</button>
    `;
    shortCode.buttons(qId);
  },
};

export default q;
