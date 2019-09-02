import React from 'react'
import { getPlayerImage, hex2rgba } from '../../utils'
import NameBadge from './name_badge'

const PlayerCard = ({ player }) => {
  const {
    id,
    points,
    assists,
    rebounds,
    steals,
    blocks,
    minutes,
    teamColor,
    turnovers
  } = player

  return (
    <div
      className="player-card"
      style={{ backgroundColor: hex2rgba(teamColor, 0.3) }}
    >
      <div className="player-card__image-wrapper">
        <img className="player-card__image" src={getPlayerImage(id)} />
      </div>
      <div className="player-card__stats">
        <NameBadge {...player} />
        <h1>
          {points}PTS {assists}AST {rebounds}REB
        </h1>
        <div>
          {steals}STL {blocks}BLK {turnovers}TO {minutes}MIN
        </div>
      </div>
    </div>
  )
}

export default PlayerCard
