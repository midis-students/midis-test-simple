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
  answered(qId: number) {
    return !!answers[qId];
  },

  restoreButton(qId: number) {
    if (answers[qId]) {
      document
        .getElementById(answers[qId].data.selected)!
        .classList.add(style['button-selected']);
    }
  },
  restoreEditor(qId: number, defaultValue = '') {
    return answers[qId]?.data.editor ?? defaultValue;
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
  rndStr() {
    return (Math.random() + 1).toString(36).substring(2);
  },
  rndInt(max: number) {
    return Math.floor(Math.random() * max);
  },
  codeFunction(userCode: string, functionName: string, ...params: any) {
    const p = this.rndStr();
    return eval(
      `new Promise(
        async(_0x${p})=>{
          try{
            ${userCode.replaceAll('_0x', '0x')};
            _0x${p}(await ${functionName}(...${JSON.stringify(params)}))
          }catch(e){
            _0x${p}(0)
          }
        }
      )`,
    );
  },
  fixInput(text: string) {
    return text.toLowerCase().replaceAll(/\s+/gm, ' ').trim();
  },
};

export const shortCode = {
  buttons(qId: number) {
    tools.restoreButton(qId);

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
  },
  code(qId: number) {
    tools.restoreEditor(qId);
  },
};
