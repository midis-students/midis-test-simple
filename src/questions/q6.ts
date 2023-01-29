import { Question, tools } from '.';
const q: Question = {
  short: 'QTitle6',
  query() {
    return `Q6`;
  },
  answer(container, qId) {
    container.innerHTML = ``;
  },
};

export default q;
