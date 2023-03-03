import { Question, tools } from '.';
import { createEditor } from '../editor';

// Код

const q: Question = {
  short: 'Правильный тип',
  query() {
    return `
			<h1>Напишите правильное определение типа <strong>type Person</strong> для переменной Person</h1>
			<pre>
      <code>
      let person: { firstName: string, level: "High" | "Medium" | "Low" };
      </code>
      </pre>
		`;
  },
  answer(container, qId) {
    const defaultValue = 'type Person = {\n\t/// type here...\n}';
    const getValue = createEditor(
      container,
      tools.restoreEditor(qId, defaultValue),
    );
    this.check = async (qId) => {
      let userCode = getValue();
      console.log(
        tools.fixInput(
          userCode
            .replaceAll('\n', '')
            .replaceAll("'", '"')
            .replaceAll(' ', ''),
        ),
      );
      if (
        tools
          .fixInput(
            userCode
              .replaceAll('\n', '')
              .replaceAll("'", '"')
              .replaceAll(' ', ''),
          )
          .indexOf(
            `type person = { firstname: string, level: "high" | "medium" | "low" }`.replaceAll(
              ' ',
              '',
            ),
          ) != -1
      ) {
        tools.mark(
          qId,
          {
            editor: getValue(),
          },
          1,
        );
      } else {
        tools.mark(
          qId,
          {
            editor: getValue(),
          },
          0,
        );
      }
    };
  },
};

export default q;
