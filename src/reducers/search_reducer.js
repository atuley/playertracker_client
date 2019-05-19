export default (state = {
  loading: false,
  players: {},
  error: null
}, action) => {
  switch (action.type) {
    case 'FETCH_PLAYERS_REQUEST':
      return { loading: true }
    case 'FETCH_PLAYERS_OK':
      return {
        loading: false,
        players: action.payload
      }
    case 'FETCH_PLAYERS_ERROR':
      return {
        loading: false,
        error: 'you fucked up'
      }
    default:
      return state
  }
}
