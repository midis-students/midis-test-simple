import { Question, tools } from '.';
const q: Question = {
  short: 'QTitle9',
  query() {
    return `Q9`;
  },
  answer(container, qId) {
    container.innerHTML = ``;
  },
};

export default q;
