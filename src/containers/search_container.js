import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from '../components/search';

class SearchContainer extends Component {
  render() {
    return <Search />
  }
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(SearchContainer);
