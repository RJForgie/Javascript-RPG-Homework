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

  eat: function (food) {
    if (food.poisoned) return this.sufferFromPoisoning(food)
    food.type !== this.favouriteFood ? this.health += food.boost : this.health += (1.5 * food.boost)
  },

  sufferFromPoisoning: function (poisonedFood) {
    this.health -= poisonedFood.boost
  },
  
  acceptTask: function(task) {
    this.taskLog.push(task)
  },

  orderTasksByDifficulty: function () {
    this.taskLog.sort(function(a, b) {
      return a.difficulty - b.difficulty;
    })
    this.taskLog.reverse()
  },

  orderTasksByUrgency: function () {
    this.taskLog.sort(function(a, b) {
      return a.urgency - b.urgency;
    })
    this.taskLog.reverse()
  },

  orderTasksByReward: function () {
    this.taskLog.sort(function(a, b) {
      return a.rewardAmount - b.rewardAmount;
    })
    this.taskLog.reverse()
  },

  finishTask: function (taskCompleted) {
    this.taskLog.forEach(function (task){
      if (task === taskCompleted){
        task.completeTask()
      }
    })
  },

  showCompletedTasks: function () {
    var foundCompletedTasks = this.taskLog.filter(function (task){
      return task.completed === true;
    })
    return foundCompletedTasks;
  },

  showTasksStillToDo: function () {
    var foundTasks = this.taskLog.filter(function (task){
      return task.completed === false;
    })
    return foundTasks;
  }



}

module.exports = Hero
