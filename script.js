'use strict';
import { domElements } from './dom.js';
import { info } from './info.js';
import { addGame, editMode, updateGameInfo } from './gameService.js';
import { gameCreator, gameManager } from './gameFactory.js';
import {
  gameName,
  description,
  players,
  complexity,
  genre,
  playTime,
  rating,
} from './input.js';
//
const manager = gameManager();
//
loadInitialGames();
function loadInitialGames() {
  if (manager.getGame().length > 0) return;
  const initialGames = info;
  initialGames.forEach(function (game) {
    const newGame = gameCreator(
      game.name,
      game.description,
      game.players,
      game.complexity,
      game.genre,
      game.playTime,
      game.rating
    );
    manager.pushGame(newGame);
    addGame(
      newGame.getId(),
      newGame.getName(),
      newGame.getDescription(),
      newGame.getPlayers(),
      newGame.getComplexity(),
      newGame.getGenre(),
      newGame.getPlayTime(),
      newGame.getRating()
    );
  });
}
//BTN
domElements.iconX.addEventListener('click', function () {
  domElements.form.classList.add('hidden');
  domElements.overlay.classList.add('hidden');
});
domElements.btnNewGame.addEventListener('click', function () {
  domElements.form.reset();
  domElements.form.classList.remove('hidden');
  domElements.overlay.classList.remove('hidden');
});
//Form
domElements.form.addEventListener('submit', function (e) {
  e.preventDefault();
  const newGame = gameCreator(
    gameName,
    description,
    players,
    complexity,
    genre,
    playTime,
    rating
  );
  manager.pushGame(newGame);
  addGame(
    newGame.getId(),
    newGame.getName(),
    newGame.getDescription(),
    newGame.getPlayers(),
    newGame.getComplexity(),
    newGame.getGenre(),
    newGame.getPlayTime(),
    newGame.getRating()
  );
});

//Starting Game Editing
domElements.contentBox.addEventListener('click', function (e) {
  const element = e.target.closest('.game-box');
  const games = manager.getGame();
  const game = games.find(g => g.getId() === element.id);
  if (e.target.closest('.btn-edit')) {
    domElements.overlay.classList.remove('hidden');
    editMode(game);
  }
});

//Finishing Game Editing
domElements.editFormBox.addEventListener('click', function (e) {
  const games = manager.getGame();
  if (e.target.closest('.finish-edit')) {
    e.preventDefault();
    updateGameInfo(games);
    domElements.overlay.classList.add('hidden');
    const formEdit = document.querySelector('.form-edit');
    formEdit.classList.add('hidden');
  }
});
