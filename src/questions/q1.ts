import { Question, tools, shortCode } from '.';

// Код

const q: Question = {
  short: '!',
  query() {
    return `
      <h1>({}=!={})</h1>
      <p>Переставь <strong>!</strong> так, чтобы условие вернуло <strong>true</strong></p>
      <code>({}=!={})</code>
    `;
  },
  answer(container, qId) {
    container.innerHTML = `<input id="q${qId}" type="text">`;
    shortCode.code(qId);
  },
  check(qId){
    let userCode = tools.getCode(qId);
    if(userCode.replaceAll("!", "") == "({}=={})"&&tools.codeFunction(`function _(){return ${userCode}}`, "_")){
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
