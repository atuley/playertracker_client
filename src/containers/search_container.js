import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from '../components/search';
import { fetchPlayers } from '../actions/index'

class SearchContainer extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPlayers());
  }

  render() {
    return <Search { ...this.props } />
  }
}

const mapStateToProps = state => ({
  players: state.searchReducer.players
})

export default connect(mapStateToProps)(SearchContainer);
