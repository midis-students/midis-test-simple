import { Question, tools } from '.';
const q: Question = {
  short: 'Код',
  query() {
    //container.style
    return `<pre><code>
        function sum(a: number,b: number){
          return a + b;
        }
        sum("zalupa",1);
      </code></pre>`;
  },
  answer(container, qId) {
    container.innerHTML = `
				<div>
					<button class="quest-${qId}" id="q${qId}a0" data-score=2>Женя</button>
				</div>
			`;
  },
};

export default q;
