import _ from 'lodash'

export const search = (searchQuery, players) => {
  return _.filter(players, player =>
    _.chain(player)
      .values()
      .toLower()
      .includes(searchQuery)
      .value()
  )
}

export const getPlayerImage = player =>
  `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${
    player.id
  }.png`

export const getTeamImage = player =>
  `https://www.nba.com/assets/logos/teams/primary/web/${player.tricode}.svg`
