import React, { useState } from 'react'
import { search } from '../utils'

const Search = ({ players }) => {
  const [searchResults, setSearchResults] = useState([])
  return (
    <>
      <input
        className="search__field"
        onChange={e => setSearchResults(search(e.target.value, players))}
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
