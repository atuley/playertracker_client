import React from 'react'
import PlayerCard from '../player/player_card'

const Following = ({ following }) =>
  following.map(player => (
    <div key={player.id} className="player-card__wrapper">
      <PlayerCard player={player} />
    </div>
  ))

export default Following
