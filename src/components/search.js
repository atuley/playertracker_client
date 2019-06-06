import React from 'react'
import SearchResult from './search_result'

const Search = ({ handlePlayerSearch, searchResults }) => {
  return (
    <div className="search">
      <input
        placeholder="Search"
        className="search__field"
        onChange={handlePlayerSearch}
      />
      <table className="search__results">
        <tbody>
          {searchResults.map(player => (
            <SearchResult key={player.id} player={player} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Search
