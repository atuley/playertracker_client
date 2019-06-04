import React from 'react'

const Search = ({ handlePlayerSearch, searchResults }) => {
  return (
    <>
      <input className="search__field" onChange={handlePlayerSearch} />
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
