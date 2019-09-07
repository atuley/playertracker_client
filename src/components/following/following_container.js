import React, { Component } from 'react'
import { connect } from 'react-redux'
import Following from './following'
import { fetchStats, unfollowPlayer } from '../../actions'

class FollowingContainer extends Component {
  componentDidMount = () => {
    const ids = JSON.parse(localStorage.getItem('following'))
    ids && this.props.fetchStats(ids)
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
      <div className="following-container">
        <Following {...this.props} handleUnfollow={this.handleUnfollow} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  following: state.rootReducer.following
})

export default connect(
  mapStateToProps,
  { fetchStats, unfollowPlayer }
)(FollowingContainer)
