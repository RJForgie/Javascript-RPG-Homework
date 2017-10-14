Rat = function (name) {
  this.name = name
}

Task.prototype = {
  poisonFood: function (food) {
    food.poisoned === true
  }
}

module.exports = Rat
