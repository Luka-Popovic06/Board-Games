'use strict';
import { domElements } from './dom.js';
import { info } from './info.js';

const addGameBtn = document.querySelector('.add-game_btn');
const contentBox = document.querySelector('.content-box');
const editFormBox = document.querySelector('.edit-form_box');

const form = document.querySelector('.form-box');
const overlay = document.querySelector('.overlay');
const iconX = document.querySelector('.x');

const gameNameInput = document.querySelector('#name-input');
const descriptionInput = document.querySelector('#description-input');
const playersInput = document.querySelector('#players-input');
const complexitySelect = document.querySelector('#complexity-select');
const genreInput = document.querySelector('#genre-input');
const timeInput = document.querySelector('#time-input');
const ratingSelect = document.querySelector('#rating');
//
const info = [
  {
    name: 'Catan',
    description:
      'Trade, build, and settle in this modern clasic. Compete to expand your settlements and control the island of Catan.',
    players: '3-4',
    complexity: 'Medium',
    genre: 'Strategy, Trading',
    playTime: '60-90',
    rating: 4,
  },
  {
    name: 'Dixit',
    description:
      "A creative storytelling game where players use beautifully illustrated cards to vluff and guess each other's stories.",
    players: '3-6',
    complexity: 'Easy',
    genre: 'Party, Creative',
    playTime: '30 ',
    rating: 0,
  },
  {
    name: 'Azul',
    description:
      'A tile-grafting game where players take turns selecting colorful tiles to complete beautiful patterns.',
    players: '2-4',
    complexity: 'Medium',
    genre: 'Abstract, Strategy',
    playTime: '30-45',
    rating: 3,
  },
  {
    name: 'Ticket to Ride',
    description:
      'Build your train routes accross the USA in this gateway strategy game. Easy to learn and fun for all ages.',
    players: '2-5',
    complexity: 'Easy',
    genre: 'Strategy, Family',
    playTime: '45-60',
    rating: 1,
  },
  {
    name: 'Codenames',
    description:
      'A fast-paced word game of deduction where teams try to guess secret words based on clever clues.',
    players: '4-8+',
    complexity: 'Easy',
    genre: 'Strategy, Family',
    playTime: '15-30',
    rating: 2,
  },
];
//

//
let gameName;
let description;
let players;
let complexity;
let genre;
let playTime;
let rating;
const manager = gameManager();
//
makeStartGames();
function makeStartGames() {
  const startGames = info;
  //for (let i = 0; i < 5; i++) {
  startGames.forEach(function (game) {
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
    const gameS = manager.getGame();
    addGame(gameS);
  });
  //}
}
//BTN
iconX.addEventListener('click', function () {
  form.classList.add('hidden');
  overlay.classList.add('hidden');
});
domElements.btnNewGame.addEventListener('click', function () {
  form.reset();
  form.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

//INPUT
gameNameInput.addEventListener('input', function (e) {
  gameName = e.target.value;
});
descriptionInput.addEventListener('input', function (e) {
  description = e.target.value;
});
playersInput.addEventListener('input', function (e) {
  players = e.target.value;
});
complexitySelect.addEventListener('change', function (e) {
  complexity = e.target.value;
});
genreInput.addEventListener('input', function (e) {
  genre = e.target.value;
});
timeInput.addEventListener('input', function (e) {
  playTime = e.target.value;
});
ratingSelect.addEventListener('change', function (e) {
  rating = e.target.value;
});
//Form
form.addEventListener('submit', function (e) {
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
  const game = manager.getGame();
  addGame(game);
});
contentBox.addEventListener('click', function (e) {
  const element = e.target.closest('.game-box');
  const game = manager.getGame();
  const oneGame = game.find(g => g.getId() === element.id);
  if (e.target.closest('.btn-edit')) {
    overlay.classList.remove('hidden');
    editMode(oneGame);
  }
});
editFormBox.addEventListener('click', function (e) {
  if (e.target.closest('.finish-edit')) {
    e.preventDefault();
    addGame(manager.getGame());
    overlay.classList.add('hidden');
    const formEdit = document.querySelector('.form-edit');
    formEdit.classList.add('hidden');
  }
});
//FUNCTION
function addGame(games) {
  contentBox.innerHTML = '';
  games.forEach(function (game) {
    const html = `<div class="game-box" id=${game.getId()}>
          <div class="title-rating-box">
            <h3 class="game-name">${game.getName()}</h3>
            <div class="star-box">
              <div class="star-mini_box">
                <div class="empty-star">
                  <svg
                    class="icon"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    />
                  </svg>
                  <svg
                    class="icon"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    />
                  </svg>
                  <svg
                    class="icon"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    />
                  </svg>
                  <svg
                    class="icon"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    />
                  </svg>
                  <svg
                    class="icon"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    />
                  </svg>
                </div>
                <!--full star-->
                <div class="full-star"></div>
              </div>
            </div>
          </div>
          <p class="game-description">${game.getDescription()}</p>
          <div class="details">
            <div class="mini-box">
              <img
                class="img-icon"
                src="People_icon.svg.png"
                alt="People_icon"
              />
              <p class="players">${game.getPlayers()}</p>
            </div>
            <div class="mini-box">
              <img
                class="img-icon"
                src="chart-game-icon.png"
                alt="chart-game-icon"
              />
              <p class="complexity">${game.getComplexity()}</p>
            </div>
            <div class="mini-box">
              <img
                class="img-icon"
                src="board-game-icon.png"
                alt="board-game-icon"
              />
              <p class="genre">${game.getGenre()}</p>
            </div>
            <div class="mini-box">
              <img class="img-icon" src="clock-icn.png" alt="clock-icn" />
              <p class="play-time">${game.getPlayTime()} minutes</p>
            </div>
          </div>
          <button type="button" class="btn-edit">Edit</button>
        </div>`;

    contentBox.insertAdjacentHTML('afterbegin', html);
    const fullSatar = document.querySelector('.full-star');
    makeFullStar(game.getRating(), fullSatar);

    form.classList.add('hidden');
    overlay.classList.add('hidden');
  });
}
function editMode(game) {
  editFormBox.innerHTML = '';
  const html = `<form class="form-edit">
        <div class="form-mini_box">
          <label class="label" for="name-input-edit">Game Name:</label>
          <input
            class="input"
            type="text"
            id="name-input-edit"
            name="name-input"
            placeholder="Carcassonne"
            required
          />
        </div>
        <div class="form-mini_box">
          <label for="description-input-edit" class="label">Description:</label>
          <input
            class="input"
            type="text"
            id="description-input-edit"
            name="description-input"
            placeholder="Players take turns drawing and placing tiles to build a medieval landscape filled with"
            required
          />
        </div>
        <div class="form-mini_box">
          <label for="players-input-edit" class="label">Players:</label>
          <input
            type="text"
            name="players-input"
            id="players-input-edit"
            class="input"
            required
            placeholder="2-5"
          />
        </div>
        <div class="form-mini_box">
          <label for="complexity-select-edit" class="label">Complexity:</label>
          <select
            name="complexity"
            id="complexity-select-edit"
            class="select"
            required
          >
            <option value="Chose complexity">Chose complexity...</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
        <div class="form-mini_box">
          <label for="genre-input-edit" class="label">Genre:</label>
          <input
            type="text"
            class="input"
            id="genre-input-edit"
            name="genre-input"
            required
            placeholder="Tile-laying, Strategy"
          />
        </div>
        <div class="form-mini_box">
          <label for="time-input-edit" class="label">Play Time:</label>
          <input
            type="text "
            class="input"
            id="time-input-edit"
            name="time-input"
            required
            placeholder="35-45 minutes"
          />
        </div>
        <div class="form-mini_box">
          <label for="rating-edit" class="label">Rating:</label>
          <select name="rating" id="rating-edit" class="select">
            <option value="0">Leave rating...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div class="btn-div">
          <button type="submit" class="finish-edit">Finish edit</button>
        </div>
      </form>`;
  editFormBox.insertAdjacentHTML('afterbegin', html);
  const editNameInput = document.querySelector('#name-input-edit');
  const editDescriptionInput = document.querySelector(
    '#description-input-edit'
  );
  const editPlayersInput = document.querySelector('#players-input-edit');
  const editComplexitySelect = document.querySelector(
    '#complexity-select-edit'
  );
  const editGenreInput = document.querySelector('#genre-input-edit');
  const editTimeInput = document.querySelector('#time-input-edit');
  const editRatingSelect = document.querySelector('#rating-edit');
  //
  editNameInput.value = `${game.getName()}`;
  editDescriptionInput.value = `${game.getDescription()}`;
  editPlayersInput.value = `${game.getPlayers()}`;
  editComplexitySelect.value = `${game.getComplexity()}`;
  editGenreInput.value = `${game.getGenre()}`;
  editTimeInput.value = `${game.getPlayTime()}`;
  editRatingSelect.value = `${game.getRating()}`;
  //
  editNameInput.addEventListener('input', function (e) {
    game.setName(e.target.value);
  });
  editDescriptionInput.addEventListener('input', function (e) {
    game.setDescription(e.target.value);
  });
  editPlayersInput.addEventListener('input', function (e) {
    game.setPlayers(e.target.value);
  });
  editComplexitySelect.addEventListener('change', function (e) {
    game.setComplexity(e.target.value);
  });
  editGenreInput.addEventListener('input', function (e) {
    game.setGenre(e.target.value);
  });
  editTimeInput.addEventListener('input', function (e) {
    game.setPlayTime(e.target.value);
  });
  editRatingSelect.addEventListener('change', function (e) {
    game.setRating(e.target.value);
  });
}
function gameManager() {
  let games = [];
  const pushGame = game => games.push(game);
  const getGame = () => games;
  return { pushGame, getGame };
}
function gameCreator(
  gameName,
  description,
  players,
  complexity,
  genre,
  playTime,
  rating
) {
  let id = crypto.randomUUID();
  let name = gameName;
  let gameDescription = description;
  let numberOfPlayers = players;
  let gameComplexity = complexity;
  let gameGenre = genre;
  let gamePlayTime = playTime;
  let gameRating = rating;
  //
  const setName = newName => (name = newName);
  const setDescription = newDescription => (gameDescription = newDescription);
  const setPlayers = newPlayers => (numberOfPlayers = newPlayers);
  const setComplexity = newComplexity => (gameComplexity = newComplexity);
  const setGenre = newGenre => (gameGenre = newGenre);
  const setPlayTime = newPlayTime => (gamePlayTime = newPlayTime);
  const setRating = newRating => (gameRating = newRating);
  //
  const getId = () => id;
  const getName = () => name;
  const getDescription = () => gameDescription;
  const getPlayers = () => numberOfPlayers;
  const getComplexity = () => gameComplexity;
  const getGenre = () => gameGenre;
  const getPlayTime = () => gamePlayTime;
  const getRating = () => gameRating;
  return {
    getId,
    getName,
    getDescription,
    getPlayers,
    getComplexity,
    getGenre,
    getPlayTime,
    getRating,
    setName,
    setDescription,
    setPlayers,
    setComplexity,
    setGenre,
    setPlayTime,
    setRating,
  };
}
function makeFullStar(star, fullSatarBox) {
  fullSatarBox.innerHTML = '';
  for (let i = 0; i < star; i++) {
    const html = `<svg
                class="icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clip-rule="evenodd"
                />
              </svg>`;
    fullSatarBox.insertAdjacentHTML('afterbegin', html);
  }
}
