import React, { Component } from 'react';
import { connect } from 'react-redux';

class Playertracker extends Component {
  render() {
    return (
      <div>Goodbye World!</div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(Playertracker);
