import React, { Component } from 'react'
import { connect } from 'react-redux'
import Following from './following'

class FollowingContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <Following {...this.props} />
  }
}

const mapStateToProps = state => ({
  following: state.rootReducer.following
})

export default connect(
  mapStateToProps,
  null
)(FollowingContainer)
