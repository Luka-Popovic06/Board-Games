export function gameManager() {
  let games = [];
  const pushGame = game => games.push(game);
  const getGame = () => games;
  return { pushGame, getGame };
}
export function gameCreator(
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
