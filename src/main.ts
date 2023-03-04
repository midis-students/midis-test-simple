import hljs from 'highlight.js';
import 'highlight.js/styles/vs.css';
import questions from './questions';

const ButtonPrev = document.querySelector<HTMLButtonElement>('#btn-prev')!;
const ButtonNext = document.querySelector<HTMLButtonElement>('#btn-next')!;

let pageInStorage = sessionStorage.getItem('page');
let current = Number(pageInStorage ?? -1);

async function render(index: number) {
  sessionStorage.setItem('page', index.toString());
  const prev = questions.at(current);
  if (prev) {
    await prev.check?.(current);
  }

  const section = document.querySelector('section')!;

  if (index === -1) {
    section.innerHTML = `<div>
    <h1>Проверка знаний TypeScript</h1>
    <p>Все вопросы будут связанны с основами программирования на языке TypeScript</p>
    <strong>Код который представлен или нужно будет вводить также на TypeScript!</strong>
    </div>`;
  } else if (index === questions.length) {
    let finScore = Object.values(window.answers)
      .map(({ score }) => score)
      .reduce((a, b) => a + b, 0);

    const listRender = () => {
      return questions
        .map((q, index) => {
          const answer = window.answers[index];

          const wrap = (color: string, text: string) =>
            `<strong style='color: ${color}'>${text}</strong>`;

          let out = `<span>${q.short}</span> - `;

          if (answer) {
            switch (answer.score) {
              case 0:
                out += wrap('orange', 'Не правильно');
                break;
              case 1:
                out += wrap('lime', 'Правильно');
                break;
              case 2:
                out += wrap('lime', 'Харош');
                break;
              default:
                out += wrap('lime', 'Да');
                break;
            }
          } else {
            out += wrap('red', 'Не ответил');
          }
          return `<li onclick="render(${index})" >${out}</li>`;
        })
        .join('<hr/>');
    };

    section.innerHTML = `
    <div>
      <h2>Результат</h2>
      <ul>
      ${listRender()}
      </ul>
		  <h2>Итого: ${finScore}</h2>
		</div>`;
  } else {
    section.innerHTML = `<div id="query"></div><div id="answer"></div>`;

    const Answer = document.querySelector<HTMLDivElement>('#answer')!;
    const Query = document.querySelector<HTMLDivElement>('#query')!;

    const quest = questions.at(index)!;
    if (quest) {
      const answer = quest.answer(Answer, index);
      if (answer) {
        Answer.innerHTML = answer;
      }
      const query = quest.query(Query);
      if (query) {
        Query.innerHTML = query;
        Query.querySelectorAll('pre code').forEach(async (el) => {
          ///@ts-ignore
          el.innerHTML = hljs.highlight(el.innerText, {
            language: 'typescript',
          }).value;
        });
      }
    }
  }
  current = index;
  ButtonPrev.style.display = current - 1 < -1 ? 'none' : 'block';
  ButtonNext.style.display = current + 1 > questions.length ? 'none' : 'block';

  ButtonNext.innerHTML =
    current + 1 < questions.length ? 'Следующий' : 'Закончить';
}

ButtonPrev.onclick = () => render(current - 1);
ButtonNext.onclick = () => render(current + 1);
render(current);

// @ts-ignore
window.render = render;
