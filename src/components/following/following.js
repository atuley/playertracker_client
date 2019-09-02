import React from 'react'
import PlayerCard from '../player_card'

const Following = ({ following }) =>
  following.map(player => <PlayerCard key={player.id} player={player} />)

export default Following
