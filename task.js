Task = function (description, difficulty, urgency, rewardAmount) {
  this.description = description
  this.difficulty = difficulty   //Difficulty scored 1-5, 5 being most difficult
  this.urgency = urgency //Urgency is rated 1-3, 3 being most urgent
  this.rewardAmount = rewardAmount
  this.completed = false
}

Task.prototype = {
  completeTask: function () {
    this.completed = true
  }
}

module.exports = Task
