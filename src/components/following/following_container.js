import React, { Component } from 'react'
import { connect } from 'react-redux'
import Following from './following'
import { fetchStats } from '../../actions'

class FollowingContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const ids = JSON.parse(localStorage.getItem('following'))
    ids && this.props.fetchStats(ids)
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
  { fetchStats }
)(FollowingContainer)
