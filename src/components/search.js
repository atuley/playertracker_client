import React from 'react'

const Search = ({ players, searchResults, searchPlayers }) => {
  return (
    <>
      <input
        className="search__field"
        onChange={e => searchPlayers(e, players)}
      />
      <table className="search__results">
        <tbody>
          {searchResults.map(player => (
            <tr key={player.id}>
              <td>{player.firstName + ' ' + player.lastName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Search
