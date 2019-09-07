import React from 'react'
import PlayerCard from '../player/player_card'

const Following = ({ following, handleUnfollow }) =>
  following.map(player => (
    <div key={player.id} className="player-card__wrapper">
      <PlayerCard player={player} handleUnfollow={handleUnfollow} />
    </div>
  ))

export default Following
