import { Question, tools } from '.';
import { createEditor } from '../editor';

// Код

const q: Question = {
  short: 'Наследование',
  query() {
    return `
			<h1>Напишите класс Dog, который наследуется от класса Animal, и вызывает метод say</h1>
      <pre><code>
      const dog = new Dog();
      dog.say(); // гав-гав
      </code></pre>
		`;
  },
  answer(container, qId) {
    const getValue = createEditor(container, tools.restoreEditor(qId));
    this.check = async (qId) => {
      let userCode = getValue();
      let valid = await tools.codeFunction(
        userCode +
          `;function _$(){
        return {Animal, Dog};
      }`,
        '_$',
      );

      if (
        valid.Dog &&
        valid.Animal &&
        valid.Dog.prototype instanceof valid.Animal &&
        valid.Animal.prototype.say &&
        valid.Dog.prototype.say &&
        (await tools.codeFunction(
          'function ' + valid.Animal.prototype.say?.toString(),
          'say',
        )) == 'smt' &&
        (await tools.codeFunction(
          'function ' + valid.Dog.prototype.say?.toString(),
          'say',
        )) == 'гав гав'
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
class Animal {
  say(){
    return "smt"
  }
}

class Dog extends Animal {
  say() {
    return 'гав гав';
  }
}

*/
