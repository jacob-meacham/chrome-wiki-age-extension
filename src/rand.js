import gaussian from 'gaussian';
const times = require('lodash/array/times');

const normal = gaussian(0.0, 1.0);

export function nrand() {
  return normal.pdf(Math.random());
}

function choose(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomLetter() {
  return choose(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']);
}

export function randomString(num) {
  if (num <= 0) {
    return '';
  }

  return times(num, randomLetter()).join();
}

export function randomDay() {
  const start = new Date(2016, 0, 1);
  const end = new Date(2016, 11, 31);
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

export function aOrB(a, b, chance) {
  if (Math.random() < chance) {
    return a;
  }

  return b;
}

export function randRange(min, max) {
  return Math.floor(nrand() * (max - min + 1)) + min;
}
