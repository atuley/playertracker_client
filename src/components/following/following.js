import React from 'react'
import PlayerCard from '../player/player_card'

const Following = ({ following }) =>
  following.map(player => (
    <div className="player-card__wrapper">
      <PlayerCard key={player.id} player={player} />
    </div>
  ))

export default Following
