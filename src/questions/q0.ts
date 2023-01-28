import { Question, shortCode } from '.';

const q: Question = {
  short: 'Вы дядя женя?',
  query() {
    //container.style
    return `<h1>Hello ...?</h1>`;
  },
  answer(container, qId) {
    container.innerHTML = `
				<div>
					<button class="quest-${qId}" id="q${qId}a0" data-score=2>Женя</button>
					<button class="quest-${qId}" id="q${qId}a1" data-score=1>World</button>
					<button class="quest-${qId}" id="q${qId}a2" data-score=0>Somebody</button>
				</div>
			`;

      shortCode.buttons()
  },
};

export default q;
