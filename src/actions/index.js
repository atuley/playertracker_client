export const fetchPlayers = () => dispatch => {
  dispatch({ type: 'FETCH_PLAYERS_REQUEST' })
  fetch('http://localhost:4000/api/players')
    .then(response => response.json())
    .then(players =>
      dispatch({
        type: 'FETCH_PLAYERS_OK',
        payload: players.players
      })
    )
    .catch(() => {
      dispatch({ type: 'FETCH_PLAYERS_ERROR' })
    })
}

export const getPlayerImage = player =>
  `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/${
    player.teamId
  }/2018/260x190/${player.id}.png`

export const getTeamImage = player =>
  `https://www.nba.com/assets/logos/teams/primary/web/${player.tricode}.svg`
