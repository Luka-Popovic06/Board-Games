import { domElements } from './dom.js';
import { makeFullStar } from './starCreator.js';

export function addGame(
  id,
  name,
  description,
  players,
  complexity,
  genre,
  playTime,
  rating
) {
  const html = `<div class="game-box" id=${id}>
          <div class="title-rating-box">
            <h3 class="game-name">${name}</h3>
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
          <p class="game-description">${description}</p>
          <div class="details">
            <div class="mini-box">
              <img
                class="img-icon"
                src="People_icon.svg.png"
                alt="People_icon"
              />
              <p class="players">${players}</p>
            </div>
            <div class="mini-box">
              <img
                class="img-icon"
                src="chart-game-icon.png"
                alt="chart-game-icon"
              />
              <p class="complexity">${complexity}</p>
            </div>
            <div class="mini-box">
              <img
                class="img-icon"
                src="board-game-icon.png"
                alt="board-game-icon"
              />
              <p class="genre">${genre}</p>
            </div>
            <div class="mini-box">
              <img class="img-icon" src="clock-icn.png" alt="clock-icn" />
              <p class="play-time">${playTime} minutes</p>
            </div>
          </div>
          <button type="button" class="btn-edit">Edit</button>
        </div>`;

  domElements.contentBox.insertAdjacentHTML('afterbegin', html);
  const fullSatar = document.querySelector('.full-star');
  makeFullStar(rating, fullSatar);

  domElements.form.classList.add('hidden');
  domElements.overlay.classList.add('hidden');
}

export function editMode(game) {
  domElements.editFormBox.innerHTML = '';
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
  domElements.editFormBox.insertAdjacentHTML('afterbegin', html);
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
export function updateGameInfo(games) {
  domElements.contentBox.innerHTML = '';
  games.forEach(function (game) {
    addGame(
      game.getId(),
      game.getName(),
      game.getDescription(),
      game.getPlayers(),
      game.getComplexity(),
      game.getGenre(),
      game.getPlayTime(),
      game.getRating()
    );
  });
}
