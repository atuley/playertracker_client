import React, { Component } from 'react'
import { connect } from 'react-redux'
import Search from '../components/search'
import { fetchPlayers } from '../actions/search_actions'
import { search } from '../utils'

class SearchContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchResults: []
    }
    this.handlePlayerSearch = this.handlePlayerSearch.bind(this)
  }

  componentDidMount() {
    this.props.dispatch(fetchPlayers())
  }

  handlePlayerSearch(e) {
    const { players } = this.props
    this.setState({
      searchResults: search(e.target.value, players)
    })
  }

  render() {
    return (
      <Search
        handlePlayerSearch={this.handlePlayerSearch}
        searchResults={this.state.searchResults}
      />
    )
  }
}

const mapStateToProps = state => ({
  players: state.searchReducer.players
})

export default connect(mapStateToProps)(SearchContainer)
