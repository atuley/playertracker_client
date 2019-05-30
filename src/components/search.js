import React from 'react'

const Search = ({ players }) => {
  return (
    <>
      <input className="search__field" />
      <table>
        <tbody>
          {players.slice(0, 10).map(player => (
            <tr key={player.id}>
              <td>{player.firstName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Search
