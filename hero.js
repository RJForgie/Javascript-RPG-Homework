Hero = function (name, health, favouriteFood) {
  this.name = name
  this.health = health
  this.favouriteFood = favouriteFood
  this.taskLog = []
}

Hero.prototype = {
  talk: function () {
    return "Hello, my name is " + this.name + ". You killed my father, prepare to die!"
  },

  eat: function (foodToEat){
    if (foodToEat.type !== this.favouriteFood) {
      this.health += foodToEat.replenishmentValue
    } else {
      this.health += (1.5 * foodToEat.replenishmentValue)
    }
  }
}

module.exports = Hero
