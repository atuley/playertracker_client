import React from 'react'
import { getPlayerImage, hex2rgba } from '../../utils'
import NameBadge from './name_badge'

const PlayerCard = ({ player }) => (
  <div
    className="player-card"
    style={{ backgroundColor: hex2rgba(player.teamColor, 0.3) }}
  >
    <div className="player-card__image-wrapper">
      <img className="player-card__image" src={getPlayerImage(player.id)} />
    </div>
    <div className="player-card__stats">
      <NameBadge {...player} />
      <h1>32PTS 8AST 9REB</h1>
      <div>1STL 1BLK 1TO 10MIN</div>
    </div>
  </div>
)

export default PlayerCard
