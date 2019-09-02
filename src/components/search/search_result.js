import React from 'react'
import { getPlayerImage, hex2rgba } from '../../utils'
import NameBadge from '../name_badge'

const SearchResult = ({ player, fetchStats }) => {
  const teamBackgroundColor = {
    backgroundColor: hex2rgba(player.teamColor, 0.3)
  }

  return (
    <tr className="search-result" style={teamBackgroundColor}>
      <td className="search-result__player-image-wrapper">
        <img
          className="search-result__player-image"
          src={getPlayerImage(player.id)}
        />
      </td>
      <td className="search-result__badge">
        <NameBadge {...player} />
      </td>
      <td className="search-result__follow-btn">
        <button
          className={`primary-btn qa-follow-${player.id}`}
          onClick={() => fetchStats(player.id)}
        >
          Follow
        </button>
      </td>
    </tr>
  )
}

export default SearchResult
