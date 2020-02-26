'use strict';

let turn = 1;
const get = document.querySelector('#turn_num');
const line = document.querySelectorAll('td');

get.innerHTML = 'turn' + turn;

line.forEach(el => {
  el.addEventListener('click', () => {
    if (el.textContent === '') {
      if (turn % 2 === 0) {
        el.innerHTML = '×';
        turn++;
        get.innerHTML = 'turn' + turn;
        winner();
      } else {
        el.innerHTML = '◯';
        turn++;
        get.innerHTML = 'turn' + turn;
        winner();
      }
    }
  });
});

function winner() {
  if (line[0].textContent === '◯' && line[1].textContent === '◯' && line[2].textContent === '◯') {
    setTimeout(function() {
      alert('◯の勝ち');
      reset();
    }, 250);
  } else if (line[3].textContent === '◯' && line[4].textContent === '◯' && line[5].textContent === '◯') {
    setTimeout(function() {
      alert('◯の勝ち');
      reset();
    }, 250);
  } else if (line[6].textContent === '◯' && line[7].textContent === '◯' && line[8].textContent === '◯') {
    setTimeout(function() {
      alert('◯の勝ち');
      reset();
    }, 250);
  } else if (line[0].textContent === '◯' && line[3].textContent === '◯' && line[6].textContent === '◯') {
    setTimeout(function() {
      alert('◯の勝ち');
      reset();
    }, 250);
  } else if (line[1].textContent === '◯' && line[4].textContent === '◯' && line[7].textContent === '◯') {
    setTimeout(function() {
      alert('◯の勝ち');
      reset();
    }, 250);
  } else if (line[2].textContent === '◯' && line[5].textContent === '◯' && line[8].textContent === '◯') {
    setTimeout(function() {
      alert('◯の勝ち');
      reset();
    }, 250);
  } else if (line[0].textContent === '◯' && line[4].textContent === '◯' && line[8].textContent === '◯') {
    setTimeout(function() {
      alert('◯の勝ち');
      reset();
    }, 250);
  } else if (line[2].textContent === '◯' && line[4].textContent === '◯' && line[6].textContent === '◯') {
    setTimeout(function() {
      alert('◯の勝ち');
      reset();
    }, 250);
  } else if (line[0].textContent === '×' && line[1].textContent === '×' && line[2].textContent === '×') {
    setTimeout(function() {
      alert('×の勝ち');
      reset();
    }, 250);
  } else if (line[3].textContent === '×' && line[4].textContent === '×' && line[5].textContent === '×') {
    setTimeout(function() {
      alert('×の勝ち');
      reset();
    }, 250);
  } else if (line[6].textContent === '×' && line[7].textContent === '×' && line[8].textContent === '×') {
    setTimeout(function() {
      alert('×の勝ち');
      reset();
    }, 250);
  } else if (line[0].textContent === '×' && line[3].textContent === '×' && line[6].textContent === '×') {
    setTimeout(function() {
      alert('×の勝ち');
      reset();
    }, 250);
  } else if (line[1].textContent === '×' && line[4].textContent === '×' && line[7].textContent === '×') {
    setTimeout(function() {
      alert('×の勝ち');
      reset();
    }, 250);
  } else if (line[2].textContent === '×' && line[5].textContent === '×' && line[8].textContent === '×') {
    setTimeout(function() {
      alert('×の勝ち');
      reset();
    }, 250);
  } else if (line[0].textContent === '×' && line[4].textContent === '×' && line[8].textContent === '×') {
    setTimeout(function() {
      alert('×の勝ち');
      reset();
    }, 250);
  } else if (line[2].textContent === '×' && line[4].textContent === '×' && line[6].textContent === '×') {
    setTimeout(function() {
      alert('×の勝ち');
      reset();
    }, 250);
  } else if (turn === 10) {
    setTimeout(function() {
      alert('引き分け');
      reset();
    }, 250);
  }
}

function reset() {
  turn = 1;
  get.innerHTML = 'turn' + turn;
  for (let i = 0; i < line.length; i++) {
    line[i].innerHTML = '';
  }
}
