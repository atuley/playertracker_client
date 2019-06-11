import React from 'react'

const SearchResult = ({ player }) => {
  const { firstName, lastName, number, position, teamColor } = player
  const teamGradient = {
    background: `linear-gradient(to right, 
      rgba(255,0,0,0) 0%,
      rgba(255,0,0,0) 20%, 
      ${teamColor} 150%)`
  }
  return (
    <tr className="search-result" style={teamGradient}>
      <td className="search-result__name">
        <span className="u-block">{`${firstName} ${lastName}`}</span>
        <span className="u-block">
          #{number} | {position}
        </span>
      </td>
      <td className="search-result__action">
        <button className="primary-btn">Follow</button>
      </td>
    </tr>
  )
}

export default SearchResult
