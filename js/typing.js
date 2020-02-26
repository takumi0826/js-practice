const array = ['display: block;', 'transform: translateX(-50%);', 'position: absolute;', 'justify-content: space-between;'];
const question = document.querySelector('#question');
const input = document.querySelector('#input');
const startBtn = document.querySelector('#startBtn');
const desc = document.querySelector('#desc');
let judge = [];

startBtn.addEventListener('click', () => {
  startBtn.classList.add('is-active');
  input.classList.add('is-active');
  desc.classList.add('is-active');
  init();
});

const init = () => {
  const questionWords = array.filter(questionWord => {
    return !judge.includes(questionWord);
  });
  const rand = Math.floor(Math.random() * questionWords.length);
  question.textContent = questionWords[rand];
  input.value = '';
  input.focus();
};

input.addEventListener('keyup', () => {
  if (input.value === question.textContent) {
    judge.push(question.textContent);
    init();
  }
  if (array.length === judge.length) {
    alert('よく出来ました');
    judge = [];
    startBtn.classList.remove('is-active');
    input.classList.remove('is-active');
    desc.classList.remove('is-active');
  }
});
