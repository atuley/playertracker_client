import _ from 'lodash'

export const search = (searchQuery, players) => {
  const lowercaseQuery = _.toLower(searchQuery)
  return _.filter(players, player =>
    _.chain(player)
      .values()
      .toLower()
      .includes(lowercaseQuery)
      .value()
  )
}

export const getPlayerImage = player =>
  `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${
    player.id
  }.png`

export const getTeamImage = player =>
  `https://www.nba.com/assets/logos/teams/primary/web/${player.tricode}.svg`

export const hex2rgba = (hex, alpha = 1) => {
  const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16))
  return `rgba(${r},${g},${b},${alpha})`
}
