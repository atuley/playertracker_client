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
