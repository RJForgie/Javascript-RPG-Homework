Food = function (type, boost) {
  this.type = type
  this.boost = boost
  this.poisoned = false
}

Food.prototype = {
  absorbPoison: function () {
    this.poisoned = true
  }
}

module.exports = Food
