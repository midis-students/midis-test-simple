import { Question, tools } from '.';
const q: Question = {
  short: 'Куб',
  query() {
    return `
      <h1>Куб</h1>
      <p>Напишите функцию <strong>cube</strong>, которая принимает переменную <strong>N</strong> в виде числа и возвращает число N в кубе</p>
    `;
  },
  answer(container, qId) {
    container.innerHTML = `<input id="q${qId}" type="text">`;
  },
  async check(qId){
    let userCode = tools.getCode(qId);
    let f = Math.floor(Math.random() * 100);
    if(await tools.codeFunction(userCode, "cube", f) == f*f*f){
      tools.mark(qId, {
        code:userCode
      }, 1)
    }else{
      tools.mark(qId, {
        code:userCode
      }, 0)
    }
  }
};

export default q;
