Food = function (type, replenishmentValue) {
  this.type = type
  this.replenishmentValue = replenishmentValue
  this.poisoned = false
}

Food.prototype = {
  absorbPoison: function () {
    this.poisoned = true
  }
}

module.exports = Food
