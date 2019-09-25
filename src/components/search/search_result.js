import React from 'react'
import { getPlayerImage, hex2rgba, setPlayerCache } from '../../utils'
import NameBadge from '../player/name_badge'

const SearchResult = ({ player, fetchStats, handleUnfollow }) => (
  <tr
    className="search-result"
    style={{
      backgroundColor: hex2rgba(player.teamColor, 0.3)
    }}
  >
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
        onClick={() => {
          setPlayerCache(player.id)
          if (!player.isFollowing) {
            fetchStats([player.id])
          } else {
            handleUnfollow(player.id)
          }
        }}
      >
        {player.isFollowing ? 'Unfollow' : 'Follow'}
      </button>
    </td>
  </tr>
)

export default SearchResult
