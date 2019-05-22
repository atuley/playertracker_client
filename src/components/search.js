import React from 'react'

const Search = ({ players }) => {
  return (
    <>
      <input className="search__field" />
      {players.slice(0, 5).map(player => (
        <p key={player.id}>
          {player.firstName} {player.lastName}
        </p>
      ))}
    </>
  )
}

export default Search
