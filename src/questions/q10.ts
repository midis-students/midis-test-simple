import { Question, tools, shortCode } from '.';

// Код

const q: Question = {
	short: 'Изи',
	query() {
		return `
			<h1>Последняя задача</h1>
			<p>Напишите функцию <strong>bye</strong>, которая принимает в себя объект A, внутри которого N строк и массивов, со своими ключами. Посчитать колличество имеющихся сущностей в объекте</p>
		`;
	},
	answer(container, qId) {
		container.innerHTML = `<input id="q${qId}" type="text">`;
    shortCode.code(qId);
	},
	async check(qId){
		let userCode = tools.getCode(qId);
		let obj: any = {};
		for(let i=0;i<tools.rndInt(100);i++) obj[tools.rndStr()]=tools.rndStr();
		for(let i=0;i<tools.rndInt(100);i++) obj[tools.rndStr()]=new Array(tools.rndInt(100)).fill(tools.rndStr())

		if(await tools.codeFunction(userCode, "bye", obj) == Object.keys(obj).length){
			console.log("OK")
			tools.mark(qId, {
				code:userCode
			}, 1)
		}else{
			console.log("NO")
			tools.mark(qId, {
				code:userCode
			}, 0)
		}
	}
};

export default q;