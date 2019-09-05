import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Search from './search'
import { fetchPlayers, fetchStats } from '../../actions'
import { search } from '../../utils'

class SearchContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchResults: []
    }
    this.handlePlayerSearch = this.handlePlayerSearch.bind(this)
  }

  componentDidMount() {
    this.props.fetchPlayers()
  }

  handlePlayerSearch(e) {
    const { players } = this.props
    this.setState({
      ...this.state,
      searchResults: search(e.target.value, players)
    })
  }

  render() {
    return (
      <Search
        {...this.props}
        handlePlayerSearch={this.handlePlayerSearch}
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
