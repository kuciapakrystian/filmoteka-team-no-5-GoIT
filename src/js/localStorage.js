import { movieID } from './fetch';
//Function for seting localStorage for watched movies
export const saveToWatched = () => {
  let watched = [];
  let que = [];
  const dataWatched = JSON.parse(localStorage.getItem('watched'));
  const dataQue = JSON.parse(localStorage.getItem('que'));
  const watchedButton = document.querySelector('.btn__addToWatched');
  const queButton = document.querySelector('.btn__addToQue');
  if (dataWatched != null) {
    watched = watched.concat(...dataWatched);
  }
  if (dataQue != null) {
    que = que.concat(...dataQue);
  }
  if (watchedButton.textContent !== 'REMOVE FROM WATCHED') {
    if (que.includes(movieID)) {
      const index = que.indexOf(movieID);
      que.splice(index, 1);
    }
    queButton.textContent = 'ADD TO QUE';
  }
  if (watchedButton.textContent !== 'REMOVE FROM WATCHED') {
  }
  if (watched.includes(movieID)) {
    const index = watched.indexOf(movieID);
    watched.splice(index, 1);
    watchedButton.textContent = 'ADD TO WATCHED';
    queButton.textContent = 'ADD TO QUE';
    if (que.includes(movieID)) {
      queButton.textContent = 'REMOVE FROM QUE';
    }
  } else {
    watched.push(movieID);
    watchedButton.textContent = 'REMOVE FROM WATCHED';
    queButton.textContent = 'ADD TO QUE';
  }
  localStorage.setItem('watched', JSON.stringify(watched));
  localStorage.setItem('que', JSON.stringify(que));
};
//Function for seting localStorage for que movies
export const saveToQue = () => {
  let que = [];
  const data = JSON.parse(localStorage.getItem('que'));
  if (data != null) {
    que = que.concat(...data);
  }
  const queButton = document.querySelector('.btn__addToQue');
  if (que.includes(movieID)) {
    const index = que.indexOf(movieID);
    que.splice(index, 1);
    queButton.textContent = 'ADD TO QUE';
  } else {
    que.push(movieID);
    queButton.textContent = 'REMOVE FROM QUE';
  }
  localStorage.setItem('que', JSON.stringify(que));
};
