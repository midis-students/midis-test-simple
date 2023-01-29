import { Question, tools } from '.';
const q: Question = {
  short: 'QTitle5',
  query() {
    return `Q5`;
  },
  answer(container, qId) {
    container.innerHTML = ``;
  },
};

export default q;
