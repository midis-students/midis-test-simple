import { Question, tools } from '.';
const q: Question = {
  short: 'QTitle7',
  query() {
    return `Q7`;
  },
  answer(container, qId) {
    container.innerHTML = ``;
  },
};

export default q;
