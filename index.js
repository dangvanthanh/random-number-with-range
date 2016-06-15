'use strict'

module.exports = function (min, max, isRound) {
  var random = Math.random() * (max - min) + min

  return isRound ? random | 0 : random
}
