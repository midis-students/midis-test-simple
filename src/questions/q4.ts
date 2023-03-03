import { Question, shortCode } from '.';

// Кнопочки

const q: Question = {
  short: 'Обобщение',
  query() {
    return `<h1>У нас есть следующий интерфейс, который представляет пользователя:</h1>
      <pre><code>
  interface User {
    id: any;
    name: string;
    email: string;
  } 
  </code></pre>
  <h2>Как мы можем улучшить это, заменив "id: any" свойство и позволив потребителю интерфейса указать его тип?</h2>
<div style="display: flex;gap: 5px">
      <pre style="width: 100%"><code>
  /// Вараинт 1
  interface User {
    id: string | number;
    name: string;
    email: string;
  }
</code>
      </pre><pre style="width: 100%"><code>
  /// Вариант 2
  interface &lt;UserIdType&gt;User {
    id: UserIdType;
    name: string;
    email: string;
  }
</code></pre><pre style="width: 100%"><code>
  /// Вариант 3
  interface User&lt;UserIdType&gt; {
    id: UserIdType;
    name: string;
    email: string;
  }
</code></pre>
    </div>
    `;
  },
  answer(container, qId) {
    container.innerHTML = `
      <button class="quest-${qId}" id="q${qId}a0" data-score=0>Вариант 1</button>
      <button class="quest-${qId}" id="q${qId}a1" data-score=0>Вариант 2</button>
      <button class="quest-${qId}" id="q${qId}a2" data-score=1>Вариант 3</button>
    `;
    shortCode.buttons(qId);
  },
};

export default q;
