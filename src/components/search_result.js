import React from 'react'

const SearchResult = ({ player }) => {
  const { firstName, lastName, number, position } = player

  return (
    <tr className="search-result">
      <td className="search-result__col u-border-left">
        <span className="u-block">{`${firstName} ${lastName}`}</span>
        <span className="u-block">
          #{number} | {position}
        </span>
      </td>
      <td className="search-result__col u-border-right">
        <button className="follow-btn">Follow</button>
      </td>
    </tr>
  )
}

export default SearchResult
