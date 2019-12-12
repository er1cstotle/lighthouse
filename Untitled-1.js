const listWinners = (games) => {
  const playersSet = games.reduce((accumulator, game) => {
    accumulator[game.winner] = accumulator[game.winner] ? [...accumulator[game.winner], game.loser] : [game.loser]
    accumulator[game.loser] = accumulator[game.loser] || []

    return accumulator
  }, {});

  return playersSet
}

console.log(listWinners([
  { winner: 'Alice', loser: 'Bob',   loser_points: 3 },
  { winner: 'Carol', loser: 'Dean',  loser_points: 1 },
  { winner: 'Elise', loser: 'Bob',   loser_points: 2 },
  { winner: 'Elise', loser: 'Carol', loser_points: 4 },
  { winner: 'Alice', loser: 'Carol', loser_points: 2 },
  { winner: 'Carol', loser: 'Dean',  loser_points: 3 },
  { winner: 'Dean',  loser: 'Elise', loser_points: 2 },
]));










