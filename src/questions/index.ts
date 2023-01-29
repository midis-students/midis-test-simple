import style from './style.module.scss';
import q0 from './q0';
import q1 from './q1';
import q2 from './q2';
import q3 from './q3';
import q4 from './q4';
import q5 from './q5';
import q6 from './q6';
import q7 from './q7';
import q8 from './q8';
import q9 from './q9';

const list = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9] as Question[];

export default list;

export type Question = {
  short: string;
  query: (container: HTMLDivElement) => string | void;
  answer: (container: HTMLDivElement, index: number) => string | void;
  check?: (index: number) => void;
};

window.answers = {};
const answers = window.answers;

declare global {
  interface Window {
    answers: Record<string, any>;
  }
}

export const tools = {
  mark(qId: number, data: Record<string, any>, score: number) {
    answers[qId] = {
      data,
      score,
    };
  },
  getQuestions<T extends HTMLElement>(qId: number) {
    return Array.from(document.getElementsByClassName(`quest-${qId}`)) as T[];
  },
  markSelected(qId: number) {
    if (answers[qId]) {
      document
        .getElementById(answers[qId].data.selected)!
        .classList.add(style['button-selected']);
    }
  },
  buttonColor(qId: number, selectedId: string) {
    this.getQuestions(qId).forEach((answer) => {
      if (answer.id == selectedId) {
        answer.classList.add(style['button-selected']);
      } else {
        answer.classList.remove(style['button-selected']);
      }
    });
  },
  checkSelected(qId: number, targetId: string) {
    return answers[qId]?.data.selected != targetId;
  },
  getCode(qId: number) {
    return (<HTMLInputElement>document.getElementById(`q${qId}`)).value
  },
  rnd(){
    return (Math.random()+1).toString(36).substring(2)
  },
  safeCodeFunction(userCode: string, functionName: string, ...params: any){ // Запускает отдельное окно, где и запускается код. В nonBlocking, добавить то что не нужно блочить при необходимости
    return new Promise((resolve)=>{
      const nonBlocking = ["Object","eval","JSON","close"];
      let win = window.open("", "_blank", "width=1px,height=1px")
      let app = [this.rnd(),this.rnd()];
      const scr = win!.document.createElement("script");
      scr.innerHTML=`const _0x${app}=${JSON.stringify(nonBlocking)};Object.keys(window).forEach($=>{if(_0x${app}.indexOf($)==-1)eval("delete "+$)});Object.getOwnPropertyNames(window).forEach($=>{if(_0x${app}.indexOf($)==-1)eval("delete "+$)});delete Object;delete eval;${userCode};document.body.innerText=JSON.stringify(${functionName}(...${JSON.stringify(params)}))`
      win!.document.body.appendChild(scr)
      const data = JSON.parse(win!.document.body.innerText);
      win!.close()
      resolve(data)
    })
  },
  codeFunction(userCode: string, functionName: string, ...params: any){
    const p=(Math.random()+1).toString(36).substring(2);
    return eval(`new Promise(async(_0x${p})=>{${userCode.replaceAll("_0x","0x")};_0x${p}(await ${functionName}(...${JSON.stringify(params)}))})`)
  },
  fixInput(text: string) {
    return text.toLowerCase().replaceAll(/\s+/gm," ").trim()
  }
};

export const shortCode = {
  buttons(qId: number) {
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
  }
}