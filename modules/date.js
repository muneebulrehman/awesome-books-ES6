import {
  DateTime,
} from '../node_modules/luxon/build/es6/luxon.js';

const dateEl = document.querySelector('.date');
const setDate = () => {
  const dt = DateTime.now();
  const { year } = dt.c;
  const { month } = dt.c;
  const { day } = dt.c;
  const { hour } = dt.c;
  const { minute } = dt.c;
  const { second } = dt.c;
  dateEl.textContent = `${month}-${day}, ${year}, ${hour}:${minute}:${second}`;
};

setInterval(setDate, 1000);

export default setDate;