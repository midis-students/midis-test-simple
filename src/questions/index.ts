import style from './style.module.scss';
import q0 from './q0';
import q1 from './q1';

const list = [q0, q1] as Question[];

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
};
