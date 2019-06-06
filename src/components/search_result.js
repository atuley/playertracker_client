import React from 'react'

const SearchResult = ({ player }) => {
  const { firstName, lastName, number, position } = player

  return (
    <tr className="search-result">
      <td>{`${firstName} ${lastName}`}</td>
      <td>{number}</td>
      <td>{position}</td>
      <td>
        <button className="follow-btn">Follow</button>
      </td>
    </tr>
  )
}

export default SearchResult
