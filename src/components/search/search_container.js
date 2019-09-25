import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Search from './search'
import { fetchPlayers, fetchStats, unfollowPlayer } from '../../actions'
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

  handleUnfollow = id => {
    //Update local storage
    let cachedFollowing = JSON.parse(localStorage.getItem('following'))
    const updatedFollowing = cachedFollowing.filter(playerId => id != playerId)
    localStorage.setItem('following', JSON.stringify(updatedFollowing))

    //Update following state
    const currentFollowing = this.props.following
    this.props.unfollowPlayer(id, currentFollowing)
  }

  render() {
    return (
      <Search
        {...this.props}
        handlePlayerSearch={this.handlePlayerSearch}
        searchResults={this.state.searchResults}
        handleUnfollow={this.handleUnfollow}
      />
    )
  }
}

const mapStateToProps = state => ({
  players: state.rootReducer.players,
  following: state.rootReducer.following
})

export default connect(
  mapStateToProps,
  { fetchPlayers, fetchStats, unfollowPlayer }
)(SearchContainer)
