const uuid = require('uuid/v4')

const id = () =>
  uuid()
    .split('-')
    .splice(0, 3)
    .join('')

module.exports = id
