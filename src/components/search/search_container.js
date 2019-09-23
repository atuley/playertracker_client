import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Search from './search'
import { fetchPlayers, fetchStats } from '../../actions'
import { search } from '../../utils'

class SearchContainer extends Component {
  state = {
    searchResults: []
  }

  componentDidMount = () => {
    this.props.fetchPlayers()
  }

  handlePlayerSearch = e => {
    const { players } = this.props
    this.setState({
      ...this.state,
      searchResults: search(e.target.value, players)
    })
  }

  handleFollow = id => {
    const { searchResults } = this.state
    const updatedPlayers = searchResults.map(player => {
      if (player.id == id) {
        player.isFollowing = true
      }
      return player
    })
    this.setState({
      ...this.state,
      searchResults: updatedPlayers
    })
  }

  render() {
    return (
      <Search
        {...this.props}
        handlePlayerSearch={this.handlePlayerSearch}
        handleFollow={this.handleFollow}
        searchResults={this.state.searchResults}
      />
    )
  }
}

const mapStateToProps = state => ({
  players: state.rootReducer.players
})

export default connect(
  mapStateToProps,
  { fetchPlayers, fetchStats }
)(SearchContainer)
