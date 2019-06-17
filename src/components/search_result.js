import React from 'react'
import { getPlayerImage, getTeamImage, hex2rgba } from '../utils'

const SearchResult = ({ player }) => {
  const { firstName, lastName, number, position, teamColor } = player
  const teamGradient = {
    backgroundColor: hex2rgba(teamColor, 0.3)
  }

  return (
    <tr className="search-result" style={teamGradient}>
      <td className="search-result__player-image-wrapper">
        <img
          className="search-result__player-image"
          src={getPlayerImage(player)}
        />
      </td>
      <td className="search-result__badge">
        <div className="u-flex">
          <img
            className="search-result__team-logo"
            src={getTeamImage(player)}
          />
          <div className="u-ml-8">
            <span className="u-block">{`${firstName} ${lastName}`}</span>
            <span className="search-result__pos u-block ">
              #{number} | {position}
            </span>
          </div>
        </div>
      </td>
      <td className="search-result__action">
        <button className="primary-btn">Follow</button>
      </td>
    </tr>
  )
}

export default SearchResult
