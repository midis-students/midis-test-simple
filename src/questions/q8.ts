import { Question, tools } from '.';
import { createEditor } from '../editor';

const q: Question = {
  short: 'Рекурсия',
  query() {
    return `<h1>Цифровой корень — это рекурсивная сумма всех цифр числа.</h1>
    <p>Напишите функцию <strong>digital_root<strong> которая возвращает сумму всех цифр</p>`;
  },
  answer(container, qId) {
    const getValue = createEditor(container, tools.restoreEditor(qId));
    this.check = async (qId) => {
      let userCode = getValue();

      if (
        (await tools.codeFunction(userCode, 'digital_root', 16)) == 7 &&
        (await tools.codeFunction(userCode, 'digital_root', 942)) == 6
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

16  -->  1 + 6 = 7
942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6

function digital_root(n) {
  return (n - 1) % 9 + 1;
}

function digital_root(n) {
  if (n < 10) return n
  return digital_root(n % 10 + digital_root(Math.floor(n / 10)))
}

*/
