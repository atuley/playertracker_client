import React, { Component } from 'react'
import { connect } from 'react-redux'
import Search from '../components/search'
import { fetchPlayers, searchPlayers } from '../actions/index'

class SearchContainer extends Component {
  componentDidMount() {
    this.props.fetchPlayers()
  }

  render() {
    return <Search {...this.props} />
  }
}

const mapStateToProps = state => ({
  players: state.searchReducer.players,
  searchResults: state.searchReducer.searchResults
})

const mapDispatchToProps = dispatch => ({
  fetchPlayers: () => dispatch(fetchPlayers()),
  searchPlayers: (e, players) => dispatch(searchPlayers(e, players))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchContainer)
