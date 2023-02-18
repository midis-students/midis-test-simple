import { Question, tools } from '.';
import { createEditor } from '../editor';

// Код

const q: Question = {
  short: 'Ends With',
  query() {
    return `
			<h1>"Заканчивается на"</h1>
      <p class = "correction">Код на TypeScript</p>
			<p>напишете функцию <strong>solution</strong>, на  <strong>TypeScript</strong> котрая возвращает true, когда первый переданный аргумент (строка) заканчивается вторым аргументом (тоже строкой). 
      <br> Пример: <br> solution('abcde', 'cde') === true, 
      <br> solution('abcde', 'abc') === false</p>
      
		`;
  },
  answer(container, qId) {
    const getValue = createEditor(container, tools.restoreEditor(qId));
    this.check = async (qId) => {
      let userCode = getValue();

      if (
        (await tools.codeFunction(userCode, 'solution', 'abcde', 'cde')) &&
        !(await tools.codeFunction(userCode, 'solution', 'abcde', 'abc'))
      ) {
        tools.mark(
          qId,
          {
            editor: userCode,
          },
          1,
        );
      } else {
        tools.mark(
          qId,
          {
            editor: userCode,
          },
          0,
        );
      }
    };
  },
};

export default q;

/*

solution('abcde', 'cde') === true
solution('abcde', 'abc') === false

*/
