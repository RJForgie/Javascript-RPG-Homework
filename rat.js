Rat = function (name) {
  this.name = name
}

Rat.prototype = {
  touchFood: function (food) {
    food.absorbPoison()
  }
}

module.exports = Rat
