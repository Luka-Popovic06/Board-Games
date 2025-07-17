import { domElements } from './dom.js';

export let gameName;
export let description;
export let players;
export let complexity;
export let genre;
export let playTime;
export let rating;

domElements.gameNameInput.addEventListener('input', function (e) {
  gameName = e.target.value;
});
domElements.descriptionInput.addEventListener('input', function (e) {
  description = e.target.value;
});
domElements.playersInput.addEventListener('input', function (e) {
  players = e.target.value;
});
domElements.complexitySelect.addEventListener('change', function (e) {
  complexity = e.target.value;
});
domElements.genreInput.addEventListener('input', function (e) {
  genre = e.target.value;
});
domElements.timeInput.addEventListener('input', function (e) {
  playTime = e.target.value;
});
domElements.ratingSelect.addEventListener('change', function (e) {
  rating = e.target.value;
});
