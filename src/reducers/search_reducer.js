export default (
  state = {
    loading: false,
    players: [],
    error: null
  },
  action
) => {
  switch (action.type) {
    case 'FETCH_PLAYERS_REQUEST':
      return {
        ...state,
        loading: true
      }
    case 'FETCH_PLAYERS_OK':
      return {
        ...state,
        loading: false,
        players: action.payload
      }
    case 'FETCH_PLAYERS_ERROR':
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}
