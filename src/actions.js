export const fetchPlayers = () => dispatch => {
  dispatch({ type: 'FETCH_PLAYERS_REQUEST' })
  fetch('http://localhost:4000/api/players')
    .then(response => response.json())
    .then(players =>
      dispatch({
        type: 'FETCH_PLAYERS_OK',
        payload: updateResults(players.players)
      })
    )
    .catch(() => {
      dispatch({ type: 'FETCH_PLAYERS_ERROR' })
    })
}
export const fetchStats = ids => dispatch => {
  dispatch({ type: 'FETCH_STATS_REQUEST' })
  fetch('http://localhost:4000/api/details', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ids })
  })
    .then(response => response.json())
    .then(details => {
      dispatch({
        type: 'FETCH_STATS_OK',
        payload: details
      })
    })
    .catch(() => {
      dispatch({ type: 'FETCH_STATS_ERROR' })
    })
}
export const unfollowPlayer = (id, currentFollowing) => dispatch => {
  const updatedFollowing = currentFollowing.filter(player => player.id !== id)
  dispatch({ type: 'UNFOLLOW_PLAYER', payload: updatedFollowing })
}

const updateResults = players => {
  const following = JSON.parse(localStorage.following) || []
  const newPlayers = players.slice(0)
  newPlayers.forEach(player => {
    if (following.includes(player.id)) {
      player.isFollowing = true
    }
  })
  return newPlayers
}
