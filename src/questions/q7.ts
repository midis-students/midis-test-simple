import { Question, tools } from '.';
const q: Question = {
  short: 'Реклама',
  query() {
    return `<h1>Реклама 5 сек</h1>
    <video src="https://iky.su/files/hey.mp4" autoplay>`;
  },
  answer(container, qId) {
    container.innerHTML = `Продам гараж +79${Math.floor(Math.random()*1000000000)}`;
    console.log(tools.answered(qId))
    if(!tools.answered(qId)){
      let timer = setTimeout(()=>{
        console.log(qId)
        tools.mark(qId, {}, 3);
      },5000);
      this.check=(qId)=>{
        clearTimeout(timer)
        if(!tools.answered(qId)) tools.mark(qId, {}, 0);
      }
    }
  }
};

export default q;
