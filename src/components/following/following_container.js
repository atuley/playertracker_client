import React, { Component } from 'react'
import { connect } from 'react-redux'
import Following from './following'

class FollowingContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="following-container">
        <Following {...this.props} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  following: state.rootReducer.following
})

export default connect(
  mapStateToProps,
  null
)(FollowingContainer)
