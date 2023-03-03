import { Question, tools } from '.';
import { createEditor } from '../editor';

const q: Question = {
  short: 'Четные элементы',
  query() {
    return `<h1>Вывести четные элементы</h1>
    <p class = "correction">Код на TypeScript</p>
    <p>Напишите функцию <strong>odd_array(array)</strong>, которая возвращает те элементы массива, которые являются чётными числами.
    <br>Пример<br>
    <br>Ввод
    <br>10, 11, 12, 13, 14, 15, 16, 17, 18, 19
    <br>Вывод
    <br>10 12 14 16 18</p>
    `;
  },
  answer(container, qId) {
    const defaultValue = `function odd_array(array){\n\treturn array;\n}`;
    const getValue = createEditor(
      container,
      tools.restoreEditor(qId, defaultValue),
    );
    this.check = async (qId) => {
      let userCode = getValue();
      if (
        JSON.stringify(
          await tools.codeFunction(
            userCode,
            'odd_array',
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          ),
        ) == JSON.stringify([0, 2, 4, 6, 8])
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
