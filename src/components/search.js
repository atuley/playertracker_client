import React from 'react'
import SearchResult from './search_result'

const Search = ({ handlePlayerSearch, searchResults }) => {
  return (
    <div className="search">
      <input
        placeholder="Search"
        className={`search__field ${searchResults.length &&
          'u-display-results'}`}
        onChange={handlePlayerSearch}
      />
      <table className="search__results" cellPadding="0" cellSpacing="0">
        <tbody>
          {searchResults.map(player => (
            <SearchResult key={player.id} player={player} />
          ))}
        </tbody>
      </table>
      <div className="player-card">
        <div className="player-card__image-wrapper">
          <img
            className="player-card__image"
            src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201939.png`}
          />
        </div>
        <div className="player-card__stats">
          <div className="u-flex">
            <img
              className="search-result__team-logo"
              src={`https://www.nba.com/assets/logos/teams/primary/web/GSW.svg`}
            />
            <div className="u-ml-8">
              <span className="u-block">Stephen Curry</span>
              <span className="search-result__pos u-block ">#30 | PG</span>
            </div>
          </div>
          <h1>32PTS 8AST 9REB</h1>
          <div>1STL 1BLK 1TO 10MIN</div>
        </div>
      </div>
    </div>
  )
}

export default Search
