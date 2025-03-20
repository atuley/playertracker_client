import { mockPlayerResponse } from './mocks/playerData'
import { mockStatsResponse } from './mocks/statsData'

export const fetchPlayers = () => dispatch => {
  dispatch({ type: 'FETCH_PLAYERS_REQUEST' })
  fetch('http://localhost:4000/api/players')
    .then(response => {
      if (!response.ok) {
        throw new Error('API request failed')
      }
      return response.json()
    })
    .then(players =>
      dispatch({
        type: 'FETCH_PLAYERS_OK',
        payload: players.players
      })
    )
    .catch((error) => {
      console.warn('Using mock data due to API error:', error)
      dispatch({
        type: 'FETCH_PLAYERS_OK',
        payload: mockPlayerResponse.players
      })
    })
}

export const fetchStats = ids => dispatch => {
  dispatch({ type: 'FETCH_STATS_REQUEST' })
  fetch('http://localhost:4000/api/details', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ids })
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('API request failed')
      }
      return response.json()
    })
    .then(details => {
      dispatch({
        type: 'FETCH_STATS_OK',
        payload: details
      })
    })
    .catch((error) => {
      console.warn('Using mock stats data due to API error:', error)
      // Transform mock data into array format and merge with player data
      const mockDetails = ids.reduce((acc, id) => {
        if (mockStatsResponse[id]) {
          const playerData = mockPlayerResponse.players.find(p => p.id === id);
          acc.push({
            ...playerData,
            ...mockStatsResponse[id],
            points: mockStatsResponse[id].pointsPerGame,
            assists: mockStatsResponse[id].assistsPerGame,
            rebounds: mockStatsResponse[id].reboundsPerGame,
            minutes: mockStatsResponse[id].minutesPerGame
          });
        }
        return acc;
      }, []);
      
      dispatch({
        type: 'FETCH_STATS_OK',
        payload: { details: mockDetails }
      })
    })
}
