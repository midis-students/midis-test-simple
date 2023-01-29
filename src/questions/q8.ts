import { Question, tools } from '.';
const q: Question = {
  short: 'QTitle8',
  query() {
    return `Q8`;
  },
  answer(container, qId) {
    container.innerHTML = ``;
  },
};

export default q;
