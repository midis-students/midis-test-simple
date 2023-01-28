import { Question, tools } from '.';

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

    tools.markSelected(qId);

    tools.getQuestions<HTMLButtonElement>(qId).forEach((quest) => {
      quest.onclick = (event) => {
        const target = event.target as HTMLButtonElement;

        if (tools.checkSelected(qId, target.id)) {
          tools.mark(
            qId,
            {
              selected: target.id,
            },
            +target.dataset.score!,
          );

          tools.buttonColor(qId, target.id);
        }
      };
    });
  },
};

export default q;
