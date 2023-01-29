import { Question, tools } from '.';
import { createEditor } from '../editor';

const q: Question = {
  short: 'Четные элементы',
  query() {
    return `<h1>Вывести четные элементы</h1>
    <p>Напишите функцию odd_array(array) дан массив, состоящий из целых чисел. Напишите программу, которая возвращает те элементы массива, которые являются чётными числами.</p>`;
  },
  answer(container, qId) {
    const getValue = createEditor(container, tools.restoreEditor(qId));
    this.check = async (qId) => {
      let userCode = getValue();
      if (
        JSON.stringify(
          await tools.codeFunction(userCode, 'odd_array', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
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
