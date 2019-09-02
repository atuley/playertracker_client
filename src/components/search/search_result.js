import React from 'react'
import { getPlayerImage, getTeamImage, hex2rgba } from '../../utils'

const SearchResult = ({
  id,
  tricode,
  firstName,
  lastName,
  number,
  position,
  teamColor,
  fetchStats
}) => {
  const teamBackgroundColor = {
    backgroundColor: hex2rgba(teamColor, 0.3)
  }

  return (
    <tr className="search-result" style={teamBackgroundColor}>
      <td className="search-result__player-image-wrapper">
        <img className="search-result__player-image" src={getPlayerImage(id)} />
      </td>
      <td className="search-result__badge">
        <div className="u-flex">
          <img
            className="search-result__team-logo"
            src={getTeamImage(tricode)}
          />
          <div className="u-ml-8">
            <span className="u-block">{`${firstName} ${lastName}`}</span>
            <span className="search-result__pos u-block ">
              #{number} | {position}
            </span>
          </div>
        </div>
      </td>
      <td className="search-result__follow-btn">
        <button
          className={`primary-btn qa-follow-${id}`}
          onClick={() => fetchStats(id)}
        >
          Follow
        </button>
      </td>
    </tr>
  )
}

export default SearchResult
