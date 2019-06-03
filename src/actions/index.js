import { search } from '../utils'

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

export const searchPlayers = (e, players) => dispatch => {
  const query = e.target.value
  const searchQuery = query.toLowerCase()
  const result = search(searchQuery, players)

  dispatch({
    type: 'SEARCH_PLAYERS',
    payload: result
  })
}
